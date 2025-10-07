import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerStyle = {
    backgroundColor: '#2c5530',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  };

  const logoStyle = {
    fontSize: isMobile ? '1.5rem' : '1.8rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const navStyle = {
    display: isMobile ? (isMobileMenuOpen ? 'flex' : 'none') : 'flex',
    gap: isMobile ? '1rem' : '2rem',
    alignItems: 'center',
    ...(isMobile && {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: '#2c5530',
      flexDirection: 'column',
      padding: '1rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000,
      borderTop: '1px solid rgba(255,255,255,0.1)'
    })
  };

  const mobileMenuButtonStyle = {
    display: isMobile ? 'flex' : 'none',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };

  const cartBadgeStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const badgeStyle = {
    backgroundColor: '#ff6b35',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    position: 'absolute',
    top: '-8px',
    right: '-8px'
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <span>🐄</span>
          <span>Cow Products</span>
        </div>
        
        <button 
          style={mobileMenuButtonStyle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav style={navStyle}>
          <a href="/" style={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="/shop" style={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
          <a href="/about" style={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="/contact" style={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <div style={cartBadgeStyle}>
            <a href="/cart" style={linkStyle} onClick={() => setIsMobileMenuOpen(false)}>🛒 Cart</a>
            {getCartItemsCount() > 0 && (
              <span style={badgeStyle}>{getCartItemsCount()}</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
