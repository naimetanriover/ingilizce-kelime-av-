
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

  const speakEnglish = (text: string) => {
    if (isSpeaking) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (currentWord && !isFlipped) {
      const timer = setTimeout(() => speakEnglish(currentWord.english), 500);
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
    <div className="max-w-xl mx-auto px-4 mt-2 sm:mt-10 mb-20">
      {/* Üst Bilgi Paneli - Daha Kompakt */}
      <div className="flex justify-between items-center mb-4 bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest leading-none mb-1">Çalışma Modu</span>
          <h2 className="heading-font text-lg sm:text-xl text-blue-600 truncate max-w-[150px] sm:max-w-none">{unitName}</h2>
        </div>
        <span className="bg-blue-600 text-white px-3 py-1 sm:py-2 rounded-xl font-bold text-xs sm:text-sm shadow-md">
          {currentIdx + 1} / {words.length}
        </span>
      </div>

      {/* Kart Alanı - Dinamik Yükseklik Sınırı */}
      <div 
        className={`card-flip w-full max-w-md mx-auto aspect-[4/3] max-h-[40vh] sm:max-h-[50vh] cursor-pointer ${isFlipped ? 'flipped' : ''}`} 
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-flip-inner relative w-full h-full shadow-2xl rounded-[2rem] sm:rounded-[2.5rem]">
          {/* Ön Yüz */}
          <div className="card-front absolute inset-0 bg-white flex flex-col items-center justify-center p-4 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-4 border-blue-100">
            <h3 className="heading-font text-3xl sm:text-5xl text-gray-800 text-center leading-tight break-words px-2">
              {currentWord.english}
            </h3>
            <button 
              onClick={(e) => { e.stopPropagation(); speakEnglish(currentWord.english); }} 
              className="mt-4 sm:mt-8 bg-blue-50 text-blue-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors shadow-inner"
            >
              <i className="fa-solid fa-volume-high text-xl sm:text-2xl"></i>
            </button>
            <div className="mt-4 sm:mt-8 text-gray-300 text-[10px] sm:text-xs font-bold animate-pulse">
              Çevirmek için dokun
            </div>
          </div>
          
          {/* Arka Yüz */}
          <div className="card-back absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center p-4 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-4 border-blue-400 shadow-inner">
            <span className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 sm:mb-4">Türkçe Karşılığı</span>
            <h3 className="heading-font text-2xl sm:text-4xl text-white text-center leading-tight break-words px-2">
              {currentWord.turkish}
            </h3>
          </div>
        </div>
      </div>

      {/* Kontrol Butonları - Mesafesi Daraltıldı */}
      <div className={`mt-4 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 transition-all duration-500 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
          onClick={() => handleResponse(false)} 
          className="bg-white border-b-4 border-orange-200 text-orange-600 py-3 sm:py-5 rounded-2xl font-bold shadow-md hover:bg-orange-50 active:border-b-0 active:translate-y-1 transition-all text-sm sm:text-base"
        >
          Henüz Değil ❌
        </button>
        <button 
          onClick={() => handleResponse(true)} 
          className="bg-white border-b-4 border-green-200 text-green-600 py-3 sm:py-5 rounded-2xl font-bold shadow-md hover:bg-green-50 active:border-b-0 active:translate-y-1 transition-all text-sm sm:text-base"
        >
          Biliyorum! ✅
        </button>
      </div>
    </div>
  );
};

export default FlashcardMode;
