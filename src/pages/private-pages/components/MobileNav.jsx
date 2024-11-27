import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "../../../utils/utils.js";

import { IoMenu } from "react-icons/io5";
import MazeBankLogo from "../../../assets/img/Logo.png";

const MobileNav = ({ user = null, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  // Alterna el estado de {isOpen} para ocultar o no los links del menú hamburguesa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón del menú */}
      <button onClick={toggleMenu}>
        <IoMenu className="flex text-MazeRedColor min-h-14 w-12 h-12" />
      </button>

      {/* Fondo oscuro y contenedor del menú con animación */}
      <div
        className={cn(
          "fixed inset-0 bg-black h-screen bg-opacity-20 transition-opacity duration-300",
          {
            "opacity-100 pointer-events-auto": isOpen,
            "opacity-0 pointer-events-none": !isOpen,
          }
        )}
        style={{ zIndex: 999 }}
        onClick={toggleMenu} // Cierra el menú si haces clic fuera de él
      >
        <div
          className={cn(
            "absolute top-0 left-0 bg-white w-70w max-w-[350px] h-full p-6 shadow-2xl transform transition-transform duration-500",
            {
              "translate-x-0": isOpen,
              "-translate-x-full": !isOpen,
            }
          )}
          onClick={(e) => e.stopPropagation()} // Evita que el clic cierre el menú
        >
          <nav>
            {/* Logo */}
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
              <h1 className="text-3xl font-semibold">MazeBank</h1>
            </Link>

            {/* Enlaces del menú */}
            <div className="flex flex-col gap-4">
              {links.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);

                return (
                  <Link
                    to={item.route}
                    key={item.label}
                    className={cn(
                      "flex gap-3 items-center py-3 px-4 rounded-lg transition-colors duration-300",
                      {
                        "bg-MazeBank-red-gradient": isActive,
                      }
                    )}
                    onClick={toggleMenu}
                  >
                    {item.imgURL && ( 
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
                      className={cn("text-16 font-semibold text-black", {
                        "!text-white": isActive,
                      })}
                    >
                      {item.label}
                    </p>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNav;