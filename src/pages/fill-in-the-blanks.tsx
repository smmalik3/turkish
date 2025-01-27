import React, { useState } from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

const FillInTheBlanks: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(8).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [language, setLanguage] = useState<'tr' | 'en'>('tr'); // Default language is Turkish


  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const switchLanguage = (lang: 'tr' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-12 bg-gray-100">
      <NavMenu />
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600 p-8">Fill in the Blanks</h1>
      <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-4">
      <div className="mb-4 flex space-x-4 items-center justify-center">
          <button
            onClick={() => switchLanguage('tr')}
            className={`px-4 py-2 rounded-lg ${language === 'tr' ? 'bg-gray-400 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            disabled={language === 'tr'}
          >
            Turkish
          </button>
          <button
            onClick={() => switchLanguage('en')}
            className={`px-4 py-2 rounded-lg ${language === 'en' ? 'bg-gray-400 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            disabled={language === 'en'}
          >
            English
          </button>
        </div>
        <div className="flex flex-col items-center">
          {language === 'tr' ? (
            <p>
              Merhaba, benim adım <input
                type="text"
                value={answers[0]}
                onChange={(e) => handleChange(0, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none"
              />. Ben <input
                type="text"
                value={answers[1]}
                onChange={(e) => handleChange(1, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none"
              /> yaşındayım. En sevdiğim renk <input
                type="text"
                value={answers[2]}
                onChange={(e) => handleChange(2, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none"
              />. Mesleğim <input
                type="text"
                value={answers[3]}
                onChange={(e) => handleChange(3, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none"
              />. Ben <input
                type="text"
                value={answers[4]}
                onChange={(e) => handleChange(4, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none"
              />'de yaşıyorum. Ben <input
                type="text"
                value={answers[5]}
                onChange={(e) => handleChange(5, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none"
              />'den geliyorum. Bugün hava <input
                type="text"
                value={answers[6]}
                onChange={(e) => handleChange(6, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none"
              />. Ailem <input
                type="text"
                value={answers[7]}
                onChange={(e) => handleChange(7, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none"
              />.
            </p> ) : (
            <p>
            Hello, my name is <input
              type="text"
              value={answers[0]}
              onChange={(e) => handleChange(0, e.target.value)}
              className="border-b-2 border-gray-500 focus:outline-none"
            />. I am <input
              type="text"
              value={answers[1]}
              onChange={(e) => handleChange(1, e.target.value)}
              className="border-b-2 border-gray-500 focus:outline-none"
            /> years old. My favorite color is <input
              type="text"
              value={answers[2]}
              onChange={(e) => handleChange(2, e.target.value)}
              className="border-b-2 border-gray-500 focus:outline-none"
            />. My profession is <input
              type="text"
              value={answers[3]}
              onChange={(e) => handleChange(3, e.target.value)}
              className="border-b-2 border-gray-500 focus:outline-none"
            />. I live in <input
              type="text"
              value={answers[4]}
              onChange={(e) => handleChange(4, e.target.value)}
              className="border-b-2 border-gray-500 focus:outline-none"
            />. I come from <input
              type="text"
              value={answers[5]}
              onChange={(e) => handleChange(5, e.target.value)}
              className="border-b-2 border-gray-500 focus:outline-none"
            />. The weather today is <input
              type="text"
              value={answers[6]}
              onChange={(e) => handleChange(6, e.target.value)}
              className="border-b-2 border-gray-500 focus:outline-none"
            />. My family is <input
              type="text"
              value={answers[7]}
              onChange={(e) => handleChange(7, e.target.value)}
              className="border-b-2 border-gray-500 focus:outline-none"
            />.
          </p>
          )}
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
          {isSubmitted && (
            language === 'tr' ? (
              <div className="mt-4">
                <h2 className="text-xl font-bold">Your Responses:</h2>
                <p>Adım: {answers[0]}</p>
                <p>Yaşım: {answers[1]}</p>
                <p>En sevdiğim renk: {answers[2]}</p>
                <p>Mesleğim: {answers[3]}</p>
                <p>Yaşadığım yer: {answers[4]}</p>
                <p>Geldiğim yer: {answers[5]}</p>
                <p>Bugün hava: {answers[6]}</p>
                <p>Ailem: {answers[7]}</p>
              </div>
            ) : (
              <div className="mt-4">
                <h2 className="text-xl font-bold">Your Responses:</h2>
                <p>My name: {answers[0]}</p>
                <p>My age: {answers[1]}</p>
                <p>My favorite color: {answers[2]}</p>
                <p>My profession: {answers[3]}</p>
                <p>Where I live: {answers[4]}</p>
                <p>Where I come from: {answers[5]}</p>
                <p>The weather today: {answers[6]}</p>
                <p>My family: {answers[7]}</p>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FillInTheBlanks;