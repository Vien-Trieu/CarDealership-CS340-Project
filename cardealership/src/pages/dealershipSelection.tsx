import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipSelection.css';

const DealershipSelection: React.FC = () => {
  const navigate = useNavigate();

  const dealerships = [
    { name: 'Dealership 1', path: '/dealership-1' },
    { name: 'Dealership 2', path: '/dealership-2' },
    { name: 'Dealership 3', path: '/dealership-3' },
    { name: 'Dealership 4', path: '/dealership-4' },
    { name: 'Dealership 5', path: '/dealership-5' },
    { name: 'Dealership 6', path: '/dealership-6' },
  ];

  const handleDealershipSelection = (path: string) => {
    navigate(path);
  };

  return (
    <div className="dealership-selection-container">
      <h1 className="dealership-selection-title">Select a Dealership</h1>
      <div className="dealership-list">
        {dealerships.map((dealership, index) => (
          <button
            key={index}
            className="dealership-item"
            onClick={() => handleDealershipSelection(dealership.path)}
          >
            {dealership.name}
          </button>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate('/order-selection')}>
        Back to Order Selection
      </button>
    </div>
  );
};

export default DealershipSelection;