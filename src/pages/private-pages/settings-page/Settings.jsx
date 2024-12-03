import axios from 'axios'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import config from '../../../config'

import Alert from '../../../assets/img/alert.png'
import SettingsContainer from './components/SettingsContainer'

const Settings = () => {
    const [userBasicData, setUserBasicData] = useState('guess')
    const [error, setError] = useState(null);
    const pageDescripcion = 'More information and assistance'
    const buttons = [
        {
            label: "Your Account",
            descripcion: "Administra la información de tu cuenta, descarga un archivo con tus datos u obten mas información acerca de las opciones de desactivacíon de la cuenta.",
            route: "/dashboard/settings/account"
        },
        {
            label: "Security and account access",
            descripcion: "Administra la seguridad de tu cuenta y lleva un control de su uso, incluidos los dispositivos que conectaste a ella.",
            route: "/dashboard/settings/security"
        },
        {
            label: "Notifications",
            descripcion: "Selecciona los tipos de notificaciones que quieres recibir sobre tus actividades, movimientos, y recomendaciones.",
            route: "/dashboard/settings/notifications"
        },
        {
            label: "Accessibility",
            descripcion: "Administra como ves MazeBank.",
            route: "/dashboard/settings/accessibility"
        },
        {
            label: "Help center",
            descripcion: "Todo lo que necesitas saber para poder usar MazeBank como un profesional.",
            route: "/warning"
        }
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.serverNet}${config.PORT}/api/user/basicdata`, {
                    withCredentials: true
                })
                setUserBasicData(response.data.user)
            } catch (error) {
                setError("Error al obtener los datos del Usuario");
                console.error(error)
            }
        }
        fetchData()
    }, [])

    // Manejo de la visualización
    if (error) return (
        <div className='bg-white flex flex-col items-center justify-center m-auto max-w-[700px] max-h-[400px] w-full h-full rounded-xl border border-gray-200 shadow-xl'>
            <h2 className='text-xl bg-MazeRedColor p-4 text-white font-semibold rounded-lg'>{error}</h2>
            <div>
                <img src={Alert} alt="" className='' />
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
    if (!userBasicData) return <div>Cargando...</div>;

    return (
        <>
            <h2 className="private-header-box-title caret-transparent">Settings</h2>
            <Link to='/dashboard/profile'>
                <div className="w-full flex gap-4 md:gap-8 p-8 bg-white rounded-xl border border-gray-200 shadow-xl">
                    <div>
                        <div className='h-24 w-24 bg-cover rounded-full' style={{ backgroundImage: `url(${userBasicData?.profileImg})` }}>
                        </div>
                    </div>
                    <div className='my-auto caret-transparent'>
                        <h2 className='font-semibold text-3xl'>{userBasicData?.name} {userBasicData?.surnames?.paternal}</h2>
                        <p className='text-lg'>Maze Bank Account</p>
                    </div>
                </div>
            </Link>
            <SettingsContainer buttons={buttons} pagedescripcion={pageDescripcion} />
        </>
    )
}

export default Settings
