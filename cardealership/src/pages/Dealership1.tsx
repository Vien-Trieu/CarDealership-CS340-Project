import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dealershipDetails.css';   // For all DealershipX.tsx pages

const Dealership1: React.FC = () => {
    const navigate = useNavigate();

    return (
    <div className='dealership-details-container'>
        <h1>Dealership 1</h1>
        <p>Welcome to dealership 1! We offer a great selection of new and used cars</p>
        <button className='back-button' onClick= {() => navigate('/dealershipSelection')}>
            Back to Dealership Selection
        </button>
    </div>
    );
};

export default Dealership1;