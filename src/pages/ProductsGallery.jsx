// client/src/pages/ProductsGallery.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder products — will be replaced by API data later
const placeholderProducts = [
  { id: 1, name: 'LED Bulbs', category: 'Lighting', image: 'https://placehold.co/300x300/eee/333?text=LED+Bulb' },
  { id: 2, name: 'Ceiling Fans', category: 'Home Appliances', image: 'https://placehold.co/300x300/eee/333?text=Fan' },
  { id: 3, name: 'Wall Clocks', category: 'Decor', image: 'https://placehold.co/300x300/eee/333?text=Clock' },
  { id: 4, name: 'Rice Cookers', category: 'Kitchen', image: 'https://placehold.co/300x300/eee/333?text=Rice+Cooker' },
  { id: 5, name: 'MCB Distribution Board', category: 'Electrical', image: 'https://placehold.co/300x300/eee/333?text=MCB' },
  { id: 6, name: 'Wiring Cables', category: 'Electrical', image: 'https://placehold.co/300x300/eee/333?text=Cable' },
  { id: 7, name: 'Oven Toaster Grill', category: 'Kitchen', image: 'https://placehold.co/300x300/eee/333?text=Oven' },
  { id: 8, name: 'Digital Watches', category: 'Accessories', image: 'https://placehold.co/300x300/eee/333?text=Watch' },
];

const ProductsGallery = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Products</h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Explore our wide range of electrical items, home appliances, and more — all available for wholesale and retail.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {placeholderProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden
                transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {product.category}
                </span>
                <h3 className="font-semibold text-gray-800 mt-2">{product.name}</h3>
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition"
          >
            Contact Us for More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;