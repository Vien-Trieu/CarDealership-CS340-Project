/*----------------------------------------------------------------------
Author: Tytrez Dixon 
Date Written: 3/23/2025
Date Updated: _________

This is the .tsx file for one of the final pages of the "Approve Sales/Orders"
page series. On this specific page, the owner will see a message
stating that a transaction has not been rejected.
-----------------------------------------------------------------------*/

// Import the necessary libraries and packages.
import React from 'react';
import '../styles/WebApp.css';
import '../styles/approveTransactions.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

// This function creates the front-end display of the webpage.
// This function creates the front-end display of the webpage.
function RejectTransactionDenial () {

    {/* Initialize the useNavigate method to enable the transition from one
    page to another. */}
    const navigate = useNavigate();

    {/* This useState declartion and handleClick() method allows
        the user to click on the menu icon see the menu list and
        click the "Hide Menu" item to hide the list */}
    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)

    // This const object 
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
    
    
    return(
        <div>
            {/* Logout button */}
            <div 
            className = "logout"
            style = {{marginTop: "10px"}}
            onClick={() => navigate('/login')}>
                Logout
            </div>
            
            <div>
                {/* Menu button */}
                <button>
                <IonIcon 
                name = "menu-outline"
                size = "large"
                style = {{cursor: "pointer"}}

                // The menu button will inheret the useState declaration */}
                className = {menuVisible ? "menu-visible" : "menu-hidden"}

                // Make the menu list appear when the menu button is clicked.
                onClick={handleClick}
                />
                </button>
            </div>
            
            {/* The menu list will inheret the useState declaration */}
            <div className = {menuVisible ? "menu-visible" : "menu-hidden"}>
                {/* Menu List */}
                <aside className = "menu-visible menu-list-item :hover" >
                    <br></br>
                    <br></br>
                    <p onClick={() => navigate('/updateCommissions')}
                    style={{cursor: "pointer"}}>Update Commissions</p>
                    <br></br>
                    <p onClick={() => navigate('/calculateBonus')}
                    style={{cursor: "pointer"}}>Calculate Bonus</p>
                    <br></br>
                    <p onClick={() => navigate('/addVehicle')}
                    style={{cursor: "pointer"}}>Add Vehicle to Inventory</p>
                    <br></br>
                    <p onClick={() => navigate('/updateDiscounts')}
                    style={{cursor: "pointer"}}>Update Discounts</p>
                    <br></br>
                    <b>Approve Sales and Orders</b>
                    <br></br>
                    <br></br>
                    <p onClick={() => navigate('/home')}
                    style={{cursor: "pointer"}}>Home</p>
                    <br></br>

                    {/* Hide the menu */}
                    <i 
                    onClick={handleClick}
                    style={{cursor: "pointer" }}> Hide Menu</i>
                </aside>
            </div>

            {/* Approval message */}
            <h1>This transaction has not been rejected.</h1>

            {/* Display transaction info */}
            <div className="vehicle-details-container">
                <h1 className="vehicle-title"> Order of {vehicle.name}</h1>
                <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
                <div className="vehicle-info">
                    <p><strong>Year:</strong> {vehicle.year}</p>
                    <p><strong>Range:</strong> {vehicle.range}</p>
                    <p><strong>Horsepower:</strong> {vehicle.horsepower}</p>
                    <p><strong>Top Speed:</strong> {vehicle.topSpeed}</p>
                    <p><strong>Acceleration:</strong> {vehicle.acceleration}</p>
                    <p><strong>Price:</strong> {vehicle.price}</p>
                </div>

                <div className="button-container" 
                 style = {{display: 'flex', flexDirection: 'row', justifyContent: 'center',
                    marginTop: '10px'
                 }}>

                <button className="button"
                    style = {{marginRight: '10px', width: '100px', height: '100pxx'}}
                    onClick = {() => navigate('/approveTransactions')}>
                        Return to "Approve Sales/Orders Page" </button>
                    
                <button className="button" 
                    style = {{marginRight: '10px', width: '100px', height: '100px'}}
                    onClick={() => navigate('/home')}>
                        Return to Home Page</button>
            </div>

            </div>

        </div>
    )
}

// Mandatory export default staement.
export default RejectTransactionDenial;
