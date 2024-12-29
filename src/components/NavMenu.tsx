import React from 'react';
import Link from 'next/link';

const NavMenu: React.FC = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 shadow-lg fixed top-0 z-50">
      <ul className="flex justify-center space-x-4">
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
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default NavMenu;