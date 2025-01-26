const frontVowels = ['e', 'i', 'ö', 'ü'];
const backVowels = ['a', 'ı', 'o', 'u'];

export const checkVowelHarmony = (word: string) => {
  const vowels = word.split('').filter(char => frontVowels.includes(char) || backVowels.includes(char));
  const hasFrontVowels = vowels.some(vowel => frontVowels.includes(vowel));
  const hasBackVowels = vowels.some(vowel => backVowels.includes(vowel));
  const isHarmonious = !(hasFrontVowels && hasBackVowels);

  const vowelPositions = word.split('').map((char, index) => {
    if (frontVowels.includes(char)) return { char, index, type: 'front' };
    if (backVowels.includes(char)) return { char, index, type: 'back' };
    return null;
  }).filter(Boolean);

  return {
    isHarmonious,
    vowels,
    hasFrontVowels,
    hasBackVowels,
    vowelPositions,
  };
};