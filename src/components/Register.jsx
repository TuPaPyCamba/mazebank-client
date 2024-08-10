import React, { useState } from 'react';
import axios from 'axios';
import tarjetview from '../assets/tarjetmobile.jpg'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const { name, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("se ejecuto")
        try {
            console.log("enviando")
            const response = await axios.post('http://192.168.100.18:3000/api/auth/register', formData);
            console.log(response.data);
            alert("Nueva cuenta creada")
            navigate("/login")
        } catch (error) {
            console.error(error);
            console.log("no se envio")
        }
    };

    return (
        <div className="pt-[4px]">
            {/* Formulario para pantallas grandes */}
            <div className="hidden lg:block">
                <div className="bg-MazeBarColor w-60 mx-auto h-10 rounded shadow-lg mt-16"></div>
            </div>
            {/* Formulario para pantallas pequeñas */}
            <div className="block lg:hidden">
                <div
                className="pt-24 pb-36 h-8 bg-cover bg-center items-center justify-center"
                style={{ backgroundImage: `url(${tarjetview})` }}
                >
                </div>
                {/* Línea roja */}
                <div className="bg-MazeRedColor h-1 w-full" />
                <div className="bg-MazeBarColor w-full mx-auto rounded shadow-lg px-5 space-y-5 pt-6 pb-6">
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Crear Cuenta MazeBank
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="w-full flex flex-col">
                            <label className="block mb-2 w-full">Nombre de Usuario</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                placeholder="Trevor"
                                name='name'
                                value={name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="block mb-2 w-full">Correo</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                placeholder="direccion@correo.com"
                                name='email'
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-full flex flex-col pb-5">
                            <label className="block mb-2 w-full pt-2">Contraseña</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="password"
                                placeholder="losSantosCustom5"
                                name='password'
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-MazeRedColor text-white font-bold rounded hover:bg-slate-700 transition duration-200"
                        >
                            Crear Nuevo Usuario
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;