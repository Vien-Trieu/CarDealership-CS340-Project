/*----------------------------------------------------------------------
Author: Tytrez Dixon 
Date Written: 1/25/2025
Date Updated: 2/15/2025

This is the .tsx file for the vehicle list for Mr.Tucker's Car 
Dealership. When the user sees this list, they will be able to look at
a vehicle's general information as well as an image of the vehicle. 
They will also be able to click on a "View Details" button, which
will allow them to see more specific information regarding the vehicle.
-----------------------------------------------------------------------*/

// Import the necessary libraries and packages.
import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

// This function returns the front-end display of the webpage.
function VehicleList () { 

    {/* Initialize the useNavigate method to enable the transition from one
    page to another. */}
    const navigate = useNavigate();

    {/* This useState declartion and handleClick() method allows
        the user to click on the menu icon see the menu list and
        click the "Hide Menu" item to hide the list */}
    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)

    /* This constructor creates a vehicleEntry object that contains general
    information about the vehicle.*/
    const vehicleEntry = {
        vehicleImg: "https://www.carscoops.com/wp-content/uploads/webp/2022/12/2022-Jaguar-XE.webp",
        name: 'Generic Car',
        year: '2022',
        price: '$56,000'
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
                    style={{cursor: "pointer"}}>Update Commisions</p>
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

            {/* Search bar. */}
            <div className = "search">
            <label style = {{padding: '10px'}}>Search</label>
            <input
                type="text"
            />
            </div>

            {/* Display the list of vehicles as a table with 3 columns.*/}
            <div style ={{display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center'}}>
                
                {/* Individual vehicle entry. */}
                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>

                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>

                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>

                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>

                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>

                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>

                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>

                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>

                <div className = "vehicle-entry">
                    <img src ={vehicleEntry.vehicleImg}
                        width = {350}
                        height = {300}></img>
                    <div>Name: {vehicleEntry.name}</div>
                    <div>Year: {vehicleEntry.year}</div>
                    <div>Price: {vehicleEntry.price}</div>
                    <div 
                    className = 'button'
                    onClick={() => navigate('/VehicleDetails')}>
                        View Details
                    </div>
                </div>
            </div>
        </div>
    );
}

// Mandatory export default statement.
export default VehicleList;
