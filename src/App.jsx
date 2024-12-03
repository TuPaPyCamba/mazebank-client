import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles/global.css'
import { Navigate } from 'react-router-dom'

// Elementos de renderizado
import PublicLayout from './pages/public-pages/Layout.jsx'
import PrivateLayout from './pages/private-pages/Layout.jsx'

// Elementos Publicos
import Home from './pages/public-pages/home-page/Home.jsx'
import SignIn from './pages/public-pages/sign-in/SignIn.jsx'
import SignUp from './pages/public-pages/sign-up/SignUp.jsx'
import Warning from './pages/public-pages/warning/Warning.jsx'

// Elementos Privados
import HomeP from './pages/private-pages/home-page/Home.jsx'
import Cards from './pages/private-pages/my-cards/Cards.jsx'
import History from './pages/private-pages/transaction-history/History.jsx'
import TransferFunds from './pages/private-pages/transfer-funds/TransferFunds.jsx'

// Elementos de Settings
import Settings from './pages/private-pages/settings-page/Settings.jsx'
import SettingsAccount from './pages/private-pages/settings-page/settings-account/SettingsAccount.jsx'
import SettingsSecurity from './pages/private-pages/settings-page/settings-security/SettingsSecurity.jsx'
import SettingsNotifications from './pages/private-pages/settings-page/settings-notifications/SettingsNotifications.jsx'
import SettingsAccessibility from './pages/private-pages/settings-page/settings-accessibility/SettingsAccessibility.jsx'

// Elementos de Settings-Account
import AccountUpdate from './pages/private-pages/settings-page/settings-account/account-update/AccountUpdate.jsx'

// Elementos de Settings-Security
import SecurrityPassword from './pages/private-pages/settings-page/settings-security/security-password/SecurrityPassword.jsx'

// Elementos de Settings-Notifications

// Elementos de Settings-Accessibility 


import Profile from './pages/private-pages/Profile.jsx'

import UITest from './test/UITest.jsx'

import config from './config.js'



function App() {
    return (
        <Router>
            <Routes>
                {/* Rutas con NavBar y Footer */}
                <Route element={<PublicLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path='/warning' element={<Warning />} />
                </Route>
                {/* Rutas sin NavBar y Footer */}
                <Route element={<PrivateRoute element={<PrivateLayout />} />}>
                    <Route path='/dashboard/home' element={<HomeP />} />
                    <Route path='/dashboard/cards' element={<Cards />} />
                    <Route path='/dashboard/history' element={<History />} />
                    <Route path='/dashboard/transferfunds' element={<TransferFunds />} />

                    {/* Rutas de Settings */}
                    <Route path='/dashboard/settings' element={<Settings />} />
                    <Route path='/dashboard/settings/account' element={<SettingsAccount />} />
                    <Route path='/dashboard/settings/security' element={<SettingsSecurity />} />
                    <Route path='/dashboard/settings/notifications' element={<SettingsNotifications />} />
                    <Route path='/dashboard/settings/accessibility' element={<SettingsAccessibility />} />

                    {/* Rutas de Settings-Account */}
                    {/* <Route path='/dashboard/settings/account/' element={<Account />} /> */}
                    {/* <Route path='/dashboard/settings/account/' element={<Account />} /> */}
                    {/* <Route path='/dashboard/settings/account/' element={<Account />} /> */}
                    <Route path='/dashboard/settings/account/updateaccount' element={<AccountUpdate />} />
                    {/* <Route path='/dashboard/settings/account/' element={<Account />} /> */}
                    {/* <Route path='/dashboard/settings/account/' element={<Account />} /> */}
                    
                    {/* Rutas de Settings-Security */}
                    <Route path='/dashboard/setting/security/changepassword' element={<SecurrityPassword />} />

                    {/* Rutas de Settings-Notifications */}

                    {/* Rutas de Settings-Accessibility */}

                    <Route path='/dashboard/profile' element={<Profile />} />            
                </Route>
                <Route path='/testing' element={<UITest />} />
            </Routes>
        </Router>
    )
}

// PrivateRoute para verificar autenticación a través de una solicitud al servidor
const PrivateRoute = ({ element }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get(`${config.serverNet}${config.PORT}/api/auth/check`, { withCredentials: true });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) return null; // puedes mostrar un spinner de carga aquí
    return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default App