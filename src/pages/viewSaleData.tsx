/*----------------------------------------------------
Author: Tytrez Dixon
Date Written: 4/2/2025
Date Updated: 4/5/2025

This is the .tsx file for the "View Sale Data" page 
of the web application for Mr.Tucker's Car Dealership.
On this page, the owner will be able to view what sales
the salespeople have made. This information will include
the vehicle that was sold and how much it was sold for.
-----------------------------------------------------*/

// Import the necessary libraries and packages.
import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

// This function creates the front-end display of the webpage.
function ViewSaleData () {

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
        name: "[Salesperson]"
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

            {/* Webpage Title */}
            <div style = {{justifyItems: "center"}}>
                <h2>Sale Data for: {salesperson.name}</h2>
                <br></br>
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

            <div style = {{marginLeft: 625}}>
                <img src = {salesperson.profilePic}
                    height = {200}
                    width = {200}>
                </img>
            </div>


            {/* List of the salesperson's sales. */}
            <div style = {{justifyItems: "center"}}>
                <h3>
                    <li>Vehicle sold for $45,000 on 3/9/2025</li>
                    <li>Vehicle sold for $60,000 on 3/12/2025</li>
                    <li>Vehicle sold for $40,000 on 3/26/2025</li>
                    <li>Vehicle sold for $55,000 on 4/1/2025</li>
                    <li>Vehicle sold for $67,000 on 4/5/2025</li>
                </h3>
            </div>

            {/* Return to salesperson list. */}
            <div className = "salesperson-of-the-year"
                 onClick={() => navigate('/updateCommissions')}
                 style  = {{marginLeft: 15}}>
                Return to Salesperson List
            </div>

                {/* Calculate the salesperon's commissions. */}
                <div className = "salesperson-of-the-year"
                     onClick={() => navigate('/calculateCommissions')}>
                     Calculate Commissions
            </div>

        </div>
    )
}

// Mandatory export default statement.
export default ViewSaleData;