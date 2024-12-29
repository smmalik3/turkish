import React, { useState } from 'react';
import NavMenu from '../components/NavMenu';

const FillInTheBlanks: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>(Array(8).fill(''));
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
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Fill in the Blanks</h1>
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
        />. Mesleğim <input
          type="text"
          value={answers[3]}
          onChange={(e) => handleChange(3, e.target.value)}
          className="border-b-2 border-gray-500 focus:outline-none"
        />. Ben <input
          type="text"
          value={answers[4]}
          onChange={(e) => handleChange(4, e.target.value)}
          className="border-b-2 border-gray-500 focus:outline-none"
        />'de yaşıyorum. Ben <input
          type="text"
          value={answers[5]}
          onChange={(e) => handleChange(5, e.target.value)}
          className="border-b-2 border-gray-500 focus:outline-none"
        />'den geliyorum. Bugün hava <input
          type="text"
          value={answers[6]}
          onChange={(e) => handleChange(6, e.target.value)}
          className="border-b-2 border-gray-500 focus:outline-none"
        />. Ailem <input
          type="text"
          value={answers[7]}
          onChange={(e) => handleChange(7, e.target.value)}
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
          <h2 className="text-xl font-bold">Your Responses:</h2>
          <p>Adım: {answers[0]}</p>
          <p>Yaşım: {answers[1]}</p>
          <p>En sevdiğim renk: {answers[2]}</p>
          <p>Mesleğim: {answers[3]}</p>
          <p>Yaşadığım yer: {answers[4]}</p>
          <p>Geldiğim yer: {answers[5]}</p>
          <p>Bugün hava: {answers[6]}</p>
          <p>Ailem: {answers[7]}</p>
        </div>
      )}
    </div>
  );
};

export default FillInTheBlanks;