import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mazelog.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-MazeBarColor h-[75px] w-full top-0 left-0 z-50">
            <div className="flex justify-between items-center px-4 mx-auto max-w-[1200px] h-full">
                {/* Logotipo a la izquierda */}
                <Link to="/" className="text-white font-bold text-lg flex items-center">
                    <img src={logo} alt="Logotipo" className="h-12 cursor-pointer" />
                </Link>
                
                {/* Botón de menú de hamburguesa en pantallas pequeñas */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {/* Icono de menú de hamburguesa */}
                        <svg className="w-6 h-6" fill="none" stroke="#D3272D" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Enlaces a la derecha */}
                <div className={`hidden lg:flex space-x-4`}>
                    <a href="/login" className="text-black hover:text-gray-200">Iniciar Sesión</a>
                    <a href="/register" className="text-black hover:text-gray-200">Registrarse</a>
                    <a href="/dashboard" className="text-black hover:text-gray-200">Dashboard</a>
                    <a href="/transfer" className="text-black hover:text-gray-200">Transferir</a>
                    <a href="/report" className="text-black hover:text-gray-200">Reportes</a>
                </div>
            </div>

            {/* Línea roja debajo del navbar */}
            <div className="bg-MazeRedColor h-1 w-full" />

            {/* Menú desplegable en pantallas pequeñas */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 right-0 bg-white text-black w-48 shadow-lg rounded-lg">
                    <a href="/login" className="block px-4 py-2 hover:bg-gray-200">Iniciar Sesión</a>
                    <a href="/register" className="block px-4 py-2 hover:bg-gray-200">Registrarse</a>
                    <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</a>
                    <a href="/transfer" className="block px-4 py-2 hover:bg-gray-200">Transferir</a>
                    <a href="/report" className="block px-4 py-2 hover:bg-gray-200">Reportes</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;