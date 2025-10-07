import { useState, useEffect } from 'react';

// Custom hook for responsive design
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsDesktop(width > 1024);
    };

    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    // Utility functions
    getResponsiveValue: (mobile, tablet, desktop) => {
      if (isMobile) return mobile;
      if (isTablet) return tablet || mobile;
      return desktop || tablet || mobile;
    },
    // Breakpoint checks
    isSmallMobile: windowSize.width <= 480,
    isMediumMobile: windowSize.width > 480 && windowSize.width <= 768,
    isSmallTablet: windowSize.width > 768 && windowSize.width <= 900,
    isLargeTablet: windowSize.width > 900 && windowSize.width <= 1024,
  };
};

// Responsive style helper
export const responsive = {
  // Common breakpoints
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px) and (max-width: 1024px)',
  desktop: '(min-width: 1025px)',
  
  // Utility functions for inline styles
  fontSize: (mobile, tablet, desktop) => {
    const width = window.innerWidth;
    if (width <= 768) return mobile;
    if (width <= 1024) return tablet || mobile;
    return desktop || tablet || mobile;
  },
  
  padding: (mobile, tablet, desktop) => {
    const width = window.innerWidth;
    if (width <= 768) return mobile;
    if (width <= 1024) return tablet || mobile;
    return desktop || tablet || mobile;
  },
  
  margin: (mobile, tablet, desktop) => {
    const width = window.innerWidth;
    if (width <= 768) return mobile;
    if (width <= 1024) return tablet || mobile;
    return desktop || tablet || mobile;
  }
};

export default useResponsive;
