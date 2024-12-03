import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Restablece el scroll al inicio de la página al cambiar de ruta
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; 
};

export default ScrollToTop;