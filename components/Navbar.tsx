
import React from 'react';

interface NavbarProps {
  onHome: () => void;
  canGoBack: boolean;
  onBack: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome, canGoBack, onBack }) => {
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
        <div className="text-blue-500 font-bold text-sm hidden sm:flex items-center space-x-1 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
          <i className="fa-solid fa-graduation-cap"></i>
          <span>5. Sınıf İngilizce</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
