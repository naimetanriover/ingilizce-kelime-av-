import React, { useState } from 'react';
import { UserProgress, Word, ThemeId } from '../types';
import { THEMES } from '../constants';
import { suggestMapping, ColumnMapping } from '../services/csvParser';
import { saveProgress } from '../services/dataManager';

interface TeacherPanelProps {
  progress: UserProgress;
  onImport: (words: Word[]) => void;
}

const TeacherPanel: React.FC<TeacherPanelProps> = ({ progress, onImport }) => {
  const [csvContent, setCsvContent] = useState('');
  const [mapping, setMapping] = useState<ColumnMapping>({ english: '', turkish: '', unit: '' });
  const [step, setStep] = useState<1 | 2>(1);

  const handleFileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const content = ev.target?.result as string;
        setCsvContent(content);
        const firstLine = content.split('\n')[0].split(',');
        setMapping(suggestMapping(firstLine));
        setStep(2);
      };
      reader.readAsText(file);
    }
  };

  const resetToFactory = () => {
    if (window.confirm("Tüm ilerlemeyi silip fabrika ayarlarına dönmek istediğine emin misin?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-32">
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-slate-900 text-white p-8">
          <div className="flex items-center space-x-4 mb-2">
             <div className="bg-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <i className="fa-solid fa-chalkboard-user text-xl"></i>
             </div>
             <div>
               <h2 className="heading-font text-3xl">Öğretmen Masası</h2>
               <p className="text-slate-400 text-sm font-medium tracking-wide">MÜFREDAT VE İÇERİK YÖNETİMİ</p>
             </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                <i className="fa-solid fa-shield-halved mr-2 text-slate-500"></i>
                Veri Yönetimi
              </h4>
              <p className="text-slate-500 text-xs mb-6 font-medium">Uygulama verilerini dışa aktarabilir veya tamamen sıfırlayabilirsiniz.</p>
              <div className="grid grid-cols-1 gap-3">
                <button onClick={() => {
                   const data = JSON.stringify(progress);
                   const blob = new Blob([data], {type: 'application/json'});
                   const url = URL.createObjectURL(blob);
                   const a = document.createElement('a');
                   a.href = url;
                   a.download = 'wm5_yedek.json';
                   a.click();
                }} className="bg-white border-2 border-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center justify-center space-x-2 text-sm">
                  <i className="fa-solid fa-file-export"></i><span>Dışa Aktar</span>
                </button>
                <button onClick={resetToFactory} className="bg-red-50 text-red-600 py-3 rounded-xl font-bold hover:bg-red-100 transition-all flex items-center justify-center space-x-2 text-sm border border-red-100">
                  <i className="fa-solid fa-trash-can"></i><span>Fabrika Ayarları</span>
                </button>
              </div>
            </div>
          </div>

          <div className="border-4 border-dashed border-slate-100 rounded-[2rem] p-10 text-center bg-slate-50/30">
             <i className="fa-solid fa-cloud-arrow-up text-5xl text-slate-200 mb-4 block"></i>
             <h3 className="heading-font text-xl text-slate-400 mb-4">Yeni Müfredat Yükle (CSV)</h3>
             <input type="file" id="csv-upload" className="hidden" accept=".csv" onChange={handleFileLoad} />
             <label htmlFor="csv-upload" className="inline-block bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold cursor-pointer hover:bg-slate-900 transition-all shadow-xl active:scale-95">
               Dosya Seç ve Başla
             </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPanel;