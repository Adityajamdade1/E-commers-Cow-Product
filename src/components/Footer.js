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
    fontSize: '1.5rem',
    marginTop: '1rem'
  };

  const socialLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    fill: 'currentColor'
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
            <div>
              <h4 style={{ ...titleStyle, fontSize: '1rem', marginBottom: '0.5rem', marginTop: '1.5rem' }}>
                Follow Us
              </h4>
              <div style={socialStyle}>
              <a 
                href="https://www.facebook.com/cowproducts" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.backgroundColor = '#1877F2';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg style={iconStyle} viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/cowproducts" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.backgroundColor = '#E4405F';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg style={iconStyle} viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/cowproducts" 
                target="_blank" 
                rel="noopener noreferrer"
                style={socialLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.backgroundColor = '#FF0000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg style={iconStyle} viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              </div>
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
