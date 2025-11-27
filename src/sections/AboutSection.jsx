// client/src/components/sections/AboutSection.jsx
import { FaClock, FaLightbulb, FaWarehouse, FaGlobeAsia } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Rich More</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Your Trusted Partner in Electrical & Home Solutions Since 2010
          </p>
        </div>

        {/* Owner & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Images Grid - 4 images (2x2) with hover */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/RM.jpg", alt: "Rich More Shop - Pettah" },
              { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxlISrWqWoLmJJalzilPgohcFc6fSpk74hiqB8UVwHmbod-pAf-dsfaO55vyTutUuWVxpU0awuPkMBDbrUwDQRcuRBaCFEBqodeQXAWqgh8xWHwZQHCRzt_SZ1wJrO1Qhkw-FhXit6vYuz_=s680-w680-h510", alt: "Junaid Fareen - Owner" },
              { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy1hg_nbKSfKfcJDywzWBQXqTMHYLL_J_q_Voh-x9b8yYxh0w3_qzmHMeuIriXrHe-FfMrfS7cWzFk1whkc1qWInHDmePmio-ye1ZIvNeYIH1wTWhYQxKXXHZMBq4CaLTqqvHeWBGJf-psk=s680-w680-h510", alt: "Electrical & Home Items" },
              { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwEAk9LSfanxyAYsjni9_e0zBetwbcEoNPPiXuxFTAiqZm5EX40vQ2FkXWVbaJlwYfW9hhiz02xBfT6J3ms3vp3YYZumsF707524xzdDE6TP4_s0boy8fRmpskpLdjLvxWm2yx1rBbkwxSK=s680-w680-h510", alt: "Stock Warehouse" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
            <p className="text-gray-700 leading-relaxed">
              Founded and led by <strong className="text-gray-900">Mr. Junaid Fareen</strong>, 
              <span className="font-semibold text-blue-700"> Rich More</span> has been a leading name in Pettah, Colombo for over 
              <strong className="text-gray-900"> 14+ years</strong> in the wholesale and retail trade of electrical and home goods.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We specialize in supplying a vast range of high-quality products — from everyday essentials to industrial-grade equipment — 
              directly sourced and imported from <strong className="text-gray-900">China, India, Vietnam, and the USA</strong>.
            </p>
          </div>
        </div>

        {/* What We Offer - with hover cards */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaClock className="text-blue-600 text-2xl" />, title: 'Watches & Wall Clocks' },
              { icon: <FaLightbulb className="text-blue-600 text-2xl" />, title: 'Electrical Items' },
              { icon: <FaWarehouse className="text-blue-600 text-2xl" />, title: 'Kitchen & Home Appliances' },
              { icon: <FaGlobeAsia className="text-blue-600 text-2xl" />, title: 'Direct Imports – Global Quality' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center
                  transition-all duration-300
                  hover:shadow-md hover:border-blue-300 hover:-translate-y-1
                  cursor-pointer group"
              >
                <div className="flex justify-center mb-4 text-blue-600 group-hover:text-blue-700 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Product List Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-20 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Product Range Includes:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
            {[
              "Wall Clocks & Wrist Watches",
              "LED Bulbs, Tubelights & Lighting Fixtures",
              "Wiring Cables, Switches & Sockets",
              "MCBs, DB Boards & Circuit Protection",
              "Rice Cookers, Ovens, Blenders",
              "Ceiling Fans, Exhaust Fans, Stand Fans",
              "Electric Kettles, Irons, Heaters",
              "Industrial Electrical Equipment",
              "Imported Home & Kitchen Appliances"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">•</span>
                <span className="hover:text-blue-700 transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Closing Promise */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl py-10 px-6 border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Unlimited Stock · Best Prices · Trusted Service
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Whether you're a contractor, retailer, or individual customer — we serve everyone with the same dedication.  
            With <strong>direct imports</strong> and <strong>10,000+ items in stock</strong>, Rich More ensures you get 
            <strong className="text-blue-700"> quality, variety, and value</strong> in every purchase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;