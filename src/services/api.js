import axios from 'axios';

const API_URL = 'http://192.168.100.18:3000/api';

export const login = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, data);
        return response; // Asegúrate de que se devuelva la respuesta
    } catch (error) {
        // Manejo de errores
        if (error.response) {
            // La solicitud se realizó y el servidor respondió con un código de estado que no está en el rango de 2xx
            console.error('Error en la respuesta del servidor:', error.response.data);
            throw error; // Re-lanzar el error para manejarlo en el componente
        } else if (error.request) {
            // La solicitud se realizó pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor:', error.request);
            throw error;
        } else {
            // Algo sucedió al configurar la solicitud
            console.error('Error al configurar la solicitud:', error.message);
            throw error;
        }
    }
};
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