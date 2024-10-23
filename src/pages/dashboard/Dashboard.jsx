// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/dashboard', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMessage(response.data.message);
            } catch (error) {
                console.error('Error al obtener los datos del dashboard', error);
            }
        };
        fetchData();
    }, [token]);

    return <div>{message}</div>;
}

export default Dashboard