import React, { useState } from 'react';
import NavMenu from '../components/NavMenu';
import MatchingGame from '../components/MatchingGame';
import WordTransformation from '../components/WordTransformation';
import InteractiveTutorial from '../components/InteractiveTutorial';
import VowelHarmonyGame from '../components/VowelHarmonyGame';
import DeepDive from '../components/DeepDive';

const VowelHarmonyPage: React.FC = () => {
  const [mode, setMode] = useState<'tutorial' | 'matching' | 'transformation' | 'oldGame' | 'deepDive'>('tutorial');

  return (
    <div>
      <NavMenu />
      <div className="flex flex-col items-center justify-center min-h-screen p-20 bg-gray-100">
        <div className="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <button onClick={() => setMode('tutorial')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Tutorial</button>
          <button onClick={() => setMode('matching')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Matching Game</button>
          <button onClick={() => setMode('transformation')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Word Transformation</button>
          <button onClick={() => setMode('oldGame')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Vowel Harmony Game v1.0</button>
          <button onClick={() => setMode('deepDive')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Deep Dive</button>
        </div>
        {mode === 'tutorial' && <InteractiveTutorial />}
        {mode === 'matching' && <MatchingGame />}
        {mode === 'transformation' && <WordTransformation />}
        {mode === 'oldGame' && <VowelHarmonyGame />}
        {mode === 'deepDive' && <DeepDive />}
      </div>
    </div>
  );
};

export default VowelHarmonyPage;