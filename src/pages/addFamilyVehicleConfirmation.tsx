/*--------------------------------------------------------------------
Author: Tytrez Dixon
Date Written: 3/17/2025
Date: Updated: _________

This is the .tsx file for the "Add Family Vehicle Confirmation" webpage
for Mr.Tucker's Car Dealership's web application. On this page, the 
user will see a confirmation message which states that the Family
vehicle in question has been added to the Family lot of the vehicle
inventory.
--------------------------------------------------------------------*/

// Import the necessary libraries and packages.
import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';


// This function creates the front-end display of the webpage.
function AddFamilyVehicleConfrimation () {

    {/* Initialize the useNavigate method to enable the transition from one
    page to another. */}
    const navigate = useNavigate();

    {/* This useState declartion and handleClick() method allows
        the user to click on the menu icon see the menu list and
        click the "Hide Menu" item to hide the list */}
    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)

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
                    <br></br>
                    <br></br>

                    {/* Hide the menu */}
                    <i 
                    onClick={handleClick}
                    style={{cursor: "pointer" }}> Hide Menu</i>
                </aside>
            </div>

            {/* Confirmation Message */}
            <div style = {{justifyItems: "center", marginTop: "200px" }}>
                <div>
                    <h1>Your vehicle has been successfully added to the Family lot!</h1>
                </div>

                <div style = {{display: 'flex', gap: '100px', justifyContent: 'center', 
                    marginTop: '20px'}}>
                    {/* Return to the "Update Discounts" page. */}
                    <p className = 'button'
                        onClick = {() => navigate('/addVehicle')}
                        style = {{width: '20%'}}>
                            Return to Lot Selection.
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

// Mandatory export default function
export default AddFamilyVehicleConfrimation;
