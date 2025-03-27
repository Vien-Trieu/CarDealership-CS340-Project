import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipDetails.css';

const Dealership5: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dealership-details-container">
      <h1>Dealership 5</h1>
      <p>Welcome to Dealership 5! Get the best prices on used and new cars.</p>
      <button className="back-button" onClick={() => navigate('/dealershipSelection')}>
        Back to Dealership Selection
      </button>
    </div>
  );
};

export default Dealership5;