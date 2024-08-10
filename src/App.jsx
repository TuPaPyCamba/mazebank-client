import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import Report from './pages/Report';
import './styles/global.css'
import background from './assets/back.png'
import Footer from './pages/Footer';
import Home from './pages/Home';

function App() {
    return (
        <Router>
                <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${background})` }}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
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