import React from 'react';
import type {QuizToolbarProps} from './types';
import styles from './styles.module.css';

export function QuizToolbar({
  title,
  current,
  total,
  categories,
  category,
  random,
  onCategoryChange,
  onRandomChange,
}: QuizToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <div>
        <strong>{title}</strong>
        <span>
          {current}/{total}
        </span>
      </div>
      <div>
        <select
          aria-label="题目分类"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="all">全部分类</option>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            checked={random}
            onChange={(event) => onRandomChange(event.target.checked)}
          />
          随机顺序
        </label>
      </div>
    </div>
  );
}
