// client/src/pages/Home.jsx

import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import ProductsPreviewSection from "../sections/ProductsPreviewSection";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <AboutSection />
      <ProductsPreviewSection />
    </div>
  );
};

export default Home;