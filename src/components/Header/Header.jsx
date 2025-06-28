// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ onLoginClick, onSignUpClick }) => {
  return (
    <header>
      <div className="container">
        <div className="log"><p>Jobly</p></div>
        <nav>
          <a href="#recruiters" className="ForRecruiters">For Recruiters</a>
          <button className="SignUp" onClick={onSignUpClick}>Sign Up</button>
          <button className="Login" onClick={onLoginClick}>Log in</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;