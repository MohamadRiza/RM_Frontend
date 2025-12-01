// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductsGallery from './pages/ProductsGallery';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // ✅ Import it
import TopBar from './components/TopBar';
import Careers from './pages/Careers';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;