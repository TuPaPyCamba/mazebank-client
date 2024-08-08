// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={onChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;