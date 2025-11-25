import React from 'react';

// Replace with real logo paths later (e.g., /images/philips.png)
const brandLogos = [
  { name: 'Bright', src: 'https://lh3.googleusercontent.com/proxy/ccW6CLfzqF2mEULWXm2ApY8f8xwbn4g0SJNA3n4QxafymsNbEUPfiFdO5l4kJHvI6DYlEENlGxnQkw' },
  { name: 'Mitshu', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ia4h-DnJlhukjddBjDCkE-M8m_92fDWipQ&s' },
  { name: 'Panasonic', src: 'https://lh5.googleusercontent.com/proxy/X_gJ7X5kHAv1UOxXkJVPJh9jw9i_yU24ce_pn1X99Q5_wtxNtHPvYpnlg-9_aDsreP-Er48CKcXjPUpwti0Kn73ZzTNAXD6NFUfTIeM' },
  { name: 'LG', src: 'https://upload.wikimedia.org/wikipedia/commons/7/77/LG_Electronics_logo_2020.svg' },
  { name: 'Havells', src: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Havells_Logo.svg' },
  { name: 'Anchor', src: 'https://upload.wikimedia.org/wikipedia/en/4/49/Anchor_by_Roma_logo.png' },
  { name: 'Syska', src: 'https://upload.wikimedia.org/wikipedia/en/7/73/Syska_logo.png' },
  { name: 'Crompton', src: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Crompton_logo.png' },
];

const PartnerBrandsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Trusted Partner Brands</h2>
          <p className="text-gray-600 mt-2">Quality you can rely on — sourced globally, delivered locally</p>
        </div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Duplicate logos for seamless loop */}
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
                style={{ width: '160px', height: '80px' }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnerBrandsSection;