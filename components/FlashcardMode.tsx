
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="heading-font text-2xl text-blue-600">{unitName}</h2>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{currentIdx + 1} / {words.length}</span>
      </div>

      <div className={`card-flip w-full aspect-[4/3] cursor-pointer ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="card-flip-inner relative w-full h-full shadow-2xl rounded-3xl">
          <div className="card-front absolute inset-0 bg-white flex flex-col items-center justify-center p-8 rounded-3xl border-4 border-blue-200">
            <h3 className="heading-font text-5xl text-gray-800 text-center">{currentWord.english}</h3>
            <button onClick={(e) => { e.stopPropagation(); speakEnglish(currentWord.english); }} className="mt-4 p-3 rounded-full text-blue-500">
              <i className="fa-solid fa-volume-high text-2xl"></i>
            </button>
          </div>
          <div className="card-back absolute inset-0 bg-blue-50 flex flex-col items-center justify-center p-8 rounded-3xl border-4 border-blue-400">
            <h3 className="heading-font text-4xl text-blue-700 text-center">{currentWord.turkish}</h3>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="mt-12 grid grid-cols-2 gap-4">
          <button onClick={() => handleResponse(false)} className="bg-orange-100 text-orange-600 py-4 rounded-2xl font-bold">Tekrar Et</button>
          <button onClick={() => handleResponse(true)} className="bg-green-100 text-green-600 py-4 rounded-2xl font-bold">Biliyorum</button>
        </div>
      )}
    </div>
  );
};

export default FlashcardMode;
