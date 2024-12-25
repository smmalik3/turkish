import React, { useState, useEffect } from 'react';
import FlipAnimation from './FlipAnimation';
import translations from '../utils/translations';

interface CardProps {
  language: string;
}

const Card: React.FC<CardProps> = ({ language }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [wordPair, setWordPair] = useState({ word: '', translation: '' });
  const [remainingWords, setRemainingWords] = useState(translations[language]);
  const [correctWords, setCorrectWords] = useState([]);
  const [incorrectWords, setIncorrectWords] = useState([]);

  useEffect(() => {
    setRemainingWords(translations[language]);
    selectRandomWord(translations[language]);
  }, [language]);

  const selectRandomWord = (words) => {
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

  const handleNextCard = (isCorrect) => {
    if (isCorrect) {
      setCorrectWords([...correctWords, wordPair]);
    } else {
      setIncorrectWords([...incorrectWords, wordPair]);
    }
    selectRandomWord(remainingWords);
  };

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
      <button onClick={() => handleNextCard(true)} className="next-button">
        Got it Right
      </button>
      <button onClick={() => handleNextCard(false)} className="next-button">
        Got it Wrong
      </button>
    </div>
  );
};

export default Card;