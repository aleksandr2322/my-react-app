// src/components/Slider/Slider.jsx
import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['Slide1.jpg', 'Slide2.jpg', 'Slide3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="slider_container">
      <div className="slider">
        {slides.map((slide, index) => (
          <img
            key={slide}
            src={`/img/${slide}`}
            alt={`Slide ${index + 1}`}
            className={`hero-image ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;