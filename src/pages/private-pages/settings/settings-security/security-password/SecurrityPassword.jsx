import { useState } from "react";
import axios from "axios";
import SettingsLocation from "../../components/SettingsLocation";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirigir

const SecurrityPassword = () => {
    const page = 'Change password';
    const navigate = useNavigate(); // Hook para redirección
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalMessage, setModalMessage] = useState(null); // Estado para el mensaje del modal
    const [modalType, setModalType] = useState(null); // 'success' o 'error' para el estilo del modal

    const handleSubmit = async (e) => {
        e.preventDefault();
        setModalMessage(null);

        // Validar que las contraseñas coincidan
        if (newPassword !== confirmPassword) {
            setModalMessage("Las nuevas contraseñas no coinciden.");
            setModalType("error");
            return;
        }

        // Validar longitud mínima de la nueva contraseña
        if (newPassword.length < 8) {
            setModalMessage("La nueva contraseña debe tener al menos 8 caracteres.");
            setModalType("error");
            return;
        }

        try {
            // Enviar solicitud al backend
            const response = await axios.put("http://localhost:3001/api/update/change-password", { currentPassword, newPassword }, {
                withCredentials: true,
            });

            console.log(response)
            setModalMessage("Contraseña actualizada con éxito.");
            setModalType("success");
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (err) {
            console.error(err);
            setModalMessage(err.response?.data?.message || "Error al actualizar la contraseña.");
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
            <SettingsLocation route={'security'} page={'Security and account access'} secondRoute={'changepassword'} secondPage={page}/>
            <h2 className="private-header-box-title caret-transparent">{page}</h2>
            <div className="bg-white rounded-xl caret-transparent border p-8 border-gray-200 shadow-xl divide-y divide-gray-200">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="text-xl caret-transparent">
                            Contraseña Actual
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
                            Nueva Contraseña
                        </label>
                        <input 
                            type="password" 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Al menos 8 caracteres"
                            className="p-2 my-2 bg-gray-100 rounded-lg border border-gray-400 text-MazeRedColor font-semibold"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl caret-transparent">
                            Confirmar Nueva Contraseña
                        </label>
                        <input 
                            type="password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Al menos 8 caracteres"
                            className="p-2 my-2 bg-gray-100 rounded-lg border border-gray-400 text-MazeRedColor font-semibold"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button 
                            type="submit"
                            className="p-4 bg-MazeRedColor text-white font-semibold rounded-lg transition hover:bg-black">
                            Actualizar contraseña
                        </button>
                    </div>
                </form>
            </div>

            {/* Modal */}
            {modalMessage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="p-6 rounded-lg shadow-lg w-80w max-w-[400px] bg-white">
                        <h3 className={`text-lg font-semibold ${modalType === "success" ? "text-green-600" : "text-red-600"}`}>
                            {modalType === "success" ? "Contraseña Actualizada" : "Error"}
                        </h3>
                        <p className="mt-2">{modalMessage}</p>
                        <button 
                            onClick={closeModal} 
                            className="mt-4 px-4 py-2 bg-MazeRedColor text-white font-semibold rounded-lg hover:bg-black">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SecurrityPassword;