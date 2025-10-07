import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';

// Wrapper component to handle URL parameters for ProductDetail
const ProductDetailWrapper = () => {
  // Extract product ID from URL
  const pathParts = window.location.pathname.split('/');
  const id = pathParts[pathParts.length - 1];
  return <ProductDetail productId={id || '1'} />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetailWrapper />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Fallback route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// Simple 404 component
const NotFound = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '4rem auto',
    padding: '2rem',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '1rem'
  };

  const messageStyle = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem'
  };

  const buttonStyle = {
    backgroundColor: '#2c5530',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404</h1>
      <p style={messageStyle}>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" style={buttonStyle}>
        Go Back Home
      </a>
    </div>
  );
};

export default AppRoutes;
