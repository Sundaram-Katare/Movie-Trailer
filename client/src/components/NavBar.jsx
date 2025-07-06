import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 px-4 py-5 w-full">
      <div className="flex items-center justify-between flex-wrap max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl text-white font-semibold">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            Trailer
            <span className="text-red-400">
              <span className="animate-pulse">🍿</span>Binge
            </span>
          </h1>
        </div>

        {/* Hamburger (for mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0 font-sans text-xl font-semibold text-white w-full sm:w-auto`}
        >
          <a href="#"><h2 className="hover:text-blue-300 cursor-pointer">Home</h2></a>
          <a href="#features"><h2 className="hover:text-yellow-500 cursor-pointer">Features</h2></a>
          <a href="#explore"><h2 className="hover:text-yellow-500 cursor-pointer">Browse</h2></a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
