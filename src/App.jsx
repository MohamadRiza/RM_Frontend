// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductsGallery from "./pages/ProductsGallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Import it
import TopBar from "./components/TopBar";
import Careers from "./pages/Careers";
import AdminLogin from "./pages/Admin/AdminLogin";
import ProtectedRoute from "./pages/Admin/ProtectedRoute";
import Dashboard from "./pages/Admin/Dashboard";
import ProductManager from "./pages/Admin/ProductManager";
import VacancyManager from "./pages/Admin/VacancyManager";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add here */}
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsGallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />

            <Route path="/admin/login" element={<AdminLogin />} />

            <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin/products" element={<ProtectedRoute><ProductManager /></ProtectedRoute>} />
            <Route path="/admin/vacancies" element={<ProtectedRoute><VacancyManager /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
