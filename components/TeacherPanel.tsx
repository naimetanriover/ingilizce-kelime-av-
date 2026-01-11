
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
    alert(`${newWords.length} kelime başarıyla eklendi! Şimdi "Listeyi Dışa Aktar" butonuna basarak öğrencilerinizle paylaşacağınız dosyayı indirebilirsiniz.`);
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
    alert("Dosya indirildi! Bu '.json' dosyasını öğrencilerinize gönderin. Onlar uygulamadaki 'Öğretmen Listesini Yükle' butonunu kullanarak bu dosyayı açacaklar.");
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
        <div className="bg-gray-800 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="heading-font text-2xl">Öğretmen Paneli 👩‍🏫</h2>
            <p className="text-gray-400 text-sm italic">CSV yükleyin, JSON olarak öğrencilere dağıtın.</p>
          </div>
          <button 
            onClick={exportData}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center space-x-2 w-full md:w-auto justify-center border-b-4 border-blue-800"
          >
            <i className="fa-solid fa-share-nodes"></i>
            <span>Paylaşım Dosyasını Hazırla</span>
          </button>
        </div>

        <div className="p-8">
          <div className="bg-blue-50 p-4 rounded-2xl mb-8 border border-blue-100 text-blue-800 text-sm">
             <h4 className="font-bold mb-1"><i className="fa-solid fa-lightbulb mr-2"></i>Nasıl Yapılır?</h4>
             <ol className="list-decimal list-inside space-y-1 ml-2">
               <li>Elinizdeki CSV dosyasını seçin.</li>
               <li>Kelimelerin hangi tema altına ekleneceğini belirleyin.</li>
               <li>"İçe Aktar" deyin.</li>
               <li>Yukarıdaki "Paylaşım Dosyasını Hazırla" butonuyla indireceğiniz dosyayı öğrencilere gönderin.</li>
             </ol>
          </div>

          {step === 1 ? (
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:border-blue-300 transition-colors">
              <i className="fa-solid fa-file-csv text-6xl text-gray-200 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">CSV Kelime Listesi Yükle</h3>
              <p className="text-gray-500 mb-6 text-sm">Excel'den kaydettiğiniz CSV dosyasını buraya ekleyin.</p>
              <input 
                type="file" 
                accept=".csv" 
                onChange={handleFileLoad} 
                className="hidden" 
                id="csv-upload" 
              />
              <label 
                htmlFor="csv-upload"
                className="bg-gray-700 text-white px-10 py-4 rounded-xl font-bold cursor-pointer hover:bg-gray-800 transition-colors inline-block shadow-md"
              >
                Bilgisayardan Seç
              </label>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center space-x-2 text-green-600 font-bold mb-4 bg-green-50 p-3 rounded-xl">
                <i className="fa-solid fa-check-circle"></i>
                <span>{fileName} okundu! Şimdi eşleştirelim:</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Tema Seçimi</label>
                  <select 
                    value={selectedTheme}
                    onChange={(e) => setSelectedTheme(e.target.value as ThemeId)}
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                  >
                    {THEMES.map(t => <option key={t.id} value={t.id}>{t.titleTr}</option>)}
                  </select>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">İngilizce Sütun Başlığı</label>
                  <input 
                    type="text" 
                    value={mapping.english}
                    onChange={(e) => setMapping({...mapping, english: e.target.value})}
                    placeholder="örn: english"
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Türkçe Sütun Başlığı</label>
                  <input 
                    type="text" 
                    value={mapping.turkish}
                    onChange={(e) => setMapping({...mapping, turkish: e.target.value})}
                    placeholder="örn: turkish"
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Ünite (Varsa)</label>
                  <input 
                    type="text" 
                    value={mapping.unit}
                    onChange={(e) => setMapping({...mapping, unit: e.target.value})}
                    placeholder="örn: unit"
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button 
                  onClick={finalizeImport}
                  className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold flex-1 hover:bg-green-700 transition-colors shadow-lg border-b-4 border-green-800"
                >
                  Kelimeleri Sisteme Kaydet
                </button>
                <button 
                  onClick={() => setStep(1)}
                  className="bg-gray-200 text-gray-700 px-6 py-4 rounded-2xl font-bold hover:bg-gray-300 transition-colors"
                >
                  İptal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="heading-font text-xl text-gray-800 mb-6">Sistemdeki Kelime Sayıları</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {THEMES.map(theme => {
            const count = progress.words.filter(w => w.themeId === theme.id).length;
            return (
              <div key={theme.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${theme.color.replace('bg-', 'bg-opacity-20 text-').replace('text-', 'text-')}`}>
                     <i className={`fa-solid ${theme.icon} text-xl`}></i>
                  </div>
                  <span className="font-bold text-gray-700">{theme.titleTr}</span>
                </div>
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
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
