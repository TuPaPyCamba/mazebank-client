import { useState } from "react";
import axios from "axios";
import SettingsLocation from "../../components/SettingsLocation";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir

import config from "../../../../../config";
import AlertModal from "../../../../../components/AlertModal";
const SecurrityPassword = () => {
    const page = 'Change Password';
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalMessage, setModalMessage] = useState(null); // Estado para el mensaje del modal
    const [modalType, setModalType] = useState(null); // 'success' o 'error' para el estilo del modal
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalMessage(null);

        // validacion para campos vacios
        if (!currentPassword || !newPassword || !confirmPassword) {
            if (!currentPassword && !newPassword && !confirmPassword) {
                setModalMessage('Please fill in the fields.')
            } else if (!currentPassword) {
                setModalMessage('You need to enter your current password.')
            } else if (!newPassword) {
                setModalMessage('You need to enter your new password.')
            } else if (!confirmPassword) {
                setModalMessage('You need to confirm your new password.')
            }
            setModalType('error')
            return
        }

        // Validar que las contraseñas coincidan
        if (newPassword !== confirmPassword) {
            setModalMessage('New passwords do not match.');
            setModalType("error");
            return;
        }

        // Validar longitud mínima de la nueva contraseña
        if (newPassword.length < 8) {
            setModalMessage('Password must be at least 8 characters long.');
            setModalType("error");
            return;
        }

        try {
            // Enviar solicitud al backend
            const response = await axios.put(`${config.serverNet}${config.PORT}/api/update/change-password`, { currentPassword, newPassword }, {
                withCredentials: true,
            });

            if (response.data.type === 'error') {
                setModalMessage(response.data.message)
                setModalType(response.data.type)
                console.error(`STATUS ${response.data.status}: ${response.data.message}`)
                return
            }

            setModalMessage("Contraseña actualizada con éxito.");
            setModalType("success");
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (err) {
            console.error(err);
            setModalMessage('Server error when trying to update password, Please try again later or contact our support team.');
            setModalType("error");
        }
    };

    const closeModal = () => {
        if (modalType === "success") {
            navigate("/dashboard/settings/security"); // Redirige al usuario a la página deseada
        }
        setModalMessage(null);
        setModalType(null);
    };

    return (
        <>
            <AlertModal message={modalMessage} type={modalType} onclose={closeModal} />
            <SettingsLocation route={'security'} page={'Security and account access'} secondRoute={'changepassword'} secondPage={page} />
            <h2 className="private-header-box-title caret-transparent">{page}</h2>
            <div className="bg-white rounded-xl caret-transparent border p-8 border-gray-200 shadow-xl divide-y divide-gray-200">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="text-xl caret-transparent">
                            Current Password
                        </label>
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="p-2 my-2 bg-gray-100 rounded-lg border border-gray-400 text-MazeRedColor font-semibold"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl caret-transparent">
                            New Password
                        </label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="At least 8 characters"
                            className="p-2 my-2 bg-gray-100 rounded-lg border border-gray-400 text-MazeRedColor font-semibold"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl caret-transparent">
                            Confirm new Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="At least 8 characters"
                            className="p-2 my-2 bg-gray-100 rounded-lg border border-gray-400 text-MazeRedColor font-semibold"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="p-4 bg-MazeRedColor text-white font-semibold rounded-lg transition hover:bg-black">
                            Update passowrd
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SecurrityPassword;