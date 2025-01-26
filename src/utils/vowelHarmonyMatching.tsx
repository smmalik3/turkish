import React, { useState } from 'react';
import { checkVowelHarmony } from './vowelHarmony';

const suffixes = ['lar', 'ler', 'da', 'de', 'dan', 'den'];

const MatchingGame: React.FC = () => {
  const [word, setWord] = useState('kitap');
  const [selectedSuffix, setSelectedSuffix] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleDrop = (suffix: string) => {
    const fullWord = word + suffix;
    const result = checkVowelHarmony(fullWord);
    if (result.isHarmonious) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Try again.');
    }
    setSelectedSuffix(suffix);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Vowel Harmony Matching Game</h1>
      <div className="mb-4">
        <p className="text-2xl">{word}{selectedSuffix && <span className="text-green-500">{selectedSuffix}</span>}</p>
      </div>
      <div className="flex space-x-4">
        {suffixes.map(suffix => (
          <div
            key={suffix}
            className="p-2 bg-blue-500 text-white rounded cursor-pointer"
            draggable
            onDragEnd={() => handleDrop(suffix)}
          >
            {suffix}
          </div>
        ))}
      </div>
      {feedback && <p className="mt-4 text-lg">{feedback}</p>}
    </div>
  );
};

export default MatchingGame;