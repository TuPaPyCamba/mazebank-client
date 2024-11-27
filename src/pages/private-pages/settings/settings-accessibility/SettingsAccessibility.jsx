import SettingsContainer from "../components/SettingsContainer"
import SettingsLocation from "../components/SettingsLocation"

const SettingsAccessibility = () => {
    const page = 'Accessibility'
    const pageDescripcion = 'Administra cómo ves el contenido de MazeBank'
    const buttons = [
        {
            label: "Zona horaria",
            descripcion: "administra tu zona horaria para visualizar en MazeBank.",
            route: "/warning"
        },
        {
            label: "Pantalla",
            descripcion: "Administra contenido multimedia, pantallas y sonido.",
            route: "/warning"
        },
        {
            label: "Idiomas",
            descripcion: "Administra qué idiomas se usan para personalizar tu experiencia en MazeBank.",
            route: "/warning"
        }
    ]
    return (
        <>
            <SettingsLocation page={page} route={'accessibility'} />
            <h2 className="private-header-box-title caret-transparent">{page}</h2>
            <SettingsContainer buttons={buttons} pagedescripcion={pageDescripcion} />
        </>
    )
}

export default SettingsAccessibility
