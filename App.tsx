
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
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('MENU');
  const [activeThemeId, setActiveThemeId] = useState<ThemeId | null>(null);
  const [activeUnit, setActiveUnit] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress>({ words: [], badges: [] });
  const [showGuide, setShowGuide] = useState(false);

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

  const handleStudentImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const importedData = JSON.parse(ev.target?.result as string);
          if (importedData && Array.isArray(importedData.words)) {
            // Merge logic: keep existing progress if same word ID, add new ones
            const existingIds = new Set(progress.words.map(w => w.id));
            const newWords = importedData.words.filter((w: Word) => !existingIds.has(w.id));
            
            const updated = {
              ...progress,
              words: [...progress.words, ...newWords]
            };
            saveProgress(updated);
            setProgress(updated);
            alert(`Harika! Öğretmeninin gönderdiği ${newWords.length} yeni kelime eklendi.`);
          }
        } catch (err) {
          alert("Dosya yüklenirken bir hata oluştu. Lütfen doğru dosyayı seçtiğinden emin ol.");
        }
      };
      reader.readAsText(file);
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'MENU':
        return (
          <div className="max-w-6xl mx-auto px-4">
            {/* Student Actions Bar */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <button 
                onClick={() => setShowGuide(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-6 py-3 rounded-2xl font-bold shadow-lg transform transition hover:scale-105 flex items-center space-x-2"
              >
                <i className="fa-solid fa-lightbulb"></i>
                <span>Nasıl Oynanır?</span>
              </button>
              
              <label className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg transform transition hover:scale-105 flex items-center space-x-2 cursor-pointer">
                <i className="fa-solid fa-file-import"></i>
                <span>Öğretmen Listesini Yükle</span>
                <input type="file" accept=".json" onChange={handleStudentImport} className="hidden" />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      default:
        return <div>Yapım aşamasında...</div>;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <Navbar 
        onHome={() => setView('MENU')} 
        canGoBack={view !== 'MENU'}
        onBack={handleBack}
      />
      <main className="container mx-auto mt-6">
        {renderContent()}
      </main>

      {/* Guide Modal */}
      {showGuide && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl">
            <button 
              onClick={() => setShowGuide(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
            <h2 className="heading-font text-3xl text-blue-600 mb-6 flex items-center">
              <i className="fa-solid fa-gamepad mr-3"></i>
              Oyun Rehberi
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <section className="bg-blue-50 p-4 rounded-2xl border-l-4 border-blue-400">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                  Kelime Çalış (Flashcards)
                </h3>
                <p>Kelimelerin İngilizcelerini dinle ve anlamlarını tahmin et. "Biliyorum" dersen kelime seviye atlar!</p>
              </section>

              <section className="bg-green-50 p-4 rounded-2xl border-l-4 border-green-400">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                  Kelime Avcısı (Quiz)
                </h3>
                <p>Zamana karşı veya puan toplamak için doğru şıkkı bul. Hızlı olursan daha çok puan kazanırsın.</p>
              </section>

              <section className="bg-orange-50 p-4 rounded-2xl border-l-4 border-orange-400">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">3</span>
                  Seviye Sistemi
                </h3>
                <p>Bir kelimeyi ne kadar çok doğru bilirsen seviyesi 5'e kadar yükselir. Amacın tüm kelimeleri "Usta" yapmak!</p>
              </section>

              <section className="bg-purple-50 p-4 rounded-2xl border-l-4 border-purple-400">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">4</span>
                  Öğretmen Listeleri
                </h3>
                <p>Öğretmeninin gönderdiği özel listeleri ana menüden yükleyebilirsin.</p>
              </section>
            </div>

            <button 
              onClick={() => setShowGuide(false)}
              className="w-full mt-8 bg-blue-600 text-white py-4 rounded-2xl font-bold text-xl shadow-lg hover:bg-blue-700 transition-all"
            >
              Anladım, Haydi Başlayalım!
            </button>
          </div>
        </div>
      )}

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
