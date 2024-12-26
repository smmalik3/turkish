import React, { useState, useEffect } from 'react';
import FlipAnimation from './FlipAnimation';
import translations from '../utils/translations';

interface CardProps {
  language: 'tr' | 'en';
}

interface Translation {
  word: string;
  translation: string;
}

interface Translations {
  [key: string]: Translation[];
}

const Card: React.FC<CardProps> = ({ language }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [wordPair, setWordPair] = useState<Translation>({ word: '', translation: '' });
  const [remainingWords, setRemainingWords] = useState<Translation[]>(translations[language]);
  const [correctWords, setCorrectWords] = useState<Translation[]>([]);
  const [incorrectWords, setIncorrectWords] = useState<Translation[]>([]);

  useEffect(() => {
    setRemainingWords(translations[language]);
    selectRandomWord(translations[language]);
  }, [language]);

  const selectRandomWord = (words: Translation[]) => {
    if (words.length === 0) {
      words = translations[language];
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

  const totalWords = correctWords.length + incorrectWords.length + remainingWords.length;
  const correctPercentage = ((correctWords.length / totalWords) * 100).toFixed(2);
  const incorrectPercentage = ((incorrectWords.length / totalWords) * 100).toFixed(2);
  const progressPercentage = ((remainingWords.length / totalWords) * 100).toFixed(2);

  return (
    <div className="card-container">
      <div className="card" onClick={handleClick}>
        <FlipAnimation isFlipped={isFlipped}>
          <>
            <div className="card-front">
              {wordPair.word}
            </div>
            <div className="card-back">
              {wordPair.translation}
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