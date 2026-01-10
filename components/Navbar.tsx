
import React from 'react';

interface NavbarProps {
  onHome: () => void;
  onTeacher: () => void;
  canGoBack: boolean;
  onBack: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome, onTeacher, canGoBack, onBack }) => {
  const handleSelectKey = async () => {
    try {
      if (window.aistudio && window.aistudio.openSelectKey) {
        await window.aistudio.openSelectKey();
      } else {
        alert("API Anahtarı seçme arayüzü bu ortamda desteklenmiyor.");
      }
    } catch (err) {
      console.error("Key selection failed", err);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {canGoBack && (
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <i className="fa-solid fa-arrow-left text-blue-500 text-xl"></i>
          </button>
        )}
        <h1 
          onClick={onHome}
          className="heading-font text-2xl text-blue-600 cursor-pointer select-none"
        >
          Word Master 5
        </h1>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button 
          onClick={handleSelectKey}
          className="text-orange-600 hover:text-orange-700 font-bold text-sm flex items-center space-x-1 bg-orange-50 px-3 py-1.5 rounded-lg transition-colors border border-orange-100"
          title="Ses özelliği için API Anahtarı seçin"
        >
          <i className="fa-solid fa-key"></i>
          <span className="hidden sm:inline">Anahtar Seç</span>
        </button>
        
        <button 
          onClick={onTeacher}
          className="text-gray-600 hover:text-blue-500 font-medium flex items-center space-x-1"
        >
          <i className="fa-solid fa-user-tie"></i>
          <span className="hidden sm:inline">Öğretmen Paneli</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
