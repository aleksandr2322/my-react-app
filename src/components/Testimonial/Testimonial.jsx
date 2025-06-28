// src/components/Testimonial/Testimonial.jsx
import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="content_section_text1">
      <div className="container">
        <div className="photo">
          <img src="/img/Ellipse512.svg" alt="Zhao Cui" className="image2" />
        </div>
        <blockquote>
          <h1>Creating an Online Presence is Hard.<br />Jobly Makes it Easy for Recruiters to See you</h1>
          <div className="chel">
            <h2>Zhao Cui</h2>
            <h3>Founder at Jobly.co</h3>
          </div>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;