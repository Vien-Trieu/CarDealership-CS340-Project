import React from 'react';
import '../styles/VehicleDetails.css';

function VehicleDetails() {
    const vehicle = {
        name: 'Tesla Model S',
        year: 2024,
        range: '396 miles',
        horsepower: '670 hp',
        topSpeed: '155 mph',
        acceleration: '0-60 mph in 3.1s',
        price: '$74,990',
        image: 'https://www.pngall.com/wp-content/uploads/11/Tesla-Model-S-PNG.png'  // image path
    };

    return (
        <div className="vehicle-details-container">
            <h1 className="vehicle-title">{vehicle.name}</h1>
            <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
            <div className="vehicle-info">
                <p><strong>Year:</strong> {vehicle.year}</p>
                <p><strong>Range:</strong> {vehicle.range}</p>
                <p><strong>Horsepower:</strong> {vehicle.horsepower}</p>
                <p><strong>Top Speed:</strong> {vehicle.topSpeed}</p>
                <p><strong>Acceleration:</strong> {vehicle.acceleration}</p>
                <p><strong>Price:</strong> {vehicle.price}</p>
            </div>
            <div className="button-container">
                <button className="back-button" onClick={() => window.history.back()}>Back</button>
                <button className="purchase-button">Purchase</button>
            </div>
        </div>
    );
}

export default VehicleDetails;