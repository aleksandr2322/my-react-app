// src/components/Modals/LoginModal.jsx
import React from 'react';
import './Modals.css';

const LoginModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;