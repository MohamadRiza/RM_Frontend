// client/src/components/sections/WhyChooseUsSection.jsx
import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaTools } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-blue-600 text-3xl" />,
      title: "Islandwide Delivery",
      description: "Fast, reliable delivery across Sri Lanka — straight to your doorstep."
    },
    {
      icon: <FaHeadset className="text-blue-600 text-3xl" />,
      title: "Top Notch Support",
      description: "Here whenever you need us — before, during, and after your purchase."
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      title: "Trusted Warranty",
      description: "Warranty for all products — confidence on every device you buy."
    },
    {
      icon: <FaTools className="text-blue-600 text-3xl" />,
      title: "After-Sales Service",
      description: "Dedicated service team to keep your appliances running smoothly."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Rich More?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We go beyond just selling — we build lasting relationships with every customer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center
                transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;