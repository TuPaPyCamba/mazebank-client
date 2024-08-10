import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>
                <div style={{ padding: '20px' }}>
                    <Outlet />
                    Hola usuario aun estamos trabajando
                </div>
            </div>
        </div>
    );
};

export default Dashboard;