import React from 'react';
import type {QuizQuestion} from '../../types/quiz';
import styles from './styles.module.css';

type Props = {
  question: QuizQuestion;
  selected: string[];
  revealed: boolean;
  onChoose: (id: string) => void;
};

export function QuizOptions({question, selected, revealed, onChoose}: Props) {
  return (
    <div className={styles.options}>
      {question.options.map((option) => {
        const active = selected.includes(option.id);
        const right = revealed && question.answers.includes(option.id);
        const wrong = revealed && active && !right;
        const className = [
          styles.option,
          active && styles.active,
          right && styles.right,
          wrong && styles.wrong,
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button key={option.id} className={className} onClick={() => onChoose(option.id)}>
            <b>{option.id}</b>
            <span>
              <span>{option.text.zh || '中文翻译生成中'}</span>
              <small>{option.text.en}</small>
            </span>
          </button>
        );
      })}
    </div>
  );
}
