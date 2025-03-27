import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipDetails.css';   // For all DealershipX.tsx pages

const Manufacturer3: React.FC = () => {
    const navigate = useNavigate();

    return (
    <div className='dealership-details-container'>
        <h1>Manufacturer 3</h1>
        <p>Welcome to Manufacturer 3! We offer a great selection of new and used cars</p>
        <button className='back-button' onClick= {() => navigate('/ManufacturerSelection')}>
            Back to Manufacturer Selection
        </button>
    </div>
    );
};

export default Manufacturer3;