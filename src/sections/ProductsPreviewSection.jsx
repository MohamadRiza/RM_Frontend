// client/src/components/sections/ProductsPreviewSection.jsx
import { Link } from 'react-router-dom';

const ProductsPreviewSection = () => {
  const featuredProducts = [
    { name: 'LED Bulbs', image: 'https://placehold.co/200x200/eee/333?text=LED' },
    { name: 'MCB & Distribution Boards', image: 'https://placehold.co/200x200/eee/333?text=MCB' },
    { name: 'Wiring Cables', image: 'https://placehold.co/200x200/eee/333?text=Cable' },
    { name: 'Ceiling Fans', image: 'https://placehold.co/200x200/eee/333?text=Fan' },
  ];

  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">Popular Products</h2>
          <p className="text-gray-600 mt-2">Browse our best-selling electrical items</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="inline-block text-blue-600 hover:text-blue-800 font-medium">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreviewSection;