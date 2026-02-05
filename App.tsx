import React, { useState, useEffect, useMemo } from 'react';
import { ViewState, ThemeId, Word, UserProgress } from './types.ts';
import { THEMES, DEFAULT_CSV_DATA } from './constants.tsx';
import { loadProgress, saveProgress, updateWordProgress } from './services/dataManager.ts';
import { parseCSV } from './services/csvParser.ts';

// Components
import ThemeCard from './components/ThemeCard.tsx';
import UnitList from './components/UnitList.tsx';
import FlashcardMode from './components/FlashcardMode.tsx';
import QuizMode from './components/QuizMode.tsx';
import Navbar from './components/Navbar.tsx';
import TeacherPanel from './components/TeacherPanel.tsx';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState | 'TEACHER'>('MENU');
  const [activeThemeId, setActiveThemeId] = useState<ThemeId | null>(null);
  const [activeUnit, setActiveUnit] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress>({ words: [], badges: [] });
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const saved = loadProgress();
    let embeddedWords: Word[] = [];
    THEMES.forEach(theme => {
      const csv = DEFAULT_CSV_DATA[theme.id];
      if (csv) {
        const parsed = parseCSV(csv, theme.id as ThemeId, { english: 'english', turkish: 'turkish', unit: 'unit' });
        embeddedWords = [...embeddedWords, ...parsed];
      }
    });

    if (saved.words.length === 0) {
      const initial = { ...saved, words: embeddedWords };
      saveProgress(initial);
      setProgress(initial);
    } else {
      const savedKeys = new Set(saved.words.map(w => `${w.english.toLowerCase()}-${w.themeId}`));
      const missingWords = embeddedWords.filter(ew => !savedKeys.has(`${ew.english.toLowerCase()}-${ew.themeId}`));
      
      if (missingWords.length > 0) {
        const updated = { ...saved, words: [...saved.words, ...missingWords] };
        saveProgress(updated);
        setProgress(updated);
      } else {
        setProgress(saved);
      }
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
    if (view === 'UNITS' || view === 'TEACHER') setView('MENU');
    else if (['STUDY', 'QUIZ_EN_TR', 'QUIZ_TR_EN', 'QUICK_REVIEW'].includes(view)) setView('UNITS');
    else setView('MENU');
  };

  const totalScore = useMemo(() => 
    progress.words.reduce((acc, w) => acc + (w.level || 0), 0) * 10
  , [progress.words]);

  const renderContent = () => {
    if (view === 'TEACHER') {
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
    }

    switch (view) {
      case 'MENU':
        return (
          <div className="max-w-6xl mx-auto px-4 pb-10">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-6 sm:p-10 rounded-[2rem] shadow-xl text-center w-full border-b-8 border-blue-700 mb-8">
                <h2 className="heading-font text-3xl sm:text-5xl mb-3 italic">Word Master 5 🚀</h2>
                <p className="opacity-90 font-medium text-sm sm:text-lg px-2 leading-relaxed">
                  ÇYD 5. Sınıf Multi kitabındaki tüm kelimeleri eğlenerek keşfet!
                </p>
              </div>

              <button 
                onClick={() => setShowGuide(true)}
                className="bg-white text-blue-600 border-2 border-blue-100 px-6 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all flex items-center space-x-2 active:scale-95"
              >
                <i className="fa-solid fa-circle-question"></i>
                <span>Nasıl Oynanır?</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {THEMES.map(theme => {
                const themeProgress = progress.words.filter(w => w.themeId === theme.id);
                return (
                  <ThemeCard 
                    key={theme.id} 
                    theme={theme} 
                    learned={themeProgress.filter(w => w.level > 3).length} 
                    total={themeProgress.length}
                    onClick={() => {
                      setActiveThemeId(theme.id as ThemeId);
                      setView('UNITS');
                    }}
                  />
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={() => setView('TEACHER')}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold flex items-center justify-center space-x-2 mx-auto px-6 py-3 rounded-2xl hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
              >
                <i className="fa-solid fa-user-tie"></i>
                <span>Müfredat Yönetimi</span>
              </button>
            </div>
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
            mode={view as ViewState}
            unitName={activeUnit}
            words={unitWords}
            allThemeWords={themeWords}
            onUpdateWord={handleUpdateWord}
            onComplete={() => setView('UNITS')}
          />
        );

      default:
        return <div className="text-center p-10 font-bold text-slate-400">Yükleniyor...</div>;
    }
  };

  return (
    <div className="min-h-screen pb-32 bg-slate-50">
      <Navbar onHome={() => setView('MENU')} canGoBack={view !== 'MENU'} onBack={handleBack} />
      <main className="container mx-auto mt-4 px-2">
        {renderContent()}
      </main>

      {showGuide && (
        <div className="fixed inset-0 bg-slate-900/80 z-[60] flex items-center justify-center p-4 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-[2.5rem] max-w-md w-full p-8 relative shadow-2xl border-4 border-blue-100">
            <button onClick={() => setShowGuide(false)} className="absolute -top-3 -right-3 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h2 className="heading-font text-3xl text-blue-600 mb-6 text-center">Nasıl Oynanır?</h2>
            <div className="space-y-6">
               <div className="flex items-start space-x-4">
                 <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold shadow-md">1</div>
                 <p className="text-slate-700 leading-tight font-medium">Kitabındaki bir <b>Temayı</b> ve içindeki kelime listesini seç.</p>
               </div>
               <div className="flex items-start space-x-4">
                 <div className="bg-green-500 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold shadow-md">2</div>
                 <p className="text-slate-700 leading-tight font-medium"><b>"Çalış"</b> modunda kelimelerin sesini duy ve anlamını kartı çevirerek gör.</p>
               </div>
               <div className="flex items-start space-x-4">
                 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold shadow-md">3</div>
                 <p className="text-slate-700 leading-tight font-medium"><b>"Test"</b> modlarında puanları topla, kelime seviyeni yükselt!</p>
               </div>
            </div>
            <button onClick={() => setShowGuide(false)} className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-bold mt-8 shadow-xl active:scale-95 transition-all text-lg">Anladım, Başlayalım!</button>
          </div>
        </div>
      )}

      {/* Footer / Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-100 p-4 safe-pb shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex justify-between items-center z-50">
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-100 p-2.5 rounded-2xl border border-yellow-200 shadow-sm">
             <i className="fa-solid fa-trophy text-yellow-600 text-xl"></i>
          </div>
          <div>
            <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Skor</div>
            <div className="font-bold text-slate-800 text-xl leading-none">{totalScore}</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Kayıtlı Kelime</div>
          <div className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl border border-blue-100 font-bold text-xs">
            {progress.words.length} Aktif
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;