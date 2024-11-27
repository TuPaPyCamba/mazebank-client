
import { Link } from "react-router-dom"

const SettingsContainer = ({buttons, pagedescripcion}) => {
    return (
        <div className="bg-white rounded-xl caret-transparent border p-8 border-gray-200 shadow-xl divide-y divide-gray-200">
            <p className="font-semibold text-xl pb-8">{pagedescripcion}</p>
            { buttons.map((item) => {
                return (
                    <div className="p-4 hover:bg-gray-100 transition">
                    <Link to={item.route} className="group">
                        <h2 className="w-full text-xl group-hover:font-semibold">{item.label}</h2>
                        <p>{item.descripcion}</p>
                    </Link>
                </div>
                )
            })}
        </div>
    )
}

export default SettingsContainer
