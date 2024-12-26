import React from 'react';

interface LanguageSwitcherProps {
  currentLanguage: 'tr' | 'en';
  setLanguage: React.Dispatch<React.SetStateAction<'tr' | 'en'>>;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, setLanguage }) => {
  return (
    <div>
      <button onClick={() => setLanguage('tr')} disabled={currentLanguage === 'tr'}>
        Turkish
      </button>
      <button onClick={() => setLanguage('en')} disabled={currentLanguage === 'en'}>
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;