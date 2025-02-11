import React from 'react';
import '../styles/WebApp.css';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';

function VehicleList () {

    const navigate = useNavigate();

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
                <button className = "menu-button">
                <IonIcon 
                name = "menu-outline"
                size = "large"
                // onClick={() => <p>{Jeff.Spe}</p>}
                />
                </button>
            </div>

            {/* Search bar. */}
            <div className = "search">
            <label style = {{padding: '15px'}}>Search</label>
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

export default VehicleList;