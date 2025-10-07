import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/currency';

const ProductDetail = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();

  // In a real app, you'd get this from URL params
  const product = products.find(p => p.id === parseInt(params.productId)) || products[0];

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  };

  const breadcrumbStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem',
    fontSize: '0.9rem',
    color: '#666'
  };

  const productStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'start'
  };

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const mainImageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
  };

  const thumbnailsStyle = {
    display: 'flex',
    gap: '0.5rem'
  };

  const thumbnailStyle = (isActive) => ({
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    border: isActive ? '3px solid #2c5530' : '3px solid transparent',
    transition: 'border-color 0.3s ease'
  });

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '0.5rem'
  };

  const priceStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#2c5530'
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1rem'
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666'
  };

  const stockStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500'
  };

  const quantityStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  };

  const quantityControlStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const quantityButtonStyle = {
    backgroundColor: '#f8f9fa',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: '600'
  };

  const quantityInputStyle = {
    border: 'none',
    padding: '0.5rem 1rem',
    textAlign: 'center',
    fontSize: '1rem',
    width: '60px'
  };

  const addToCartStyle = {
    backgroundColor: product.inStock ? '#2c5530' : '#ccc',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: product.inStock ? 'pointer' : 'not-allowed',
    transition: 'background-color 0.3s ease',
    width: '100%'
  };

  const featuresStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '12px',
    marginTop: '2rem'
  };

  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    color: '#333'
  };

  // Mock additional images (in real app, these would come from product data)
  const productImages = [
    product.image,
    product.image,
    product.image
  ];

  const handleAddToCart = () => {
    if (product.inStock) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={breadcrumbStyle}>
        <a href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</a>
        <span>/</span>
        <a href="/shop" style={{ color: '#666', textDecoration: 'none' }}>Shop</a>
        <span>/</span>
        <span style={{ color: '#333', fontWeight: '500' }}>{product.name}</span>
      </div>

      <div style={productStyle}>
        <div style={imageContainerStyle}>
          <img 
            src={productImages[selectedImage]} 
            alt={product.name}
            style={mainImageStyle}
          />
          <div style={thumbnailsStyle}>
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                style={thumbnailStyle(selectedImage === index)}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div style={infoStyle}>
          <div>
            <h1 style={titleStyle}>{product.name}</h1>
            <div style={priceStyle}>{formatPrice(product.price)}</div>
          </div>

          <div style={ratingStyle}>
            <span>⭐ {product.rating}</span>
            <span style={{ color: '#666' }}>({product.reviews} reviews)</span>
          </div>

          <p style={descriptionStyle}>{product.description}</p>

          <div style={stockStyle}>
            <span style={{ 
              color: product.inStock ? '#22c55e' : '#ef4444',
              fontSize: '1.2rem'
            }}>
              {product.inStock ? '✓' : '✗'}
            </span>
            <span style={{ color: product.inStock ? '#22c55e' : '#ef4444' }}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {product.inStock && (
            <div style={quantityStyle}>
              <span style={{ fontWeight: '500' }}>Quantity:</span>
              <div style={quantityControlStyle}>
                <button
                  style={quantityButtonStyle}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  style={quantityInputStyle}
                  min="1"
                />
                <button
                  style={quantityButtonStyle}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          )}

          <button
            style={addToCartStyle}
            onClick={handleAddToCart}
            onMouseEnter={(e) => {
              if (product.inStock) {
                e.target.style.backgroundColor = '#1e3a23';
              }
            }}
            onMouseLeave={(e) => {
              if (product.inStock) {
                e.target.style.backgroundColor = '#2c5530';
              }
            }}
          >
            {product.inStock ? `🛒 Add ${quantity} to Cart` : 'Out of Stock'}
          </button>
        </div>
      </div>

      <div style={featuresStyle}>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>Product Features</h3>
        <ul style={featureListStyle}>
          <li style={featureItemStyle}>
            <span>✓</span>
            <span>100% Organic and Natural</span>
          </li>
          <li style={featureItemStyle}>
            <span>✓</span>
            <span>From Grass-Fed Cows</span>
          </li>
          <li style={featureItemStyle}>
            <span>✓</span>
            <span>No Artificial Preservatives</span>
          </li>
          <li style={featureItemStyle}>
            <span>✓</span>
            <span>Fresh Daily Delivery</span>
          </li>
          <li style={featureItemStyle}>
            <span>✓</span>
            <span>Locally Sourced</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
