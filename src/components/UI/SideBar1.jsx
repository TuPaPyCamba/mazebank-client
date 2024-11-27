import NavLogo from "../../assets/img/logoMazeBank.png"
import { IoIosLogOut } from "react-icons/io";
import { createContext, useContext, useState } from "react";

import { RiMenuUnfold2Line, RiMenuUnfoldLine } from "react-icons/ri";

import { Navigate } from "react-router-dom";
import axios from "axios";
const SideBarContext = createContext()

export const SideBar = ({ children }) => {
    
    const [expanded, setExpanded] = useState(true)

    const handleLogout = async () => {
        await axios.post("http://localhost:3001/api/auth/logout", {}, { withCredentials: true });
        Navigate("/signin"); // redirige a la página de inicio de sesión
    }

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 py-8 flex justify-between items-center">
                    <img
                        src={NavLogo}
                        className={`overflow-hidden transition-all ${expanded ? "w-56" : "w-0"
                            }`}
                        alt=""
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className={`rounded-lg p-3 hover:bg-gray-100 m-auto ${expanded ? "ml-2" : "px-3"}`}
                    >
                        {expanded ? <RiMenuUnfold2Line size={20} /> : <RiMenuUnfoldLine size={20} />}
                    </button>
                </div>

                <SideBarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SideBarContext.Provider>

                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md mx-auto"
                    />
                    <div
                        className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-full ml-3" : "w-0"}`}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <button onClick={handleLogout} className="hover:text-red-600">
                            <IoIosLogOut size={20} />
                        </button>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export const SideBarItem = ({ icon, text, active, alert }) => {
    const { expanded } = useContext(SideBarContext)
    return (
        <li
            className={`
        relative flex items-center p-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
                    ? "bg-gradient-to-tr from-red-200 to-red-100 text-red-800"
                    : "hover:bg-red-50 text-gray-600"
                }
    `}
        >
            <div className="mx-auto">{icon}</div>
            <span
                className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                    }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-red-400 ${expanded ? "" : "top-2"
                        }`}
                />
            )}

            {!expanded && (
                <div
                    className={` absolute left-full rounded-md px-2 py-1 ml-6 bg-red-100 text-red-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 `}
                >
                    {text}
                </div>
            )}
        </li>
    )
}
