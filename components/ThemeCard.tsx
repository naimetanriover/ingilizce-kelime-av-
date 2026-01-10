
import React from 'react';
import { Theme } from '../types';

interface ThemeCardProps {
  theme: Theme;
  learned: number;
  total: number;
  onClick: () => void;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ theme, learned, total, onClick }) => {
  const percentage = total === 0 ? 0 : Math.round((learned / total) * 100);

  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl shadow-lg cursor-pointer transform transition-all hover:scale-105 active:scale-95 ${theme.color} text-white p-6 group`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <i className={`fa-solid ${theme.icon} text-5xl opacity-80`}></i>
          <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
            %{percentage}
          </div>
        </div>
        <h3 className="heading-font text-xl mb-1">{theme.titleTr}</h3>
        <p className="text-white/80 font-medium italic text-sm">{theme.titleEn}</p>
        
        <div className="mt-6">
          <div className="flex justify-between text-xs mb-1 font-bold">
            <span>Öğrenildi: {learned}</span>
            <span>Toplam: {total}</span>
          </div>
          <div className="w-full bg-black/10 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-500" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Decorative background circle */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full group-hover:scale-110 transition-transform"></div>
    </div>
  );
};

export default ThemeCard;
