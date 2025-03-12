import React from 'react';
import '../styles/home.css';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

function Home(){
    {/* Initialize the useNavigate method to enable the transition from one
    page to another. */}
    const navigate = useNavigate();

    {/* This useState declartion and handleClick() method allows
        the user to click on the menu icon see the menu list and
        click the "Hide Menu" item to hide the list */}
    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)

    return(
        
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
    
    <div>
        <div>
            <h1>Mr. Tuckers Car Dealership</h1>
        </div>

        <div>
            <h3> Find you dream car here!</h3>
        </div>
    </div>
            
    {/* Menu List */}
    {/* The menu list will inheret the useState declaration */}
    <div className = {menuVisible ? "menu-visible" : "menu-hidden"}>
        <aside className = "menu-visible menu-list-item :hover" 
                style = {{zIndex: "9"}}>
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
            <b>Home</b>
            <br></br>
            <br></br>

            {/* Hide the menu. */}
            <i
            onClick={handleClick}
            style={{cursor: "pointer" }}> Hide Menu</i>
        </aside>
    </div>
    <nav style = {{marginTop: "20px"}}>
        <ul className="navbar">
            <li><a href="">Home</a></li>
            <li><a href="">Order</a></li>
            <li><a href="">Purchase</a></li>
        </ul>
    <div className="search">
        <form>
            <input type="text" placeholder="Search..."/>
        </form>
    </div>
    </nav>
    
</div>
    )
}

export default Home;
