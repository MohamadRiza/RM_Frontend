// client/src/pages/Home.jsx

import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";
import PartnerBrandsSection from "../sections/PartnerBrandsSection";
import ProductsPreviewSection from "../sections/ProductsPreviewSection";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <section id="about" className="...">
        <AboutSection />
      </section>
      <PartnerBrandsSection />
      <ProductsPreviewSection />
    </div>
  );
};

export default Home;
