// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="page__footer_footer">
      <div className="footer_r">
        <p className="footer_text1">Jobly.co</p>
        <p className="footer_text2">We support a pool of diverse young creatives and engineers.</p>
        <p className="footer_text3">© 2023 Jobly.co Copyright and All rights reserved.</p>
        <div className="footer_l">
          <a href="#terms" className="footer_link">Terms and Conditions</a> · 
          <a href="#privacy" className="footer_link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;