import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo + Shop Info */}
          <div className="flex flex-col">
            <div className="flex items-center">
              {/* Replace with actual logo later */}
              <div className="w-10 h-10 bg-blue-700 rounded-md mr-3 flex items-center justify-center text-white font-bold text-lg">
                RM
              </div>
              <span className="text-xl font-bold text-gray-800">Rich More</span>
            </div>
            <p className="text-xs text-gray-500 ml-13 -mt-1">Wholesale & Retail Dealer</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About Us</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;