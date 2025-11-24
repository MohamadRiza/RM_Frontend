import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/33415138/pexels-photo-33415138.jpeg')", // ← Place your image in public/images/
        minHeight: '500px',
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute from-black to-black bg-gradient-to-r inset-0 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to <span className="text-blue-700">Rich More</span>
        </h1>
        <p className="text-lg text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
          Colombo’s trusted wholesale & retail dealer for electrical goods — quality products, competitive prices, and reliable service since 1995.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-lg"
          >
            View Our Products
          </Link>
          <Link
            to="/contact"
            className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;