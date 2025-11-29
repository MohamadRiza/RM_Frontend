// client/src/pages/ProductsGallery.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const allProducts = [
  // 🕰️ TIME & DECOR
  { id: 1, name: 'Wall Clock', category: 'Time & Decor', image: 'https://images.pexels.com/photos/21294/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Ladies / Gents / Watches', category: 'Time & Decor', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // 💡 LIGHTING & BASIC ELECTRICAL
  { id: 3, name: 'Torch', category: 'Lighting', image: 'https://images.pexels.com/photos/733087/pexels-photo-733087.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Wire / Cable', category: 'Electrical', image: 'https://i0.wp.com/elecshop.lk/wp-content/uploads/2021/08/1-19-1.png?resize=300%2C300&ssl=1' },
  { id: 5, name: 'Mosquito Bat', category: 'Electrical', image: 'https://onlineworld.lk/wp-content/uploads/2025/10/4-1.jpg' },

  // 🌀 FANS
  { id: 6, name: 'Ceiling Fan', category: 'Fans', image: 'https://www.kdk.com.my/wp-content/uploads/2020/07/RegulatorType-K12VO.jpg' },
  { id: 7, name: 'Table Fan', category: 'Fans', image: 'https://supersavings.lk/wp-content/uploads/2025/02/kawashi-tf21.jpg' },
  { id: 8, name: 'Stand Fan', category: 'Fans', image: 'https://i0.wp.com/elecshop.lk/wp-content/uploads/2021/08/14-3-2.png?fit=600%2C609&ssl=1' },
  { id: 9, name: 'Wall Fan', category: 'Fans', image: 'https://galaxyappliances.pk/wp-content/uploads/2024/10/Bracket-Fan.webp' },

  // 🔥 COOKING
  { id: 10, name: 'Gas Cooker – 1 Burner', category: 'Cooking', image: 'https://laksela.lk/wp-content/uploads/2020/12/9568-1.jpg' },
  { id: 11, name: 'Gas Cooker – 2 Burner', category: 'Cooking', image: 'https://img.drz.lazcdn.com/static/lk/p/3233aea0912865847e96d43a0bb9a470.jpg_720x720q80.jpg' },
  { id: 12, name: 'Gas Cooker – 3 Burner', category: 'Cooking', image: 'https://royalmart.lk/assets/products/12-2024/954f95403c6cd9e7629bcdadb5da64db.jpeg' },
  { id: 13, name: 'Wick Stove', category: 'Cooking', image: 'https://5.imimg.com/data5/ANDROID/Default/2025/11/560887359/LK/MV/HZ/1101769/product-jpeg-500x500.jpg' },
  { id: 14, name: 'Hot Plate', category: 'Cooking', image: 'https://image.made-in-china.com/2f0j00gcpbLeosZEqZ/Single-Burner-1000W-Electric-Hot-Plate-Fast-Cooking-Multi-Functions-Portable-Electric-Cooker.webp' },

  // 🍚 KITCHEN ESSENTIALS
  { id: 15, name: 'Rice Cooker', category: 'Kitchen', image: 'https://assets.epicurious.com/photos/5e83af6772d6ca0008d69123/master/pass/RiceCooker_HERO_032720_5770_VOG.jpg' },
  { id: 16, name: 'Electric Kettle', category: 'Kitchen', image: 'https://img.drz.lazcdn.com/static/lk/p/770d62d9e69c5db672091577f1cd474b.jpg_720x720q80.jpg' },
  { id: 17, name: 'Whistle Kettle', category: 'Kitchen', image: 'https://static-01.daraz.lk/p/fc23952bc4ae5049967f6e5182442e3c.jpg' },
  { id: 18, name: 'Flask', category: 'Kitchen', image: 'https://static-01.daraz.lk/p/8700fbb463ecdc67e9d5b094a478e277.jpg' },
  { id: 19, name: 'Mug / Tea Glass', category: 'Kitchen', image: 'https://www.rubberstamps.lk/wp-content/uploads/2019/06/sublimation-black-magic-mug_matte-500x500-1.jpg' },

  // 🍳 KITCHEN APPLIANCES
  { id: 20, name: 'Oven / Microwave', category: 'Kitchen', image: 'https://static-01.daraz.lk/p/mdc/2a818636ff3002285f0852cd64db5fe1.jpg' },
  { id: 21, name: 'Air Fryer', category: 'Kitchen', image: 'https://media3.bosch-home.com/Images/600x/26145042_BO-AirFryer_Serie6_MAF6_Stage_1200x676.jpg' },
  { id: 22, name: 'Waffle Maker', category: 'Kitchen', image: 'https://assets.wfcdn.com/im/4704756/resize-h500-w750%5Ecompr-r85/2559/255931896/default_name.jpg' },
  { id: 23, name: 'Sandwich Maker', category: 'Kitchen', image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/sandwich-maker/s/7/y/elato-bs203-4-slice-sandwich-maker-wipro-original-imagyh4z5hfffrzk.jpeg' },
  { id: 24, name: 'Grill Maker', category: 'Kitchen', image: 'https://longwayindia.com/cdn/shop/files/1_412ff4b8-164a-4c1e-9aea-62e0f61b622d.jpg' },
  { id: 25, name: 'Donut Maker', category: 'Kitchen', image: 'https://images.thdstatic.com/productImages/dc28d522-f81b-4e7b-b237-3895695f3159/svn/white-chef-buddy-specialty-dessert-makers-hw031059-64_1000.jpg' },

  // 🔪 KITCHEN TOOLS
  { id: 26, name: 'Blender / Mixer', category: 'Kitchen Tools', image: 'https://supersavings.lk/wp-content/uploads/2025/11/bright-blender-br-495.jpg' },
  { id: 27, name: 'Vegetable Chopper', category: 'Kitchen Tools', image: 'https://m.media-amazon.com/images/I/717SCiqXlCL._AC_SL1500_.jpg' },
  { id: 28, name: 'Egg Beater / Hand Mixer', category: 'Kitchen Tools', image: 'https://www.raf-china.com/wp-content/uploads/2024/12/%EF%BC%96-768x768.jpg' },
  { id: 29, name: 'Polythene Sealer', category: 'Kitchen Tools', image: 'https://img.drz.lazcdn.com/g/kf/Sf155955f34b84e96b782e469d35a94cfc.jpg_720x720q80.jpg' },
  { id: 30, name: 'Kitchen Scale', category: 'Kitchen Tools', image: 'https://shoppingkingdom.lk/wp-content/uploads/2020/04/Kitchen-scale.jpeg' },

  // 👕 PERSONAL CARE
  { id: 31, name: 'Hair Dryer', category: 'Personal Care', image: 'https://img.drz.lazcdn.com/static/lk/p/f58886c92d3d97a111cff665a0213596.jpg_960x960q80.jpg_.webp' },
  { id: 32, name: 'Hair Iron', category: 'Personal Care', image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/5590010/2025/1/22/62c446b0-fb66-4b53-9f6d-2931835085941737535090347-Ikonic-Professional-Gleam-Hair-Straightener-30---Black--Rose-1.jpg' },
  { id: 33, name: 'Trimmer – Charge / Plug', category: 'Personal Care', image: 'https://vgrofficial.in/cdn/shop/collections/TRIMMER_1.jpg?v=1707392538&width=600' },
  { id: 34, name: 'Iron – Dry / Heavy', category: 'Home Care', image: 'https://tpmart.lk/wp-content/uploads/2024/02/Misaki-Iron-Heavy-1000W6.jpg' },
  { id: 35, name: 'Massagers', category: 'Personal Care', image: 'https://static-01.daraz.lk/p/a426e391ea61475d8d1f7aa243e3de0d.jpg' },
  { id: 36, name: 'Personal Scale', category: 'Health', image: 'https://m.media-amazon.com/images/I/61Kv9Xqz0dL._AC_SL1500_.jpg' },

  // 📻 ELECTRONICS
  { id: 37, name: 'Calculator', category: 'Electronics', image: 'https://gadgetasia.lk/wp-content/uploads/2024/07/ct-500-citizen-calculator-gadget-asia-lk-best-price-sri-lanka.jpg.webp' },
  { id: 38, name: 'Radio – Mini & Big', category: 'Electronics', image: 'https://img.drz.lazcdn.com/g/kf/S33b096320d044b3d9b1ca98e71e7bc4ch.jpg_720x720q80.jpg' },
  { id: 39, name: 'Speakers / Subwoofer', category: 'Electronics', image: 'https://images.philips.com/is/image/philipsconsumer/df545073a8474e55bb16b0c40120ff1c?wid=700&hei=700' },
  { id: 40, name: 'Mini Speakers', category: 'Electronics', image: 'https://cdn.gqmobiles.lk/wp-content/uploads/2025/11/gq-mobiles-jbl-partybox-on-the-go-2-with-mic.png' },
];

const ProductsGallery = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Products</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Rich More offers 10,000+ electrical & home appliance items — from kitchen gadgets to industrial tools — all available for wholesale and retail in Pettah, Colombo.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden
                transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container - Fixed Height */}
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

              {/* Content - Grows to fill space */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">
                  {product.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-2 text-sm leading-tight flex-grow">
                  {product.name}
                </h3>
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                  >
                    View Details
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