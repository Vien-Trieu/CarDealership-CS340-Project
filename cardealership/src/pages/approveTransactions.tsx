/*----------------------------------------------------------------------
Author: Tytrez Dixon 
Date Written: 2/15/2025
Date Updated: 2/23/2025

This is the .tsx file for the "Approve Sales and Orders" web page for 
Mr.Tucker's Car Dealership. On this web page, the owner
will be able to approve or reject sales and orders made
by the salespeople.
-----------------------------------------------------------------------*/

// Import the necessary libraries and packages.
import React from 'react';
import '../styles/WebApp.css';
import '../styles/approveTransactions.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

// This function creates the front-end display of the webpage.
function ApproveTransactions () {

     {/* Initialize the useNavigate method to enable the transition from one
        page to another. */}
    const navigate = useNavigate();

    {/* This useState declartion and handleClick() method allows
        the user to click on the menu icon see the menu list and
        click the "Hide Menu" item to hide the list */}
    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)


    // const [transactApproved, setTransactApproved] = useState (false);
    // const [transactNotApproved, setTransactNotApproved] = useState (false);

    // const handleApproveClick = () => setTransactApproved(!transactApproved)
    // const handleNoApproveClick = () => setTransactNotApproved(!transactNotApproved)
    
    // const [transactRejected, setTransactRejected] = useState (false);
    // const [transactNotRejected, setTransactNotRejected] = useState (false);

    // const handleRejectClick = () => setTransactRejected(!transactRejected)
    // const handleNoRejectClick = () => setTransactNotRejected(!transactNotRejected)

    {/* This const creates a pendingSale object which consists
        of a type, vehicle name, and an image of the vehicle. */}
    const pendingSale = {
        type: "Sale",
        vehicleName: "[Vehicle Name]",
        vehicleImg: "https://www.carscoops.com/wp-content/uploads/webp/2022/12/2022-Jaguar-XE.webp"
    }

    {/* This const creates a pendingOrder object which consists
        of a type, vehicle name, and an image of the vehicle. Both
        the pendingSale and pending order objects have the "type"
        attribute to distinguish between sales and orders. */}
    const pendingOrder = {
        type: "Order",
        vehicleName: "[Vehicle Name]",
        vehicleImg: "https://www.carscoops.com/wp-content/uploads/webp/2022/12/2022-Jaguar-XE.webp"

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

            {/* Display the title of the webpage */}
            <div className = "webpage-title">
                <h1>Approve Sales and Orders</h1>
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

            <div>
                <div style = {{marginTop: '46px', justifyItems: 'center'}}>
                    <h2>The following sales/orders are awaiting approval:</h2>
                </div>


                {/* This block of code displays the pending sales and orders.*/}
                <div style = {{justifyItems: 'left', marginLeft: '250px', marginTop: '30px'}}>
                    
                    {/* Display the pending orders and sales as list items.*/}
                    <h2><li>{pendingOrder.type} of {pendingOrder.vehicleName}</li></h2>
                    
                    {/* Display the vehicle image. */}
                    <img src = {pendingOrder.vehicleImg}
                        width = {350}
                        height = {300}></img>


                    {/* Display the "approve" and "reject" buttons. */}
                    <div className = "approve">
                        Approve
                    </div>

                    <div className = "reject">
                        Reject
                    </div>
                </div>

            </div>
        </div>
    );
}

// Necessary export default statement.
export default ApproveTransactions;
