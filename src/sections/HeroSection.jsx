// client/src/components/HeroSection.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const phrases = [
    "Quality Electrical Goods",
    "Wholesale & Retail Dealer",
    "Kitchen & Home Appliances",
    "Direct Imports from Global Brands",
    "Trusted Since 1995"
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(100); // Faster delete
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <section
      className="relative py-28 md:py-36 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/33415138/pexels-photo-33415138.jpeg?auto=compress&cs=tinysrgb&w=1200')",
        minHeight: '600px',
      }}
    >
      {/* Dark gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          {text}
          <span className="ml-1 animate-pulse">|</span>
        </h1>
        <p className="text-lg text-white max-w-3xl mx-auto mb-10 drop-shadow-md opacity-90">
          Colombo’s trusted wholesale & retail dealer for electrical goods — quality products, competitive prices, and reliable service since 1995.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-lg transform hover:-translate-y-0.5"
          >
            View Our Products
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;