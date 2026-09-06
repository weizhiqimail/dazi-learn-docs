import React from 'react';
import {QuizOptions} from './QuizOptions';
import {QuizResult} from './QuizResult';
import type {QuizCardProps} from './types';
import styles from './styles.module.css';

export function QuizCard({
  question,
  selected,
  revealed,
  favorite,
  onChoose,
  onFavorite,
  onPrevious,
  onSubmit,
  onNext,
}: QuizCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span>Q{question.id}</span>
        <span>{question.type === 'multiple' ? '多选题' : '单选题'}</span>
        <button onClick={onFavorite}>{favorite ? '★ 已收藏' : '☆ 收藏'}</button>
      </div>
      <h2>{question.prompt.zh || '中文翻译生成中'}</h2>
      <p className={styles.english}>{question.prompt.en}</p>
      <QuizOptions
        question={question}
        selected={selected}
        revealed={revealed}
        onChoose={onChoose}
      />
      <div className={styles.actions}>
        <button onClick={onPrevious}>上一题</button>
        <button
          className={styles.submit}
          disabled={!selected.length || revealed}
          onClick={onSubmit}
        >
          提交答案
        </button>
        <button onClick={onNext}>下一题</button>
      </div>
      {revealed && <QuizResult question={question} selected={selected} />}
    </article>
  );
}
