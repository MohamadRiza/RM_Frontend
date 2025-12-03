// client/src/pages/ProductsGallery.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Grouped products by category
const productsByCategory = {
  'Time & Decor': [
    { id: 1, name: 'Wall Clock', image: 'https://images.pexels.com/photos/21294/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Ladies / Gents / Watches', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ],
  'Lighting & Electrical': [
    { id: 3, name: 'Torch', image: 'https://images.pexels.com/photos/733087/pexels-photo-733087.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Wire / Cable', image: 'https://i0.wp.com/elecshop.lk/wp-content/uploads/2021/08/1-19-1.png?resize=300%2C300&ssl=1' },
    { id: 5, name: 'Mosquito Bat', image: 'https://onlineworld.lk/wp-content/uploads/2025/10/4-1.jpg' },
  ],
  'Fans': [
    { id: 6, name: 'Ceiling Fan', image: 'https://www.kdk.com.my/wp-content/uploads/2020/07/RegulatorType-K12VO.jpg' },
    { id: 7, name: 'Table Fan', image: 'https://supersavings.lk/wp-content/uploads/2025/02/kawashi-tf21.jpg' },
    { id: 8, name: 'Stand Fan', image: 'https://i0.wp.com/elecshop.lk/wp-content/uploads/2021/08/14-3-2.png?fit=600%2C609&ssl=1' },
    { id: 9, name: 'Wall Fan', image: 'https://galaxyappliances.pk/wp-content/uploads/2024/10/Bracket-Fan.webp' },
  ],
  'Cooking Appliances': [
    { id: 10, name: 'Gas Cooker – 1 Burner', image: 'https://laksela.lk/wp-content/uploads/2020/12/9568-1.jpg' },
    { id: 11, name: 'Gas Cooker – 2 Burner', image: 'https://img.drz.lazcdn.com/static/lk/p/3233aea0912865847e96d43a0bb9a470.jpg_720x720q80.jpg' },
    { id: 12, name: 'Gas Cooker – 3 Burner', image: 'https://royalmart.lk/assets/products/12-2024/954f95403c6cd9e7629bcdadb5da64db.jpeg' },
    { id: 13, name: 'Wick Stove', image: 'https://5.imimg.com/data5/ANDROID/Default/2025/11/560887359/LK/MV/HZ/1101769/product-jpeg-500x500.jpg' },
    { id: 14, name: 'Hot Plate', image: 'https://image.made-in-china.com/2f0j00gcpbLeosZEqZ/Single-Burner-1000W-Electric-Hot-Plate-Fast-Cooking-Multi-Functions-Portable-Electric-Cooker.webp' },
  ],
  'Kitchen Essentials': [
    { id: 15, name: 'Rice Cooker', image: 'https://assets.epicurious.com/photos/5e83af6772d6ca0008d69123/master/pass/RiceCooker_HERO_032720_5770_VOG.jpg' },
    { id: 16, name: 'Electric Kettle', image: 'https://img.drz.lazcdn.com/static/lk/p/770d62d9e69c5db672091577f1cd474b.jpg_720x720q80.jpg' },
    { id: 17, name: 'Whistle Kettle', image: 'https://static-01.daraz.lk/p/fc23952bc4ae5049967f6e5182442e3c.jpg' },
    { id: 18, name: 'Flask', image: 'https://static-01.daraz.lk/p/8700fbb463ecdc67e9d5b094a478e277.jpg' },
    { id: 19, name: 'Mug / Tea Glass', image: 'https://www.rubberstamps.lk/wp-content/uploads/2019/06/sublimation-black-magic-mug_matte-500x500-1.jpg' },
  ],
  'Kitchen Appliances': [
    { id: 20, name: 'Oven / Microwave', image: 'https://static-01.daraz.lk/p/mdc/2a818636ff3002285f0852cd64db5fe1.jpg' },
    { id: 21, name: 'Air Fryer', image: 'https://media3.bosch-home.com/Images/600x/26145042_BO-AirFryer_Serie6_MAF6_Stage_1200x676.jpg' },
    { id: 22, name: 'Waffle Maker', image: 'https://assets.wfcdn.com/im/4704756/resize-h500-w750%5Ecompr-r85/2559/255931896/default_name.jpg' },
    { id: 23, name: 'Sandwich Maker', image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/sandwich-maker/s/7/y/elato-bs203-4-slice-sandwich-maker-wipro-original-imagyh4z5hfffrzk.jpeg' },
    { id: 24, name: 'Grill Maker', image: 'https://longwayindia.com/cdn/shop/files/1_412ff4b8-164a-4c1e-9aea-62e0f61b622d.jpg' },
    { id: 25, name: 'Donut Maker', image: 'https://images.thdstatic.com/productImages/dc28d522-f81b-4e7b-b237-3895695f3159/svn/white-chef-buddy-specialty-dessert-makers-hw031059-64_1000.jpg' },
  ],
  'Kitchen Tools': [
    { id: 26, name: 'Blender / Mixer', image: 'https://supersavings.lk/wp-content/uploads/2025/11/bright-blender-br-495.jpg' },
    { id: 27, name: 'Vegetable Chopper', image: 'https://m.media-amazon.com/images/I/717SCiqXlCL._AC_SL1500_.jpg' },
    { id: 28, name: 'Egg Beater / Hand Mixer', image: 'https://www.raf-china.com/wp-content/uploads/2024/12/%EF%BC%96-768x768.jpg' },
    { id: 29, name: 'Polythene Sealer', image: 'https://img.drz.lazcdn.com/g/kf/Sf155955f34b84e96b782e469d35a94cfc.jpg_720x720q80.jpg' },
    { id: 30, name: 'Kitchen Scale', image: 'https://shoppingkingdom.lk/wp-content/uploads/2020/04/Kitchen-scale.jpeg' },
  ],
  'Personal Care': [
    { id: 31, name: 'Hair Dryer', image: 'https://img.drz.lazcdn.com/static/lk/p/f58886c92d3d97a111cff665a0213596.jpg_960x960q80.jpg_.webp' },
    { id: 32, name: 'Hair Iron', image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/5590010/2025/1/22/62c446b0-fb66-4b53-9f6d-2931835085941737535090347-Ikonic-Professional-Gleam-Hair-Straightener-30---Black--Rose-1.jpg' },
    { id: 33, name: 'Trimmer – Charge / Plug', image: 'https://vgrofficial.in/cdn/shop/collections/TRIMMER_1.jpg?v=1707392538&width=600' },
    { id: 34, name: 'Iron – Dry / Heavy', image: 'https://tpmart.lk/wp-content/uploads/2024/02/Misaki-Iron-Heavy-1000W6.jpg' },
    { id: 35, name: 'Massagers', image: 'https://static-01.daraz.lk/p/a426e391ea61475d8d1f7aa243e3de0d.jpg' },
    { id: 36, name: 'Personal Scale', image: 'https://m.media-amazon.com/images/I/61Kv9Xqz0dL._AC_SL1500_.jpg' },
  ],
  'Electronics': [
    { id: 37, name: 'Calculator', image: 'https://gadgetasia.lk/wp-content/uploads/2024/07/ct-500-citizen-calculator-gadget-asia-lk-best-price-sri-lanka.jpg.webp' },
    { id: 38, name: 'Radio – Mini & Big', image: 'https://img.drz.lazcdn.com/g/kf/S33b096320d044b3d9b1ca98e71e7bc4ch.jpg_720x720q80.jpg' },
    { id: 39, name: 'Speakers / Subwoofer', image: 'https://images.philips.com/is/image/philipsconsumer/df545073a8474e55bb16b0c40120ff1c?wid=700&hei=700' },
    { id: 40, name: 'Mini Speakers', image: 'https://cdn.gqmobiles.lk/wp-content/uploads/2025/11/gq-mobiles-jbl-partybox-on-the-go-2-with-mic.png' },
  ]
};

const ProductsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Get all categories
  const categories = ['All', ...Object.keys(productsByCategory)];

  // Get products to display
  const displayedProducts = activeCategory === 'All' 
    ? Object.values(productsByCategory).flat() 
    : productsByCategory[activeCategory] || [];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Browse our extensive range of electrical and home appliance items — all available for wholesale and retail.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing <span className="font-medium">{displayedProducts.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden
                  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/300x300/e2e8f0/64748b?text=No+Image';
                      e.target.className = 'w-full h-full object-contain';
                    }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-gray-900 mt-2 text-sm leading-tight">
                    {product.name}
                  </h3>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Link
                      to="/contact"
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                    >
                      Contact to Purchase
                      <svg
                        className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-7 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Contact Us for More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsGallery;