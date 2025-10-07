import React, { useState, useEffect } from 'react';

const Navbar = ({ onCategoryChange, selectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    backgroundColor: '#f8f9fa',
    padding: '1rem 0',
    borderBottom: '1px solid #e9ecef'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const navContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    ...(isMobile && {
      flexDirection: 'column',
      alignItems: 'stretch'
    })
  };

  const categoriesStyle = {
    display: 'flex',
    gap: isMobile ? '0.5rem' : '1rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    ...(isMobile && {
      justifyContent: 'center',
      marginBottom: '1rem'
    })
  };

  const categoryButtonStyle = (isActive) => ({
    backgroundColor: isActive ? '#F46E76' : 'transparent',
    color: isActive ? 'white' : '#333',
    border: `2px solid ${isActive ? '#F46E76' : '#ddd'}`,
    padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
    borderRadius: '25px',
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap'
  });

  const searchStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    ...(isMobile && {
      width: '100%',
      justifyContent: 'center'
    })
  };

  const searchInputStyle = {
    padding: '0.5rem 1rem',
    border: '2px solid #ddd',
    borderRadius: '25px',
    fontSize: '0.9rem',
    outline: 'none',
    width: isMobile ? '200px' : '200px',
    transition: 'border-color 0.3s ease',
    ...(isMobile && {
      maxWidth: '100%'
    })
  };

  const searchButtonStyle = {
    backgroundColor: '#F46E76',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  const mobileToggleStyle = {
    display: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      display: 'block'
    }
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'milk', name: 'Milk' },
    { id: 'cheese', name: 'Cheese' },
    { id: 'butter', name: 'Butter' },
    { id: 'yogurt', name: 'Yogurt' },
    { id: 'cream', name: 'Cream' }
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navContentStyle}>
          <div style={categoriesStyle}>
            <span style={{ fontWeight: '600', color: '#333' }}>Categories:</span>
            {categories.map(category => (
              <button
                key={category.id}
                style={categoryButtonStyle(selectedCategory === category.id)}
                onClick={() => onCategoryChange(category.id)}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.id) {
                    e.target.style.backgroundColor = '#f0f0f0';
                    e.target.style.borderColor = '#F46E76';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.id) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#ddd';
                  }
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div style={searchStyle}>
            <input
              type="text"
              placeholder="Search products..."
              style={searchInputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = '#F46E76';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
              }}
            />
            <button 
              style={searchButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1e3a23';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#F46E76';
              }}
            >
              🔍 Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
