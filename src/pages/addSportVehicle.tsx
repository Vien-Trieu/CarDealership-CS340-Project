/*------------------------------------------------------
Author: Tytrez Dixon
Date Written: 3/13/2025
Date Upated: __________

This is the .tsx file for entering vehicle information 
about a vehicle which will be added to the Sports lot
in the Mr.Tucker's Car Dealership vehicle inventory.

------------------------------------------------------*/

// Import the necessary libraries and packages.
import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

function AddSportVehicle () {

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

            {/* Display Webpage Title */}
            <h1>Enter Vehicle Information</h1>

            {/* Display fields for entering information */}
            <div style = {{display: 'flex', flexWrap: 'wrap', gap: '35px', justifyContent: 'center', 
                 marginTop: '100px', flexDirection: 'column'}}>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>Make</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>Model</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>Year</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>VIN Number</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>Mileage</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>Miles Per Gallon</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>Color</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>Oil Type</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

                <div className = "search">
                    <label style = {{marginRight: '5px'}}>Fuel Type</label>
                        <input
                            type = "text"
                            style = {{border: 'solid'}}
                        />
                </div>

            </div>

            {/* Return to Lot Selection */}
            <div 
            className = "logout"
            style = {{marginTop: "750px"}}
            onClick={() => navigate('/addVehicle')}>
                Return to Lot Selection
            </div>
        </div>
        
    );
}

// Mandatory defualt statement
export default AddSportVehicle;

