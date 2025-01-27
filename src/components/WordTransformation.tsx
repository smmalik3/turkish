// TODO: Optimize for mobile
import React, { useState } from 'react';
import { checkSuffixHarmony, checkVowelHarmony } from '../utils/vowelHarmony';
import Footer from './Footer';

// Predefined dictionary for translations
const dictionary: { [key: string]: string } = {
  kitap: 'book',
  ev: 'house',
  araba: 'car',
  okul: 'school',
  masa: 'table',
  sandalye: 'chair',
  pencere: 'window',
  kapı: 'door',
  çiçek: 'flower',
  ağaç: 'tree',
  bilgisayar: 'computer',
  telefon: 'phone',
  televizyon: 'television',
  buzdolabı: 'refrigerator',
  çamaşır: 'laundry',
  makinesi: 'machine',
  fırın: 'oven',
  mikrodalga: 'microwave',
  klima: 'air conditioner',
  lamba: 'lamp',
  çalışkan: 'diligent',
  güzel: 'beautiful',
  kırmızı: 'red',
  mükemmel: 'perfect',
  harika: 'wonderful',
  şaşırtıcı: 'surprising',
  olağanüstü: 'extraordinary',
  inanılmaz: 'incredible',
  muazzam: 'tremendous',
  muhteşem: 'magnificent',
};

const transformations = [
  { label: 'Plural', suffixes: ['lar', 'ler'] },
  { label: 'Locative', suffixes: ['da', 'de'] },
  { label: 'Ablative', suffixes: ['dan', 'den'] },
];

const words = Object.keys(dictionary);

const WordTransformation: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedSuffix, setSelectedSuffix] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const word = words[wordIndex];

  const handleTransformation = (suffix: string) => {
    const isHarmonious = checkSuffixHarmony(word, suffix);
    if (isHarmonious) {
      setFeedback('Correct!');
      setIsCorrect(true);
    } else {
      const wordVowelType = checkVowelHarmony(word).hasFrontVowels ? 'front' : 'back';
      setFeedback(`Incorrect. The word "${word}" has ${wordVowelType} vowels, so the suffix should match.`);
      setIsCorrect(false);
    }
    setSelectedSuffix(suffix);
  };

  const handleNextWord = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex(wordIndex + 1);
    } else {
      setWordIndex(0); // Loop back to the beginning
    }
    setSelectedSuffix(null);
    setFeedback(null);
    setIsCorrect(null);
  };

  const getTranslation = () => {
    const baseWord = word.split(/lar|ler|da|de|dan|den/)[0];
    const baseTranslation = dictionary[baseWord] || 'Translation not found';
    if (!selectedSuffix) return baseTranslation;

    switch (selectedSuffix) {
      case 'lar':
      case 'ler':
        return `${baseTranslation}s`; // Plural
      case 'da':
      case 'de':
        return `in the ${baseTranslation}`; // Locative
      case 'dan':
      case 'den':
        return `from the ${baseTranslation}`; // Ablative
      default:
        return baseTranslation;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Word Transformation</h1>
      <select
        value={word || ''}
        onChange={(e) => setWordIndex(words.indexOf(e.target.value))}
        className="p-2 border border-gray-300 rounded mb-4"
      >
        <option value="" disabled>Select a word</option>
        {words.map((word) => (
          <option key={word} value={word}>{word}</option>
        ))}
      </select>
      <div className="mb-4 flex justify-center h-10">
        <p className="text-2xl">{word}{selectedSuffix && <span className={isCorrect ? 'text-green-500' : 'text-red-500'}>{selectedSuffix}</span>}</p>
      </div>
      <p className="text-lg text-gray-600 mb-4 h-6">Translation: {getTranslation()}</p>
      <div className="flex flex-wrap justify-center space-x-4">
        {transformations.map(transformation => (
          <div key={transformation.label} className="flex flex-col items-center">
            <p className="mb-2">{transformation.label}</p>
            {transformation.suffixes.map(suffix => (
              <button
                key={suffix}
                className="p-2 bg-blue-500 text-white rounded mb-2"
                onClick={() => handleTransformation(suffix)}
                disabled={!word}
              >
                {suffix}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 text-lg h-6">
        {feedback && <p>{feedback}</p>}
      </div>
      <button
        onClick={handleNextWord}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next Word
      </button>
      <Footer />
    </div>
  );
};

export default WordTransformation;