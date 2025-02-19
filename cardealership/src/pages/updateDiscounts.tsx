import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

function UpdateDiscounts() {

    const navigate = useNavigate();

    const [menuVisible, setMenuVisible] = useState (false);

    const handleClick = () => setMenuVisible(!menuVisible)

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
                    <b>Update Discounts</b>
                    <br></br>
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

            {/* Search bar. */}
            <div className = "search">
            <label style = {{padding: '10px'}}>Search</label>
            <input
                type="text"
            />
            </div>

            <div style ={{display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center'}}>
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
                        View Discount
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
                        View Discount
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
                        View Discount
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
                        View Discount
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
                        View Discount
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
                        View Discount
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
                        View Discount
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
                        View Discount
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
                        View Discount
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateDiscounts;