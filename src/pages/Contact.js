import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#666',
    marginBottom: isMobile ? '2rem' : '3rem',
    textAlign: 'center',
    maxWidth: '600px',
    margin: isMobile ? '0 auto 2rem' : '0 auto 3rem',
    padding: isMobile ? '0 1rem' : '0'
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '2rem' : '4rem',
    alignItems: 'start'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: isMobile ? '8px' : '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: isMobile ? '0.6rem' : '0.75rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: isMobile ? '16px' : '1rem', // 16px prevents zoom on iOS
    marginBottom: '1rem',
    transition: 'border-color 0.3s ease'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    backgroundColor: '#2c5530',
    color: 'white',
    border: 'none',
    padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
    fontSize: isMobile ? '1rem' : '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s ease',
    minHeight: '44px' // Better touch target
  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '1.5rem' : '2rem'
  };

  const infoCardStyle = {
    backgroundColor: 'white',
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: isMobile ? '8px' : '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const infoTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const infoTextStyle = {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '0.5rem'
  };

  const mapStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '12px',
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const hoursStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.5rem',
    fontSize: '0.9rem'
  };

  const dayStyle = {
    fontWeight: '500',
    color: '#333'
  };

  const timeStyle = {
    color: '#666'
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Us</h1>
      <p style={subtitleStyle}>
        Have questions about our products or need assistance? We'd love to hear from you!
      </p>

      <div style={contentStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', marginBottom: '1.5rem' }}>
            Send us a Message
          </h3>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#2c5530'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#2c5530'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#2c5530'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#2c5530'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            style={textareaStyle}
            onFocus={(e) => e.target.style.borderColor = '#2c5530'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
            required
          />
          
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e3a23'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2c5530'}
          >
            Send Message
          </button>
        </form>

        <div style={infoStyle}>
          <div style={infoCardStyle}>
            <h3 style={infoTitleStyle}>
              <span>📍</span>
              Visit Our Store
            </h3>
            <p style={infoTextStyle}>123 Farm Road</p>
            <p style={infoTextStyle}>Dairy Valley, CA 95123</p>
            <p style={infoTextStyle}>United States</p>
          </div>

          <div style={infoCardStyle}>
            <h3 style={infoTitleStyle}>
              <span>📞</span>
              Call Us
            </h3>
            <p style={infoTextStyle}>Phone: (555) 123-4567</p>
            <p style={infoTextStyle}>Toll Free: 1-800-COW-MILK</p>
            <p style={infoTextStyle}>Fax: (555) 123-4568</p>
          </div>

          <div style={infoCardStyle}>
            <h3 style={infoTitleStyle}>
              <span>✉️</span>
              Email Us
            </h3>
            <p style={infoTextStyle}>General: info@cowproducts.com</p>
            <p style={infoTextStyle}>Orders: orders@cowproducts.com</p>
            <p style={infoTextStyle}>Support: support@cowproducts.com</p>
          </div>

          <div style={infoCardStyle}>
            <h3 style={infoTitleStyle}>
              <span>🕒</span>
              Store Hours
            </h3>
            <div style={hoursStyle}>
              <span style={dayStyle}>Monday - Friday:</span>
              <span style={timeStyle}>8:00 AM - 8:00 PM</span>
              <span style={dayStyle}>Saturday:</span>
              <span style={timeStyle}>9:00 AM - 6:00 PM</span>
              <span style={dayStyle}>Sunday:</span>
              <span style={timeStyle}>10:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#333', marginBottom: '1rem', textAlign: 'center' }}>
          Find Us on the Map
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639!2d-122.0842!3d37.4220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI1JzE5LjIiTiAxMjLCsDA1JzAzLjEiVw!5e0!3m2!1sen!2sus!4v1234567890"
          style={mapStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cow Products Location"
        />
      </div>
    </div>
  );
};

export default Contact;
