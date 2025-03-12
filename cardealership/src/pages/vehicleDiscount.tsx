/*-----------------------------------------------
Author: Tytrez Dixon and Vien Trieu
Date Written: 2/27/2025
Date Updated: 3/11/2025

This is the .tsx file for creating a "Vehicle Discount" page
for Mr.Tucker's Car Dealership web application. On this page,
the Owner will be able to view all pieces of information
pertaining to a kind of vehicle, including its discount
status. The owner will also be able to decide on whether
or not they want to apply a discount to the vehicle.

-------------------------------------------------*/

// Import the necessary files and packages
import React from 'react';
import '../styles/WebApp.css';
import '../styles/approveTransactions.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

// This function creates the front-end display of the webpage.
function VehicleDiscount () {

    {/* Initialize the useNavigate method to enable the transition from one
        page to another. */}
    const navigate = useNavigate();
    
    {/* This useState declartion and handleClick() method allows
        the user to click on the menu icon see the menu list and
        click the "Hide Menu" item to hide the list */}
    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)

    // This vehicle object will help in displaying information about a given vehicle.
    const vehicle = {
        name: 'Tesla Model S',
        year: 2024,
        range: '396 miles',
        horsepower: '670 hp',
        topSpeed: '155 mph',
        acceleration: '0-60 mph in 3.1s',
        price: '$74,990',
        image: 'https://www.pngall.com/wp-content/uploads/11/Tesla-Model-S-PNG.png',  // image path
        currentDiscount: 0
    }


    return (
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
                    <b>Add Vehicle to Inventory</b>
                    <br></br>
                    <br></br>
                    <p onClick={() => navigate('/updateDiscounts')}
                    style={{cursor: "pointer"}}>Update Discounts</p>
                    <br></br>
                    <p onClick={() => navigate('/approveTransactions')}
                    style={{cursor: "pointer"}}>Approve Sales and Orders</p>
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
            
            <div className="vehicle-details-container">
            <h1 className="vehicle-title">{vehicle.name}</h1>
            <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />

            <h2>This vehicle has a {vehicle.currentDiscount}% discount.</h2>
            <h2>Would you like to apply a new discount?</h2>

            <div style = {{justifyContent: "center", marginRight: "560px"}}>
                <div className="yes-button"
                     onClick={() => navigate('/discountConfirmation')}>
                    Yes
                </div>

                <div className = "no-button"
                     onClick={() => navigate('/discountRejection')}>
                    No
                </div>
            </div>
        </div>
        
        </div>
    );
}

// Necessary export default statement.
export default VehicleDiscount;