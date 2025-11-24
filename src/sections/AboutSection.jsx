import { FaClock, FaLightbulb, FaWarehouse, FaGlobeAsia } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Rich More</h2>
          <p className="text-gray-600 mt-2">Your Trusted Partner in Electrical & Home Solutions Since 2010</p>
        </div>

        {/* Owner & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Images Grid - 4 images (2x2) */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://placehold.co/300x300/ddd/333?text=Shop+Front"
              alt="Rich More Shop - Pettah"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="https://placehold.co/300x300/ddd/333?text=Owner"
              alt="Junaid Fareen - Owner"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="https://placehold.co/300x300/ddd/333?text=Products"
              alt="Electrical & Home Items"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="https://placehold.co/300x300/ddd/333?text=Warehouse"
              alt="Stock Warehouse"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-4">
              Founded and led by <strong>Mr. Junaid Fareen</strong>, <span className="font-semibold">Rich More</span> has been a leading name in Pettah, Colombo for over <strong>14+ years</strong> in the wholesale and retail trade of electrical and home goods.
            </p>
            <p className="text-gray-600">
              We specialize in supplying a vast range of high-quality products — from everyday essentials to industrial-grade equipment — directly sourced and imported from <strong>China, India, Vietnam, and the USA</strong>.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaClock className="text-blue-600 text-xl" />, title: 'Watches & Wall Clocks' },
              { icon: <FaLightbulb className="text-blue-600 text-xl" />, title: 'Electrical Items' },
              { icon: <FaWarehouse className="text-blue-600 text-xl" />, title: 'Kitchen & Home Appliances' },
              { icon: <FaGlobeAsia className="text-blue-600 text-xl" />, title: 'Direct Imports – Global Quality' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h4 className="font-medium text-gray-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Product List Details */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Product Range Includes:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-600 list-disc list-inside">
            <li>Wall Clocks & Wrist Watches</li>
            <li>LED Bulbs, Tubelights & Lighting Fixtures</li>
            <li>Wiring Cables, Switches & Sockets</li>
            <li>MCBs, DB Boards & Circuit Protection</li>
            <li>Rice Cookers, Ovens, Blenders</li>
            <li>Ceiling Fans, Exhaust Fans, Stand Fans</li>
            <li>Electric Kettles, Irons, Heaters</li>
            <li>Industrial Electrical Equipment</li>
            <li>Imported Home & Kitchen Appliances</li>
          </ul>
        </div>

        {/* Closing Promise */}
        <div className="text-center bg-blue-50 rounded-xl py-8 px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Unlimited Stock · Best Prices · Trusted Service</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Whether you're a contractor, retailer, or individual customer — we serve everyone with the same dedication.  
            With **direct imports** and **10,000+ items in stock**, Rich More ensures you get **quality, variety, and value** in every purchase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;