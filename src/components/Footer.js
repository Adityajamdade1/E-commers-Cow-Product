import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const footerStyle = {
    backgroundColor: '#D63447',
    color: 'white',
    padding: isMobile ? '2rem 0 1rem' : '3rem 0 1rem',
    marginTop: isMobile ? '2rem' : '4rem'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '0 0.5rem' : '0 1rem'
  };

  const footerContentStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '1.5rem' : '2rem'
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const titleStyle = {
    fontSize: isMobile ? '1.1rem' : '1.2rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  };

  const linkStyle = {
    color: '#ccc',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    fontSize: isMobile ? '0.9rem' : '1rem'
  };

  const bottomStyle = {
    borderTop: '1px solid #333',
    paddingTop: '1rem',
    textAlign: 'center',
    color: '#ccc',
    fontSize: isMobile ? '0.8rem' : '0.9rem'
  };

  const socialStyle = {
    display: 'flex',
    gap: '1rem',
    fontSize: '1.5rem'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={footerContentStyle}>
          <div style={sectionStyle}>
            <h3 style={titleStyle}>🐄 Cow Products</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Premium dairy products from happy, grass-fed cows. 
              Fresh, organic, and delivered to your doorstep.
            </p>
            <div style={socialStyle}>
              <span style={linkStyle}>📘</span>
              <span style={linkStyle}>📷</span>
              <span style={linkStyle}>🐦</span>
            </div>
          </div>
          
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Quick Links</h3>
            <a href="/" style={linkStyle}>Home</a>
            <a href="/shop" style={linkStyle}>Shop</a>
            <a href="/about" style={linkStyle}>About Us</a>
            <a href="/contact" style={linkStyle}>Contact</a>
          </div>
          
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Categories</h3>
            <a href="/shop?category=milk" style={linkStyle}>Fresh Milk</a>
            <a href="/shop?category=cheese" style={linkStyle}>Cheese</a>
            <a href="/shop?category=butter" style={linkStyle}>Butter</a>
            <a href="/shop?category=yogurt" style={linkStyle}>Yogurt</a>
          </div>
          
          <div style={sectionStyle}>
            <h3 style={titleStyle}>Contact Info</h3>
            <p style={{ color: '#ccc' }}>📍 123 Farm Road, Dairy Valley</p>
            <p style={{ color: '#ccc' }}>📞 (555) 123-4567</p>
            <p style={{ color: '#ccc' }}>✉️ info@cowproducts.com</p>
          </div>
        </div>
        
        <div style={bottomStyle}>
          <p>&copy; 2024 Cow Products. All rights reserved. | Made with ❤️ for dairy lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
