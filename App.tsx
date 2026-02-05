
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
    // 1. Mevcut ilerlemeyi yükle
    const saved = loadProgress();
    
    // 2. Gömülü müfredat kelimelerini oluştur
    let embeddedWords: Word[] = [];
    THEMES.forEach(theme => {
      const csv = DEFAULT_CSV_DATA[theme.id];
      if (csv) {
        // Gömülü verilerde mapping sabit: english, turkish, unit
        const parsed = parseCSV(csv, theme.id as ThemeId, { english: 'english', turkish: 'turkish', unit: 'unit' });
        embeddedWords = [...embeddedWords, ...parsed];
      }
    });

    // 3. Senkronizasyon: Eğer cihazda hiç kelime yoksa veya müfredat güncellendiyse (kelime sayısı farkı)
    // Öğrencinin ilerlemesini bozmadan yeni kelimeleri ekle
    if (saved.words.length === 0) {
      const initial = { ...saved, words: embeddedWords };
      saveProgress(initial);
      setProgress(initial);
    } else {
      // Mevcut kelimeleri koru, eğer gömülü tarafta olup saved tarafta olmayan varsa ekle (Müfredat güncelleme desteği)
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
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center mb-10">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <button 
                  onClick={() => setShowGuide(true)}
                  className="bg-white text-blue-600 border-2 border-blue-100 px-6 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all flex items-center space-x-2"
                >
                  <i className="fa-solid fa-circle-question"></i>
                  <span>Nasıl Oynanır?</span>
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-8 rounded-3xl shadow-xl text-center max-w-2xl w-full border-b-8 border-blue-700">
                <h2 className="heading-font text-4xl mb-2 italic tracking-tight">Word Master 5 🚀</h2>
                <p className="opacity-90 font-medium text-lg px-4">
                  ÇYD 5. Sınıf Multi kitabında geçen tüm kelimeleri tema tema öğren!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            
            <div className="mt-12 text-center pb-10">
              <button 
                onClick={() => setView('TEACHER')}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold flex items-center justify-center space-x-2 mx-auto px-4 py-2 rounded-xl hover:bg-gray-100 transition-all"
              >
                <i className="fa-solid fa-user-tie"></i>
                <span>Müfredat Yönetimi (Öğretmen)</span>
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
        return <div className="text-center p-10 font-bold">Yükleniyor...</div>;
    }
  };

  return (
    <div className="min-h-screen pb-24 bg-[#f8fafc]">
      <Navbar onHome={() => setView('MENU')} canGoBack={view !== 'MENU'} onBack={handleBack} />
      <main className="container mx-auto mt-6">
        {renderContent()}
      </main>

      {showGuide && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4 backdrop-blur-md transition-all">
          <div className="bg-white rounded-[2rem] max-w-md w-full p-8 relative shadow-2xl border-4 border-blue-100">
            <button onClick={() => setShowGuide(false)} className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h2 className="heading-font text-3xl text-blue-600 mb-6 italic text-center underline decoration-wavy underline-offset-8">Nasıl Çalışır?</h2>
            <div className="space-y-6">
               <div className="flex items-start space-x-4">
                 <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold shadow-md">1</div>
                 <p className="text-gray-700 leading-relaxed font-medium">Kitabındaki <b>Temalardan</b> birini seç.</p>
               </div>
               <div className="flex items-start space-x-4">
                 <div className="bg-green-500 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold shadow-md">2</div>
                 <p className="text-gray-700 leading-relaxed font-medium"><b>"Çalış"</b> modunda kelimeleri sesli dinleyip ezberle.</p>
               </div>
               <div className="flex items-start space-x-4">
                 <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold shadow-md">3</div>
                 <p className="text-gray-700 leading-relaxed font-medium"><b>"Test"</b> modlarında puanları topla ve kelimeleri "Usta" yap!</p>
               </div>
            </div>
            <button onClick={() => setShowGuide(false)} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold mt-8 shadow-xl hover:bg-blue-700 transition-all transform active:scale-95">Anladım, Başlayalım!</button>
          </div>
        </div>
      )}

      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex justify-between items-center z-50">
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-100 p-3 rounded-2xl shadow-inner border border-yellow-200">
             <i className="fa-solid fa-trophy text-yellow-600 text-2xl"></i>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">Toplam Skor</div>
            <div className="font-bold text-gray-800 text-2xl leading-none">
              {progress.words.reduce((acc, w) => acc + (w.level || 0), 0) * 10}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Kelime Sayısı</div>
          <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-xl border border-blue-100 font-bold text-sm shadow-sm">
            {progress.words.length} Kelime Aktif
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
