import React, { useState, useEffect } from 'react';
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['greetings', 'objects', 'animals', 'weather', 'colors', 'food', 'professions', 'emotions']);

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
    <div className="card-container">
      <div className="category-selector">
        <label>Select Categories: </label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('greetings')}
              onChange={() => handleCategoryChange('greetings')}
            />
            Greetings
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('objects')}
              onChange={() => handleCategoryChange('objects')}
            />
            Objects
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('animals')}
              onChange={() => handleCategoryChange('animals')}
            />
            Animals
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('weather')}
              onChange={() => handleCategoryChange('weather')}
            />
            Weather
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('emotions')}
              onChange={() => handleCategoryChange('emotions')}
            />
            Emotions
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('colors')}
              onChange={() => handleCategoryChange('colors')}
            />
            Colors
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('food')}
              onChange={() => handleCategoryChange('food')}
            />
            Food
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategories.includes('professions')}
              onChange={() => handleCategoryChange('professions')}
            />
            Professions
          </label>
        </div>
      </div>
      <div className="card" onClick={handleClick}>
        <FlipAnimation isFlipped={isFlipped}>
          <>
            <div className="card-front">
              {showImages && wordPair.image ? (
                <img src={wordPair.image} alt={wordPair.word} className="card-image" />
              ) : (
                <span>{wordPair.translation}</span>
              )}
            </div>
            <div className="card-back">
              {wordPair.word}
            </div>
          </>
        </FlipAnimation>
      </div>
      <button onClick={() => handleNextCard(true)}>Correct</button>
      <button onClick={() => handleNextCard(false)}>Incorrect</button>

      <div className="stats">
        <div className="correct">
          Correct: {correctWords.length} / {totalWords} ({correctPercentage}%)
        </div>
        <div className="incorrect">
          Incorrect: {incorrectWords.length} / {totalWords} ({incorrectPercentage}%)
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Card;