import React from 'react';

interface NavbarProps {
  onHome: () => void;
  canGoBack: boolean;
  onBack: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome, canGoBack, onBack }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40 px-4 py-3 flex justify-between items-center border-b border-slate-100">
      <div className="flex items-center space-x-2">
        {canGoBack && (
          <button 
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors active:scale-90"
            aria-label="Geri Dön"
          >
            <i className="fa-solid fa-chevron-left text-blue-500 text-lg"></i>
          </button>
        )}
        <h1 
          onClick={onHome}
          className="heading-font text-xl sm:text-2xl text-blue-600 cursor-pointer select-none truncate max-w-[180px] sm:max-w-none"
        >
          Word Master 5
        </h1>
      </div>
      
      <div className="flex items-center">
        <div className="bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100 flex items-center space-x-1 shadow-sm">
          <i className="fa-solid fa-graduation-cap text-blue-500 text-xs sm:text-sm"></i>
          <span className="text-blue-600 font-bold text-[10px] sm:text-xs uppercase tracking-tight">5. Sınıf</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;