/*----------------------------------------------------
Author: Tytrez Dixon
Date Written: 3/9/2025
Date Updated: 3/11/2025

This is the .tsx file for the vehicle discount confirmation
page of the web application for Mr.Tucker's Car Dealership.
On this page, the owner will see that a 10 percent discount
has been applied to the vehicle in question.
---------------------------------------------------- */

// Import the necessary files and packages.
import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
 

// This function returns the front-end display of the webpage.
function DiscountConfirmation() {

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
                    <p onClick={() => navigate('/addVehicle')}
                    style={{cursor: "pointer"}}>Add Vehicle to Inventory</p>
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

                    {/* Hide the menu list. */}
                    <i
                    onClick={handleClick}
                    style={{cursor: "pointer" }}> Hide Menu</i>
                </aside>

            </div>
                <div className="vehicle-details-container">
                <h1 className="vehicle-title">{vehicle.name}</h1>
                <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />

                <h2>A new discount of 10% has been applied!</h2>

                <div style = {{display: 'flex', gap: '100px', justifyContent: 'center', 
                    marginTop: '20px'}}>
                    {/* Return to the "Update Discounts" page. */}
                    <p className = 'button'
                        onClick = {() => navigate('/updateDiscounts')}
                        style = {{width: '20%'}}>
                            Return to "Update Discounts" Page.
                    </p>

                    {/* Return to the home page. */}
                    <p className = 'button'
                        onClick={() => navigate('/home')}
                        style = {{width: '20%'}}>
                            Return to home page.
                    </p>
                </div>
            </div>
        </div>
    )
    

}

// Mandatory export default statment
export default DiscountConfirmation;