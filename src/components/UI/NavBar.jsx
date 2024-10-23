import { useState } from "react"
import { Link } from "react-router-dom"
import NavLogo from "../../assets/img/logoMazeBank.png"
import { IoMenu } from "react-icons/io5"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    // alterna el estado de {isOpen} para ocultar o no los links del menu hambuerguesa
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-MazeBarColor w-full h-[95px] flex flex-col">
            <div className="flex justify-between items-center mx-auto h-full w-95w 850:w-90w lg:w-80w xl:w-70w 2xl:max-w-[1200px]">
                <Link to="/">
                    <img src={NavLogo} alt="MazeBank Logotipo" className="h-8 360:h-12" />
                </Link>
                <div>
                    {/* Menu Hamburguesa */}
                    <button onClick={toggleMenu} className="700:hidden">
                        <IoMenu className="flex text-MazeRedColor min-h-14 w-full h-full" />
                    </button>
                    {/* Enlaces de la derecha */}
                    <div className="hidden 700:flex">
                        <Link to="/signup">Registrarse</Link>
                        <Link to="/signin">Acceder</Link>
                    </div>
                </div>
            </div>
            {/* Linea Roja Decorativa */}
            <div className="bg-MazeRedColor h-[8px] w-full" />
            {/* Menu Desplegable en pantallas pequeñas */}
            {isOpen && (
                <div className="700:hidden absolute top-16 right-0 bg-white text-black w-48 shadow-lg rounded-lg">
                    <Link to="/signup" className="block px-4 py-2 hover:bg-gray-300">Registrarse</Link>
                    <Link to="/signin" className="block px-4 py-2 hover:bg-gray-300">Acceder</Link>
                </div>
            )}
        </nav>
    )
}

export default NavBar
