import React, { useState } from 'react';
import { transfer } from '../services/api';

const Transfer = () => {
    const [toUserId, setToUserId] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await transfer({ toUserId, amount: parseFloat(amount) });
            alert('Transfer successful');
        } catch (error) {
            console.error('Transfer error', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Transfer</h2>
            <input type="text" value={toUserId} onChange={(e) => setToUserId(e.target.value)} placeholder="Recipient User ID" required />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
            <button type="submit">Transfer</button>
        </form>
    );
}

export default Transfer;