import React from 'react';
import { Theme, Word, ViewState } from '../types.ts';

interface UnitListProps {
  theme: Theme;
  words: Word[];
  onSelectUnit: (unit: string, mode: ViewState) => void;
}

const UnitList: React.FC<UnitListProps> = ({ theme, words, onSelectUnit }) => {
  const units = Array.from(new Set(words.map(w => w.unit)));

  return (
    <div className="max-w-4xl mx-auto px-2">
      <div className={`mb-6 p-6 rounded-[2rem] ${theme.color} text-white flex items-center space-x-4 shadow-xl border-b-4 border-black/20`}>
        <div className="bg-white/20 p-3 rounded-2xl">
          <i className={`fa-solid ${theme.icon} text-3xl sm:text-4xl`}></i>
        </div>
        <div>
          <h2 className="heading-font text-2xl sm:text-3xl">{theme.titleTr}</h2>
          <p className="opacity-80 italic font-medium text-xs sm:text-sm">{theme.titleEn}</p>
        </div>
      </div>

      <div className="space-y-4">
        {units.map(unitName => {
          const unitWords = words.filter(w => w.unit === unitName);
          const learnedCount = unitWords.filter(w => w.level > 2).length;
          const studyNeeded = unitWords.filter(w => w.level <= 1).length;

          return (
            <div key={unitName} className="bg-white rounded-[2rem] p-5 shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="bg-blue-100 text-blue-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Liste</span>
                      <h3 className="heading-font text-lg text-slate-800">{unitName}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                      <span className="text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
                        <i className="fa-solid fa-list mr-1"></i> {unitWords.length} Kelime
                      </span>
                      <span className="text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                        <i className="fa-solid fa-check mr-1"></i> {learnedCount} Usta
                      </span>
                    </div>
                  </div>
                  <div className="text-orange-600 bg-orange-50 px-2 py-1 rounded-lg text-[10px] font-bold">
                    <i className="fa-solid fa-clock mr-1"></i> {studyNeeded} Tekrar
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => onSelectUnit(unitName, 'STUDY')} className="bg-blue-500 text-white py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all">
                    <i className="fa-solid fa-book-open"></i><span>Çalış</span>
                  </button>
                  <button onClick={() => onSelectUnit(unitName, 'QUIZ_TR_EN')} className="bg-emerald-500 text-white py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 transition-all">
                    <i className="fa-solid fa-bullseye"></i><span>TR-EN</span>
                  </button>
                  <button onClick={() => onSelectUnit(unitName, 'QUIZ_EN_TR')} className="bg-indigo-500 text-white py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md border-b-4 border-indigo-700 active:border-b-0 active:translate-y-1 transition-all">
                    <i className="fa-solid fa-magnifying-glass"></i><span>EN-TR</span>
                  </button>
                  <button onClick={() => onSelectUnit(unitName, 'QUICK_REVIEW')} className="bg-orange-500 text-white py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 transition-all">
                    <i className="fa-solid fa-bolt"></i><span>Hızlı</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnitList;