import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import SignInTheme from "../assets/img/theme.jpg"
import Money from "../assets/img/money.jpeg"
import Google from '../assets/icons/google.svg'
import Apple from '../assets/icons/apple.svg'

import config from "../config"

const FormContainer = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post(
            `${config.serverNet}${config.PORT}/api/auth/login`,
            formData,
            { withCredentials: true } // permite enviar y recibir cookies
        )

        const message = response.data.message

        console.log(response.data)

        // Si el login fue exitoso, redirige al dashboard
        navigate("/dashboard/home");
    } catch (error) {
        console.error("Login error", error)
        alert("Error al iniciar sesión. Por favor verifica tus credenciales.")
    }
}

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    return (
        <section className="py-32 bg-cover" style={{ backgroundImage: `url(${SignInTheme})` }} >
            <div className="bg-slate-50 flex flex-row w-full shadow-2xl mx-auto 600:rounded-2xl 600:max-w-[540px] xl:max-w-[1200px]">
                <div className="w-full mx-auto px-5 py-10 flex flex-col 600:px-16 600:py-16 xl:w-1/2 xl:px-24">
                    <header className="font-semibold pb-4 text-center text-3xl 1000:text-4xl">
                        Iniciar Sesión
                    </header>
                    <form onSubmit={onSubmit}>
                        <div className="w-full flex flex-col">
                            <label className="block font-semibold mb-2 w-full">Correo</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded hover:border-MazeRedColor"
                                type="text"
                                placeholder="MazeBank@correo.com"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-full flex flex-col pb-5">
                            <label className="block font-semibold mb-2 w-full pt-2">Contraseña</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded hover:border-MazeRedColor"
                                type="password"
                                placeholder="Money12345"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <button type="submit" className="w-full py-2 shadow-md bg-MazeRedColor text-white font-bold rounded hover:bg-slate-700 transition duration-200"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                    <div className="flex flex-row gap-2 my-6">
                            <div className="h-px my-auto bg-slate-500 w-full"></div>
                            <div>or</div>
                            <div className="h-px my-auto bg-slate-500 w-full"></div>
                        </div>
                    {/* Login with other services */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold bg-white hover:bg-blue-600 hover:text-white">
                            Google
                            <img src={Google} alt="" className="size-6 "/>
                        </div>
                        <div className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold text-white bg-black hover:bg-blue-600">
                            Apple
                            <img src={Apple} alt="" className="size-6 invert"/>
                        
                        </div>
                    </div>
                </div>
                <div
                    className="hidden bg-cover bg-center min-h-full rounded-tr-xl rounded-br-xl w-1/2 xl:flex"
                    style={{ backgroundImage: `url(${Money})` }}
                ></div>
            </div>
            
        </section>
    )
}

export default FormContainer
