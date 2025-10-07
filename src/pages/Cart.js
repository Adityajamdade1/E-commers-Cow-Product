import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice, calculateTax, formatTax } from '../utils/currency';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
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
    padding: isMobile ? '1rem 0.5rem' : '2rem 1rem'
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    textAlign: 'center'
  };

  const cartStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
    gap: isMobile ? '1.5rem' : '2rem',
    alignItems: 'start'
  };

  const itemsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '0.75rem' : '1rem',
    padding: isMobile ? '1rem' : '1.5rem',
    backgroundColor: 'white',
    borderRadius: isMobile ? '8px' : '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    ...(isMobile && {
      flexDirection: 'column',
      textAlign: 'center'
    })
  };

  const imageStyle = {
    width: isMobile ? '80px' : '100px',
    height: isMobile ? '80px' : '100px',
    objectFit: 'cover',
    borderRadius: '8px'
  };

  const itemInfoStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    ...(isMobile && {
      alignItems: 'center',
      marginBottom: '1rem'
    })
  };

  const itemNameStyle = {
    fontSize: isMobile ? '1.1rem' : '1.2rem',
    fontWeight: '600',
    color: '#333'
  };

  const itemPriceStyle = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: '600',
    color: '#2c5530'
  };

  const quantityControlStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    ...(isMobile && {
      marginBottom: '1rem'
    })
  };

  const quantityButtonStyle = {
    backgroundColor: '#f8f9fa',
    border: '2px solid #ddd',
    borderRadius: '6px',
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: '600'
  };

  const quantityDisplayStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    minWidth: '30px',
    textAlign: 'center'
  };

  const removeButtonStyle = {
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  const summaryStyle = {
    backgroundColor: 'white',
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: isMobile ? '8px' : '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    height: 'fit-content',
    position: isMobile ? 'static' : 'sticky',
    top: isMobile ? 'auto' : '2rem',
    ...(isMobile && {
      order: -1 // Show summary first on mobile
    })
  };

  const summaryTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1.5rem'
  };

  const summaryRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    fontSize: '1rem'
  };

  const totalStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#333',
    borderTop: '2px solid #eee',
    paddingTop: '1rem',
    marginTop: '1rem'
  };

  const checkoutButtonStyle = {
    backgroundColor: '#2c5530',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '1.5rem',
    transition: 'background-color 0.3s ease'
  };

  const clearButtonStyle = {
    backgroundColor: 'transparent',
    color: '#ef4444',
    border: '2px solid #ef4444',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    fontWeight: '500',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '1rem',
    width: '100%'
  };

  const emptyCartStyle = {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: '#666'
  };

  const emptyIconStyle = {
    fontSize: '4rem',
    marginBottom: '1rem'
  };

  const shopButtonStyle = {
    backgroundColor: '#2c5530',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '1rem'
  };

  if (items.length === 0) {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Shopping Cart</h1>
        <div style={emptyCartStyle}>
          <div style={emptyIconStyle}>🛒</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Your cart is empty</h3>
          <p style={{ marginBottom: '2rem' }}>Add some delicious dairy products to get started!</p>
          <a 
            href="/shop" 
            style={shopButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1e3a23';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2c5530';
            }}
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Shopping Cart</h1>
      
      <div style={cartStyle}>
        <div style={itemsStyle}>
          {items.map(item => (
            <div key={item.id} style={itemStyle}>
              <img src={item.image} alt={item.name} style={imageStyle} />
              
              <div style={itemInfoStyle}>
                <h3 style={itemNameStyle}>{item.name}</h3>
                <p style={itemPriceStyle}>{formatPrice(item.price)} each</p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Subtotal: {formatPrice(item.price * item.quantity)}
                </p>
              </div>
              
              <div style={quantityControlStyle}>
                <button
                  style={quantityButtonStyle}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span style={quantityDisplayStyle}>{item.quantity}</span>
                <button
                  style={quantityButtonStyle}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <button
                style={removeButtonStyle}
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#dc2626';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ef4444';
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        
        <div style={summaryStyle}>
          <h3 style={summaryTitleStyle}>Order Summary</h3>
          
          <div style={summaryRowStyle}>
            <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)}):</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>
          
          <div style={summaryRowStyle}>
            <span>Shipping:</span>
          </div>
          
          <div style={summaryRowStyle}>
            <span>GST (18%):</span>
            <span>{formatTax(calculateTax(getCartTotal()))}</span>
          </div>
          
          <div style={totalStyle}>
            <span>Total:</span>
            <span>
              {formatPrice(getCartTotal() + (getCartTotal() > 4150 ? 0 : 497) + calculateTax(getCartTotal()))}
            </span>
          </div>
          
          <button
            style={checkoutButtonStyle}
            onClick={() => window.location.href = '/checkout'}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1e3a23';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2c5530';
            }}
          >
            Proceed to Checkout
          </button>
          
          <button
            style={clearButtonStyle}
            onClick={clearCart}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#ef4444';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#ef4444';
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
