import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import NavLogo from "../../../assets/img/logoMazeBank.png"
import MobileNav from "../../private-pages/components/MobileNav"
import Constants from "../../../constants/Constants"

const NavBar = () => {

    const location = useLocation();
    const { pathname } = location;
    // const [isOpen, setIsOpen] = useState(false)
    const links = Constants.PublickLinks

    // alterna el estado de {isOpen} para ocultar o no los links del menu hambuerguesa
    // const toggleMenu = () => {
    //     setIsOpen(!isOpen)
    // }

    // Función para obtener clases condicionales
    const getLinkClasses = (path) =>
        `font-semibold text group text-lg caret-transparent hover:scale-110 hover:text-MazeRedColor ${pathname === path ? "text-MazeRedColor" : "text-black"}`

    return (
        <nav className="bg-MazeBarColor w-full h-[95px] flex flex-col">
            <div className="flex justify-between items-center mx-auto h-full w-95w 850:w-90w lg:w-80w xl:w-70w 2xl:max-w-[1200px]">
                <Link to="/">
                    <img src={NavLogo} alt="MazeBank Logotipo" className="h-8 360:h-12" />
                </Link>
                <div className="flex items-center">
                    {/* Menu Hamburguesa */}
                    {/* <button onClick={toggleMenu} className="700:hidden"> */}
                        <MobileNav links={links}/>
                    {/* </button> */}
                    {/* Enlaces de la derecha */}
                    <div className="hidden 700:flex gap-8">
                        <Link to="/signup" className={getLinkClasses("/signup")}>
                            Register
                            <div className={`h-1 mx-auto transition-all mt-1 ${
                                    pathname === "/signup"
                                        ? "bg-MazeRedColor w-10 rounded-full"
                                        : "bg-transparent w-0"
                                }`} />
                        </Link>
                        <Link to="/signin" className={getLinkClasses("/signin")}>
                            Access
                            <div className={`h-1 mx-auto transition-all mt-1 ${
                                    pathname === "/signin"
                                        ? "bg-MazeRedColor w-10 rounded-full"
                                        : "bg-transparent w-0"
                                }`} />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Linea Roja Decorativa */}
            <div className="bg-MazeRedColor h-[6px] w-full" />
        </nav>
    )
}

export default NavBar
