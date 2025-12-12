// src/pages/admin/Dashboard.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    vacancies: 0,
    messages: 0
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch stats on load
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const [productsRes, vacanciesRes, messagesRes] = await Promise.all([
          axios.get('http://localhost:5000/api/products'),
          axios.get('http://localhost:5000/api/vacancies'),
          axios.get('http://localhost:5000/api/admin/contact/messages', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        setStats({
          products: productsRes.data.length,
          vacancies: vacanciesRes.data.length,
          messages: messagesRes.data.length
        });
      } catch (error) {
        console.error('Failed to load dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Products Card */}
          <Link to="/admin/products" className="block">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-medium text-gray-700">Products</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">{stats.products}</p>
              <p className="text-sm text-gray-500 mt-1">Manage all products</p>
            </div>
          </Link>

          {/* Vacancies Card */}
          <Link to="/admin/vacancies" className="block">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-medium text-gray-700">Vacancies</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">{stats.vacancies}</p>
              <p className="text-sm text-gray-500 mt-1">Manage job postings</p>
            </div>
          </Link>

          {/* Messages Card */}
          <Link to="/admin/messages" className="block">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-medium text-gray-700">Messages</h3>
              <p className="text-3xl font-bold text-purple-600 mt-2">{stats.messages}</p>
              <p className="text-sm text-gray-500 mt-1">View contact form submissions</p>
            </div>
          </Link>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Admin Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admin/profile"
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}