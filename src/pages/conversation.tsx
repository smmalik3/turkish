import React, { useState } from 'react';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

const conversation = {
  turkish: [
    { speaker: 'Ali', text: 'Merhaba! Benim adım Ali. Senin adın nedir?' },
    { speaker: 'Ayşe', text: 'Benim adım Ayşe. Tanıştığıma memnun oldum. Nerelisin?' },
    { speaker: 'Ali', text: 'Ben İstanbulluyum. Sen nerelisin?' },
    { speaker: 'Ayşe', text: 'Ben de İstanbulluyum. Kaç yaşındasın?' },
    { speaker: 'Ali', text: 'Ben yirmi yaşındayım. Sen kaç yaşındasın?' },
    { speaker: 'Ayşe', text: 'Ben de yirmi yaşındayım. Senin mesleğin ne?' },
    { speaker: 'Ali', text: 'Ben öğrenciyim. Sen ne yaparsın?' },
    { speaker: 'Ayşe', text: 'Ben de öğrenciyim. Hangi hobilerden hoşlanırsın?' },
    { speaker: 'Ali', text: 'Kitap okumayı ve yüzmeyi seviyorum. Senin hobilerin neler?' },
    { speaker: 'Ayşe', text: 'Ben resim yapmayı ve müzik dinlemeyi seviyorum.' },
  ],
  english: [
    { speaker: 'Ali', text: 'Hello! My name is Ali. What is your name?' },
    { speaker: 'Ayşe', text: 'My name is Ayşe. Nice to meet you. Where are you from?' },
    { speaker: 'Ali', text: 'I am from Istanbul. Where are you from?' },
    { speaker: 'Ayşe', text: 'I am also from Istanbul. How old are you?' },
    { speaker: 'Ali', text: 'I am twenty years old. How old are you?' },
    { speaker: 'Ayşe', text: 'I am also twenty years old. What is your profession?' },
    { speaker: 'Ali', text: 'I am a student. What do you do?' },
    { speaker: 'Ayşe', text: 'I am also a student. What hobbies do you like?' },
    { speaker: 'Ali', text: 'I like reading books and swimming. What are your hobbies?' },
    { speaker: 'Ayşe', text: 'I like painting and listening to music.' },
  ],
};

const questions = {
  turkish: [
    { question: 'Ayşe\'nin hobisi nedir?', answer: ['resim yapmayı', 'müzik dinlemeyi'] },
    { question: 'Ali nereli?', answer: ['Istanbul', 'Istanbullu', 'istanbul', 'istanbullu'] },
    { question: 'Ayşe kaç yaşında?', answer: ['yirmi', '20'] },
    { question: 'Ali\'nin mesleği nedir?', answer: ['öğrenci'] },
    { question: 'Ali kitap okumayı ve başka neyi seviyor?', answer: ['yüzmek'] },
  ],
  english: [
    { question: 'What is Ayşe\'s hobby?', answer: ['painting', 'listening to music'] },
    { question: 'Where is Ali from?', answer: ['Istanbul', 'Istanbullu', 'istanbul', 'istanbullu'] },
    { question: 'How old is Ayşe?', answer: ['twenty', '20'] },
    { question: 'What is Ali\'s profession?', answer: ['student'] },
    { question: 'Ali enjoys reading books and what else?', answer: ['swimming'] },
  ],
};

const Conversation = () => {
  const [language, setLanguage] = useState<'turkish' | 'english'>('turkish'); // Default language is Turkish
  const [userResponses, setUserResponses] = useState(Array(questions[language].length).fill(''));
  const [feedback, setFeedback] = useState<string[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newResponses = [...userResponses];
    newResponses[index] = value;
    setUserResponses(newResponses);
  };

  const checkAnswers = () => {
    const newFeedback = questions[language].map((q, index) => {
      return q.answer.includes(userResponses[index].toLowerCase()) ? 'Correct' : 'Incorrect';
    });
    setFeedback(newFeedback);
  };

  const switchLanguage = (lang: 'turkish' | 'english') => {
    setLanguage(lang);
    setUserResponses(Array(questions[lang].length).fill(''));
    setFeedback([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <NavMenu />
      <h1 className="text-4xl font-bold mb-6 pt-10 text-center text-blue-600">Conversation Practice</h1>
      <div className="mb-4 flex space-x-4 items-center justify-center">
        <button
          onClick={() => switchLanguage('turkish')}
          className={`px-4 py-2 rounded-lg ${language === 'turkish' ? 'bg-gray-400 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          disabled={language === 'turkish'}
        >
          Turkish
        </button>
        <button
          onClick={() => switchLanguage('english')}
          className={`px-4 py-2 rounded-lg ${language === 'english' ? 'bg-gray-400 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          disabled={language === 'english'}
        >
          English
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="mb-6">
          {conversation[language].map((line, index) => (
            <p key={index} className={`mb-2 ${line.speaker === 'Ali' ? 'text-blue-600' : 'text-green-600'}`}>
              <strong>{line.speaker}:</strong> {line.text}
            </p>
          ))}
        </div>
        <div className="mb-6">
          {questions[language].map((q, index) => (
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
      <Footer />
    </div>
  );
};

export default Conversation;