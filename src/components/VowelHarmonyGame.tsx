// TODO: Optimize for mobile
import React, { useState } from 'react';
import { checkVowelHarmony } from '../utils/vowelHarmony';
import Footer from './Footer';

const VowelHarmonyGame: React.FC = () => {
  const [words, setWords] = useState<string[]>(['']);
  const [results, setResults] = useState<any[]>([]);
  const [score, setScore] = useState(0);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newWords = [...words];
    newWords[index] = event.target.value;
    setWords(newWords);
  };

  const handleAddWord = () => {
    setWords([...words, '']);
  };

  const handleCheck = () => {
    const newResults = words.map(word => checkVowelHarmony(word));
    setResults(newResults);

    const newScore = newResults.reduce((acc, result) => acc + (result.isHarmonious ? 1 : 0), 0);
    setScore(newScore);
  };

  const getHighlightedWord = (word: string, result: any) => {
    return word.split('').map((char, index) => {
      const vowel = result.vowelPositions.find((v: any) => v.index === index);
      if (vowel) {
        const color = result.isHarmonious ? 'text-green-500' : 'text-red-500';
        return <span key={index} className={color}>{char}</span>;
      }
      return <span key={index}>{char}</span>;
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Vowel Harmony Game</h1>
      {words.map((word, index) => (
        <input
          key={index}
          type="text"
          value={word}
          onChange={(event) => handleInputChange(index, event)}
          className="p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter a Turkish word"
        />
      ))}
      <button onClick={handleAddWord} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4">
        Add Another Word
      </button>
      <button onClick={handleCheck} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Check Vowel Harmony
      </button>
      <div className="mt-4 text-lg">
        <p>Score: {score}</p>
        {results.map((result, index) => (
          <div key={index} className="mt-4">
            <p>{result.isHarmonious ? 'The word follows vowel harmony!' : 'The word does not follow vowel harmony.'}</p>
            <p>Word: {getHighlightedWord(words[index], result)}</p>
            <p>Vowels in the word: {result.vowels.join(', ')}</p>
            <p>Contains front vowels: {result.hasFrontVowels ? 'Yes' : 'No'}</p>
            <p>Contains back vowels: {result.hasBackVowels ? 'Yes' : 'No'}</p>
            <p>Possible options:</p>
            <ul className="list-disc list-inside">
              {result.hasFrontVowels && <li className="text-green-500">Front vowels: e, i, ö, ü</li>}
              {result.hasBackVowels && <li className="text-red-500">Back vowels: a, ı, o, u</li>}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default VowelHarmonyGame;