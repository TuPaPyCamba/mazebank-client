import SettingsLocation from "../components/SettingsLocation"
import SettingsContainer from "../components/SettingsContainer"

const SettingsSecurity = () => {
    const page = 'Security and account access'
    const pageDescripcion = 'Administra la información de tu cuenta y lleva un control de su uso'
    const buttons = [
        {
            label : "Cambia tu contraseña",
            descripcion : "Cambia tu contraseña en cualquier momento.",
            route : "/dashboard/setting/security/changepassword"
        },
        {
            label : "Seguridad",
            descripcion : "Administra la seguridad de tu cuenta.",
            route : "/warning"
        },
        {
            label : "Dispositivos y Sesiones",
            descripcion : "Consulta la información sobre los Dispositivos donde haz iniciado sesión.",
            route : "/warning"
        }
    ]
    return (
        <>
            <SettingsLocation route={'security'} page={page} />
            <h2 className="private-header-box-title caret-transparent">{page}</h2>
            <SettingsContainer pagedescripcion={pageDescripcion} buttons={buttons} />
        </>
    )
}

export default SettingsSecurity
