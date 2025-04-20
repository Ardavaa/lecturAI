import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
            LecturAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#features" className="text-gray-600 hover:text-primary-600 transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">
            How It Works
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-primary-600 transition-colors">
            Dashboard
          </Link>
          <button className="btn btn-primary">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 z-20">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              href="/#features" 
              className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/#how-it-works" 
              className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="/dashboard" 
              className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <button className="btn btn-primary mx-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
