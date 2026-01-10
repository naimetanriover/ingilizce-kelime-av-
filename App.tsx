
import React, { useState, useEffect, useMemo } from 'react';
import { ViewState, ThemeId, Word, UserProgress, Theme } from './types';
import { THEMES, DEFAULT_CSV_DATA } from './constants';
import { loadProgress, saveProgress, updateWordProgress } from './services/dataManager';
import { parseCSV } from './services/csvParser';

// Components
import ThemeCard from './components/ThemeCard';
import UnitList from './components/UnitList';
import FlashcardMode from './components/FlashcardMode';
import QuizMode from './components/QuizMode';
import TeacherPanel from './components/TeacherPanel';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('MENU');
  const [activeThemeId, setActiveThemeId] = useState<ThemeId | null>(null);
  const [activeUnit, setActiveUnit] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress>({ words: [], badges: [] });

  // Initialize data if empty
  useEffect(() => {
    const saved = loadProgress();
    if (saved.words.length === 0) {
      let initialWords: Word[] = [];
      THEMES.forEach(theme => {
        const csv = DEFAULT_CSV_DATA[theme.id];
        const parsed = parseCSV(csv, theme.id, { english: 'word', turkish: 'meaning', unit: '' });
        initialWords = [...initialWords, ...parsed];
      });
      const initProgress = { words: initialWords, badges: [] };
      saveProgress(initProgress);
      setProgress(initProgress);
    } else {
      setProgress(saved);
    }
  }, []);

  const activeTheme = useMemo(() => 
    THEMES.find(t => t.id === activeThemeId) || null
  , [activeThemeId]);

  const themeWords = useMemo(() => 
    progress.words.filter(w => w.themeId === activeThemeId)
  , [progress.words, activeThemeId]);

  const unitWords = useMemo(() => 
    themeWords.filter(w => w.unit === activeUnit)
  , [themeWords, activeUnit]);

  const handleUpdateWord = (wordId: string, isCorrect: boolean) => {
    const newProgress = updateWordProgress(wordId, isCorrect);
    setProgress(newProgress);
  };

  const handleBack = () => {
    if (view === 'UNITS') setView('MENU');
    else if (['STUDY', 'QUIZ_EN_TR', 'QUIZ_TR_EN', 'QUICK_REVIEW'].includes(view)) setView('UNITS');
    else setView('MENU');
  };

  const renderContent = () => {
    switch (view) {
      case 'MENU':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
            {THEMES.map(theme => {
              const themeProgress = progress.words.filter(w => w.themeId === theme.id);
              const learned = themeProgress.filter(w => w.level > 0).length;
              const total = themeProgress.length;
              return (
                <ThemeCard 
                  key={theme.id} 
                  theme={theme} 
                  learned={learned} 
                  total={total}
                  onClick={() => {
                    setActiveThemeId(theme.id);
                    setView('UNITS');
                  }}
                />
              );
            })}
          </div>
        );

      case 'UNITS':
        return activeTheme && (
          <UnitList 
            theme={activeTheme} 
            words={themeWords} 
            onSelectUnit={(unit, mode) => {
              setActiveUnit(unit);
              setView(mode);
            }} 
          />
        );

      case 'STUDY':
        return activeUnit && (
          <FlashcardMode 
            unitName={activeUnit}
            words={unitWords} 
            onUpdateWord={handleUpdateWord}
            onComplete={() => setView('UNITS')}
          />
        );

      case 'QUIZ_EN_TR':
      case 'QUIZ_TR_EN':
      case 'QUICK_REVIEW':
        return activeUnit && (
          <QuizMode 
            mode={view}
            unitName={activeUnit}
            words={unitWords}
            allThemeWords={themeWords}
            onUpdateWord={handleUpdateWord}
            onComplete={() => setView('UNITS')}
          />
        );

      case 'TEACHER':
        return (
          <TeacherPanel 
            progress={progress} 
            onImport={(newWords) => {
              const updated = { ...progress, words: [...progress.words, ...newWords] };
              saveProgress(updated);
              setProgress(updated);
            }}
          />
        );

      default:
        return <div>Yapım aşamasında...</div>;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Navbar 
        onHome={() => setView('MENU')} 
        onTeacher={() => setView('TEACHER')} 
        canGoBack={view !== 'MENU'}
        onBack={handleBack}
      />
      <main className="container mx-auto mt-6">
        {renderContent()}
      </main>

      {/* Persistent Badge/Progress Info */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg flex justify-between items-center z-50">
        <div className="flex items-center space-x-2">
          <i className="fa-solid fa-star text-yellow-400 text-xl"></i>
          <span className="font-bold text-gray-700">Skorun: {progress.words.reduce((acc, w) => acc + w.level, 0)}</span>
        </div>
        <div className="flex space-x-2">
          {progress.badges.map((b, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
