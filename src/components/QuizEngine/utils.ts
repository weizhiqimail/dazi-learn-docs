import type {QuizQuestion} from '../../types/quiz';

export const EMPTY_PROGRESS = {wrong: [], favorites: []};

export function isCorrectAnswer(question: QuizQuestion, selected: string[]) {
  return [...question.answers].sort().join('') === [...selected].sort().join('');
}

export function orderQuestions(questions: QuizQuestion[], random: boolean) {
  if (!random) return questions;
  return [...questions].sort(
    (first, second) => ((Number(first.id) * 9301) % 49297) - ((Number(second.id) * 9301) % 49297),
  );
}
