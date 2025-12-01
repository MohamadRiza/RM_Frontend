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
            <span>No. 86, 2nd Cross Street, Pettah, Colombo, Sri Lanka</span>
          </div>

          {/* Right: Contact Info (stacked on mobile, inline on desktop) */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-blue-400 flex-shrink-0" />
              <a href="tel:+94778023316" className="hover:text-white transition">+94 077 802 3316</a>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2 text-blue-400 flex-shrink-0" />
              <a href="tel:+94778980028" className="hover:text-white transition">+94 077 898 0028</a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-400 flex-shrink-0" />
              <a href="mailto:zaidfareen11@gmail.com" className="hover:text-white transition">zaidfareen11@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;