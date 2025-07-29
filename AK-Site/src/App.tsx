import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductPage from './components/ProductPage';
import InsurancePage from './pages/InsurancePage';
import { initScrollAnimations } from './utils/scrollObserver';
import './styles/main.css';

function App() {
  useEffect(() => {
    const cleanup = initScrollAnimations();

    // Add scroll effect to header
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      cleanup();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/insurance/life-insurance" element={<InsurancePage />} />
        <Route path="/insurance/income-protection" element={<InsurancePage />} />
        <Route path="/insurance/critical-illness" element={<InsurancePage />} />
        <Route path="/insurance/accident-sickness-unemployment" element={<InsurancePage />} />
        <Route path="/insurance/home-buildings-contents" element={<InsurancePage />} />

        {/* Individual Product Pages */}
        <Route path="/products/first-time-buyers" element={<ProductPage />} />
        <Route path="/products/home-mover" element={<ProductPage />} />
        <Route path="/products/remortgage" element={<ProductPage />} />
        <Route path="/products/buy-to-let" element={<ProductPage />} />
        <Route path="/products/new-build" element={<ProductPage />} />
        <Route path="/products/help-to-buy" element={<ProductPage />} />
        <Route path="/products/limited-companies" element={<ProductPage />} />

        {/* Calculators Page */}
        <Route path="/calculators" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;