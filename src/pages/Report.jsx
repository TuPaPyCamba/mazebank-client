import React, { useState, useEffect } from 'react';
import { getReport } from '../services/api';

const Report = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [report, setReport] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await getReport({ month, year });
            setReport(response.data);
        } catch (error) {
            console.error('Report error', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Report</h2>
                <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Month" required />
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
                <button type="submit">Get Report</button>
            </form>
            {report && (
                <div>
                    <h3>Report for {month}/{year}</h3>
                    <p>Deposits: {report.deposits}</p>
                    <p>Withdrawals: {report.withdrawals}</p>
                    <p>Balance: {report.balance}</p>
                </div>
            )}
        </div>
    );
}

export default Report;