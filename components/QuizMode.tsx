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

  const quizWords = useMemo(() => {
    return [...words].sort(() => Math.random() - 0.5);
  }, [unitName, mode]);

  const currentWord = quizWords[currentIdx];

  const options = useMemo(() => {
    if (!currentWord) return [];
    const correctAnswer = mode === 'QUIZ_TR_EN' ? currentWord.english : currentWord.turkish;
    
    const distractors = allThemeWords
      .filter(w => w.english !== currentWord.english)
      .map(w => mode === 'QUIZ_TR_EN' ? w.english : w.turkish)
      .filter((v, i, a) => a.indexOf(v) === i);

    const randomDistractors = distractors.sort(() => Math.random() - 0.5).slice(0, 3);
    return [correctAnswer, ...randomDistractors].sort(() => Math.random() - 0.5);
  }, [currentWord?.id, mode, allThemeWords.length]);

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

    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      
      if (currentIdx + 1 < quizWords.length && (mode !== 'QUICK_REVIEW' || (timeLeft !== null && timeLeft > 0))) {
        setCurrentIdx(prev => prev + 1);
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeLeft(-1);
      }
    }, 1000);
  };

  if (timeLeft === -1 || (currentIdx >= quizWords.length && quizWords.length > 0)) {
    const mistakes = results.filter(r => !r.correct).slice(0, 10);
    return (
      <div className="max-w-md mx-auto px-4 text-center mt-6">
        <h2 className="heading-font text-4xl text-blue-600 mb-4">Tur Bitti!</h2>
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl mb-6 border border-slate-100">
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Skorun</p>
          <p className="heading-font text-6xl text-orange-500 mb-6">{score}</p>
          <div className="flex justify-center space-x-2">
             {[...Array(3)].map((_, i) => (
               <i key={i} className={`fa-solid fa-star text-3xl ${i < Math.floor(score/30) ? 'text-yellow-400 animate-bounce' : 'text-slate-100'}`} style={{animationDelay: `${i*0.1}s`}}></i>
             ))}
          </div>
        </div>

        {mistakes.length > 0 && (
          <div className="bg-red-50 p-6 rounded-[2rem] mb-8 text-left border border-red-100">
            <h3 className="font-bold text-red-700 text-xs mb-3 flex items-center uppercase tracking-tight">
               <i className="fa-solid fa-triangle-exclamation mr-2"></i>
               Yanlış Kelimeler
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
              {mistakes.map((m, i) => (
                <div key={i} className="bg-white/50 p-3 rounded-xl flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-sm">{m.word.english}</span>
                  <span className="text-red-500 italic text-xs">{m.word.turkish}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button 
          onClick={onComplete}
          className="bg-blue-600 text-white w-full py-5 rounded-[1.5rem] font-bold text-lg shadow-lg active:scale-95 transition-all"
        >
          Devam Et
        </button>
      </div>
    );
  }

  if (!currentWord) return null;

  return (
    <div className="max-w-md mx-auto px-4 mt-2 sm:mt-6 select-none pb-20">
      <div className="flex justify-between items-end mb-4 px-1">
        <div className="max-w-[60%]">
          <div className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">{mode === 'QUICK_REVIEW' ? 'Hızlı' : 'Av'} Turu</div>
          <h2 className="heading-font text-lg text-slate-800 truncate">{unitName}</h2>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-orange-500">{score} PUAN</div>
          {mode === 'QUICK_REVIEW' && (
            <div className={`text-[10px] font-bold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-slate-400'}`}>
              {timeLeft} SANİYE
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl mb-6 text-center border-b-8 border-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-50">
          <div 
            className="h-full bg-blue-500 transition-all duration-300" 
            style={{ width: `${((currentIdx + 1) / quizWords.length) * 100}%` }}
          ></div>
        </div>
        <span className="text-[10px] font-bold text-slate-300 uppercase block mb-3 tracking-[0.2em]">
          {mode === 'QUIZ_TR_EN' ? 'İngilizcesi?' : 'Türkçesi?'}
        </span>
        <h3 className="heading-font text-4xl text-slate-800 leading-tight">
          {mode === 'QUIZ_TR_EN' ? currentWord.turkish : currentWord.english}
        </h3>
        <div className="mt-4 text-[10px] font-bold text-slate-300">
           {currentIdx + 1} / {quizWords.length}
        </div>
      </div>

      <div className={`grid grid-cols-1 gap-3 ${selectedOption !== null ? 'pointer-events-none' : ''}`}>
        {options.map((option, idx) => {
          let btnClass = "bg-white border-2 border-slate-100 text-slate-700 active:border-blue-400 active:bg-blue-50 shadow-sm";
          const correctVal = mode === 'QUIZ_TR_EN' ? currentWord.english : currentWord.turkish;

          if (selectedOption !== null) {
            if (option === correctVal) {
              btnClass = "bg-emerald-500 border-emerald-600 text-white scale-[1.02] shadow-emerald-200 shadow-xl z-10";
            } else if (selectedOption === option) {
              btnClass = "bg-red-500 border-red-600 text-white";
            } else {
              btnClass = "bg-slate-50 border-slate-100 text-slate-300 grayscale opacity-50";
            }
          }

          return (
            <button
              key={`${currentWord.id}-${idx}`}
              disabled={selectedOption !== null}
              onClick={() => handleOptionClick(option)}
              className={`p-5 rounded-2xl text-lg font-bold transition-all duration-200 text-center ${btnClass} min-h-[70px] flex items-center justify-center`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-6 text-center h-8">
        {isCorrect === false && (
          <p className="text-red-500 font-bold text-xs animate-bounce">
            Doğrusu: <span className="underline">{mode === 'QUIZ_TR_EN' ? currentWord.english : currentWord.turkish}</span>
          </p>
        )}
        {isCorrect === true && (
          <p className="text-emerald-500 font-bold text-xs">
            <i className="fa-solid fa-circle-check mr-1"></i> Harika!
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizMode;