import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import config from '../../config.js';
import Constants from '../../constants/Constants.js';

import MazeBankLogo from '../../assets/img/Logo.png'
import MobileNav from './components/MobileNav.jsx';
import ScrollToTop from './settings-page/components/ScrollToTop.jsx';

const PrivateLayout = () => {
    const [userBasicData, setUserBasicData] = useState(null);
    const [error, setError] = useState(null);
    const links = Constants.privateLinks

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.serverNet}${config.PORT}/api/user/basicdata`, {
                    withCredentials: true 
                });
                setUserBasicData(response.data.user)
            } catch (error) {
                setError("Error al obtener los datos del dashboard");
                console.error(error)
            }
        };
        fetchData();
    }, []);

    // Manejo de la visualización
    if (error) return <div>{error}</div>;
    if (!userBasicData) return <div>Cargando...</div>;

    return (
        <div className="min-h-screen flex flex-row bg-slate-50">
            <Sidebar user={userBasicData} />
            <div className='flex size-full flex-col'>
                <div className='root-layout'>
                    <img src={MazeBankLogo} alt="menu icon" className='w-12 h-12'/>
                    <div>
                        <MobileNav links={links}/>
                    </div>
                </div>
                <div className='private-home pt-16 md:pt-0'>
                <div className='private-home-content'>
                    <ScrollToTop />
                    <Outlet />
                </div>
            </div>
            </div>
        </div>
    )
}

export default PrivateLayout