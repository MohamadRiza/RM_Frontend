// client/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Helper: Scroll to section on homepage
  const scrollToSection = (sectionId) => {
    // Navigate to home first if not already there
    if (window.location.pathname !== '/') {
      // Use hash navigation so SPA works after redirect
      window.location.href = `/#${sectionId}`;
    } else {
      // Already on home — scroll smoothly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* === 1. Brand & Address === */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Rich More Logo"
                className="w-12 h-12 object-contain mr-3"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div
                className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg hidden"
                style={{ display: 'none' }}
              >
                RM
              </div>
              <h3 className="text-2xl font-bold text-white">Rich More</h3>
            </div>
            <p className="text-blue-500 font-medium mb-3">Wholesale & Retail Dealer</p>
            <p className="text-gray-400 leading-relaxed">
              No. 86, 2nd Cross Street,<br />
              Pettah, Colombo,<br />
              Sri Lanka
            </p>
          </div>

          {/* === 2. Contact Info === */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.087 11.087 0 005.122 5.122l1.129-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 17.72V20a2 2 0 01-2 2h-2" />
                </svg>
                <div>
                  <div><a href="tel:+94778023316" className="hover:text-white transition-colors duration-200">+94 077 802 3316</a></div>
                  <div><a href="tel:+94778980028" className="hover:text-white transition-colors duration-200">+94 077 898 0028</a></div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:zaidfareen11@gmail.com" className="hover:text-white transition-colors duration-200">
                  zaidfareen11@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* === 3. Quick Links – FIXED === */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left w-full text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer font-medium"
                >
                  About Us
                </button>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="hover:text-white transition-colors duration-200">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* === Social Media === */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Facebook', href: 'https://facebook.com/richmore.pettah', icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              )},
              { name: 'Instagram', href: 'https://instagram.com/richmore_pettah', icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.668.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              )},
              { name: 'LinkedIn', href: 'https://linkedin.com/company/richmore-colombo', icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              )},
              { name: 'TikTok', href: 'https://tiktok.com/@richmore_pettah', icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.46.08-2.92-.32-4.04-1.22-2.02-1.59-3.2-4.24-2.97-6.93.02-.5.02-1 .02-1.49 0-.01.01-.02.01-.03h4.01v-.01c-.01.33-.02.66-.02.99-.05 1.29.82 2.54 2.09 2.88 1.28.38 2.62-.35 2.93-1.67.02-.11.03-.23.03-.34.01-3.78.01-7.55.01-11.33 0-.02 0-.05.01-.07H12.53z"/></svg>
              )}
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* === Bottom Credit === */}
        <div className="mt-8 pt-6 text-center text-gray-500 text-sm border-t border-gray-800">
          &copy; {new Date().getFullYear()} <span className="text-white">Rich More</span>. All Rights Reserved.<br />
          Trusted Electrical & Home Appliance Supplier in Pettah, Colombo since 2009.
          <div className="mt-2">
            Developed by{' '}
            <a
              href="https://www.nexasoft.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white underline hover:no-underline transition"
            >
              Nexasoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;