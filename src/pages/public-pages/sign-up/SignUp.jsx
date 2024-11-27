import { useState } from "react"
import SignUpTheme from "../../../assets/img/tarjetmobile.jpg"
import { useNavigate } from "react-router-dom"
import axios from "axios";

import config from "../../../config";

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        userName: '',
        name: '',
        paternal: '',
        maternal: '',
        email: '',
        phoneNumber: '',
        birthdate: '',
        city: '',
        state: '',
        country: '',
        address: '',
        rfc: '',
        occupation: '',
        password: '',
        passwordConfirm: ''
    })

    const { userName, name, paternal, maternal, email, phoneNumber, birthdate, city, state, country, address, rfc, occupation, password, passwordConfirm } = formData

    const onSubmit = async (e) => {
        e.preventDefault()
    
        // Validación de contraseñas
        if (password !== passwordConfirm) {
            alert('Las contraseñas no coinciden')
            return
        }
    
        const formDataWithSurnames = {
            ...formData,
            surnames: {
                paternal: formData.paternal,
                maternal: formData.maternal,
            },
            placeOfBirth: {
                city: formData.city,
                state: formData.state,
                country: formData.country,
            },
        }
    
        try {
            const response = await axios.post(
                `${config.serverNet}${config.PORT}/api/auth/register`,
                formDataWithSurnames
            )
            console.log(response.data)
            alert('nueva cuenta creada')
            navigate('/')
        } catch (error) {
            console.log('no se ha enviado la información', error)
        }
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <main className="w-full h-full">
            <section
                className="py-32 bg-cover"
                style={{ backgroundImage: `url(${SignUpTheme})` }}
            >
                <div className="bg-MazeGray flex flex-row w-full shadow-2xl mx-auto 700:rounded-2xl 700:max-w-[650px] xl:max-w-[1000px]">
                    <div className="w-full mx-auto px-5 py-10 flex flex-col 700:px-16 700:py-16 xl:px-24" >
                        <header className="font-semibold pb-4 text-center text-3xl 1000:text-4xl">
                            Crear Cuenta
                        </header>
                        <form onSubmit={onSubmit} className="flex flex-col w-full">
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">Nombre de Usuario</label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="text"
                                    placeholder="ElMarinoLoco2024"
                                    name="userName"
                                    value={userName}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">Nombre</label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="text"
                                    placeholder="Trevor Philips"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="my-2 font-semibold w-full">Apellido Paterno</label>
                                    <input
                                        className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                        type="text"
                                        placeholder="Philips"
                                        name="paternal"
                                        value={paternal}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="my-2 font-semibold w-full">Apellido Materno</label>
                                    <input
                                        className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                        type="text"
                                        placeholder="Gomez"
                                        name="maternal"
                                        value={maternal}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">Email</label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">Numero Telefonico</label>
                                <input
                                    type="tel"
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    placeholder="01 800 222 777"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-x-4">
                                <div className="flex flex-col">
                                    <label className="my-2 font-semibold w-full">Fecha de Nacimiento</label>
                                    <input
                                        type="date"
                                        className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none w-full"
                                        name="birthdate"
                                        value={birthdate}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="my-2 font-semibold w-full">Ciudad</label>
                                    <input
                                        className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                        type="text"
                                        placeholder="Los Santos"
                                        name="city"
                                        value={city}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="my-2 font-semibold w-full">Estado</label>
                                    <input
                                        className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                        type="text"
                                        placeholder="California"
                                        name="state"
                                        value={state}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="my-2 font-semibold w-full">Pais</label>
                                    <input
                                        className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                        type="text"
                                        placeholder="United States"
                                        name="country"
                                        value={country}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">Direccion</label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="text"
                                    placeholder="Power Street, Downtown, Los Santos, CA"
                                    name="address"
                                    value={address}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">RFC</label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="text"
                                    placeholder="TPLSCA130913FLOO"
                                    name="rfc"
                                    value={rfc}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">Ocupacion</label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="text"
                                    placeholder="Traficante de Productos Polemicos"
                                    name="occupation"
                                    value={occupation}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">Contraseña</label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="password"
                                    placeholder="Secretitos1234"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full">Confirmar Contraseña</label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="password"
                                    placeholder="Secretitos1234"
                                    name="passwordConfirm"
                                    value={passwordConfirm}
                                    onChange={onChange}
                                />
                            </div>
                            <button type="submit" onClick={onsubmit} className="my-8 p-4 bg-MazeRedColor rounded-md text-white font-bold hover:font-normal">Crear cuenta</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignUp
