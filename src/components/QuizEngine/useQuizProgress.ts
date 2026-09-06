import {useEffect, useState} from 'react';
import type {SavedProgress} from './types';
import {EMPTY_PROGRESS} from './utils';

export function useQuizProgress(storageKey: string) {
  const [progress, setProgress] = useState<SavedProgress>(EMPTY_PROGRESS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) setProgress(JSON.parse(stored) as SavedProgress);
    } catch {
      setProgress(EMPTY_PROGRESS);
    }
  }, [storageKey]);

  const save = (next: SavedProgress) => {
    setProgress(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  };

  return {progress, save};
}
