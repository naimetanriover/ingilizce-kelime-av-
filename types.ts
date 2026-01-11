
export enum ThemeId {
  SchoolLife = 'school-life',
  ClassroomLife = 'classroom-life',
  PersonalLife = 'personal-life',
  FamilyLife = 'family-life',
  NeighbourhoodCity = 'neighbourhood-city',
  LifeInTheWorld = 'life-in-the-world'
}

export interface Word {
  id: string;
  themeId: ThemeId;
  unit: string;
  english: string;
  turkish: string;
  level: number; // 0 to 5 (SRS level)
  lastReview?: number;
  nextReview?: number;
}

export interface Theme {
  id: ThemeId;
  titleTr: string;
  titleEn: string;
  color: string;
  icon: string;
}

export interface UserProgress {
  words: Word[];
  badges: string[];
}

export type ViewState = 'MENU' | 'UNITS' | 'STUDY' | 'QUIZ_EN_TR' | 'QUIZ_TR_EN' | 'QUICK_REVIEW';

export interface QuizQuestion {
  word: Word;
  options: string[];
  correctAnswer: string;
}
