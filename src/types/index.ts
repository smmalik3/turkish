export interface CardProps {
  word: string;
  translation: string;
  image?: string;
  isFlipped: boolean;
  onClick: () => void;
}

export type Language = 'tr' | 'en' | 'es' | 'fr'; // Add more languages as needed

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}