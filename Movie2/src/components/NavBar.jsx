import React from 'react';
import { Link } from 'react-router';

function NavBar() {
  return (
    <nav className="bg-black px-8 py-4 flex justify-between items-center shadow-md
                    md:px-4">
      {/* Brand */}
      <div>
        <Link
          to="/"
          className="text-white text-2xl font-bold md:text-xl"
        >
          Movie App
        </Link>
      </div>

      {/* Links */}
      <div className="flex gap-8 md:gap-4">
        <Link
          to="/"
          className="text-white text-base px-4 py-2 rounded hover:bg-white/10 transition-colors duration-200 md:px-2"
        >
          Home
        </Link>
        <Link
          to="/favourites"
          className="text-white text-base px-4 py-2 rounded hover:bg-white/10 transition-colors duration-200 md:px-2"
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
