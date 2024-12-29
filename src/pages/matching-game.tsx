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

const initialWords: Word[] = [
  { id: 1, turkish: 'Merhaba', english: 'Hello', image: '/images/merhaba.png' },
  { id: 2, turkish: 'Kitap', english: 'Book', image: '/images/kitap.png' },
  { id: 3, turkish: 'Kedi', english: 'Cat', image: '/images/kedi.png' },
  { id: 4, turkish: 'Araba', english: 'Car', image: '/images/araba.jpg' },
  { id: 5, turkish: 'Ev', english: 'House', image: '/images/ev.png' },
  { id: 6, turkish: 'Okul', english: 'School', image: '/images/okul.png' },
  { id: 7, turkish: 'Elma', english: 'Apple', image: '/images/elma.jpg' },
  { id: 8, turkish: 'Bilgisayar', english: 'Computer', image: '/images/bilgisayar.png' },
  { id: 9, turkish: 'Telefon', english: 'Phone', image: '/images/telefon.png' },
  { id: 10, turkish: 'Masa', english: 'Table', image: '/images/masa.png' },
  { id: 11, turkish: 'Sandalye', english: 'Chair', image: '/images/sandalye.png' },
  { id: 12, turkish: 'Kalem', english: 'Pen', image: '' },
  { id: 13, turkish: 'Defter', english: 'Notebook', image: '' },
  { id: 14, turkish: 'Çanta', english: 'Bag', image: '' },
  { id: 15, turkish: 'Ayakkabı', english: 'Shoe', image: '' },
  { id: 16, turkish: 'Gözlük', english: 'Glasses', image: '' },
  { id: 17, turkish: 'Şapka', english: 'Hat', image: '' },
  { id: 18, turkish: 'Saat', english: 'Watch', image: '' },
  { id: 19, turkish: 'Bardak', english: 'Glass', image: '' },
  { id: 20, turkish: 'Tabak', english: 'Plate', image: '' },
  { id: 21, turkish: 'Kaşık', english: 'Spoon', image: '' },
  { id: 22, turkish: 'Çatal', english: 'Fork', image: '' },
  { id: 23, turkish: 'Bıçak', english: 'Knife', image: '' },
  { id: 24, turkish: 'Televizyon', english: 'Television', image: '' },
  { id: 25, turkish: 'Bilgisayar', english: 'Computer', image: '/images/bilgisayar.png' },
  { id: 26, turkish: 'Klavye', english: 'Keyboard', image: '' },
  { id: 27, turkish: 'Fare', english: 'Mouse', image: '' },
  { id: 28, turkish: 'Kulaklık', english: 'Headphones', image: '' },
  { id: 29, turkish: 'Mikrofon', english: 'Microphone', image: '' },
  { id: 30, turkish: 'Hoparlör', english: 'Speaker', image: '' },
  { id: 31, turkish: 'Pembe', english: 'Pink', image: '/images/pembe.png' },
  { id: 32, turkish: 'Yeşil', english: 'Green', image: '/images/yeşil.png' },
  { id: 33, turkish: 'Siyah', english: 'Black', image: '/images/siyah.png' },
  { id: 34, turkish: 'Beyaz', english: 'White', image: '/images/beyaz.jpg' },
  { id: 35, turkish: 'Mor', english: 'Purple', image: '/images/mor.png' },
  { id: 36, turkish: 'Sarı', english: 'Yellow', image: '/images/sarı.png' },
  { id: 37, turkish: 'Gri', english: 'Gray', image: '/images/gri.png' },
  { id: 38, turkish: 'Mavi', english: 'Blue', image: '/images/mavi.png' },
  { id: 39, turkish: 'Kırmızı', english: 'Red', image: '/images/kırmızı.png' },
  { id: 40, turkish: 'Deniz', english: 'Sea', image: '/images/deniz.jpg' },
  { id: 41, turkish: 'Güneş', english: 'Sun', image: '/images/güneş.jpg' },
  { id: 42, turkish: 'Ay', english: 'Moon', image: '/images/ay.png' },
  { id: 43, turkish: 'Yıldız', english: 'Star', image: '/images/yıldız.png' },
  { id: 44, turkish: 'Bulut', english: 'Cloud', image: '/images/bulut.jpeg' },
  { id: 45, turkish: 'Köpek', english: 'Dog', image: '/images/köpek.png' },
  { id: 46, turkish: 'Pencere', english: 'Window', image: '/images/pencere.png' },
  { id: 47, turkish: 'Kapı', english: 'Door', image: '/images/kapı.png' },
  { id: 48, turkish: 'Çiçek', english: 'Flower', image: '/images/çiçek.png' },
  { id: 49, turkish: 'Ağaç', english: 'Tree', image: '/images/ağaç.png' },
  { id: 50, turkish: 'Kahverengi', english: 'Brown', image: '/images/kahverengi.png' },
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
      {word.turkish}
    </div>
  );
};

interface DroppableAreaProps {
  word: Word;
  onDrop: (item: { id: number; type: string }, targetWord: Word) => void;
  isCorrect: boolean | null;
  showImages: boolean;
}

const DroppableArea: React.FC<DroppableAreaProps> = ({ word, onDrop, isCorrect, showImages }) => {
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
      className={`p-4 m-2 border-2 border-dashed rounded bg-white ${isOver ? 'border-green-500' : isCorrect === null ? 'border-gray-500' : isCorrect ? 'border-green-500' : 'border-red-500'}`}
    >
      {showImages && word.image ? (
        <img src={word.image} alt={word.english} className="h-16 w-16 object-contain" />
      ) : (
        <span className="text-lg">{word.english}</span>
      )}
    </div>
  );
};

const shuffleArray = (array: Word[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MatchingGame: React.FC = () => {
  const [draggableWords, setDraggableWords] = useState<Word[]>([]);
  const [droppableWords, setDroppableWords] = useState<Word[]>([]);
  const [matchedWords, setMatchedWords] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ [key: number]: boolean | null }>({});
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer
  const [gameOver, setGameOver] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [showImages, setShowImages] = useState(true);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [selectedTime, setSelectedTime] = useState(60);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
    setDraggableWords(shuffleArray(initialWords));
    setDroppableWords(shuffleArray(initialWords));
  }, []);

  useEffect(() => {
    if (timerEnabled && timeLeft > 0 && !gameComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameComplete, timerEnabled]);

  useEffect(() => {
    if (matchedWords.length === draggableWords.length && draggableWords.length > 0) {
      setGameComplete(true);
    }
  }, [matchedWords, draggableWords.length]);

  const handleDrop = (item: { id: number; type: string }, targetWord: Word) => {
    if (item.id === targetWord.id) {
      setMatchedWords([...matchedWords, targetWord.id]);
      setFeedback({ ...feedback, [targetWord.id]: true });
    } else {
      setFeedback({ ...feedback, [targetWord.id]: false });
    }
  };

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  const handleTimerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimerEnabled(event.target.checked);
    if (!event.target.checked) {
      setTimeLeft(selectedTime);
    }
  };

  const handleTimeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const time = parseInt(event.target.value, 10);
    setSelectedTime(time);
    setTimeLeft(time);
  };

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 pt-20">
        <NavMenu />
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Turkish Matching Game</h1>
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={timerEnabled}
            onChange={handleTimerChange}
            className="mr-2"
          />
          <label className="mr-4">Enable Timer</label>
          <select
            value={selectedTime}
            onChange={handleTimeSelect}
            disabled={!timerEnabled}
            className="px-2 py-1 border rounded"
          >
            <option value={30}>30s</option>
            <option value={60}>60s</option>
            <option value={90}>90s</option>
            <option value={120}>120s</option>
          </select>
        </div>
        {timerEnabled && (
          <div className="text-2xl font-bold mb-6 text-center text-red-600">Time Left: {timeLeft}s</div>
        )}
        <button
          onClick={toggleImages}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {showImages ? 'Hide Images' : 'Show Images'}
        </button>
        {gameOver ? (
          <div className="text-2xl font-bold text-center text-red-600">Time's up! Game Over.</div>
        ) : gameComplete ? (
          <div className="text-2xl font-bold text-center text-green-600">Congratulations! You've matched all the words!</div>
        ) : draggableWords.length > 0 && droppableWords.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-center mb-6">
              {draggableWords
                .filter((word) => !showImages || word.image) // Filter out words without images if showImages is true
                .map((word) => (
                  <DraggableWord key={word.id} word={word} type="turkish" isMatched={matchedWords.includes(word.id)} />
                ))}
            </div>
            <div className="flex flex-wrap justify-center">
              {droppableWords
                .filter((word) => !showImages || word.image) // Filter out words without images if showImages is true
                .map((word) => (
                  <DroppableArea key={word.id} word={word} onDrop={handleDrop} isCorrect={feedback[word.id]} showImages={showImages} />
                ))}
            </div>
          </>
        ) : (
          <div className="text-2xl font-bold text-center text-red-600">Loading...</div>
        )}
        <div className="mt-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-green-600">Matched Words</h2>
          <ul className="list-disc list-inside">
            {matchedWords.map((id) => {
              const word = draggableWords.find((w) => w.id === id);
              return <li key={id} className="text-lg text-gray-700">{word?.turkish} - {word?.english}</li>;
            })}
          </ul>
        </div>
      </div>
    </DndProvider>
  );
};

export default MatchingGame;