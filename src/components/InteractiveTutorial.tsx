// TODO: Optimize for mobile
import React, { useState } from 'react';

const steps = [
  {
    title: 'Introduction to Vowel Harmony',
    content: 'In Turkish, vowel harmony is a phonological process that affects the vowels within a word. There are two types of vowels: front vowels (e, i, ö, ü) and back vowels (a, ı, o, u). A word should contain either front vowels or back vowels, but not both.',
  },
  {
    title: 'Front Vowels',
    content: 'Front vowels in Turkish are: e, i, ö, ü. These vowels are produced with the tongue positioned towards the front of the mouth.',
  },
  {
    title: 'Back Vowels',
    content: 'Back vowels in Turkish are: a, ı, o, u. These vowels are produced with the tongue positioned towards the back of the mouth.',
  },
  {
    title: 'Vowel Harmony Rules',
    content: 'A word should contain either front vowels or back vowels, but not both. For example, the word "kitap" (book) has a back vowel "a". Therefore, the suffix should also contain a back vowel, such as "lar" for pluralization, resulting in "kitaplar".',
  },
  {
    title: 'Examples of Vowel Harmony',
    content: 'Here are some examples of words that follow vowel harmony:\n- kitap (book) + lar = kitaplar (books)\n- ev (house) + ler = evler (houses)\n- araba (car) + lar = arabalar (cars)',
  },
  {
    title: 'Practice',
    content: 'Now, let\'s practice! Try to form words using the correct suffixes based on vowel harmony rules. Select one of the game modes listed above.',
  },
];

const highlightVowels = (text: string) => {
  const frontVowels = 'e, i, ö, ü';
  const backVowels = 'a, ı, o, u';

  return text.split(/(e, i, ö, ü|a, ı, o, u)/).map((part, index) => {
    if (part === frontVowels) {
      return <span key={index} className="text-blue-500">{part}</span>;
    } else if (part === backVowels) {
      return <span key={index} className="text-red-500">{part}</span>;
    } else {
      return part;
    }
  });
};

const InteractiveTutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        {steps[currentStep].title}
      </h1>
      <div className="min-h-[200px] text-lg mb-4 flex items-center justify-center w-full sm:w-2/3 lg:w-1/2">
        <p className="whitespace-pre-line max-w-2xl text-center">
          {highlightVowels(steps[currentStep].content)}
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${currentStep === 0 ? 'invisible' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${currentStep === steps.length - 1 ? 'invisible' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InteractiveTutorial;