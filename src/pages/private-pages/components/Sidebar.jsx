import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "../../../utils/utils.js";

import Constants from '../../../constants/Constants.js'
import MazeBankLogo from "../../../assets/img/Logo.png";
import Footer from "./Footer.jsx";

const Sidebar = ({ user }) => {
    const location = useLocation();
    const { pathname } = location;
    return (
        <section className="sidebar shadow-2xl">
            <nav className="flex flex-col gap-4">
                <Link
                    to="/"
                    className="mb-12 cursor-pointer flex items-center gap-2"
                >
                    <img
                        src={MazeBankLogo}
                        width={34}
                        height={34}
                        alt="Horizon logo"
                        className="size-[56px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">MazeBank</h1>
                </Link>

                {Constants.privateLinks.map((item) => {
                    const isActive = pathname === item.route ||
                        pathname.startsWith(`${item.route}/`);

                    return (
                        <Link
                            to={item.route}
                            key={item.label}
                            className={cn("sidebar-link caret-transparent", {
                                "bg-MazeBank-red-gradient": isActive,
                            })}
                        >
                            {item.imgURL && ( // Solo muestra el ícono si está disponible
                                <div className="relative size-6">
                                    <img
                                        src={item.imgURL}
                                        alt={item.label}
                                        className={cn("w-full h-full object-cover", {
                                            "brightness-[3] invert-0": isActive,
                                        })}
                                    />
                                </div>
                            )}
                            <p
                                className={cn("sidebar-label", {
                                    "!text-white": isActive,
                                })}
                            >
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </nav>

            <Footer user={user} />
        </section>
    );
};

export default Sidebar;
