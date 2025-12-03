import React from "react";

const brandLogos = [
  {
    name: "Bright",
    src: "https://lh3.googleusercontent.com/proxy/ccW6CLfzqF2mEULWXm2ApY8f8xwbn4g0SJNA3n4QxafymsNbEUPfiFdO5l4kJHvI6DYlEENlGxnQkw",
  },
  {
    name: "Mitshu",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ia4h-DnJlhukjddBjDCkE-M8m_92fDWipQ&s",
  },
  {
    name: "Galaxy",
    src: "./Galaxy.jpg",
  },
  {
    name: "Camrin",
    src: "./Camrin.jpg",
  },
  {
    name: "Earth Star",
    src: "./EarthStar.jpg",
  },
  {
    name: "Eagle",
    src: "./Eagle.jpg",
  },
  {
    name: "MAC",
    src: "./Mac.jpg",
  },
  {
    name: "SOKANY",
    src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=442,h=198,fit=crop/ALpb2WBJlWF5o522/image_20240228130703-copy-Yg25QQyyllsq6EnM.png",
  },
  {
    name: "Blackford",
    src: "./Blackford.jpg",
  },
  {
    name: "Citizen",
    src: "./Citizen.jpg",
  },
  {
    name: "Crescent",
    src: "./Crescent.jpg",
  },
  {
    name: "Geemy",
    src: "./Geemy.jpg",
  },
  {
    name: "HEJ",
    src: "./Hej.jpg",
  },
  {
    name: "iDeal",
    src: "./Ideal.jpg",
  },
  {
    name: "Kawashi",
    src: "./Kawashi.jpg",
  },
  {
    name: "MAC",
    src: "./Mac.jpg",
  },
  {
    name: "Matiz",
    src: "./Matiz.jpg",
  },
  {
    name: "Pringle",
    src: "./Pringle.jpg",
  },
  {
    name: "Winner",
    src: "./Winner.jpg",
  },
];

const PartnerBrandsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Trusted Partner Brands
          </h2>
          <p className="text-gray-600 mt-2">
            Quality you can rely on — sourced globally, delivered locally
          </p>
        </div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Duplicate logos for seamless loop */}
            {[...brandLogos, ...brandLogos].map((brand, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
                style={{ width: "160px", height: "80px" }}
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
