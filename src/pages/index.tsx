import { useState } from "react";
import NavMenu from "../components/NavMenu";
import Card from "../components/Card";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en'>("tr"); // Default language is Turkish
  const [showImages, setShowImages] = useState(true); // State to toggle between images and words

  return (
    <div>
      <NavMenu />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pt-20 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Turkish Flashcard Game</h1>
        <div className="mb-6">
          <LanguageSwitcher currentLanguage={language} setLanguage={setLanguage} />
        </div>
        <div className="mb-6 flex items-center">
          {/* <label className="mr-2 text-lg font-medium text-gray-700">Show Images</label>
          <input
            type="checkbox"
            checked={showImages}
            onChange={() => setShowImages(!showImages)}
            className="form-checkbox h-5 w-5 text-blue-600"
          /> */}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showImages}
              onChange={() => setShowImages(!showImages)}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Images</span>
          </label>
        </div>
        <div className="flex justify-center w-full">
          <div className="max-w-md w-full">
            <Card language={language} showImages={showImages} />
          </div>
        </div>
      </div>
    </div>
  );
}