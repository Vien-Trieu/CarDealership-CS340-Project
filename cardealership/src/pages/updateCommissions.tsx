import React from 'react';
import '../styles/WebApp.css';
import '../styles/updateCommissions.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

function UpdateCommissions() {

    const navigate = useNavigate();

    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)

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

            {/* Menu button */}
            <div>
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

            {/* Menu List */}
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
                    <i
                    onClick={handleClick}
                    style={{cursor: "pointer" }}> Hide Menu</i>
                </aside>
            </div>


            {/* List of salespeople */}
            <div style ={{display: 'flex', flexWrap: 'wrap', marginLeft: "150px"}}>
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
                        View Sale Data
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
                        View Sale Data
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
                        View Sale Data
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
                        View Sale Data
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
                        View Sale Data
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
                        View Sale Data
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
                        View Sale Data
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
                        View Sale Data
                    </div>
                </div>

            </div>


            {/* "Salesperson of the Year button" */}
            <div className = "salesperson-of-the-year">
                Salesperson of the Year
            </div>
        </div>
    );
}

export default UpdateCommissions;