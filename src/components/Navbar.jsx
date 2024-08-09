import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-slate-900 h-20 shadow-2xl">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/transfer">Transfer</Link></li>
                <li><Link to="/report">Report</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;