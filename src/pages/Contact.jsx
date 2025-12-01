// client/src/pages/Contact.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Visit our shop in Pettah, call us, or send us a message — we’re here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Google Maps */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="h-96 w-full">
              {/* Google Maps Embed - Replace with your real coordinates */}
              <iframe
                title="Rich More Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6167918845563!2d79.84763567024466!3d6.936319702924353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25982c2ada45d%3A0x5b5124d218710266!2sRich%20More!5e0!3m2!1sen!2slk!4v1764175600410!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Info + Details */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start">
                  <div className="mt-1 text-blue-600">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Our Address</h3>
                    <p className="text-gray-600 mt-1">
                      No. 86, 2nd Cross Street,<br />
                      Pettah, Colombo,<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="mt-1 text-blue-600">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+94778023316" className="hover:text-blue-600 transition">+94 077 802 3316</a><br />
                      <a href="tel:+94778980028" className="hover:text-blue-600 transition">+94 077 898 0028</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="mt-1 text-blue-600">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:zaidfareen11@gmail.com" className="hover:text-blue-600 transition">
                        zaidfareen11@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours (Optional) */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800">Business Hours</h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>Monday – Saturday: 9:00 AM – 7:00 PM</li>
                  <li>Sunday: 9:30 AM – 5:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;