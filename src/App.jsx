import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Transfer from './components/Transfer';
import Report from './components/Report';
import './styles/global.css'
import background from './assets/back.png'
import Footer from './components/Footer';

function App() {
    return (
        <Router>
                <div 
                className="bg-cover bg-center h-screen" 
                style={{ backgroundImage: `url(${background})` }}
            >
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transfer" element={<Transfer />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;