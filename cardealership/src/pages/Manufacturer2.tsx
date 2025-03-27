import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipDetails.css';

const Manufacturer2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dealership-details-container">
      <h1>Manufacturer 2</h1>
      <p>Welcome to Manufacturer 2! Your trusted destination for quality vehicles.</p>
      <button className="back-button" onClick={() => navigate('/ManufacturerSelection')}>
        Back to Manufacturer Selection
      </button>
    </div>
  );
};

export default Manufacturer2;