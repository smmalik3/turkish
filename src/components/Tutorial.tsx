import React from 'react';

const Tutorial: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Vowel Harmony Tutorial</h1>
      <div className="text-lg mb-4 min-h-32 flex items-center justify-center">
        <p className="max-w-xl text-center">
          In Turkish, vowel harmony is a phonological process that affects the vowels within a word. There are two types of vowels: front vowels (e, i, ö, ü) and back vowels (a, ı, o, u). A word should contain either front vowels or back vowels, but not both.
        </p>
      </div>
      <div className="text-lg mb-4 min-h-32 flex items-center justify-center">
        <p className="max-w-xl text-center">
          For example, the word "kitap" (book) has a back vowel "a". Therefore, the suffix should also contain a back vowel, such as "lar" for pluralization, resulting in "kitaplar".
        </p>
      </div>
      <div className="text-lg mb-4 min-h-32 flex items-center justify-center">
        <p className="max-w-xl text-center">
          Let's practice with some examples!
        </p>
      </div>
    </div>
  );
};

export default Tutorial;