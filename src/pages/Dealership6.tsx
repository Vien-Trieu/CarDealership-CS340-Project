import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipDetails.css';

const Dealership6: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dealership-details-container">
      <h1>Dealership 6</h1>
      <p>Welcome to Dealership 6! Your next car is waiting for you here.</p>
      <button className="back-button" onClick={() => navigate('/dealershipSelection')}>
        Back to Dealership Selection
      </button>
    </div>
  );
};

export default Dealership6;