# flashcard-game/flashcard-game/README.md

# Flashcard Game

## Overview

The Flashcard Game is an interactive application designed to help users learn new vocabulary in multiple languages. The game displays a Turkish word or an image on a card, which can be flipped to reveal the English translation upon clicking. Users can also switch between different languages to enhance their learning experience.

## Features

- Display Turkish words or images on flashcards.
- Flip animation to reveal English translations.
- Language switcher to choose between multiple languages.
- Responsive design for various devices.

## Project Structure

```
flashcard-game
├── src
│   ├── components
│   │   ├── Card.tsx
│   │   ├── FlipAnimation.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── pages
│   │   └── index.tsx
│   ├── styles
│   │   └── globals.css
│   ├── utils
│   │   └── translations.ts
│   └── types
│       └── index.ts
├── public
│   └── images
│       └── example-image.jpg
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd flashcard-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```
Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.