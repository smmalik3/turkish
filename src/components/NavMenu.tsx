import React, { useState } from 'react';
import Link from 'next/link';

const NavMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-gray-800 p-4 shadow-lg fixed top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center text-white text-lg">
          <div className="relative h-8 w-8 mr-2">
            <img className="h-full w-full rounded-full border-2 border-white object-cover" src="/images/turkishFlag.png" alt="Logo" />
          </div>
          Turkish Learning App
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">
            Flashcards
          </Link>
          <Link href="/fill-in-the-blanks" className="text-white hover:text-gray-400">
            Blanks
          </Link>
          <Link href="/conversation" className="text-white hover:text-gray-400">
            Conversation
          </Link>
          <Link href="/matching-game" className="text-white hover:text-gray-400">
            Matching
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="text-white hover:text-gray-400">
                Flashcards
              </Link>
            </li>
            <li>
              <Link href="/fill-in-the-blanks" className="text-white hover:text-gray-400">
                Blanks
              </Link>
            </li>
            <li>
              <Link href="/conversation" className="text-white hover:text-gray-400">
                Conversation
              </Link>
            </li>
            <li>
              <Link href="/matching-game" className="text-white hover:text-gray-400">
                Matching
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;