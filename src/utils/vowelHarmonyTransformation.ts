import React, { useState } from 'react';
import { checkVowelHarmony } from '../utils/vowelHarmony';

const transformations = [
  { label: 'Plural', suffix: 'lar/ler' },
  { label: 'Locative', suffix: 'da/de' },
  { label: 'Ablative', suffix: 'dan/den' },
];

const WordTransformation: React.FC = () => {
  const [word, setWord] = useState('kitap');
  const [selectedTransformation, setSelectedTransformation] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleTransformation = (suffix: string) => {
    const fullWord = word + suffix;
    const result = checkVowelHarmony(fullWord);
    if (result.isHarmonious) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Try again.');
    }
    setSelectedTransformation(suffix);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Word Transformation</h1>
      <div className="mb-4">
        <p className="text-2xl">{word}{selectedTransformation && <span className="text-green-500">{selectedTransformation}</span>}</p>
      </div>
      <div className="flex space-x-4">
        {transformations.map(transformation => (
          <button
            key={transformation.label}
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleTransformation(transformation.suffix)}
          >
            {transformation.label}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-4 text-lg">{feedback}</p>}
    </div>
  );
};

export default WordTransformation;