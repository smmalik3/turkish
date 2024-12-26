import { useState } from "react";
import Card from "../components/Card";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en'>("tr"); // Default language is Turkish
  const [showImages, setShowImages] = useState(true); // State to toggle between images and words

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Turkish Flashcard Game</h1>
      <LanguageSwitcher currentLanguage={language} setLanguage={setLanguage} />
      <div className="mb-4">
        <label className="mr-2">Show Images</label>
        <input
          type="checkbox"
          checked={showImages}
          onChange={() => setShowImages(!showImages)}
        />
      </div>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card language={language} showImages={showImages} />
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
}