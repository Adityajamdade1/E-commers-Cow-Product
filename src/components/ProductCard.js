import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: isMobile ? '6px' : '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: isMobile ? '100%' : '250px'
  };

  const imageStyle = {
    width: '100%',
    height: isMobile ? '140px' : '160px',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: isMobile ? '0.8rem' : '1rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '0.4rem'
  };

  const descriptionStyle = {
    color: '#666',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
    flex: 1,
    ...(isMobile && {
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    })
  };

  const priceStyle = {
    fontSize: isMobile ? '1.1rem' : '1.3rem',
    fontWeight: '700',
    color: '#F46E76',
    marginBottom: '0.8rem'
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    marginBottom: '0.8rem',
    fontSize: isMobile ? '0.8rem' : '0.85rem',
    color: '#666'
  };

  const buttonStyle = {
    backgroundColor: product.inStock ? '#F46E76' : '#ccc',
    color: 'white',
    border: 'none',
    padding: isMobile ? '0.5rem 0.8rem' : '0.6rem 1rem',
    borderRadius: '6px',
    fontSize: isMobile ? '0.85rem' : '0.9rem',
    fontWeight: '600',
    cursor: product.inStock ? 'pointer' : 'not-allowed',
    transition: 'background-color 0.3s ease',
    width: '100%'
  };

  const stockBadgeStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: product.inStock ? '#22c55e' : '#ef4444',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600'
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (product.inStock) {
      addToCart(product);
      // Show brief success message
      const originalText = e.target.textContent;
      e.target.textContent = '✓ Added!';
      e.target.style.backgroundColor = '#28a745';
      setTimeout(() => {
        e.target.textContent = originalText;
        e.target.style.backgroundColor = '#F46E76';
      }, 1000);
    }
  };

  const handleCardClick = () => {
    window.location.href = `/product/${product.id}`;
  };

  return (
    <div 
      style={cardStyle}
      onClick={handleCardClick}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-4px)';
        e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={{ position: 'relative' }}>
        <img src={product.image} alt={product.name} style={imageStyle} />
        <div style={stockBadgeStyle}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{product.name}</h3>
        <p style={descriptionStyle}>{product.description}</p>
        <div style={priceStyle}>{formatPrice(product.price)}</div>
        <div style={ratingStyle}>
          <span>⭐ {product.rating}</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <button
          style={buttonStyle}
          onClick={handleAddToCart}
          onMouseEnter={(e) => {
            if (product.inStock) {
              e.target.style.backgroundColor = '#E55A63';
            }
          }}
          onMouseLeave={(e) => {
            if (product.inStock) {
              e.target.style.backgroundColor = '#F46E76';
            }
          }}
        >
          {product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
