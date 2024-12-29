import React, { useState } from 'react';
import NavMenu from '../components/NavMenu';

const conversation = [
  { speaker: 'Ali', text: 'Merhaba! Benim adım Ali. Senin adın nedir?' },
  { speaker: 'Ayşe', text: 'Benim adım Ayşe. Tanıştığıma memnun oldum. Nerelisin?' },
  { speaker: 'Ali', text: 'Ben İstanbulluyum. Sen nerelisin?' },
  { speaker: 'Ayşe', text: 'Ben de İstanbulluyum. Kaç yaşındasın?' },
  { speaker: 'Ali', text: 'Ben yirmi yaşındayım. Sen kaç yaşındasın?' },
  { speaker: 'Ayşe', text: 'Ben de yirmi yaşındayım. Ne yaparsın?' },
  { speaker: 'Ali', text: 'Ben öğrenciyim. Sen ne yaparsın?' },
  { speaker: 'Ayşe', text: 'Ben de öğrenciyim. Hangi hobilerden hoşlanırsın?' },
  { speaker: 'Ali', text: 'Kitap okumayı ve yüzmeyi seviyorum. Senin hobilerin neler?' },
  { speaker: 'Ayşe', text: 'Ben resim yapmayı ve müzik dinlemeyi seviyorum.' },
];

const questions = [
  { question: 'What is Ayşe\'s hobby?', answer: ['resim yapmayı', 'müzik dinlemeyi'] },
  { question: 'Where is Ali from?', answer: ['Istanbul'] },
  { question: 'How old is Ayşe?', answer: ['yirmi', '20'] },
  { question: 'What is Ali\'s profession?', answer: ['öğrenci'] },
  { question: 'Ali enjoys reading books and what else?', answer: ['yüzmek'] },
];

const Conversation = () => {
  const [userResponses, setUserResponses] = useState(Array(questions.length).fill(''));
  const [feedback, setFeedback] = useState<string[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newResponses = [...userResponses];
    newResponses[index] = value;
    setUserResponses(newResponses);
  };

  const checkAnswers = () => {
    const newFeedback = questions.map((q, index) => {
      return q.answer.includes(userResponses[index].toLowerCase()) ? 'Correct' : 'Incorrect';
    });
    setFeedback(newFeedback);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <NavMenu />
      <h1 className="text-4xl font-bold mb-6 pt-10 text-center text-blue-600">Conversation Practice</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="mb-6">
          {conversation.map((line, index) => (
            <p key={index} className={`mb-2 ${line.speaker === 'Ali' ? 'text-blue-600' : 'text-green-600'}`}>
              <strong>{line.speaker}:</strong> {line.text}
            </p>
          ))}
        </div>
        <div className="mb-6">
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{q.question}</p>
              <input
                type="text"
                value={userResponses[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="border-b-2 border-gray-500 focus:outline-none w-full p-2"
              />
              {feedback[index] && (
                <p className={`mt-2 ${feedback[index] === 'Correct' ? 'text-green-600' : 'text-red-600'}`}>
                  {feedback[index]}
                </p>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={checkAnswers}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Check Answers
        </button>
      </div>
    </div>
  );
};

export default Conversation;