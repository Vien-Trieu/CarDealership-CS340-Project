import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

function ApproveTransactions () {

    const navigate = useNavigate();

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
                className = {menuVisible ? "menu-visible" : "menu-hidden"}
                onClick={handleClick}
                />
                </button>
            </div>

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
                    <i 
                    onClick={handleClick}
                    style={{cursor: "pointer" }}> Hide Menu</i>
                </aside>
            </div>
        </div>
    );
}

export default ApproveTransactions;