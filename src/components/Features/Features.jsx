// src/components/Features/Features.jsx
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="content_section_forms">
      <div className="container">
        <h1>Everything you want to know in one place.</h1>
        <img src="/img/Frame1625.svg" alt="Features overview" className="forms-image" />
        <div className="features" id="cards"></div>
      </div>
    </section>
  );
};

export default Features;