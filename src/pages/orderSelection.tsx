import React from 'react';
import { useNavigate } from 'react-router-dom'; // Only use this
import '../styles/orderSelection.css'; // Import the CSS file


function OrderSelection() {
  const navigate = useNavigate(); // Hook for navigation

  // Handles the user's selection
  const handleSelection = (choice: 'manufacturer' | 'dealership' | 'home') => {
    console.log('Choice selected:', choice);  // Debugging: log the selected choice
    if (choice === 'home') {
      console.log('Navigating to home...');
      navigate('/Home');  // Navigate to the home page (root)
    } else if (choice === 'manufacturer') {
      navigate('/ManufacturerSelection');
      console.log('Navigating to Manufacturer order page...');
    } else {
      navigate('/dealershipSelection');
      console.log('Navigating to Dealership order page...');
    }
  };

  return (
    <div className="order-selection-container">
      <h1 className="order-selection-title">Where would you like to order from?</h1>
      <div className="order-selection-buttons">
        <button
          onClick={() => handleSelection('manufacturer')}
          className="order-selection-button manufacturer"
        >
          Manufacturer
        </button>
        <button
          onClick={() => handleSelection('dealership')}
          className="order-selection-button dealership"
        >
          Dealership
        </button>
        <button
          onClick={() => handleSelection('home')}
          className="back-to-home"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default OrderSelection;