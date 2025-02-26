/*----------------------------------------------------------------------
Author: Tytrez Dixon 
Date Written: 2/15/2025
Date Updated: 2/23/2025

This is the .tsx file for the "Calculate Bonus" webpage for 
Mr. Tucker's Car Dealership. On this page, the owner will be able
to calulate financial bonuses for the salespeople based on their
recent sales.
-----------------------------------------------------------------------*/

// Import the necessary libraries and packages.
import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

// This function creates the front-end display of the webpage.
function CalculateBonus () {


     {/* Initialize the useNavigate method to enable the transition from one
        page to another. */}
    const navigate = useNavigate();

    {/* This useState declartion and handleClick() method allows
        the user to click on the menu icon see the menu list and
        click the "Hide Menu" item to hide the list */}
    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)

    /* This constructor enables the creation of a salesperson object
    which has profile picture and a name.*/
    const salesperson = {
        profilePic: "https://www.feedingmatters.org/wp-content/uploads/2022/12/Generic-profile-pic.png",
        name: "Salesperson"
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

            {/* Title of the webpage */}
            <div className = "webpage-title">
                <h1>Calculate Bonus</h1>
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
                    <b>Calculate Bonus</b>
                    <br></br>
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

                    {/* Hide the menu.*/}
                    <i 
                    onClick={handleClick}
                    style={{cursor: "pointer" }}> Hide Menu</i>
                </aside>
            </div>

            {/* List of salespeople */}
            {/* Display the list as a 2x4 table. */}
            <div style ={{display: 'flex', flexWrap: 'wrap', marginLeft: "150px"}}>

                {/* Individual salesperon entry */}
                <div className = "salesperson">

                    <div style = {{marginLeft: "35px"}}>
                        <img src = {salesperson.profilePic}
                            width = {100}
                            height = {100}>
                        </img>
                    </div>

                    <div className = "button">
                        {salesperson.name}
                    </div>

                    <div className = "button">
                        View Bonus Data
                    </div>
                </div>

                
                <div className = "salesperson">

                    <div style = {{marginLeft: "35px"}}>
                        <img src = {salesperson.profilePic}
                            width = {100}
                            height = {100}>
                        </img>
                    </div>

                    <div className = "button">
                        {salesperson.name}
                    </div>

                    <div className = "button">
                        View Bonus Data
                    </div>
                </div>

                <div className = "salesperson">

                    <div style = {{marginLeft: "35px"}}>
                        <img src = {salesperson.profilePic}
                            width = {100}
                            height = {100}>
                        </img>
                    </div>

                    <div className = "button">
                        {salesperson.name}
                    </div>

                    <div className = "button">
                        View Bonus Data
                    </div>
                </div>

                <div className = "salesperson">

                    <div style = {{marginLeft: "35px"}}>
                        <img src = {salesperson.profilePic}
                            width = {100}
                            height = {100}>
                        </img>
                    </div>

                    <div className = "button">
                        {salesperson.name}
                    </div>

                    <div className = "button">
                        View Bonus Data
                    </div>
                </div>


                <div className = "salesperson">

                    <div style = {{marginLeft: "35px"}}>
                        <img src = {salesperson.profilePic}
                            width = {100}
                            height = {100}>
                        </img>
                    </div>

                    <div className = "button">
                        {salesperson.name}
                    </div>

                    <div className = "button">
                        View Bonus Data
                    </div>
                </div>

                <div className = "salesperson">

                    <div style = {{marginLeft: "35px"}}>
                        <img src = {salesperson.profilePic}
                            width = {100}
                            height = {100}>
                        </img>
                    </div>

                    <div className = "button">
                        {salesperson.name}
                    </div>

                    <div className = "button">
                        View Bonus Data
                    </div>
                </div>

                <div className = "salesperson">

                    <div style = {{marginLeft: "35px"}}>
                        <img src = {salesperson.profilePic}
                            width = {100}
                            height = {100}>
                        </img>
                    </div>

                    <div className = "button">
                        {salesperson.name}
                    </div>

                    <div className = "button">
                        View Bonus Data
                    </div>
                </div>


                <div className = "salesperson">

                    <div style = {{marginLeft: "35px"}}>
                        <img src = {salesperson.profilePic}
                            width = {100}
                            height = {100}>
                        </img>
                    </div>

                    <div className = "button">
                        {salesperson.name}
                    </div>

                    <div className = "button">
                        View Bonus Data
                    </div>
                </div>

            </div>
        </div>
    );
}

// Mandatory export default statement.
export default CalculateBonus;
