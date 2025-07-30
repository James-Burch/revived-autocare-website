import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductPage from './components/ProductPage';
import InsurancePage from './pages/InsurancePage';
import CalculatorPage from './pages/CalculatorPage';
import { initScrollAnimations } from './utils/scrollObserver';
import './styles/main.css';

function App() {
  useEffect(() => {
    const cleanup = initScrollAnimations();

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
        <Route path="/mortgages/:productType" element={<ProductPage />} />
        <Route path="/insurance/:insuranceType" element={<InsurancePage />} />
        <Route path="/calculators" element={<CalculatorPage />} />
        <Route path="/mortgage-calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;