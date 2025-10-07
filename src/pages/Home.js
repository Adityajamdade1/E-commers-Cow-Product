import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 0.5rem' : '0 1rem'
  };

  const sectionStyle = {
    margin: isMobile ? '2rem 0' : '4rem 0'
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    textAlign: 'center',
    color: '#666',
    marginBottom: isMobile ? '2rem' : '3rem',
    maxWidth: '600px',
    margin: isMobile ? '0 auto 2rem' : '0 auto 3rem',
    padding: isMobile ? '0 1rem' : '0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '2rem' : '3rem'
  };

  const featuresStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isMobile ? '1.5rem' : '2rem',
    margin: isMobile ? '2rem 0' : '4rem 0'
  };

  const featureCardStyle = {
    textAlign: 'center',
    padding: isMobile ? '1.5rem' : '2rem',
    backgroundColor: 'white',
    borderRadius: isMobile ? '8px' : '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const featureIconStyle = {
    fontSize: isMobile ? '2.5rem' : '3rem',
    marginBottom: '1rem'
  };

  const featureTitleStyle = {
    fontSize: isMobile ? '1.2rem' : '1.3rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem'
  };

  const featureDescStyle = {
    color: '#666',
    lineHeight: '1.6',
    fontSize: isMobile ? '0.9rem' : '1rem'
  };

  const ctaStyle = {
    backgroundColor: '#f8f9fa',
    padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    borderRadius: isMobile ? '8px' : '12px',
    textAlign: 'center',
    margin: isMobile ? '2rem 0' : '4rem 0'
  };

  const ctaButtonStyle = {
    backgroundColor: '#2c5530',
    color: 'white',
    border: 'none',
    padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div>
      {/* Hero Carousel */}
      <div style={containerStyle}>
        <div style={{ margin: '2rem 0' }}>
          <Carousel />
        </div>
      </div>

      {/* Features Section */}
      <div style={containerStyle}>
        <div style={featuresStyle}>
          <div style={featureCardStyle}>
            <div style={featureIconStyle}>🚚</div>
            <h3 style={featureTitleStyle}>Free Delivery</h3>
            <p style={featureDescStyle}>
              Free delivery on orders over $50. Fresh products delivered to your doorstep.
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureIconStyle}>🌱</div>
            <h3 style={featureTitleStyle}>100% Organic</h3>
            <p style={featureDescStyle}>
              All our products are certified organic and sourced from local farms.
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureIconStyle}>❄️</div>
            <h3 style={featureTitleStyle}>Always Fresh</h3>
            <p style={featureDescStyle}>
              Temperature-controlled storage ensures maximum freshness and quality.
            </p>
          </div>
          <div style={featureCardStyle}>
            <div style={featureIconStyle}>🏆</div>
            <h3 style={featureTitleStyle}>Premium Quality</h3>
            <p style={featureDescStyle}>
              Award-winning dairy products that meet the highest quality standards.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Featured Products</h2>
          <p style={subtitleStyle}>
            Discover our most popular dairy products, loved by customers nationwide
          </p>
          <div style={gridStyle}>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={containerStyle}>
        <div style={ctaStyle}>
          <h2 style={titleStyle}>Ready to Experience Premium Dairy?</h2>
          <p style={subtitleStyle}>
            Join thousands of satisfied customers who trust us for their daily dairy needs.
            Free shipping on orders over ₹4,150!
          </p>
          <a href="/shop" style={ctaButtonStyle}>
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
