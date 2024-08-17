import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transfer from './pages/Transfer';
import Report from './pages/Report';
import './styles/global.css'
import Home from './pages/Home';

function App() {
    return (
        <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transfer" element={<Transfer />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
            <Footer />
        </Router>
    );
}

export default App;