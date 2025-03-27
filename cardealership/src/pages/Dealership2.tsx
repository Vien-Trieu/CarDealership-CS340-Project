import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipDetails.css';

const Dealership2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dealership-details-container">
      <h1>Dealership 2</h1>
      <p>Welcome to Dealership 2! Your trusted destination for quality vehicles.</p>
      <button className="back-button" onClick={() => navigate('/dealershipSelection')}>
        Back to Dealership Selection
      </button>
    </div>
  );
};

export default Dealership2;