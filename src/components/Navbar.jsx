// client/src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll to #about
  const scrollToAbout = () => {
    // Close mobile menu
    setIsMenuOpen(false);

    // If already on homepage, scroll directly
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to home and wait a bit before scrolling
      // We'll handle auto-scroll via useEffect on Home page (see note below)
      window.location.href = "/#about";
    }
  };

  // Optional: Auto-scroll on initial load if hash is #about
  // (Handled in Home.jsx – see note at bottom)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo + Shop Info */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Rich More Logo"
                  className="w-14 h-14 mr-3 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <div
                  className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-sm hidden"
                  style={{ display: "none" }}
                >
                  RM
                </div>
                <span className="text-xl font-bold text-gray-800">
                  Rich More
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-500 ml-17 -mt-4">
              Wholesale & Retail Dealer
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>
            <button
              onClick={scrollToAbout}
              className="text-gray-700 hover:text-blue-600 font-medium transition text-left bg-transparent border-none cursor-pointer"
            >
              About Us
            </button>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Contact Us
            </Link>
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
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={scrollToAbout}
                className="text-left text-gray-700 hover:text-blue-600 font-medium px-3 py-2 bg-transparent border-none cursor-pointer"
              >
                About Us
              </button>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;