import fs from 'node:fs';
import mysql from 'mysql2/promise';

const required = ['DB_HOST', 'DB_PORT', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'];
for (const name of required) {
  if (!process.env[name]) throw new Error(`Missing environment variable: ${name}`);
}

const dataPath = new URL('../static/data/aws-clf-c02.json', import.meta.url);
const bank = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

const normalize = (value) =>
  String(value ?? '')
    .normalize('NFKC')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();

try {
  const [rows] = await connection.execute(`
    SELECT q.external_key,
           q.question_texts,
           o.option_key,
           o.content_texts
    FROM questions q
    JOIN question_banks b ON b.id = q.bank_id
    JOIN question_options o ON o.question_id = q.id
    WHERE b.code = 'clf-c02'
      AND q.enabled = 1
      AND q.deleted_at IS NULL
    ORDER BY q.sort_order, o.sort_order
  `);

  const translations = new Map();
  for (const row of rows) {
    const id = String(row.external_key);
    const entry = translations.get(id) ?? {
      prompt: row.question_texts,
      options: new Map(),
    };
    entry.options.set(String(row.option_key), row.content_texts);
    translations.set(id, entry);
  }

  const mismatches = [];
  let importedQuestions = 0;
  let importedOptions = 0;
  for (const question of bank.questions) {
    const translation = translations.get(String(question.id));
    if (!translation) {
      mismatches.push(`Q${question.id}: database question not found`);
      continue;
    }
    if (normalize(question.prompt.en) !== normalize(translation.prompt.en)) {
      mismatches.push(`Q${question.id}: English prompt mismatch`);
      continue;
    }

    const optionUpdates = [];
    for (const option of question.options) {
      const translatedOption = translation.options.get(option.id);
      if (!translatedOption) {
        mismatches.push(`Q${question.id}-${option.id}: database option not found`);
        continue;
      }
      if (normalize(option.text.en) !== normalize(translatedOption.en)) {
        mismatches.push(`Q${question.id}-${option.id}: English option mismatch`);
        continue;
      }
      if (!translatedOption.zh) {
        mismatches.push(`Q${question.id}-${option.id}: Chinese option is empty`);
        continue;
      }
      optionUpdates.push([option, translatedOption.zh]);
    }

    if (!translation.prompt.zh) {
      mismatches.push(`Q${question.id}: Chinese prompt is empty`);
      continue;
    }
    if (optionUpdates.length !== question.options.length) continue;

    question.prompt.zh = translation.prompt.zh;
    for (const [option, chinese] of optionUpdates) option.text.zh = chinese;
    importedQuestions += 1;
    importedOptions += optionUpdates.length;
  }

  if (mismatches.length) {
    console.error(mismatches.slice(0, 30).join('\n'));
    throw new Error(`Translation import stopped: ${mismatches.length} mismatches`);
  }

  bank.translation = {
    language: 'zh',
    source: 'daziwordsapp',
    importedAt: new Date().toISOString(),
  };
  fs.writeFileSync(dataPath, JSON.stringify(bank, null, 2) + '\n', 'utf8');
  console.log(JSON.stringify({importedQuestions, importedOptions}, null, 2));
} finally {
  await connection.end();
}
