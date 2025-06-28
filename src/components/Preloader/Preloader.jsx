// src/components/Preloader/Preloader.jsx
import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item"></div>
        <div className="preloader__item"></div>
      </div>
    </div>
  );
};

export default Preloader;