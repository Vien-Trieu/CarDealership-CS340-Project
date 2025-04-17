/*----------------------------------------------------------------------
Author: Tytrez Dixon 
Date Written: 4/6/2025
Date Updated: 

This is the .tsx file for the "Salesperson of the Year" page for Mr.Tucker's
Car Dealership's web application. On this page, the owner will see
who the Salesperson of the Year is based on the salespeople's current
commissions.
-----------------------------------------------------------------------*/

// Import the necessary libraries and packages.
import React from 'react';
import '../styles/WebApp.css';
import '../styles/updateCommissions.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

// This function creates the front-end display of the webpage.
function SalespersonOfTheYear() {

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
        name: "[Salesperson]",
        commission: "[Total Amount]"
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

            {/* Menu List */}
            {/* The menu list will inheret the useState declaration */}
            <div className = {menuVisible ? "menu-visible" : "menu-hidden"}>
                <aside className = "menu-visible menu-list-item :hover" >
                    <br></br>
                    <br></br>
                    <b>Update Commissions</b>
                    <br></br>
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

                    {/* Hide the menu. */}
                    <i
                    onClick={handleClick}
                    style={{cursor: "pointer" }}> Hide Menu</i>
                </aside>
            </div>

            <div style = {{marginLeft: 625, marginTop: 200}}>
                <img src = {salesperson.profilePic}
                    height = {200}
                    width = {200}>
                </img>
            </div>


            {/* Display current Salesperson of the Year */}
            <div style = {{justifyItems: "center"}}>
                <br></br>
                <h2>
                    With a current commission amount of ${salesperson.commission}, {salesperson.name} is your Salesperson of the Year!
                </h2>
                <br></br>
                <h2>
                    Would you like to make this official?
                </h2>
                
                <div className = 'yes-button'
                     style = {{height: 100, padding: 30, width: 100}}
                     onClick = {() => navigate('/salespersonOTYConfirmation')}>
                    Yes
                </div>

                <div className = 'no-button'
                     style = {{marginLeft: 200, height: 100, padding: 30, width: 100}}
                     onClick = {() => navigate('/salespersonOTYRejection')}>
                    No
                </div>
            </div>

            {/* Return to salesperson list. */}
            <div className = "salesperson-of-the-year"
                 onClick={() => navigate('/updateCommissions')}
                 style  = {{marginLeft: 15}}>
                Return to Salesperson List
            </div>
        </div>
    )
}

// Mandatory export default statment
export default SalespersonOfTheYear;