// client/src/components/TopBar.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between py-2 md:py-1.5 gap-1 md:gap-0">
          {/* Left: Address */}
          <div className="flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt className="mr-2 text-blue-400 flex-shrink-0" />
            <span>No. 73, 2nd Cross Street, Pettah, Colombo, Sri Lanka</span>
          </div>

          {/* Right: Contact Info (stacked on mobile, inline on desktop) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-blue-400 flex-shrink-0" />
              <a href="tel:+941234567890" className="hover:text-white transition">+94 123 456 7890</a>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2 text-blue-400 flex-shrink-0" />
              <a href="tel:+949876543210" className="hover:text-white transition">+94 987 654 3210</a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-400 flex-shrink-0" />
              <a href="mailto:example@example.com" className="hover:text-white transition">example@example.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;