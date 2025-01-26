// TODO: Optimize for mobile
import React from 'react';
import { useRouter } from 'next/router';

const DeepDive: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center min-h-screen p-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Deep Dive into Vowel Harmony</h1>
      <div className="max-w-2xl text-lg mb-4">
        <p>Vowel harmony in Turkish is a fundamental linguistic rule affecting how suffixes are added to words. It's based on the principle that vowels within a word harmonize in terms of their frontness or backness. Here's a detailed breakdown:</p>

        <h2 className="text-2xl font-bold mt-4">Types of Vowels:</h2>
        <ul className="list-disc list-inside">
          <li><strong>Front Vowels</strong>: <span className="text-blue-500">e, i, ö, ü</span></li>
          <li><strong>Back Vowels</strong>: <span className="text-red-500">a, ı, o, u</span></li>
        </ul>

        <h2 className="text-2xl font-bold mt-4">Basic Rules of Vowel Harmony:</h2>
        <ul className="list-disc list-inside">
          <li><strong>Frontness</strong>: If the root word contains front vowels, the suffix vowels must also be front vowels.</li>
          <li><strong>Backness</strong>: If the root word contains back vowels, the suffix vowels must also be back vowels.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-4">Types of Vowel Harmony:</h2>

        <h3 className="text-xl font-bold mt-2">1. <strong>Two-Way Vowel Harmony</strong>:</h3>
        <ul className="list-disc list-inside">
          <li>Applies mainly to suffixes like plural "-ler/-lar".</li>
          <li><strong>Example</strong>:</li>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Çocuk</strong> (child) → <strong>Çocuklar</strong> (children)</li>
            <li><strong>Ev</strong> (house) → <strong>Evler</strong> (houses)</li>
          </ul>
        </ul>

        <h3 className="text-xl font-bold mt-2">2. <strong>Four-Way Vowel Harmony</strong>:</h3>
        <ul className="list-disc list-inside">
          <li>Applies to suffixes where vowels change based on both frontness and rounding.</li>
          <li><strong>Vowel Choices</strong>:</li>
          <ul className="list-disc list-inside ml-4">
            <li>For front rounded vowels (<span className="text-blue-500">ö, ü</span>): Use "<span className="text-blue-500">ü, ö</span>"</li>
            <li>For front unrounded vowels (<span className="text-blue-500">e, i</span>): Use "<span className="text-blue-500">i, e</span>"</li>
            <li>For back rounded vowels (<span className="text-red-500">o, u</span>): Use "<span className="text-red-500">u, o</span>"</li>
            <li>For back unrounded vowels (<span className="text-red-500">a, ı</span>): Use "<span className="text-red-500">a, ı</span>"</li>
          </ul>
          <li><strong>Examples</strong>:</li>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Dört</strong> (four) + possessive "-(n)üz" → <strong>Dördünüz</strong> (your four)</li>
            <li><strong>Köpük</strong> (foam) + possessive "-(n)üz" → <strong>Köpüğünüz</strong> (your foam)</li>
            <li><strong>Kapı</strong> (door) + dative "-e" → <strong>Kapıya</strong> (to the door)</li>
            <li><strong>Kitap</strong> (book) + dative "-e" → <strong>Kitaba</strong> (to the book)</li>
          </ul>
        </ul>

        <h2 className="text-2xl font-bold mt-4">Vowel Harmony in Common Suffixes:</h2>
        <ul className="list-disc list-inside">
          <li><strong>Plural Suffix "-ler/-lar"</strong>:</li>
          <ul className="list-disc list-inside ml-4">
            <li>Follows two-way harmony.</li>
            <li>E.g., <strong>Kitap</strong> → <strong>Kitaplar</strong>, <strong>Göz</strong> → <strong>Gözler</strong></li>
          </ul>
          <li><strong>Possessive Suffix "-(İm)/(Um)/(Üm)/(Im)"</strong>:</li>
          <ul className="list-disc list-inside ml-4">
            <li>Follows four-way harmony.</li>
            <li>E.g., <strong>Ev</strong> (house) → <strong>Evimiz</strong> (our house), <strong>Çocuk</strong> (child) → <strong>Çocuğum</strong> (my child)</li>
          </ul>
          <li><strong>Dative Suffix "-e/-(y)a"</strong>:</li>
          <ul className="list-disc list-inside ml-4">
            <li>Follows two-way harmony.</li>
            <li>E.g., <strong>Arkadaş</strong> (friend) → <strong>Arkadaşa</strong> (to the friend), <strong>Köy</strong> (village) → <strong>Köye</strong> (to the village)</li>
          </ul>
          <li><strong>Locative Suffix "-de/-(d)a"</strong>:</li>
          <ul className="list-disc list-inside ml-4">
            <li>Follows two-way harmony.</li>
            <li>E.g., <strong>Masa</strong> (table) → <strong>Masada</strong> (on the table), <strong>Ev</strong> (house) → <strong>Evde</strong> (at the house)</li>
          </ul>
          <li><strong>Genitive Suffix "-in/-(n)ın"</strong>:</li>
          <ul className="list-disc list-inside ml-4">
            <li>Follows four-way harmony.</li>
            <li>E.g., <strong>Kedi</strong> (cat) → <strong>Kedinin</strong> (of the cat), <strong>Kapı</strong> (door) → <strong>Kapının</strong> (of the door)</li>
          </ul>
        </ul>

        <h2 className="text-2xl font-bold mt-4">Common Exceptions:</h2>
        <p>Some Turkish loanwords and compound nouns may be exceptions to harmony rules and retain the original vowels in borrowed words or when used idiomatically.</p>

        <h2 className="text-2xl font-bold mt-4">Practical Tips:</h2>
        <ul className="list-disc list-inside">
          <li>Identify the last vowel of the root word.</li>
          <li>Choose the suffix vowel that matches the frontness/backness and rounding of the root word's last vowel.</li>
        </ul>

        <p>By mastering these rules and practicing with examples, you'll gain a solid understanding of how vowel harmony operates in Turkish.</p>
      </div>
      <button
        onClick={() => router.push('/vowel-harmony/')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Top
      </button>
    </div>
  );
};

export default DeepDive;