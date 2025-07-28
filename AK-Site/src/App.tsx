import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductPage from './components/ProductPage';
import './styles/globals.css';
import './styles/components.css';
import './styles/mortgage.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        
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