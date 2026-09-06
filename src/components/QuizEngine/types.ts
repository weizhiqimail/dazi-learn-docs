import type {QuizQuestion} from '../../types/quiz';

export type SavedProgress = {
  wrong: string[];
  favorites: string[];
};

export type QuizToolbarProps = {
  title: string;
  current: number;
  total: number;
  categories: string[];
  category: string;
  random: boolean;
  onCategoryChange: (category: string) => void;
  onRandomChange: (random: boolean) => void;
};

export type QuizCardProps = {
  question: QuizQuestion;
  selected: string[];
  revealed: boolean;
  favorite: boolean;
  onChoose: (id: string) => void;
  onFavorite: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  onNext: () => void;
};
