import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipDetails.css';

const Dealership4: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dealership-details-container">
      <h1>Dealership 4</h1>
      <p>Welcome to Dealership 4! Exclusive deals on the latest car models.</p>
      <button className="back-button" onClick={() => navigate('/dealershipSelection')}>
        Back to Dealership Selection
      </button>
    </div>
  );
};

export default Dealership4;