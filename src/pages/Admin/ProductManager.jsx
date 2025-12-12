// src/pages/admin/ProductManager.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiGenerating, setAiGenerating] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
    stock: '',
    category: ''
  });
  const [images, setImages] = useState([]); // New files only
  const [existingImages, setExistingImages] = useState([]); // For edit
  const fileInputRef = useRef(null);

  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  // Fetch products on load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        setError('Failed to load products: ' + (err.response?.data?.message || err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 4) {
      alert('You can only upload up to 4 images.');
      return;
    }
    setImages(files);
  };

  // AI Description Generator
  const generateDescription = async () => {
    if (!formData.name || !formData.category || !formData.price || !formData.stock) {
      setError('Please fill name, category, price, and stock first.');
      return;
    }

    setAiGenerating(true);
    setError('');
    try {
      const res = await axios.post(
        'http://localhost:5000/api/admin/ai/generate-description',
        {
          name: formData.name,
          category: formData.category,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock, 10)
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setFormData({ ...formData, description: res.data.description });
    } catch (err) {
      setError('AI generation failed: ' + (err.response?.data?.message || 'Please try again.'));
    } finally {
      setAiGenerating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price || !formData.stock || !formData.category) {
      setError('All fields are required.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    const url = formData._id
      ? `http://localhost:5000/api/admin/products/${formData._id}`
      : 'http://localhost:5000/api/admin/products';

    const method = formData._id ? 'put' : 'post';

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('description', formData.description.trim());
      formDataToSend.append('price', formData.price.trim());
      formDataToSend.append('stock', formData.stock.trim());
      formDataToSend.append('category', formData.category.trim());

      // Only append new images if selected
      if (images.length > 0) {
        images.forEach(file => {
          formDataToSend.append('images', file);
        });
      }

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      };

      await axios[method](url, formDataToSend, config);

      // Reset form
      setIsFormOpen(false);
      setFormData({ _id: '', name: '', description: '', price: '', stock: '', category: '' });
      setImages([]);
      setExistingImages([]);
      if (fileInputRef.current) fileInputRef.current.value = '';

      // Refresh list
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      setError('Save failed: ' + (err.response?.data?.message || 'Please check your connection.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      _id: product._id,
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      stock: product.stock.toString(),
      category: product.category
    });
    setExistingImages(product.images); // Show current images
    setImages([]); // No new files yet
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product? This cannot be undone.')) return;

    try {
      await axios.delete(`http://localhost:5000/api/admin/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Refresh
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      setError('Delete failed: ' + (err.response?.data?.message || 'Please try again.'));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Product Manager</h1>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsFormOpen(!isFormOpen);
                if (isFormOpen) {
                  setFormData({ _id: '', name: '', description: '', price: '', stock: '', category: '' });
                  setImages([]);
                  setExistingImages([]);
                  setError('');
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
            >
              {isFormOpen ? 'Cancel' : 'Add New Product'}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>

            <button
              onClick={() => navigate('/admin/dashboard')}
              className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Global Error */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        {isFormOpen && (
          <div className="bg-white p-6 rounded-lg shadow mb-8 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">
              {formData._id ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (LKR) *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stock *</label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={generateDescription}
                    disabled={aiGenerating}
                    className="text-sm text-blue-600 hover:underline flex items-center"
                  >
                    {aiGenerating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                      </>
                    ) : (
                      'Generate description with AI'
                    )}
                  </button>
                </div>
              </div>

              {/* Existing Images (Edit Mode) */}
              {formData._id && existingImages.length > 0 && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Images</label>
                  <div className="flex flex-wrap gap-2">
                    {existingImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Existing ${idx}`}
                        className="w-16 h-16 object-cover rounded border"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    To replace, upload new images below (up to 4). Leave blank to keep existing.
                  </p>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload New Images (up to 4)
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:opacity-50 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : formData._id ? (
                  'Update Product'
                ) : (
                  'Add Product'
                )}
              </button>
            </form>
          </div>
        )}

        {/* Products List */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No products found.</p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Your First Product
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
                  <p className="text-green-600 font-medium mt-1">LKR {product.price.toLocaleString()}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Stock: {product.stock} • {product.category}
                  </p>
                  <div className="mt-3 flex gap-3">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}