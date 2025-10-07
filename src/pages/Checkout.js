import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice, calculateTax, formatTax } from '../utils/currency';

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const checkoutStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '3rem',
    alignItems: 'start'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const sectionStyle = {
    marginBottom: '2rem'
  };

  const sectionTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem',
    borderBottom: '2px solid #eee',
    paddingBottom: '0.5rem'
  };

  const inputGroupStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem'
  };

  const inputStyle = {
    padding: '0.75rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  };

  const fullWidthInputStyle = {
    ...inputStyle,
    width: '100%',
    marginBottom: '1rem'
  };

  const summaryStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    height: 'fit-content',
    position: 'sticky',
    top: '2rem'
  };

  const summaryTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1.5rem'
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0',
    borderBottom: '1px solid #eee'
  };

  const itemInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  };

  const itemNameStyle = {
    fontWeight: '500',
    color: '#333'
  };

  const itemDetailsStyle = {
    fontSize: '0.9rem',
    color: '#666'
  };

  const totalRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0',
    fontSize: '1rem'
  };

  const finalTotalStyle = {
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

  const placeOrderStyle = {
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd process the payment here
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    window.location.href = '/';
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 4150 ? 0 : 497; // ₹497 shipping (equivalent to $5.99)
  const tax = calculateTax(subtotal); // 18% GST
  const total = subtotal + shipping + tax;

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Checkout</h1>
      
      <div style={checkoutStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Shipping Information</h3>
            <div style={inputGroupStyle}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              style={fullWidthInputStyle}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              style={fullWidthInputStyle}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleInputChange}
              style={fullWidthInputStyle}
              required
            />
            <div style={inputGroupStyle}>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>
            <input
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleInputChange}
              style={fullWidthInputStyle}
              required
            />
          </div>

          <div style={sectionStyle}>
            <h3 style={sectionTitleStyle}>Payment Information</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleInputChange}
              style={fullWidthInputStyle}
              required
            />
            <div style={inputGroupStyle}>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
            </div>
            <input
              type="text"
              name="cardName"
              placeholder="Name on Card"
              value={formData.cardName}
              onChange={handleInputChange}
              style={fullWidthInputStyle}
              required
            />
          </div>

          <button
            type="submit"
            style={placeOrderStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1e3a23';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2c5530';
            }}
          >
            Place Order
          </button>
        </form>

        <div style={summaryStyle}>
          <h3 style={summaryTitleStyle}>Order Summary</h3>
          
          {items.map(item => (
            <div key={item.id} style={itemStyle}>
              <div style={itemInfoStyle}>
                <span style={itemNameStyle}>{item.name}</span>
                <span style={itemDetailsStyle}>Qty: {item.quantity} × {formatPrice(item.price)}</span>
              </div>
              <span style={{ fontWeight: '600' }}>
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
          
          <div style={totalRowStyle}>
            <span>Subtotal:</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          
          <div style={totalRowStyle}>
            <span>Shipping:</span>
            <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
          </div>
          
          <div style={totalRowStyle}>
            <span>GST (18%):</span>
            <span>{formatTax(tax)}</span>
          </div>
          
          <div style={finalTotalStyle}>
            <span>Total:</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
