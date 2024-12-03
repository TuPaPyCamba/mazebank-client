import { Link } from "react-router-dom"
import Instagram from "../../../assets/icons/Instagram.svg"
import X from "../../../assets/icons/x-twitter.svg"
import Facebook from "../../../assets/icons/Facebook.svg"

import MazeBankLogo from "../../../assets/img/logwhite.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-track">
                <div>
                    <Link to="/" className="flex flex-row">
                        <img src={MazeBankLogo} alt="Logo" className="h-8 mr-2 my-auto" />
                        <span className="text-4xl font-bold">MazeBank</span>
                    </Link>
                </div>
                {/* Línea blanca */}
                <div className="bg-MazeBarColor h-1 w-full my-4" />
                <div className="w-full flex flex-col 850:flex-row 850:justify-between gap-6">
                    {/* Links */}
                    <div className="flex flex-col items-center font-semibold text-lg gap-3 850:flex-row 850:gap-6">
                        <Link to="/warning" className="footer-link">help Center</Link>
                        <Link to="/warning" className="footer-link">About MazeBank</Link>
                        <Link to="/warning" className="footer-link">Contact</Link>
                        <Link to="/warning" className="footer-link">Legal</Link>
                        <Link to="/warning" className="footer-link">privacy Notice</Link>
                    </div>
                    {/* Media Links */}
                    <div className="flex flex-row justify-center my-auto gap-x-2">
                        <div className="relative size-6 hover:scale-125">
                            <Link to={"/"}><img src={Instagram} alt="Instagram" className="invert" /></Link>
                        </div>
                        <div className="relative size-6 hover:scale-125">
                            <Link to={"/"}><img src={X} alt="x" className="invert" /></Link>
                        </div>
                        <div className="relative size-6 hover:scale-125">
                            <Link to={"/"}><img src={Facebook} alt="facebook" className="invert" /></Link>
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <p className="text-sm">
                        © 2024 MazeBank. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer