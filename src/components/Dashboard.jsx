import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>
                <Navbar />
                <div style={{ padding: '20px' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;