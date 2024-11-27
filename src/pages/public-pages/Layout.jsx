import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import ScrollToTop from "../private-pages/settings/components/ScrollToTop.jsx"

const PublicLayout = () => {
    return (
        <div className="min-h-screen grid grid-rows-layout">
            <NavBar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicLayout