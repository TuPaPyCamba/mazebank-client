import { useState } from "react";
import SignUpTheme from "../../../assets/img/tarjetmobile.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import config from "../../../config";
import AlertModal from "../../../components/AlertModal";

const SignUp = () => {
    const navigate = useNavigate();

    // Estado para AlertModal
    const [modalMessage, setModalMessage] = useState(null);
    const [modalType, setModalType] = useState(null);

    const [formData, setFormData] = useState({
        userName: "",
        name: "",
        paternal: "",
        maternal: "",
        email: "",
        phoneNumber: "",
        birthdate: "",
        city: "",
        state: "",
        country: "",
        address: "",
        rfc: "",
        occupation: "",
        password: "",
        passwordConfirm: "",
    });

    const {
        userName,
        name,
        paternal,
        maternal,
        email,
        phoneNumber,
        birthdate,
        city,
        state,
        country,
        address,
        rfc,
        occupation,
        password,
        passwordConfirm,
    } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Lista de campos requeridos
        const requiredFields = [
            { name: "userName", label: "UserName" },
            { name: "name", label: "Name" },
            { name: "paternal", label: "Paternal Surname" },
            { name: "maternal", label: "Maternal Surname" },
            { name: "email", label: "Email" },
            { name: "phoneNumber", label: "Phone Numer" },
            { name: "birthdate", label: "Birthdate" },
            { name: "city", label: "City" },
            { name: "state", label: "State" },
            { name: "country", label: "Country" },
            { name: "address", label: "Address" },
            { name: "rfc", label: "RFC" },
            { name: "occupation", label: "Occupation" },
            { name: "password", label: "Password" },
            { name: "passwordConfirm", label: "Password Confirm" },
        ];

        // Verificar campos vacíos
        const emptyFields = requiredFields.filter((field) =>
            !formData[field.name]
        );

        if (emptyFields.length > 0) {
            const fieldNames = emptyFields.map((field) => field.label).join(
                ", ",
            );
            setModalMessage(
                `Please fill in the followings fields: ${fieldNames}.`,
            );
            setModalType("error");
            return;
        }

        // Validación de contraseñas
        if (password !== passwordConfirm) {
            setModalMessage("Passwords do not match.");
            setModalType("error");
            return;
        }

        const formDataWithSurnames = {
            ...formData,
            surnames: { paternal, maternal },
            placeOfBirth: { city, state, country },
        };

        try {
            const response = await axios.post(
                `${config.serverNet}${config.PORT}/api/auth/register`,
                formDataWithSurnames,
            );

            if (response.data.type === "error") {
                setModalMessage(response.data.message);
                setModalType("error");
                console.error(
                    `STATUS ${response.data.status}: ${response.data.message}`,
                );
                return;
            }

            setModalMessage("¡Account created successfully!.");
            setModalType("success");
        } catch (error) {
            setModalMessage(
                "Server error when trying to create a new account, Please try again later or contact our support team.",
            );
            setModalType("error");
        }
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const closeModal = () => {
        if (modalType === "success") {
            navigate("/signin");
        }
        setModalMessage(null);
        setModalType(null);
    };

    return (
        <main className="w-full h-full">
            <AlertModal
                message={modalMessage}
                type={modalType}
                onclose={closeModal}
            />
            <section
                className="py-32 bg-cover"
                style={{ backgroundImage: `url(${SignUpTheme})` }}
            >
                <div className="bg-MazeGray flex flex-row w-full shadow-2xl mx-auto 700:rounded-2xl 700:max-w-[650px] xl:max-w-[1000px]">
                    <div className="w-full mx-auto px-5 py-10 flex flex-col 700:px-16 700:py-16 xl:px-24">
                        <header className="font-semibold pb-4 text-center text-3xl 1000:text-4xl">
                        Create Account
                        </header>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col w-full"
                        >
                            <div className="flex flex-col">
                                <label className="my-2 font-semibold w-full n">
                                    User Name
                                </label>
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
                                <label className="my-2 font-semibold w-full">
                                    Name
                                </label>
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
                                    <label className="my-2 font-semibold w-full">
                                        Paternal surname
                                    </label>
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
                                    <label className="my-2 font-semibold w-full">
                                        Maternal surname
                                    </label>
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
                                <label className="my-2 font-semibold w-full">
                                    Email
                                </label>
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
                                <label className="my-2 font-semibold w-full">
                                    Phone Number
                                </label>
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
                                    <label className="my-2 font-semibold w-full">
                                        Birthdate
                                    </label>
                                    <input
                                        type="date"
                                        className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none w-full"
                                        name="birthdate"
                                        value={birthdate}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="my-2 font-semibold w-full">
                                        City
                                    </label>
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
                                    <label className="my-2 font-semibold w-full">
                                        State
                                    </label>
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
                                    <label className="my-2 font-semibold w-full">
                                        Country
                                    </label>
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
                                <label className="my-2 font-semibold w-full">
                                    Address
                                </label>
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
                                <label className="my-2 font-semibold w-full">
                                    RFC
                                </label>
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
                                <label className="my-2 font-semibold w-full">
                                    Occupation
                                </label>
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
                                <label className="my-2 font-semibold w-full">
                                    Password
                                </label>
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
                                <label className="my-2 font-semibold w-full">
                                    Password Confirm
                                </label>
                                <input
                                    className="p-2 rounded-md border-2 border-gray-600 hover:border-MazeRedColor focus:outline-none"
                                    type="password"
                                    placeholder="Secretitos1234"
                                    name="passwordConfirm"
                                    value={passwordConfirm}
                                    onChange={onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={onsubmit}
                                className="my-8 p-4 bg-MazeRedColor rounded-md text-white font-bold hover:font-normal"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SignUp;
