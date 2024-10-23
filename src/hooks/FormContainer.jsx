import SignInTheme from "../assets/img/theme.jpg"
import Money from "../assets/img/money.jpeg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useMazeContext } from "../context/Context"

const FormContainer = () => {
    const navigate = useNavigate()
    const { setToken } = useMazeContext()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:3001/api/auth/login",
                formData
            )
            const token = response.data.token
            setToken(token)
            console.log(response.data)
            navigate('/dasboard')
        } catch (error) {
            console.error("Login error", error)
            alert("Error al iniciar sesión. Por favor verifica tus credenciales.")
        }
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    return (
        <section
            className="py-32"
            style={{ backgroundImage: `url(${SignInTheme})` }}
        >
            <div className="bg-slate-50 flex flex-row w-full shadow-2xl mx-auto 600:rounded-2xl 600:w-90w 1000:w-80w 2xl:w-55w">
                <div className="w-full p-5 flex flex-col justify-center items-center xl:w-1/2">
                    <header className="font-bold py-4 text-2xl">Iniciar Sesión</header>
                    <form onSubmit={onSubmit}>
                        <div className="w-full flex flex-col">
                            <label className="block mb-2 w-full">Correo</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="text"
                                placeholder="MazeBank@correo.com"
                                name="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-full flex flex-col pb-5">
                            <label className="block mb-2 w-full pt-2">Contraseña</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="password"
                                placeholder="Money12345"
                                name="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <button type="submit" className="w-full py-2 mb-8 bg-MazeRedColor text-white font-bold rounded hover:bg-slate-700 transition duration-200"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
                <div className="hidden w-2 bg-MazeRedColor h-full xl:flex"></div>
                <div
                    className="hidden bg-cover bg-center min-h-full rounded-tr-xl rounded-br-xl w-1/2 xl:flex"
                    style={{ backgroundImage: `url(${Money})` }}
                ></div>
            </div>
        </section>
    )
}

export default FormContainer
