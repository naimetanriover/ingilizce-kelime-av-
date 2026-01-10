
import { UserProgress, Word, ThemeId } from '../types';

const STORAGE_KEY = 'wm5_user_progress';

export const saveProgress = (progress: UserProgress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const loadProgress = (): UserProgress => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return { words: [], badges: [] };
  try {
    return JSON.parse(data);
  } catch {
    return { words: [], badges: [] };
  }
};

export const updateWordProgress = (wordId: string, isCorrect: boolean): UserProgress => {
  const progress = loadProgress();
  const wordIdx = progress.words.findIndex(w => w.id === wordId);
  if (wordIdx === -1) return progress;

  const word = progress.words[wordIdx];
  if (isCorrect) {
    word.level = Math.min(word.level + 1, 5);
  } else {
    word.level = Math.max(word.level - 1, 0);
  }
  
  word.lastReview = Date.now();
  progress.words[wordIdx] = word;
  saveProgress(progress);
  return progress;
};
