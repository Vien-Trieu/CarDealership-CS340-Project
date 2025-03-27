import React from 'react';
import '../styles/purchasevehicle.css';

function PurchaseVehicle() {
    return (
        <div className="container">
            <header>
                <button className="order-button">Order Vehicle</button>
                <button className="logout-button">Logout</button>
            </header>

            <h1>Vehicle Information</h1>
            <form className="vehicle-form">
                <div className="form-group">
                    <label>Make:</label>
                    <input type="text" name="make" />
                    <label>MPG:</label>
                    <input type="text" name="mpg" />
                </div>
                <div className="form-group">
                    <label>Model:</label>
                    <input type="text" name="model" />
                    <label>Color:</label>
                    <input type="text" name="color" />
                </div>
                <div className="form-group">
                    <label>VIN #:</label>
                    <input type="text" name="VIN #" />
                    <label>Year:</label>
                    <input type="text" name="year" />
                </div>
                <div className="form-group">
                    <label>Oil Type:</label>
                    <input type="text" name="oil type" />
                    <label>Fuel Type:</label>
                    <input type="text" name="fuel type" />
                </div>
                <div className="form-group">
                    <label>Mileage:</label>
                    <input type="text" name="mileage" />
                </div>
                <footer>
                    <button type="button" className="return">Return</button>
                    <button type="button" className="trade-in-button">Trade In Vehicle</button>
                </footer>
            </form>
        </div>
    );
};

export default PurchaseVehicle; 