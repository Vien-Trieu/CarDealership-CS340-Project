import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
            console.log('Response from backend:', data);  // Log backend response

    
            if (!response.ok) {
                throw new Error(data.message || 'Invalid credentials');
            }
    
            alert('Login successful!');
            navigate('/Home');  // Redirect to dashboard after successful login
        } catch (error: any) {
            setError(error.message || 'An error occurred');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Car Dealership Login</h1>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;