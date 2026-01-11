
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
    <div className="max-w-xl mx-auto px-4 mt-10">
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Çalışma Modu</span>
          <h2 className="heading-font text-xl text-blue-600">{unitName}</h2>
        </div>
        <span className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-md">
          {currentIdx + 1} / {words.length}
        </span>
      </div>

      <div className={`card-flip w-full aspect-[4/3] cursor-pointer ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="card-flip-inner relative w-full h-full shadow-2xl rounded-[2.5rem]">
          <div className="card-front absolute inset-0 bg-white flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-4 border-blue-100">
            <h3 className="heading-font text-5xl text-gray-800 text-center leading-tight">{currentWord.english}</h3>
            <button 
              onClick={(e) => { e.stopPropagation(); speakEnglish(currentWord.english); }} 
              className="mt-8 bg-blue-50 text-blue-500 w-16 h-16 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors shadow-inner"
            >
              <i className="fa-solid fa-volume-high text-2xl"></i>
            </button>
            <div className="mt-8 text-gray-300 text-xs font-bold animate-pulse">Çevirmek için dokun</div>
          </div>
          <div className="card-back absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-4 border-blue-400 shadow-inner">
            <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Türkçe Karşılığı</span>
            <h3 className="heading-font text-4xl text-white text-center leading-tight">{currentWord.turkish}</h3>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="mt-12 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={() => handleResponse(false)} 
            className="bg-white border-b-4 border-orange-200 text-orange-600 py-5 rounded-2xl font-bold shadow-md hover:bg-orange-50 active:border-b-0 active:translate-y-1 transition-all"
          >
            Henüz Değil ❌
          </button>
          <button 
            onClick={() => handleResponse(true)} 
            className="bg-white border-b-4 border-green-200 text-green-600 py-5 rounded-2xl font-bold shadow-md hover:bg-green-50 active:border-b-0 active:translate-y-1 transition-all"
          >
            Biliyorum! ✅
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashcardMode;
