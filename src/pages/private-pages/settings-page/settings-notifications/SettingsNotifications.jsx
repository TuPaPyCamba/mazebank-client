import SettingsContainer from "../components/SettingsContainer"
import SettingsLocation from "../components/SettingsLocation"

const SettingsNotifications = () => {
    const page = 'Notifications'
    const pageDescripcion = 'Administra la información de tu cuenta y lleva un control de su uso'
    const buttons = [
        {
            label : "Filtros",
            descripcion : "elige las notificaciones que quieres ver, y las que no.",
            route : ""
        },
        {
            label : "Preferencias",
            descripcion : "selecciona tus preferencias por tipo de notificación.",
            route : ""
        },
    ]
    return (
        <>
            <SettingsLocation route={'notifications'} page={page}/>
            <h2 className="private-header-box-title caret-transparent">{page}</h2>
            <SettingsContainer pagedescripcion={pageDescripcion} buttons={buttons}/>
        </>
    )
}

export default SettingsNotifications
