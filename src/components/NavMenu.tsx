import React from 'react';
import Link from 'next/link';

const NavMenu: React.FC = () => {
  return (
    <nav className="w-full bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">
            Flashcards
          </Link>
        </li>
        <li>
          <Link href="/fill-in-the-blanks" className="text-white hover:text-gray-400">
            Fill in the Blanks
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default NavMenu;