// client/src/pages/Careers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Careers = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Join Our Team</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Rich More is always looking for passionate, hardworking individuals to join our growing family in Pettah, Colombo.
          </p>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-12 border border-gray-200 text-center">
          <div className="text-blue-600 mb-4">
            <FaFileAlt className="w-12 h-12 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">We're Hiring!</h2>
          <p className="text-gray-700 mb-6">
            If you’re interested in a career in electrical retail, wholesale, or customer service, we’d love to hear from you.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 inline-block">
            <p className="font-medium text-blue-800">
              📩 <strong>Send your CV to:</strong> <a href="mailto:zaidfareen11@gmail.com" className='hover:text-blue-800 hover:font-bold hover:underline'>zaidfareen11@gmail.com</a>
            </p>
          </div>
        </div>

        {/* How to Apply */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FaEnvelope className="text-blue-600 mr-2" /> Email Your CV
            </h3>
            <p className="text-gray-700 mb-3">
              Send your resume and a short cover letter to:
            </p>
            <a
              href="mailto:zaidfareen11@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium break-words"
            >
              zaidfareen11@gmail.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FaPhone className="text-blue-600 mr-2" /> Call or Visit
            </h3>
            <p className="text-gray-700 mb-3">Reach us directly:</p>
            <p className="font-medium text-gray-900">+94 077 898 0028</p>
            <p className="text-gray-600 text-sm mt-2 flex items-start">
              <FaMapMarkerAlt className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
              No. 86, 2nd Cross Street, Pettah, Colombo
            </p>
          </div>
        </div>

        {/* Open Positions (Static List) */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-12 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Current Opportunities</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Sales Executive (Wholesale & Retail)
            </li>
          </ul>
          <p className="text-gray-600 mt-4 italic">
            * Even if your role isn’t listed, feel free to send your CV — we keep all applications on file!
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Ready to start your career with Colombo’s trusted electrical dealer?</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;