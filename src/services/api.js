import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const login = (data) => axios.post(`${API_URL}/auth/login`, data);
export const register = (data) => axios.post(`${API_URL}/auth/register`, data);

export const getTransactions = () => axios.get(`${API_URL}/transactions`, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
});

export const transfer = (data) => axios.post(`${API_URL}/transactions/transfer`, data, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
});

export const getReport = (params) => axios.get(`${API_URL}/transactions/report`, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    params
});