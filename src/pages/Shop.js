import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
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
    padding: isMobile ? '0 0.5rem' : '0 1rem'
  };

  const headerStyle = {
    textAlign: 'center',
    margin: isMobile ? '1rem 0' : '2rem 0'
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#666',
    marginBottom: isMobile ? '1rem' : '2rem',
    padding: isMobile ? '0 1rem' : '0'
  };

  const filtersStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: isMobile ? '1rem 0' : '2rem 0',
    flexWrap: 'wrap',
    gap: '1rem',
    ...(isMobile && {
      flexDirection: 'column',
      alignItems: 'stretch'
    })
  };

  const sortSelectStyle = {
    padding: '0.5rem 1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    fontSize: isMobile ? '0.9rem' : '1rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    ...(isMobile && {
      width: '100%'
    })
  };

  const resultsInfoStyle = {
    color: '#666',
    fontSize: isMobile ? '0.9rem' : '1rem',
    fontWeight: '500',
    ...(isMobile && {
      textAlign: 'center',
      marginBottom: '1rem'
    })
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: isMobile ? '1rem' : '1.5rem',
    margin: isMobile ? '1rem 0' : '2rem 0'
  };

  const noResultsStyle = {
    textAlign: 'center',
    padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    color: '#666'
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, sortBy, searchTerm]);

  return (
    <div>
      <Navbar 
        onCategoryChange={setSelectedCategory} 
        selectedCategory={selectedCategory}
      />
      
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Our Products</h1>
          <p style={subtitleStyle}>
            Fresh, organic dairy products from happy, grass-fed cows
          </p>
        </div>

        <div style={filtersStyle}>
          <div style={resultsInfoStyle}>
            Showing {filteredProducts.length} of {products.length} products
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <label htmlFor="sort" style={{ color: '#333', fontWeight: '500' }}>
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={sortSelectStyle}
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="rating">Rating (High to Low)</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div style={gridStyle}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={noResultsStyle}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No products found</h3>
            <p>Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
