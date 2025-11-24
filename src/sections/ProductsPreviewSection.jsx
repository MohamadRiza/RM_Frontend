// client/src/components/sections/ProductsPreviewSection.jsx
import { Link } from 'react-router-dom';

const ProductsPreviewSection = () => {
  const featuredProducts = [
    { name: 'Trimmers Salon Quality', image: 'https://vgrofficial.in/cdn/shop/collections/TRIMMER_1.jpg?crop=center&height=1200&v=1707392538&width=1200' },
    { name: 'Air Fryers', image: 'https://assets.aboutamazon.com/dims4/default/5894032/2147483647/strip/false/crop/1600x900+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fd0%2Ffb%2F57df9cc5463d8d12cb810c57ea4e%2F0-top-pic.jpg' },
    { name: 'Clocks', image: 'https://images.pexels.com/photos/552598/pexels-photo-552598.jpeg' },
    { name: 'Fans', image: 'https://buyabans.com/cdn-cgi/imagedelivery/OgVIyabXh1YHxwM0lBwqgA/product/8202/1202_1_1_1.jpg/public' },
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