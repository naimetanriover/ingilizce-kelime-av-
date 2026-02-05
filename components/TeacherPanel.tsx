
import React, { useState } from 'react';
import { UserProgress, Word, ThemeId } from '../types';
import { THEMES, DEFAULT_CSV_DATA } from '../constants';
import { parseCSV, suggestMapping, ColumnMapping } from '../services/csvParser';
import { saveProgress } from '../services/dataManager';

interface TeacherPanelProps {
  progress: UserProgress;
  onImport: (words: Word[]) => void;
}

const TeacherPanel: React.FC<TeacherPanelProps> = ({ progress, onImport }) => {
  const [csvContent, setCsvContent] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>(ThemeId.SchoolLife);
  const [mapping, setMapping] = useState<ColumnMapping>({ english: '', turkish: '', unit: '' });
  const [step, setStep] = useState<1 | 2>(1);
  const [fileName, setFileName] = useState('');

  const handleFileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
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
    if (window.confirm("Tüm ilerlemeyi silip sadece kitaptaki orijinal kelimelere dönmek istediğine emin misin?")) {
      let embeddedWords: Word[] = [];
      THEMES.forEach(theme => {
        const csv = DEFAULT_CSV_DATA[theme.id];
        if (csv) {
          const parsed = parseCSV(csv, theme.id as ThemeId, { english: 'english', turkish: 'turkish', unit: 'unit' });
          embeddedWords = [...embeddedWords, ...parsed];
        }
      });
      const initial = { words: embeddedWords, badges: [] };
      saveProgress(initial);
      window.location.reload();
    }
  };

  const finalizeImport = () => {
    const newWords = parseCSV(csvContent, selectedTheme, mapping);
    onImport(newWords);
    alert(`${newWords.length} kelime başarıyla eklendi!`);
    setStep(1);
    setCsvContent('');
  };

  const exportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progress));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "Ogretmen_Kelimeleri_WM5.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
        <div className="bg-gray-800 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="heading-font text-2xl">Öğretmen Paneli 👩‍🏫</h2>
            <p className="text-gray-400 text-sm italic">Müfredat Kontrol Merkezi</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button 
              onClick={exportData}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center space-x-2 flex-1 border-b-4 border-blue-800"
            >
              <i className="fa-solid fa-download"></i>
              <span>Listeyi Yedekle</span>
            </button>
            <button 
              onClick={resetToFactory}
              className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center space-x-2 flex-1 border-b-4 border-red-800"
            >
              <i className="fa-solid fa-trash-can"></i>
              <span>Sıfırla</span>
            </button>
          </div>
        </div>

        <div className="p-8">
          <div className="bg-green-50 p-5 rounded-2xl mb-8 border border-green-100 text-green-800">
             <h4 className="font-bold mb-2 flex items-center">
               <i className="fa-solid fa-check-double mr-2"></i>
               Gömülü Müfredat Aktif
             </h4>
             <p className="text-sm">Uygulama şu an <b>16 Temanın tamamını</b> ve ÇYD Multi kitabı kelimelerini içeriyor. Öğrencileriniz için ek bir dosya yüklemeniz gerekmez.</p>
          </div>

          {step === 1 ? (
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:border-blue-300 transition-colors">
              <i className="fa-solid fa-plus-circle text-6xl text-gray-200 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Yeni Kelimeler Ekle</h3>
              <p className="text-gray-500 mb-6 text-sm">Mevcut listeye ekleme yapmak isterseniz CSV dosyanızı buraya sürükleyin.</p>
              <input type="file" accept=".csv" onChange={handleFileLoad} className="hidden" id="csv-upload" />
              <label htmlFor="csv-upload" className="bg-gray-700 text-white px-10 py-4 rounded-xl font-bold cursor-pointer hover:bg-gray-800 transition-colors inline-block shadow-md">
                Yeni CSV Seç
              </label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <label className="text-xs font-bold text-gray-400 block mb-2">Hedef Tema</label>
                  <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value as ThemeId)} className="w-full p-2 bg-white rounded-lg border">
                    {THEMES.map(t => <option key={t.id} value={t.id}>{t.titleTr}</option>)}
                  </select>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <label className="text-xs font-bold text-gray-400 block mb-2">İngilizce Başlığı</label>
                  <input type="text" value={mapping.english} onChange={(e) => setMapping({...mapping, english: e.target.value})} className="w-full p-2 rounded-lg border" />
                </div>
              </div>
              <button onClick={finalizeImport} className="w-full bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg border-b-4 border-green-800">Kelimeleri Sisteme Kaydet</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherPanel;
