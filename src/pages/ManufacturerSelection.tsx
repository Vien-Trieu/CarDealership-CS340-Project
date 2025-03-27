import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/manufacturerSelection.css';

function ManufacturerSelection() {
    const navigate = useNavigate();

    const dealerships = [
        'Manufacturer 1',
        'Manufacturer 2',
        'Manufacturer 3',
        'Manufacturer 4',
        'Manufacturer 5',
        'Manufacturer 6',
      ];


    const handleManufacturerSelection = (Manufacturer: string) =>{
      //Navigate to Manufacturer details or selection page
    }      
    return (
      <div className="Manufacturer-selection-container">
        <h1 className="Manufacturer-selection-title">Select a Manufacturer</h1>
        <div className="Manufacturer-list">
          {dealerships.map((Manufacturer, index) => (
            <button
              key={index}
              className="dealership-item"
              onClick={() => handleManufacturerSelection(Manufacturer)}
            >
              {Manufacturer}
            </button>
          ))}
        </div>
        <button
          className="back-button"
          onClick={() => navigate('/order-selection')}
        >
          Back to Order Selection
        </button>
      </div>
    );
  }

export default ManufacturerSelection;