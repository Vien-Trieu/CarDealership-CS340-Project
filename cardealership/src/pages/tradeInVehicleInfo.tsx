/*---------------------------------------------------------
Author: Tytrez Dixon
Date Written: 3/2/2025
Date Updated: 3/13/2025

This is the .tsx file for the "Trade-In Vehicle 
Information" page for Mr.Tucker's Car Dealership's
web application. On this page, the user will be able
to enter the information regarding a vehicle a customer
wishes to trade in. The user will then be able to calculate
the vehicle's value and add it to the dealership's inventory.
-------------------------------------------------------------*/
 
// Import the necessary files and packages.
import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';

// This function returns the front-end display of the webpage.
function TradeInVehicleInfo() {

    {/* Initialize the useNavigate method to enable the transition from one
        page to another. */}
        const navigate = useNavigate();

    return (
        <div>
            {/* Logout button */}
            <div 
            className = "logout"
            style = {{marginTop: "10px"}}
            onClick={() => navigate('/login')}>
                Logout
            </div>

            {/* Display the title of the webpage. */}
            <div className = "webpage-title">
                <h1>Trade-In Vehicle Information</h1>
            </div>


            {/* Display list of fields for entering trade-in vehicle information */}
            <div className = "search"
                style = {{display: 'flex', flexWrap: 'wrap', 
                        gap: '35px', justifyContent: 'center', marginTop: '100px', flexDirection: 'column',
                        marginLeft: "575px"}}>
                <div>
                    <label style = {{marginRight: '5px'}}>Make</label>
                    <input
                        type = "text"
                        style = {{border: 'solid'}}
                    />
                </div>

                <div>
                    <label style = {{marginRight: '5px'}}>Model</label>
                    <input
                        type = "text"
                        style = {{border: 'solid'}}
                    />
                </div>

                <div>
                    <label style = {{marginRight: '5px'}}>Year</label>
                    <input
                        type = "text"
                        style = {{border: 'solid'}}
                    />
                </div>

                <div>
                    <label style = {{marginRight: '5px'}}>VIN</label>
                    <input
                        type = "text"
                        style = {{border: 'solid'}}
                    />
                </div>

                <div>
                    <label style ={{marginRight: '5px'}}>Mileage</label>
                    <input
                        type = "text"
                        style = {{border: 'solid'}}
                    />
                </div>

                <div>
                    <label style = {{marginRight: '5px'}}>Insurance</label>
                    <input
                        type = "text"
                        style = {{border: 'solid'}}
                    />
                </div>
            </div>

            {/* Submit button */}
            <div className = "submit">
                Submit
            </div>

        </div>
    )
}

// Mandatory export default statement.
export default TradeInVehicleInfo;
