import SettingsContainer from "../components/SettingsContainer"
import SettingsLocation from "../components/SettingsLocation"

const SettingsAccount = () => {
    const page = 'Account'
    const pageDescripcion = 'Administra la información de tu cuenta y lleva un control de su uso'
    const buttons = [
        {
            label: "Información de el perfil",
            descripcion: "Consulta la información de tu perfil, como tu Username e imagen de perfil, esta informacion es publica para otras MazeBank Accounts y es la manera en la que los demas pueden identificarte.",
            route: ""
        },
        {
            label : "Información de la cuenta",
            descripcion : "Consulta la información de tu cuenta, como el numero de teléfono y dirección de correo electrónico, esta informacion es privada y solo tu tienes acceso a ella.",
            route : "/dashboard/profile"
        },
        {
            label: "Actualiza la información de el Perfil",
            descripcion: "Actualiza tu información de tu perfil siempre que lo requieras."
        },
        {
            label : "Actualiza la información de la cuenta",
            descripcion : "Actualiza la información de tu cuenta siempre que lo requieras.",
            route : "/dashboard/settings/account/updateaccount"
        },
        {
            label : "Descarga un archivo con tus datos",
            descripcion : "Hazte una idea del tipo de información que se almacena de tu cuenta.",
            route : ""
        },
        {
            label : "Desactivar cuenta",
            descripcion : "Averigua cómo puedes desactivar tu cuenta.",
            route : ""
        },
    ]
    return (
        <>
            <SettingsLocation route={'account'} page={page}/>
            <h2 className="private-header-box-title caret-transparent">{page}</h2>
            <SettingsContainer buttons={buttons} pagedescripcion={pageDescripcion} />
        </>
    )
}

export default SettingsAccount
