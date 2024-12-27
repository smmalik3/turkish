import React, { useState } from 'react';
import NavMenu from '../components/NavMenu';

const FillInTheBlanks: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(3).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <NavMenu />
      <h1 className="text-2xl font-bold mb-4">Fill in the Blanks</h1>
      <p>
        Merhaba, benim adım <input
          type="text"
          value={answers[0]}
          onChange={(e) => handleChange(0, e.target.value)}
          className="border-b-2 border-gray-500 focus:outline-none"
        />. Ben <input
          type="text"
          value={answers[1]}
          onChange={(e) => handleChange(1, e.target.value)}
          className="border-b-2 border-gray-500 focus:outline-none"
        /> yaşındayım. En sevdiğim renk <input
          type="text"
          value={answers[2]}
          onChange={(e) => handleChange(2, e.target.value)}
          className="border-b-2 border-gray-500 focus:outline-none"
        />.
      </p>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
      {isSubmitted && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Your Answers:</h2>
          <p>Adım: {answers[0]}</p>
          <p>Yaşım: {answers[1]}</p>
          <p>En sevdiğim renk: {answers[2]}</p>
        </div>
      )}
    </div>
  );
};

export default FillInTheBlanks;