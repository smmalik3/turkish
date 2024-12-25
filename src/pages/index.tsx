import { useState } from "react";
import Card from "../components/Card";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const [language, setLanguage] = useState("tr"); // Default language is Turkish

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Flashcard Game</h1>
      <LanguageSwitcher currentLanguage={language} setLanguage={setLanguage} />
      <Card language={language} />
    </div>
  );
}