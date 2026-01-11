
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
    <div className="max-w-4xl mx-auto px-4">
      <div className={`mb-8 p-6 rounded-2xl ${theme.color} text-white flex items-center space-x-4`}>
        <i className={`fa-solid ${theme.icon} text-4xl`}></i>
        <div>
          <h2 className="heading-font text-3xl">{theme.titleTr}</h2>
          <p className="opacity-80 italic">{theme.titleEn}</p>
        </div>
      </div>

      <div className="space-y-4">
        {units.map(unitName => {
          const unitWords = words.filter(w => w.unit === unitName);
          const learnedCount = unitWords.filter(w => w.level > 2).length;
          const studyNeeded = unitWords.filter(w => w.level <= 1).length;

          return (
            <div key={unitName} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="heading-font text-xl text-gray-800">{unitName}</h3>
                  <div className="flex space-x-4 mt-1 text-sm text-gray-500">
                    <span><i className="fa-solid fa-list mr-1"></i> {unitWords.length} Kelime</span>
                    <span className="text-green-600"><i className="fa-solid fa-check-circle mr-1"></i> {learnedCount} Usta</span>
                    <span className="text-orange-600"><i className="fa-solid fa-clock mr-1"></i> {studyNeeded} Tekrar</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:flex gap-2">
                  <button onClick={() => onSelectUnit(unitName, 'STUDY')} className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2">
                    <i className="fa-solid fa-book-open"></i><span>Çalış</span>
                  </button>
                  <button onClick={() => onSelectUnit(unitName, 'QUIZ_TR_EN')} className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2">
                    <i className="fa-solid fa-bullseye"></i><span>TR-EN</span>
                  </button>
                  <button onClick={() => onSelectUnit(unitName, 'QUIZ_EN_TR')} className="bg-purple-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2">
                    <i className="fa-solid fa-magnifying-glass"></i><span>EN-TR</span>
                  </button>
                  <button onClick={() => onSelectUnit(unitName, 'QUICK_REVIEW')} className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2">
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
