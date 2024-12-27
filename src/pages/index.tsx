import { useState } from "react";
import NavMenu from "../components/NavMenu";
import Card from "../components/Card";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en'>("tr"); // Default language is Turkish
  const [showImages, setShowImages] = useState(true); // State to toggle between images and words

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <NavMenu />
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Turkish Flashcard Game</h1>
      <div className="mb-6">
        <LanguageSwitcher currentLanguage={language} setLanguage={setLanguage} />
      </div>
      <div className="mb-6 flex items-center">
        <label className="mr-2 text-lg font-medium text-gray-700">Show Images</label>
        <input
          type="checkbox"
          checked={showImages}
          onChange={() => setShowImages(!showImages)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      </div>
      <div className="flex justify-center w-full">
        <div className="max-w-md w-full">
          <Card language={language} showImages={showImages} />
        </div>
      </div>
    </div>
  );
}