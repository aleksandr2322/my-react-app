// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = ({ onJoinNowClick }) => {
  return (
    <section className="content_section_hero">
      <div className="container">
        <h1>Candidates with Creative & <br /> Engineering Backgrounds</h1>
        <h2>
          This is the place to show yourself and land entry level jobs at cutting-edge companies. 
          Launch your career here.
        </h2>
        <button className="JoinNow" onClick={onJoinNowClick}>Join Now</button>
        <p>
          Looking for candidate's? <a href="#hire" className="Hirenow">Hire now</a>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;