import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import config from "../../../config";
import Constants from "../../../constants/Constants";

// Elementos graficos
import Google from "../../../assets/icons/google.svg";
import Apple from "../../../assets/icons/apple.svg";
import Money from "../../../assets/img/money.jpeg";
import SignInTheme from "../../../assets/img/theme.jpg";

// Componentes reusables
import AlertModal from "../../../components/AlertModal";

const SignIn = () => {
    // Recursos del AlertModal
    const [modalMessage, setModalMessage] = useState(null);
    const [modalType, setModalType] = useState(null);

    const navigate = useNavigate();

    const emailRegex = Constants.emailRegex;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalMessage(null);

        if (!email || !password) {
            if (!email && !password) {
                setModalMessage("Email and password cannot be empty.");
            } else if (!email) {
                setModalMessage("Email cannot be empty.");
            } else {
                setModalMessage("Password cannot be empty.");
            }
            setModalType("error");
            return;
        }

        if (!emailRegex.test(email)) {
            setModalMessage("Email is not valid.");
            setModalType("error");
            return;
        }

        if (password.length < 8) {
            setModalMessage("Password must be at least 8 characters long.");
            setModalType("error");
            return;
        }

        try {
            // Enviar solicitud al backend
            const response = await axios.post(
                `${config.serverNet}${config.PORT}/api/auth/login`,
                { email, password },
                { withCredentials: true },
            );

            if (response.data.type === 'error') {
                setModalMessage(response.data.message)
                setModalType(response.data.type)
                console.error(`STATUS ${response.data.status}: ${response.data.message}`)
                return
            }
            
            navigate('/dashboard/home')
        } catch (error) {
            setModalMessage(
                "Server error when trying to log in, Please try again later or contact our support team.",
            );
            setModalType("error");
        }
    };

    const closeModal = () => {
        if (modalType === "success") {
            navigate("/dashboard/settings/security");
        }
        setModalMessage(null);
        setModalType(null);
    };

    return (
        <main>
            <AlertModal
                message={modalMessage}
                type={modalType}
                onclose={closeModal}
            />
            <section
                className="py-32 bg-cover"
                style={{ backgroundImage: `url(${SignInTheme})` }}
            >
                <div className="bg-slate-50 flex flex-row w-full shadow-2xl mx-auto 600:rounded-2xl 600:max-w-[540px] xl:max-w-[1200px]">
                    <div className="w-full mx-auto px-5 py-10 flex flex-col 600:px-16 600:py-16 xl:w-1/2 xl:px-24">
                        <header className="font-semibold pb-4 text-center text-3xl 1000:text-4xl caret-transparent">
                            log In
                        </header>
                        <form onSubmit={handleSubmit} className="caret-transparent">
                            <div className="w-full flex flex-col">
                                <label className="block font-semibold mb-2 w-full">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded hover:border-MazeRedColor"
                                    type="text"
                                    placeholder="MazeBank@correo.com"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="w-full flex flex-col pb-5">
                                <label className="block font-semibold mb-2 w-full pt-2">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded hover:border-MazeRedColor"
                                    type="password"
                                    placeholder="Money12345"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 shadow-md bg-MazeRedColor text-white font-bold rounded hover:bg-slate-700 transition duration-200"
                            >
                                Sign In
                            </button>
                        </form>
                        {/* "OR" section */}
                        <div className="flex flex-row gap-2 my-6">
                            <div className="h-px my-auto bg-slate-500 w-full">
                            </div>
                            <div>or</div>
                            <div className="h-px my-auto bg-slate-500 w-full">
                            </div>
                        </div>
                        {/* Login with other services */}
                        <div className="flex flex-col gap-4">
                            <div className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold bg-white hover:bg-blue-600 hover:text-white">
                                Google
                                <img
                                    src={Google}
                                    alt=""
                                    className="size-6 "
                                />
                            </div>
                            <div className="w-full flex flex-row shadow-md justify-center gap-2 py-3 border rounded-lg text-center transition duration-200 font-semibold text-white bg-black hover:bg-blue-600">
                                Apple
                                <img
                                    src={Apple}
                                    alt=""
                                    className="size-6 invert"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="hidden bg-cover bg-center min-h-full rounded-tr-xl rounded-br-xl w-1/2 xl:flex"
                        style={{ backgroundImage: `url(${Money})` }}
                    >
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SignIn;
