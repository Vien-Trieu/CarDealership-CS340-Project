/*
Author:
Date Created:
Date Last Modified:

This tsx file will either approve or disaprove a commission for salespeople by Mr. Tucker.
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommissionApproval: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Commission Approval</h1>
            <p>Review and approve commission updates before applying changes.</p>
            <button onClick={() => navigate('/home')}>Back to Home</button>
        </div>
    );
};

export default CommissionApproval;