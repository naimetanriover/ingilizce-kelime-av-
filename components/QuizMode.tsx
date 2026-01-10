
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Word, ViewState } from '../types';

interface QuizModeProps {
  mode: ViewState;
  unitName: string;
  words: Word[];
  allThemeWords: Word[];
  onUpdateWord: (id: string, isCorrect: boolean) => void;
  onComplete: () => void;
}

const QuizMode: React.FC<QuizModeProps> = ({ mode, unitName, words, allThemeWords, onUpdateWord, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState(mode === 'QUICK_REVIEW' ? 60 : 0);
  const [results, setResults] = useState<{word: Word, correct: boolean}[]>([]);
  const timerRef = useRef<number | null>(null);

  // KRİTİK DÜZELTME: Kelimeleri sadece ünite adı veya mod değiştiğinde karıştır.
  // "words" bağımlılığı kaldırıldı çünkü progress güncellendiğinde "words" referansı değişiyor.
  const quizWords = useMemo(() => {
    return [...words].sort(() => Math.random() - 0.5);
  }, [unitName, mode]); // words referansı değişse bile karıştırma sabit kalır

  const currentWord = quizWords[currentIdx];

  const options = useMemo(() => {
    if (!currentWord) return [];
    const correctAnswer = mode === 'QUIZ_TR_EN' ? currentWord.english : currentWord.turkish;
    
    // Çeldiricileri aynı ünite içinden (veya temadan) seç
    const distractors = allThemeWords
      .filter(w => w.english !== currentWord.english) // Kendisi olmasın
      .map(w => mode === 'QUIZ_TR_EN' ? w.english : w.turkish)
      .filter((v, i, a) => a.indexOf(v) === i); // Benzersiz olanlar

    const randomDistractors = distractors.sort(() => Math.random() - 0.5).slice(0, 3);
    return [correctAnswer, ...randomDistractors].sort(() => Math.random() - 0.5);
  }, [currentWord?.id, mode, allThemeWords.length]); // Sadece kelime değişince seçenekleri güncelle

  useEffect(() => {
    if (mode === 'QUICK_REVIEW') {
      timerRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [mode]);

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null || !currentWord) return;
    
    setSelectedOption(option);
    const correctVal = mode === 'QUIZ_TR_EN' ? currentWord.english : currentWord.turkish;
    const correct = option === correctVal;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 10);
      onUpdateWord(currentWord.id, true);
    } else {
      onUpdateWord(currentWord.id, false);
    }

    setResults(prev => [...prev, { word: currentWord, correct }]);

    // Geçiş süresini biraz kısalttık ama kullanıcıya görme şansı verdik
    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      
      if (currentIdx + 1 < quizWords.length && (mode !== 'QUICK_REVIEW' || (timeLeft !== null && timeLeft > 0))) {
        setCurrentIdx(prev => prev + 1);
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeLeft(-1); // Bitti sinyali
      }
    }, 1200);
  };

  if (timeLeft === -1 || (currentIdx >= quizWords.length && quizWords.length > 0)) {
    const mistakes = results.filter(r => !r.correct).slice(0, 10);
    return (
      <div className="max-w-xl mx-auto px-4 text-center mt-10">
        <h2 className="heading-font text-4xl text-blue-600 mb-2">Tur Bitti!</h2>
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-6">
          <p className="text-xl text-gray-600 mb-4">Toplam Skorun</p>
          <p className="heading-font text-6xl text-orange-500 mb-4">{score}</p>
          <div className="flex justify-center space-x-2">
             {[...Array(Math.min(3, Math.max(1, Math.floor(score/30))))].map((_, i) => (
               <i key={i} className="fa-solid fa-star text-3xl text-yellow-400 animate-bounce" style={{animationDelay: `${i*0.2}s`}}></i>
             ))}
          </div>
        </div>

        {mistakes.length > 0 && (
          <div className="bg-red-50 p-6 rounded-2xl mb-6 text-left border border-red-100">
            <h3 className="font-bold text-red-700 mb-3 flex items-center">
               <i className="fa-solid fa-triangle-exclamation mr-2"></i>
               Tekrar Gereken Kelimeler:
            </h3>
            <ul className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {mistakes.map((m, i) => (
                <li key={i} className="text-gray-700 flex justify-between border-b border-red-100 pb-1">
                  <span className="font-bold">{m.word.english}</span>
                  <span className="text-red-500 italic">{m.word.turkish}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button 
          onClick={onComplete}
          className="bg-blue-600 text-white w-full py-4 rounded-2xl font-bold text-xl shadow-lg hover:bg-blue-700 transition-all transform active:scale-95"
        >
          Harika! Devam Et
        </button>
      </div>
    );
  }

  if (!currentWord) return <div className="text-center mt-20 font-bold text-blue-500">Kelimeler yükleniyor...</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 mt-6 select-none">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="heading-font text-xl text-blue-600 uppercase tracking-wide">
            {mode === 'QUICK_REVIEW' ? 'Hızlı Tur' : 'Kelime Avı'}
          </h2>
          <p className="text-gray-500 font-bold">{unitName}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-orange-500">{score} PUAN</div>
          {mode === 'QUICK_REVIEW' && (
            <div className={`text-sm font-bold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-gray-400'}`}>
              <i className="fa-solid fa-clock mr-1"></i> {timeLeft}s
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-lg mb-8 text-center border-b-8 border-blue-100 relative">
        <span className="text-xs font-bold text-blue-300 uppercase block mb-2 tracking-widest">
          {mode === 'QUIZ_TR_EN' ? 'Bu Kelimenin İngilizcesi Nedir?' : 'Bu Kelimenin Türkçesi Nedir?'}
        </span>
        <h3 className="heading-font text-4xl text-gray-800">
          {mode === 'QUIZ_TR_EN' ? currentWord.turkish : currentWord.english}
        </h3>
        <div className="absolute top-2 right-4 text-xs font-bold text-gray-300">
           {currentIdx + 1} / {quizWords.length}
        </div>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${selectedOption !== null ? 'pointer-events-none' : ''}`}>
        {options.map((option, idx) => {
          let btnClass = "bg-white border-2 border-gray-100 text-gray-700 hover:border-blue-400 hover:bg-blue-50";
          const correctVal = mode === 'QUIZ_TR_EN' ? currentWord.english : currentWord.turkish;

          if (selectedOption !== null) {
            if (option === correctVal) {
              btnClass = "bg-green-500 border-green-600 text-white scale-105 shadow-green-200 shadow-lg z-10";
            } else if (selectedOption === option) {
              btnClass = "bg-red-500 border-red-600 text-white opacity-90";
            } else {
              btnClass = "bg-gray-50 border-gray-100 text-gray-400 grayscale opacity-50";
            }
          }

          return (
            <button
              key={`${currentWord.id}-${idx}`}
              disabled={selectedOption !== null}
              onClick={() => handleOptionClick(option)}
              className={`p-5 rounded-2xl text-xl font-bold transition-all duration-200 transform active:scale-95 text-center ${btnClass} shadow-sm min-h-[80px] flex items-center justify-center`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center h-8">
        {isCorrect === false && (
          <p className="text-red-500 font-bold animate-pulse">
            <i className="fa-solid fa-circle-xmark mr-2"></i>
            Doğrusu: <span className="underline">{mode === 'QUIZ_TR_EN' ? currentWord.english : currentWord.turkish}</span>
          </p>
        )}
        {isCorrect === true && (
          <p className="text-green-500 font-bold">
            <i className="fa-solid fa-circle-check mr-2"></i>
            Mükemmel! +10 Puan
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizMode;
