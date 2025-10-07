import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
  const appStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f9fa',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
  };

  const mainStyle = {
    flex: 1,
    paddingTop: '0'
  };

  // Global styles applied via inline styles
  const globalStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f9fa;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    a {
      color: inherit;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
    
    button {
      font-family: inherit;
      -webkit-tap-highlight-color: transparent;
    }
    
    input, textarea, select {
      font-family: inherit;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
    
    /* Mobile optimizations */
    @media (max-width: 768px) {
      body {
        font-size: 16px; /* Prevent zoom on iOS */
      }
      
      .grid-responsive {
        grid-template-columns: 1fr !important;
      }
      
      .text-responsive {
        font-size: 1.5rem !important;
      }
      
      .padding-responsive {
        padding: 1rem !important;
      }
      
      /* Better touch targets */
      button, a, input, select, textarea {
        min-height: 44px;
        min-width: 44px;
      }
      
      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }
    }
    
    @media (max-width: 480px) {
      body {
        font-size: 14px;
      }
    }
    
    /* Focus styles for accessibility */
    button:focus, input:focus, textarea:focus, select:focus, a:focus {
      outline: 2px solid #F46E76;
      outline-offset: 2px;
    }
  `;

  return (
    <CartProvider>
      <Router>
        <div style={appStyle}>
          <style>{globalStyles}</style>
          <Header />
          <main style={mainStyle}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}


export default App;
