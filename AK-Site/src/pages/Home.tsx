import React from 'react';
import { Layout, Counter, Card, Button } from '../components';

const Home: React.FC = () => {
  return (
    <Layout title="Home - My React App">
      <div className="home-page">
        <section className="hero">
          <h1>Welcome to My React TypeScript App</h1>
          <p>Built with Vite, React, and TypeScript</p>
          <Button variant="primary" size="large">
            Get Started
          </Button>
        </section>

        <section className="features">
          <h2>Features</h2>
          <div className="features-grid">
            <Card 
              title="React 18" 
              subtitle="Latest React features"
              hoverable
            >
              <p>Built with the latest React 18 features including concurrent rendering and automatic batching.</p>
            </Card>
            
            <Card 
              title="TypeScript" 
              subtitle="Type-safe development"
              hoverable
            >
              <p>Full TypeScript support for better development experience and fewer runtime errors.</p>
            </Card>
            
            <Card 
              title="Vite" 
              subtitle="Lightning fast"
              hoverable
            >
              <p>Super fast development server and optimized production builds with Vite.</p>
            </Card>
          </div>
        </section>

        <section className="demo">
          <h2>Interactive Demo</h2>
          <Counter initialCount={0} step={1} min={0} max={100} />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
