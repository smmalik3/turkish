import React, { useState, useEffect, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import NavMenu from '../components/NavMenu';

interface Word {
  id: number;
  turkish: string;
  english: string;
  image: string;
}

const words: Word[] = [
  { id: 1, turkish: 'Merhaba', english: 'Hello', image: '/images/hello.png' },
  { id: 2, turkish: 'Kitap', english: 'Book', image: '/images/book.png' },
  { id: 3, turkish: 'Kedi', english: 'Cat', image: '/images/cat.png' },
  { id: 4, turkish: 'Araba', english: 'Car', image: '/images/car.png' },
  { id: 5, turkish: 'Ev', english: 'House', image: '/images/house.png' },
  { id: 6, turkish: 'Okul', english: 'School', image: '/images/school.png' },
  { id: 7, turkish: 'Elma', english: 'Apple', image: '/images/apple.png' },
  { id: 8, turkish: 'Bilgisayar', english: 'Computer', image: '/images/computer.png' },
  { id: 9, turkish: 'Telefon', english: 'Phone', image: '/images/phone.png' },
];

const ItemTypes = {
  WORD: 'word',
};

interface DraggableWordProps {
  word: Word;
  type: 'turkish' | 'image';
  isMatched: boolean;
}

const DraggableWord: React.FC<DraggableWordProps> = ({ word, type, isMatched }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.WORD,
    item: { id: word.id, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      className={`p-2 m-2 rounded cursor-pointer ${isDragging ? 'opacity-50' : 'opacity-100'} ${isMatched ? 'bg-gray-400 text-gray-700' : 'bg-blue-500 text-white'}`}
    >
      {type === 'turkish' ? word.turkish : <img src={word.image} alt={word.english} className="h-16 w-16" />}
    </div>
  );
};

interface DroppableAreaProps {
  word: Word;
  onDrop: (item: { id: number; type: string }, targetWord: Word) => void;
  isCorrect: boolean | null;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ word, onDrop, isCorrect }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WORD,
    drop: (item: { id: number; type: string }) => onDrop(item, word),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  drop(ref);

  return (
    <div
      ref={ref}
      className={`p-4 m-2 border-2 border-dashed rounded ${isOver ? 'border-green-500' : isCorrect === null ? 'border-gray-500' : isCorrect ? 'border-green-500' : 'border-red-500'}`}
    >
      {word.english}
    </div>
  );
};

const MatchingGame: React.FC = () => {
  const [matchedWords, setMatchedWords] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ [key: number]: boolean | null }>({});
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
  const [gameOver, setGameOver] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !gameComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameComplete]);

  useEffect(() => {
    if (matchedWords.length === words.length) {
      setGameComplete(true);
    }
  }, [matchedWords]);

  const handleDrop = (item: { id: number; type: string }, targetWord: Word) => {
    if (item.id === targetWord.id) {
      setMatchedWords([...matchedWords, targetWord.id]);
      setFeedback({ ...feedback, [targetWord.id]: true });
    } else {
      setFeedback({ ...feedback, [targetWord.id]: false });
    }
  };

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  return (
    <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <NavMenu />
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Turkish Matching Game</h1>
        <div className="text-2xl font-bold mb-6 text-center text-red-600">Time Left: {timeLeft}s</div>
        {gameOver ? (
          <div className="text-2xl font-bold text-center text-red-600">Time's up! Game Over.</div>
        ) : gameComplete ? (
          <div className="text-2xl font-bold text-center text-green-600">Congratulations! You've matched all the words!</div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center mb-6">
              {words.map((word) => (
                <DraggableWord key={word.id} word={word} type="turkish" isMatched={matchedWords.includes(word.id)} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center">
              {words.map((word) => (
                <DroppableArea key={word.id} word={word} onDrop={handleDrop} isCorrect={feedback[word.id]} />
              ))}
            </div>
          </>
        )}
        <div className="mt-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-600">Matched Words</h2>
          <ul className="list-disc list-inside">
            {matchedWords.map((id) => {
              const word = words.find((w) => w.id === id);
              return <li key={id} className="text-lg text-gray-700">{word?.turkish} - {word?.english}</li>;
            })}
          </ul>
        </div>
      </div>
    </DndProvider>
  );
};

export default MatchingGame;