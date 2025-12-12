// src/components/ProtectedRoute.jsx
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check token once on mount
    const token = localStorage.getItem('adminToken');
    setIsAuthenticated(!!token);
  }, []);

  // While checking, show nothing (or a loader)
  if (isAuthenticated === null) {
    return null; // or <div>Loading...</div>
  }

  // If not authenticated, redirect
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Otherwise, render the protected page
  return children;
}