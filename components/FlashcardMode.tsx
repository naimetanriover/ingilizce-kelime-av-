
import React, { useState, useEffect, useRef } from 'react';
import { Word } from '../types';
import { GoogleGenAI, Modality } from "@google/genai";

interface FlashcardModeProps {
  unitName: string;
  words: Word[];
  onUpdateWord: (id: string, isCorrect: boolean) => void;
  onComplete: () => void;
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const FlashcardMode: React.FC<FlashcardModeProps> = ({ unitName, words, onUpdateWord, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  
  const currentWord = words[currentIdx];

  const speakEnglish = async (text: string) => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    setError(null);

    try {
      // Create fresh instance to ensure updated API Key usage
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say clearly: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Zephyr' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const ctx = audioContextRef.current;
        const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(ctx.destination);
        source.onended = () => setIsSpeaking(false);
        source.start();
      } else {
        setIsSpeaking(false);
      }
    } catch (err: any) {
      console.error("TTS Error:", err);
      setIsSpeaking(false);
      
      if (err.message?.includes("403") || err.message?.includes("permission") || err.message?.includes("Permission denied")) {
        setError("API İzni Reddedildi. Lütfen sağ üstteki 'Anahtar Seç' butonundan geçerli bir anahtar seçin.");
      } else {
        setError("Ses yüklenemedi. İnternet bağlantınızı kontrol edin.");
      }
    }
  };

  useEffect(() => {
    if (currentWord && !isFlipped) {
      const timer = setTimeout(() => {
        speakEnglish(currentWord.english);
      }, 500);
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
        <h2 className="heading-font text-2xl text-blue-600">{unitName} - Öğrenme</h2>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-bold">
          {currentIdx + 1} / {words.length}
        </span>
      </div>

      <div 
        className={`card-flip w-full aspect-[4/3] cursor-pointer ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-flip-inner relative w-full h-full shadow-2xl rounded-3xl">
          {/* Front (English) */}
          <div className="card-front absolute inset-0 bg-white flex flex-col items-center justify-center p-8 rounded-3xl border-4 border-blue-200">
            <span className="text-sm text-blue-400 font-bold uppercase tracking-widest mb-4">İngilizce</span>
            <div className="relative group">
              <h3 className="heading-font text-5xl text-gray-800 text-center">{currentWord.english}</h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  speakEnglish(currentWord.english);
                }}
                className={`absolute -right-12 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${isSpeaking ? 'text-blue-600 scale-125' : 'text-gray-300 hover:text-blue-400'}`}
              >
                <i className={`fa-solid ${isSpeaking ? 'fa-volume-high animate-pulse' : 'fa-volume-low'}`}></i>
              </button>
            </div>
            
            {error && (
              <div className="mt-4 px-4 py-2 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100 text-center animate-shake">
                <i className="fa-solid fa-circle-exclamation mr-1"></i>
                {error}
                <button 
                   onClick={(e) => {
                     e.stopPropagation();
                     if (window.aistudio) window.aistudio.openSelectKey();
                   }}
                   className="block mx-auto mt-2 underline font-bold"
                >
                  Anahtar Seç
                </button>
              </div>
            )}
            
            <p className="mt-8 text-gray-400 italic">Anlamını görmek için tıkla</p>
          </div>
          {/* Back (Turkish) */}
          <div className="card-back absolute inset-0 bg-blue-50 flex flex-col items-center justify-center p-8 rounded-3xl border-4 border-blue-400">
            <span className="text-sm text-blue-500 font-bold uppercase tracking-widest mb-4">Türkçe Anlamı</span>
            <h3 className="heading-font text-4xl text-blue-700 text-center">{currentWord.turkish}</h3>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="mt-12 grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleResponse(false)}
            className="bg-orange-100 hover:bg-orange-200 text-orange-600 py-4 rounded-2xl font-bold flex flex-col items-center space-y-1 transition-colors"
          >
            <i className="fa-solid fa-rotate-right text-2xl"></i>
            <span>Tekrar Et</span>
          </button>
          <button 
            onClick={() => handleResponse(true)}
            className="bg-green-100 hover:bg-green-200 text-green-600 py-4 rounded-2xl font-bold flex flex-col items-center space-y-1 transition-colors"
          >
            <i className="fa-solid fa-check-double text-2xl"></i>
            <span>Biliyorum</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashcardMode;
