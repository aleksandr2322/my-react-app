import React from 'react';
import './Modals.css'; // Используем общие стили модальных окон

const RegisterModal = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    console.log('Registration submitted');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;