import React, { useState, useEffect } from 'react';
import { Word } from '../types.ts';

interface FlashcardModeProps {
  unitName: string;
  words: Word[];
  onUpdateWord: (id: string, isCorrect: boolean) => void;
  onComplete: () => void;
}

const FlashcardMode: React.FC<FlashcardModeProps> = ({ unitName, words, onUpdateWord, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const currentWord = words[currentIdx];

  const speakText = (text: string, lang: 'en-US' | 'tr-TR' = 'en-US') => {
    if (isSpeaking) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (currentWord && !isFlipped) {
      const timer = setTimeout(() => speakText(currentWord.english), 500);
      return () => clearTimeout(timer);
    }
  }, [currentIdx, isFlipped]);

  const handleResponse = (isCorrect: boolean) => {
    onUpdateWord(currentWord.id, isCorrect);
    if (currentIdx + 1 < words.length) {
      setCurrentIdx(currentIdx + 1);
      setIsFlipped(false);
    } else {
      onComplete();
    }
  };

  if (!currentWord) return null;

  return (
    <div className="max-w-md mx-auto px-4 mt-2 sm:mt-10 mb-20 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex flex-col max-w-[70%]">
          <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">Çalışma Kartı</span>
          <h2 className="heading-font text-lg text-blue-600 truncate">{unitName}</h2>
        </div>
        <div className="bg-blue-50 px-3 py-1 rounded-full border border-blue-100 text-blue-600 font-bold text-xs">
          {currentIdx + 1} / {words.length}
        </div>
      </div>

      <div 
        className={`card-flip w-full aspect-[3/4] sm:aspect-[4/3] cursor-pointer ${isFlipped ? 'flipped' : ''}`} 
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-flip-inner relative w-full h-full shadow-2xl rounded-[2.5rem]">
          {/* Ön Yüz */}
          <div className="card-front absolute inset-0 bg-white p-8 border-4 border-blue-50">
            <h3 className="heading-font text-4xl sm:text-6xl text-slate-800 text-center leading-tight break-words mb-10">
              {currentWord.english}
            </h3>
            <button 
              onClick={(e) => { e.stopPropagation(); speakText(currentWord.english); }} 
              className="bg-blue-50 text-blue-500 w-16 h-16 rounded-full flex items-center justify-center hover:bg-blue-100 transition-all shadow-inner border border-blue-100 active:scale-90"
            >
              <i className="fa-solid fa-volume-high text-2xl"></i>
            </button>
            <p className="mt-12 text-slate-400 text-[10px] font-bold tracking-widest animate-pulse uppercase">
              Görmek için tıkla
            </p>
          </div>
          
          {/* Arka Yüz */}
          <div className="card-back absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 border-4 border-blue-400">
            <div className="mb-6 text-center">
              <span className="text-blue-200 text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">ANLAMI</span>
              <h3 className="heading-font text-4xl sm:text-5xl text-white text-center leading-tight">
                {currentWord.turkish}
              </h3>
            </div>
            <div className="bg-white/10 w-12 h-1.5 rounded-full mb-8"></div>
            <i className="fa-solid fa-check-circle text-white/20 text-5xl"></i>
          </div>
        </div>
      </div>

      <div className={`mt-8 grid grid-cols-2 gap-4 transition-all duration-500 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={() => handleResponse(false)} 
          className="bg-white border-b-8 border-orange-200 text-orange-600 py-6 rounded-[2rem] font-bold shadow-xl active:border-b-0 active:translate-y-2 transition-all flex flex-col items-center justify-center"
        >
          <i className="fa-solid fa-rotate-left mb-1 text-lg"></i>
          <span className="text-sm">Tekrar</span>
        </button>
        <button 
          onClick={() => handleResponse(true)} 
          className="bg-white border-b-8 border-emerald-200 text-emerald-600 py-6 rounded-[2rem] font-bold shadow-xl active:border-b-0 active:translate-y-2 transition-all flex flex-col items-center justify-center"
        >
          <i className="fa-solid fa-check-circle mb-1 text-lg"></i>
          <span className="text-sm">Biliyorum</span>
        </button>
      </div>
    </div>
  );
};

export default FlashcardMode;