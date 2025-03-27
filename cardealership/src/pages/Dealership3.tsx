import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipDetails.css';

const Dealership3: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dealership-details-container">
      <h1>Dealership 3</h1>
      <p>Welcome to Dealership 3! Find the perfect car that fits your needs.</p>
      <button className="back-button" onClick={() => navigate('/dealershipSelection')}>
        Back to Dealership Selection
      </button>
    </div>
  );
};

export default Dealership3;