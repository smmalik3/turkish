import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import FlipAnimation from './FlipAnimation';
import translations, { Translation }  from '../utils/translations';

interface CardProps {
  language: 'tr' | 'en';
  showImages: boolean;
}

const Card: React.FC<CardProps> = ({ language, showImages }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [wordPair, setWordPair] = useState<Translation>({ word: '', translation: '' });
  const [remainingWords, setRemainingWords] = useState<Translation[]>([]);
  const [correctWords, setCorrectWords] = useState<Translation[]>([]);
  const [incorrectWords, setIncorrectWords] = useState<Translation[]>([]);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['greetings', 'objects', 'animals', 'weather', 'colors', 'food', 'professions', 'emotions', 'adjectives']);

  useEffect(() => {
    const words = selectedCategories.flatMap(category => translations[language][category]);
    setRemainingWords(words);
    selectRandomWord(words);
  }, [language, selectedCategories]);

  const selectRandomWord = (words: Translation[]) => {
    if (words.length === 0) {
      if (isPracticeMode) {
        alert('You have completed practicing the incorrect words.');
        resetApp();
      } else if (incorrectWords.length === 0) {
        alert('Congratulations! You got all the answers correct.');
        resetApp();
      } else {
        const practiceIncorrect = window.confirm('Would you like to practice the words you got incorrect?');
        if (practiceIncorrect) {
          setIsPracticeMode(true);
          setRemainingWords(incorrectWords);
          setCorrectWords([]);
          setIncorrectWords([]);
          selectRandomWord(incorrectWords);
        } else {
          resetApp();
        }
      }
      return;
    }
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    setWordPair(selectedWord);
    setRemainingWords(words.filter((_, index) => index !== randomIndex));
    setIsFlipped(false); // Reset flip state when moving to the next card
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSwipe = (direction: string) => {
    if (direction === 'Left' || direction === 'Right') {
      setIsFlipped(!isFlipped);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('Left'),
    onSwipedRight: () => handleSwipe('Right'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleNextCard = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectWords([...correctWords, wordPair]);
    } else {
      setIncorrectWords([...incorrectWords, wordPair]);
    }
    selectRandomWord(remainingWords);
  };

  const resetApp = () => {
    setIsPracticeMode(false);
    setCorrectWords([]);
    setIncorrectWords([]);
    const words = selectedCategories.flatMap(category => translations[language][category]);
    setRemainingWords(words);
    selectRandomWord(words);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(cat => cat !== category)
        : [...prevCategories, category]
    );
  };

  const totalWords = correctWords.length + incorrectWords.length + remainingWords.length;
  const correctPercentage = ((correctWords.length / totalWords) * 100).toFixed(2);
  const incorrectPercentage = ((incorrectWords.length / totalWords) * 100).toFixed(2);
  const progressPercentage = ((remainingWords.length / totalWords) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="card-container p-4 bg-white shadow-lg rounded-lg">
        <div className="category-selector mb-4">
          <label className="block text-gray-700 font-bold mb-2">Select Categories:</label>
          <div className="flex flex-wrap gap-2">
            {['greetings', 'objects', 'animals', 'weather', 'colors', 'food', 'professions', 'emotions', 'adjectives'].map(category => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => setSelectedCategories(prevCategories =>
                    prevCategories.includes(category)
                      ? prevCategories.filter(cat => cat !== category)
                      : [...prevCategories, category]
                  )}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>
        <div {...swipeHandlers} className="card bg-blue-100 p-4 rounded-lg shadow-md" onClick={handleClick}>
          <FlipAnimation isFlipped={isFlipped}>
            <>
              <div className="card-front flex items-center justify-center h-48">
                {showImages && wordPair.image ? (
                  <img src={wordPair.image} alt={wordPair.word} className="card-image max-h-full" />
                ) : (
                  <span className="text-2xl font-bold">{wordPair.translation}</span>
                )}
              </div>
              <div className="card-back flex items-center justify-center h-48">
                <span className="text-2xl font-bold">{wordPair.word}</span>
              </div>
            </>
          </FlipAnimation>
        </div>
        <div className="mt-4 flex space-x-4">
          <button onClick={() => handleNextCard(true)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Correct</button>
          <button onClick={() => handleNextCard(false)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Incorrect</button>
        </div>

        <div className="stats mt-4">
          <div className="correct text-green-700 font-bold">
            Correct: {correctWords.length} / {totalWords} ({correctPercentage}%)
          </div>
          <div className="incorrect text-red-700 font-bold">
            Incorrect: {incorrectWords.length} / {totalWords} ({incorrectPercentage}%)
          </div>
          <div className="progress-bar bg-gray-200 rounded-full h-4 mt-2">
            <div className="progress bg-blue-500 h-4 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;