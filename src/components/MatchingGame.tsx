// TODO: Optimize for mobile
import React, { useState, useEffect } from 'react';
import { checkSuffixHarmony, checkVowelHarmony } from '../utils/vowelHarmony';

const suffixes = ['lar', 'ler', 'da', 'de', 'dan', 'den'];

const levels = [
  { label: 'Easy', words: ['kitap', 'ev', 'araba', 'okul', 'masa', 'sandalye', 'pencere', 'kapı', 'çiçek', 'ağaç'] },
  { label: 'Medium', words: ['bilgisayar', 'telefon', 'televizyon', 'buzdolabı', 'çamaşır', 'makinesi', 'fırın', 'mikrodalga', 'klima', 'lamba'] },
  { label: 'Hard', words: ['çalışkan', 'güzel', 'kırmızı', 'mükemmel', 'harika', 'şaşırtıcı', 'olağanüstü', 'inanılmaz', 'muazzam', 'muhteşem'] },
];

const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const MatchingGame: React.FC = () => {
  const [level, setLevel] = useState(levels[0]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedSuffix, setSelectedSuffix] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setShuffledWords(shuffleArray([...level.words]));
  }, [level]);

  const word = shuffledWords[wordIndex];

  const handleDrop = (suffix: string) => {
    const isHarmonious = checkSuffixHarmony(word, suffix);
    if (isHarmonious) {
      setFeedback('Correct!');
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      const wordVowelType = checkVowelHarmony(word).hasFrontVowels ? 'front' : 'back';
      setFeedback(`Incorrect. The word "${word}" has ${wordVowelType} vowels, so the suffix should match.`);
      setIsCorrect(false);
    }
    setSelectedSuffix(suffix);
  };

  const handleLevelChange = (newLevel: typeof levels[0]) => {
    setLevel(newLevel);
    setShuffledWords(shuffleArray([...newLevel.words]));
    setWordIndex(0);
    setSelectedSuffix(null);
    setFeedback(null);
    setIsCorrect(null);
    setScore(0);
  };

  const handleNextWord = () => {
    if (wordIndex < shuffledWords.length - 1) {
      setWordIndex(wordIndex + 1);
    } else {
      setWordIndex(0); // Loop back to the beginning or handle end of level
    }
    setSelectedSuffix(null);
    setFeedback(null);
    setIsCorrect(null);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Matching Game</h1>
      <div className="mb-4">
        <select onChange={(e) => handleLevelChange(levels[parseInt(e.target.value)])} className="p-2 border border-gray-300 rounded">
          {levels.map((level, index) => (
            <option key={index} value={index}>{level.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <p className="text-2xl">{word}{selectedSuffix && <span className={isCorrect ? 'text-green-500' : 'text-red-500'}>{selectedSuffix}</span>}</p>
      </div>
      <div className="flex flex-wrap justify-center space-x-4">
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
      <div className="mt-4 text-lg h-6">
        {feedback && <p>{feedback}</p>}
      </div>
      <button
        onClick={handleNextWord}
        className={`mt-4 px-4 py-2 rounded ${isCorrect === null ? 'bg-blue-500 hover:bg-blue-600' : isCorrect ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} text-white`}
      >
        Next Word
      </button>
      <div className="mt-4 text-lg">
        <p>Score: {score} / {wordIndex + 1}</p>
      </div>
    </div>
  );
};

export default MatchingGame;