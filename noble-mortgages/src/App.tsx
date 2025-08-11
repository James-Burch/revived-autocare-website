import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="container" style={{ padding: '2rem 0' }}>
                  <h1>Noble Mortgages</h1>
                  <p>Website coming soon...</p>
                  <p style={{ color: 'var(--color-primary)' }}>
                    Tiffany blue color test - this should appear in the brand color.
                  </p>
                  <div style={{ marginTop: '2rem' }}>
                    <button className="btn-primary" style={{ marginRight: '1rem' }}>
                      Primary Button
                    </button>
                    <button className="btn-secondary">
                      Secondary Button
                    </button>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <h2>Test Navigation</h2>
                    <p>Try the navigation menu above - desktop dropdowns and mobile hamburger menu should work!</p>
                  </div>
                </div>
              } 
            />
            {/* Placeholder routes for testing navigation */}
            <Route path="/about" element={<div className="container" style={{ padding: '2rem 0' }}><h1>About Page</h1><p>About page coming soon...</p></div>} />
            <Route path="/mortgages" element={<div className="container" style={{ padding: '2rem 0' }}><h1>Mortgages</h1><p>Mortgages page coming soon...</p></div>} />
            <Route path="/insurance" element={<div className="container" style={{ padding: '2rem 0' }}><h1>Insurance</h1><p>Insurance page coming soon...</p></div>} />
            <Route path="/calculators" element={<div className="container" style={{ padding: '2rem 0' }}><h1>Calculators</h1><p>Calculators page coming soon...</p></div>} />
            <Route path="/faqs" element={<div className="container" style={{ padding: '2rem 0' }}><h1>FAQs</h1><p>FAQs page coming soon...</p></div>} />
            <Route path="/contact" element={<div className="container" style={{ padding: '2rem 0' }}><h1>Contact</h1><p>Contact page coming soon...</p></div>} />
            {/* Catch all other routes for now */}
            <Route path="*" element={<div className="container" style={{ padding: '2rem 0' }}><h1>Page Coming Soon</h1><p>This page is under construction.</p></div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;