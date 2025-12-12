// src/pages/admin/VacancyManager.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VacancyManager() {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    _id: '',
    title: '',
    description: '',
    isActive: true
  });

  const token = localStorage.getItem('adminToken');
  const navigate = useNavigate();

  // Fetch all vacancies (admin can see inactive too)
  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        // Note: We use the public endpoint, but admin can see all
        // If you want to see inactive ones, you'd need a separate admin endpoint
        // For now, we'll assume /api/vacancies returns all for admin (you can adjust backend if needed)
        const res = await axios.get('http://localhost:5000/api/vacancies');
        setVacancies(res.data);
      } catch (err) {
        setError('Failed to load vacancies: ' + (err.response?.data?.message || err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Title and description are required.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const url = formData._id
      ? `http://localhost:5000/api/admin/vacancies/${formData._id}`
      : 'http://localhost:5000/api/admin/vacancies';

    const method = formData._id ? 'put' : 'post';

    try {
      await axios[method](url, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Reset form
      setIsFormOpen(false);
      setFormData({ _id: '', title: '', description: '', isActive: true });

      // Refresh list
      const res = await axios.get('http://localhost:5000/api/vacancies');
      setVacancies(res.data);
    } catch (err) {
      setError('Save failed: ' + (err.response?.data?.message || 'Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (vacancy) => {
    setFormData({
      _id: vacancy._id,
      title: vacancy.title,
      description: vacancy.description,
      isActive: vacancy.isActive !== false // default true if missing
    });
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this vacancy?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/admin/vacancies/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const res = await axios.get('http://localhost:5000/api/vacancies');
      setVacancies(res.data);
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
          <h1 className="text-2xl font-bold text-gray-800">Vacancy Manager</h1>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsFormOpen(!isFormOpen);
                if (isFormOpen) {
                  setFormData({ _id: '', title: '', description: '', isActive: true });
                  setError('');
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
            >
              {isFormOpen ? 'Cancel' : 'Add New Vacancy'}
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
              {formData._id ? 'Edit Vacancy' : 'Add New Vacancy'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  name="isActive"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="ml-2 block text-sm text-gray-700">
                  Active (visible on Careers page)
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition disabled:opacity-50 flex items-center"
              >
                {isSubmitting ? 'Saving...' : formData._id ? 'Update Vacancy' : 'Add Vacancy'}
              </button>
            </form>
          </div>
        )}

        {/* Vacancies List */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : vacancies.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No vacancies found.</p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Your First Vacancy
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {vacancies.map((vacancy) => (
              <div
                key={vacancy._id}
                className={`p-5 rounded-lg border ${
                  vacancy.isActive
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{vacancy.title}</h3>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${
                        vacancy.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {vacancy.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(vacancy)}
                      className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(vacancy._id)}
                      className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 whitespace-pre-line">
                  {vacancy.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Posted: {new Date(vacancy.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}