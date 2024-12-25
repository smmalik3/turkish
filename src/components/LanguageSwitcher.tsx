import React from 'react';

interface LanguageSwitcherProps {
  currentLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, setLanguage }) => {

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select" className="mr-2">Select Language:</label>
      <select id="language-select" value={currentLanguage} onChange={handleLanguageChange}>
        <option value="tr">Turkish</option>
        <option value="en">English</option>
        {/* <option value="es">Spanish</option> */}
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSwitcher;