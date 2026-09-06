import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {QuizQuestion} from '../../types/quiz';
import {isCorrectAnswer} from './utils';
import styles from './styles.module.css';

type Props = {question: QuizQuestion; selected: string[]};

export function QuizResult({question, selected}: Props) {
  const analysisUrl = useBaseUrl('/docs/aws/clf-c02/C4-719题分类解析/C4-00-719题索引与分类规则');
  const correct = isCorrectAnswer(question, selected);

  return (
    <details open className={correct ? styles.correct : styles.incorrect}>
      <summary>
        {correct ? '回答正确' : '回答错误'} · 正确答案：{question.answers.join('、')}
      </summary>
      <div>
        <p>{question.explanation.zh || '请结合对应知识章节与选项定位复核本题。'}</p>
        <a href={analysisUrl}>查看分类解析</a>
      </div>
    </details>
  );
}
