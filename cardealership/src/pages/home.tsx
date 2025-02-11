import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any user session if needed (e.g., localStorage)
        localStorage.removeItem("userToken"); 

        // Navigate back to login page
        navigate("/login");
    };

    return (
        <div>
            <h1>Mr. Tucker's Car Dealership</h1>
            <nav>
                <ul className="navbar">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/order-selection">Order</Link></li>
                    <li><a href="#">Purchase</a></li>
                </ul>
                <div className="search">
                    <form>
                        <input type="text" placeholder="Search..." />
                    </form>
                </div>
                <div>
                    <button className="pill" type="button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>
            <main>
                <h3>Find your dream car here!</h3>
            </main>
        </div>
    );
}

export default Home;