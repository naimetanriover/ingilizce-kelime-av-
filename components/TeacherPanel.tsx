
import React, { useState } from 'react';
import { UserProgress, Word, ThemeId } from '../types';
import { THEMES } from '../constants';
import { parseCSV, suggestMapping, ColumnMapping } from '../services/csvParser';

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

        // Auto-select theme based on file name if possible
        const lowerName = file.name.toLowerCase();
        if (lowerName.includes('okul') || lowerName.includes('school')) setSelectedTheme(ThemeId.SchoolLife);
        else if (lowerName.includes('sinif') || lowerName.includes('classroom')) setSelectedTheme(ThemeId.ClassroomLife);
        else if (lowerName.includes('kisi') || lowerName.includes('personal')) setSelectedTheme(ThemeId.PersonalLife);
        else if (lowerName.includes('aile') || lowerName.includes('family')) setSelectedTheme(ThemeId.FamilyLife);
        else if (lowerName.includes('sehir') || lowerName.includes('city') || lowerName.includes('neighbour')) setSelectedTheme(ThemeId.NeighbourhoodCity);
        else if (lowerName.includes('dunya') || lowerName.includes('world')) setSelectedTheme(ThemeId.LifeInTheWorld);
      };
      reader.readAsText(file);
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
    downloadAnchorNode.setAttribute("download", "word_master_5_progress.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    alert("Liste hazır! Bu dosyayı öğrencilerinize gönderin, onlar da 'Öğretmen Listesini Yükle' butonunu kullanarak yüklesinler.");
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
        <div className="bg-gray-800 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="heading-font text-2xl">Öğretmen Paneli</h2>
            <p className="text-gray-400 text-sm">Kelime listelerini yönet ve ilerlemeyi izle.</p>
          </div>
          <button 
            onClick={exportData}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
          >
            <i className="fa-solid fa-share-nodes mr-2"></i> Listeyi Dışa Aktar & Paylaş
          </button>
        </div>

        <div className="p-8">
          {step === 1 ? (
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center">
              <i className="fa-solid fa-file-csv text-5xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">CSV Dosyası Yükle</h3>
              <p className="text-gray-500 mb-6 text-sm">Kelimeleri toplu olarak sisteme aktarmak için bir dosya seç.</p>
              <input 
                type="file" 
                accept=".csv" 
                onChange={handleFileLoad} 
                className="hidden" 
                id="csv-upload" 
              />
              <label 
                htmlFor="csv-upload"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold cursor-pointer hover:bg-blue-700 transition-colors inline-block"
              >
                Dosya Seç
              </label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-green-600 font-bold mb-4">
                <i className="fa-solid fa-check-circle"></i>
                <span>{fileName} yüklendi. Eşleştirme yapalım:</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tema Seç</label>
                  <select 
                    value={selectedTheme}
                    onChange={(e) => setSelectedTheme(e.target.value as ThemeId)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {THEMES.map(t => <option key={t.id} value={t.id}>{t.titleTr}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">İngilizce Sütunu</label>
                  <input 
                    type="text" 
                    value={mapping.english}
                    onChange={(e) => setMapping({...mapping, english: e.target.value})}
                    placeholder="örn: english"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Türkçe Sütunu</label>
                  <input 
                    type="text" 
                    value={mapping.turkish}
                    onChange={(e) => setMapping({...mapping, turkish: e.target.value})}
                    placeholder="örn: turkish"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Ünite Sütunu (İsteğe Bağlı)</label>
                  <input 
                    type="text" 
                    value={mapping.unit}
                    onChange={(e) => setMapping({...mapping, unit: e.target.value})}
                    placeholder="örn: unit"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button 
                  onClick={finalizeImport}
                  className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold flex-1 hover:bg-green-700 transition-colors"
                >
                  Kelimeleri İçe Aktar
                </button>
                <button 
                  onClick={() => setStep(1)}
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition-colors"
                >
                  İptal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="heading-font text-xl text-gray-800 mb-6">Mevcut Veriler</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {THEMES.map(theme => {
            const count = progress.words.filter(w => w.themeId === theme.id).length;
            return (
              <div key={theme.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <i className={`fa-solid ${theme.icon} ${theme.color.replace('bg-', 'text-')} text-xl`}></i>
                  <span className="font-bold text-gray-700">{theme.titleTr}</span>
                </div>
                <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-lg">
                  {count} Kelime
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeacherPanel;
