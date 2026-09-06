import React, {useEffect, useMemo, useState} from 'react';
import {QuizCard} from './QuizCard';
import {QuizToolbar} from './QuizToolbar';
import {useQuizBank} from './useQuizBank';
import {useQuizProgress} from './useQuizProgress';
import {isCorrectAnswer, orderQuestions} from './utils';
import styles from './styles.module.css';

type Props = {src: string; title: string; storageKey?: string};

export default function QuizEngine({src, title, storageKey = 'dazi-quiz-aws-clf-c02'}: Props) {
  const bank = useQuizBank(src);
  const {progress, save} = useQuizProgress(storageKey);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [random, setRandom] = useState(false);
  const [category, setCategory] = useState('all');

  const categories = useMemo(
    () => (bank ? [...new Set(bank.questions.map((question) => question.category))] : []),
    [bank],
  );
  const questions = useMemo(() => {
    if (!bank) return [];
    const filtered =
      category === 'all'
        ? bank.questions
        : bank.questions.filter((question) => question.category === category);
    return orderQuestions(filtered, random);
  }, [bank, category, random]);
  const question = questions[index];

  useEffect(() => {
    setIndex(0);
    setSelected([]);
    setRevealed(false);
  }, [category, random]);

  if (!bank || !question) return <div className={styles.loading}>正在加载题库…</div>;

  const choose = (id: string) => {
    if (revealed) return;
    setSelected((current) =>
      question.type === 'single'
        ? [id]
        : current.includes(id)
          ? current.filter((item) => item !== id)
          : [...current, id],
    );
  };
  const submit = () => {
    if (!selected.length) return;
    setRevealed(true);
    if (!isCorrectAnswer(question, selected) && !progress.wrong.includes(question.id)) {
      save({...progress, wrong: [...progress.wrong, question.id]});
    }
  };
  const move = (step: number) => {
    setIndex((current) => (current + step + questions.length) % questions.length);
    setSelected([]);
    setRevealed(false);
    scrollTo({top: 0, behavior: 'smooth'});
  };
  const toggleFavorite = () => {
    const favorites = progress.favorites.includes(question.id)
      ? progress.favorites.filter((id) => id !== question.id)
      : [...progress.favorites, question.id];
    save({...progress, favorites});
  };

  return (
    <div className={styles.quiz}>
      <QuizToolbar
        title={title}
        current={index + 1}
        total={questions.length}
        categories={categories}
        category={category}
        random={random}
        onCategoryChange={setCategory}
        onRandomChange={setRandom}
      />
      <QuizCard
        question={question}
        selected={selected}
        revealed={revealed}
        favorite={progress.favorites.includes(question.id)}
        onChoose={choose}
        onFavorite={toggleFavorite}
        onPrevious={() => move(-1)}
        onSubmit={submit}
        onNext={() => move(1)}
      />
      <p className={styles.saved}>
        错题 {progress.wrong.length} · 收藏 {progress.favorites.length}（保存在当前浏览器）
      </p>
    </div>
  );
}
