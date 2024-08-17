import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const AcountLinks = () => {
    return (
        <>
            <div className="flex items-center mt-4">
                <div className="w-full border-t border-gray-400"></div>
                <div className="mx-4 text-gray-600">or</div>
                <div className="w-full border-t border-gray-400"></div>
            </div>
            <div className="mt-4 mb-6 space-y-4">
                <button
                    type="button"
                    className="bg-slate-800 w-full hover:bg-MazeRedColor text-white font-bold py-3 px-4 rounded flex items-center justify-center"
                >
                    Google
                    <svg
                        className="ml-3"
                        width="calc(1rem * 1.5)"
                        height="calc(1rem * 1.5)"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path
                            d="M22.1437 10.0266H13.2141C12.8203 10.0266 12.5016 10.3454 12.5016 10.7391V13.5938C12.5016 13.9875 12.8203 14.3063 13.2141 14.3063H18.2437C17.6953 15.736 16.6641 16.9313 15.3562 17.6907L17.4984 21.4032C20.9344 19.4157 22.9687 15.9235 22.9687 12.0188C22.9687 11.461 22.9266 11.0625 22.8469 10.6172C22.7812 10.275 22.4859 10.0266 22.1437 10.0266Z"
                            fill="#167EE6"
                        ></path>
                        <path
                            d="M12.0234 18.5906C9.56249 18.5906 7.41561 17.2453 6.26249 15.2578L2.54999 17.3953C4.43905 20.6719 7.97811 22.875 12.0234 22.875C14.0109 22.875 15.8812 22.3406 17.4984 21.4078V21.4031L15.3562 17.6906C14.3719 18.2625 13.2375 18.5906 12.0234 18.5906Z"
                            fill="#12B347"
                        ></path>
                        <path
                            d="M17.4938 21.4079V21.4032L15.3516 17.6907C14.3719 18.2579 13.2375 18.5907 12.0234 18.5907V22.875C14.0109 22.875 15.8813 22.3407 17.4938 21.4079Z"
                            fill="#0F993E"
                        ></path>
                        <path
                            d="M5.3625 11.9297C5.3625 10.7157 5.69531 9.5813 6.2625 8.60161L2.55 6.46411C1.6125 8.07192 1.07812 9.93755 1.07812 11.9297C1.07812 13.9219 1.6125 15.7875 2.55 17.3954L6.2625 15.2579C5.69063 14.2782 5.3625 13.1438 5.3625 11.9297Z"
                            fill="#FFD500"
                        ></path>
                        <path
                            d="M12.0234 5.26875C13.6266 5.26875 15.1031 5.84063 16.2516 6.7875C16.5375 7.02188 16.95 7.00312 17.2078 6.74531L19.2281 4.725C19.5234 4.42969 19.5 3.94688 19.1859 3.675C17.2594 1.99688 14.7516 0.984375 12.0234 0.984375C7.97811 0.984375 4.43905 3.1875 2.54999 6.46406L6.26249 8.60156C7.41561 6.61406 9.56249 5.26875 12.0234 5.26875Z"
                            fill="#FF4B26"
                        ></path>
                        <path
                            d="M16.2516 6.7875C16.5375 7.02188 16.95 7.00312 17.2078 6.74531L19.2281 4.725C19.5234 4.42969 19.5 3.94688 19.1859 3.675C17.2594 1.99688 14.7516 0.984375 12.0234 0.984375V5.26875C13.6266 5.26875 15.1031 5.83594 16.2516 6.7875Z"
                            fill="#D93F21"
                        ></path>
                    </svg>
                </button>
                <button
                    type="button"
                    className="bg-slate-800 w-full hover:bg-MazeRedColor text-white font-bold py-3 px-4 rounded flex items-center justify-center"
                >
                    Apple
                    <svg
                        className="ml-3"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <g clipPath="url(#clip0_687_7)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.8135 6.87448C14.3733 6.87448 13.8539 6.97713 13.2552 7.18242C12.6566 7.38782 12.2252 7.49057 11.9611 7.49067C11.7556 7.49067 11.3404 7.39967 10.7153 7.21766C10.0903 7.03566 9.55765 6.94465 9.11744 6.94465C8.08448 6.94465 7.22906 7.37906 6.55116 8.24786C5.87328 9.11625 5.53434 10.2401 5.53434 11.6195C5.537 12.383 5.64967 13.1421 5.86887 13.8734C6.11011 14.6726 6.44399 15.4407 6.86371 16.1623C7.30975 16.9429 7.75875 17.5283 8.21069 17.9186C8.66259 18.3089 9.11744 18.504 9.57526 18.504C9.88044 18.504 10.2781 18.4028 10.7682 18.2003C11.2583 17.9977 11.6882 17.8965 12.0579 17.8965C12.4277 17.8965 12.881 17.9934 13.4181 18.1871C13.9551 18.381 14.3762 18.4779 14.6814 18.4778C15.0688 18.4778 15.4561 18.331 15.8435 18.0375C16.2308 17.744 16.6182 17.3008 17.0056 16.708C17.2507 16.3377 17.4727 15.9525 17.6703 15.5547C17.8479 15.1974 17.9965 14.8265 18.1149 14.4454C17.5807 14.2871 17.1053 13.9086 16.6887 13.3098C16.2746 12.7198 16.056 12.0147 16.0636 11.2939C16.0653 10.805 16.175 10.3224 16.3849 9.88082C16.5991 9.42003 17.032 8.91385 17.6834 8.36228C17.2668 7.84574 16.8266 7.46859 16.3629 7.23082C15.8826 6.98926 15.3511 6.86702 14.8135 6.87448ZM14.6638 3.47627C13.6132 3.7166 12.8605 4.16264 12.4056 4.81441C11.9508 5.46585 11.7175 6.23757 11.7058 7.12956C12.1636 7.10617 12.5304 7.03279 12.8063 6.90942C13.1095 6.76688 13.384 6.56998 13.6162 6.32848C13.9777 5.97689 14.2625 5.55422 14.4526 5.08712C14.6286 4.64107 14.7167 4.23027 14.7167 3.85473C14.7167 3.79608 14.7137 3.73744 14.7079 3.67847C14.6999 3.6098 14.6851 3.54207 14.6638 3.47627ZM12.0004 0.402344C18.4155 0.402344 23.616 5.60266 23.616 12.0181C23.616 18.4332 18.4155 23.6335 12.0004 23.6335C5.58526 23.6335 0.384766 18.4332 0.384766 12.0181C0.384766 5.60267 5.58525 0.402344 12.0004 0.402344Z"
                                fill="white"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_687_7">
                                <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </>
        )
}

export const FormLog = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            console.log("Respuesta del servidor:", response);
            localStorage.setItem("token", response.data.token);
            console.log("Token guardado:", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Login error", error);
            alert("Error al iniciar sesión. Por favor verifica tus credenciales.");
        }
    };

    return (
        <>
            <h1 className="text-2xl font-bold mt-6 mb-4 text-center">
                Iniciar Sesión
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col">
                    <label className="block mb-2 w-full">Correo</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="MazeBank@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full flex flex-col pb-5">
                    <label className="block mb-2 w-full pt-2">Contraseña</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        type="password"
                        placeholder="Money12345"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-MazeRedColor text-white font-bold rounded hover:bg-slate-700 transition duration-200"
                >
                    Iniciar Sesión
                </button>
                <AcountLinks />
            </form>
        </>
    )
}

export const FormReg = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const { name, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("se ejecuto");
        try {
            console.log("enviando");
            const response = await axios.post(
                "http://192.168.100.18:3000/api/auth/register",
                formData
            );
            console.log(response.data);
            alert("Nueva cuenta creada");
            navigate("/login");
        } catch (error) {
            console.error(error);
            console.log("no se envio");
        }
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4 mt-8 text-center">
                Crear Cuenta MazeBank
            </h1>
            <form onSubmit={onSubmit}>
                <div className="w-full flex flex-col">
                    <label className="block mb-2 w-full">Nombre de Usuario</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Trevor"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </div>
                <div className="w-full flex flex-col">
                    <label className="block mb-2 w-full">Correo</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="direccion@correo.com"
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
                        placeholder="losSantosCustom5"
                        name="password"
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
            <AcountLinks />
        </>
    )
}