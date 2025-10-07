import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      id: 1,
      image: 'https://assets.farmsanctuary.org/content/uploads/2021/11/24163828/2021_06-04_FSNY_Paula_and_Aggie_cows_LH_4651_CREDIT_Farm_Sanctuary-1600x1068.jpg',
      title: 'Fresh Farm Milk',
      subtitle: 'From Happy Grass-Fed Cows',
      description: 'Experience the pure taste of nature with our premium dairy products'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&h=500&fit=crop',
      title: 'Artisan Cheese Collection',
      subtitle: 'Aged to Perfection',
      description: 'Discover our selection of handcrafted cheeses made with traditional methods'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1200&h=500&fit=crop',
      title: 'Organic Dairy Products',
      subtitle: '100% Natural & Healthy',
      description: 'Nourish your family with our certified organic dairy products'
    }
  ];

  const carouselStyle = {
    position: 'relative',
    width: '100%',
    height: isMobile ? '300px' : '500px',
    overflow: 'hidden',
    borderRadius: isMobile ? '8px' : '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    touchAction: 'pan-y'
  };

  const slideStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.5s ease-in-out'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const contentStyle = {
    textAlign: 'center',
    color: 'white',
    maxWidth: isMobile ? '90%' : '600px',
    padding: isMobile ? '1rem' : '2rem'
  };

  const titleStyle = {
    fontSize: isMobile ? '2rem' : '3rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    lineHeight: '1.2'
  };

  const subtitleStyle = {
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    fontWeight: '500',
    marginBottom: '1rem',
    color: '#f0f0f0'
  };

  const descriptionStyle = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    lineHeight: '1.6',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    color: '#e0e0e0',
    ...(isMobile && {
      display: 'none' // Hide description on mobile to save space
    })
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
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const dotsContainerStyle = {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '0.5rem'
  };

  const dotStyle = (isActive) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: isActive ? 'white' : 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  });

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: 'none',
    width: isMobile ? '40px' : '50px',
    height: isMobile ? '40px' : '50px',
    borderRadius: '50%',
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: isMobile ? 'none' : 'flex', // Hide arrows on mobile, use swipe instead
    alignItems: 'center',
    justifyContent: 'center'
  };

  const prevArrowStyle = {
    ...arrowStyle,
    left: isMobile ? '1rem' : '2rem'
  };

  const nextArrowStyle = {
    ...arrowStyle,
    right: isMobile ? '1rem' : '2rem'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div 
      style={carouselStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            ...slideStyle,
            backgroundImage: `url(${slide.image})`,
            opacity: index === currentSlide ? 1 : 0
          }}
        >
          <div style={overlayStyle}>
            <div style={contentStyle}>
              <h1 style={titleStyle}>{slide.title}</h1>
              <h2 style={subtitleStyle}>{slide.subtitle}</h2>
              <p style={descriptionStyle}>{slide.description}</p>
              <a 
                href="/shop" 
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1e3a23';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#2c5530';
                }}
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}

      <button 
        style={prevArrowStyle}
        onClick={prevSlide}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }}
      >
        ‹
      </button>

      <button 
        style={nextArrowStyle}
        onClick={nextSlide}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }}
      >
        ›
      </button>

      <div style={dotsContainerStyle}>
        {slides.map((_, index) => (
          <div
            key={index}
            style={dotStyle(index === currentSlide)}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
