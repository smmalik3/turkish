import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 p-4 shadow-lg fixed bottom-0 z-50">
      <div className="flex justify-between items-center text-white text-sm">
        <p>&copy; 2025 Salman Malik</p>
        <a
          href="https://www.buymeacoffee.com/salmanmalik1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <span className="hidden sm:inline">Buy Me A Coffee</span>
          <img
            src="/images/coffee.png"
            alt="Buy Me A Coffee"
            className="h-6 w-6"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;