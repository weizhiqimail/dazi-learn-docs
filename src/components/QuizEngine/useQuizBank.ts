import {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {QuizBank} from '../../types/quiz';

export function useQuizBank(src: string) {
  const url = useBaseUrl(src);
  const [bank, setBank] = useState<QuizBank>();

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, {signal: controller.signal})
      .then((response) => {
        if (!response.ok) throw new Error('题库加载失败：' + response.status);
        return response.json() as Promise<QuizBank>;
      })
      .then(setBank)
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          console.error(error);
        }
      });
    return () => controller.abort();
  }, [url]);

  return bank;
}
