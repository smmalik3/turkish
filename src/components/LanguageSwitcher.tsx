import React from 'react';

interface LanguageSwitcherProps {
  currentLanguage: 'tr' | 'en';
  setLanguage: (language: 'tr' | 'en') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, setLanguage }) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => setLanguage('tr')}
        className={`px-4 py-2 rounded ${currentLanguage === 'tr' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600`}
      >
        Turkish
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded ${currentLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;