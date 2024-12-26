import React, { useState, useEffect } from 'react';
import FlipAnimation from './FlipAnimation';
import translations from '../utils/translations';

interface CardProps {
  language: 'tr' | 'en';
  showImages: boolean;
}

interface Translation {
  word: string;
  translation: string;
  image?: string; // Make image optional
}

interface Translations {
  [key: string]: Translation[];
}

const Card: React.FC<CardProps> = ({ language, showImages }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [wordPair, setWordPair] = useState<Translation>({ word: '', translation: '' });
  const [remainingWords, setRemainingWords] = useState<Translation[]>(translations[language]);
  const [correctWords, setCorrectWords] = useState<Translation[]>([]);
  const [incorrectWords, setIncorrectWords] = useState<Translation[]>([]);
  const [isPracticeMode, setIsPracticeMode] = useState(false);

  useEffect(() => {
    setRemainingWords(translations[language]);
    selectRandomWord(translations[language]);
  }, [language]);

  const selectRandomWord = (words: Translation[]) => {
    if (words.length === 0) {
      if (isPracticeMode) {
        alert('You have completed practicing the incorrect words.');
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
    setRemainingWords(translations[language]);
    selectRandomWord(translations[language]);
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