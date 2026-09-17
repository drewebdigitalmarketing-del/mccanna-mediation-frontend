import logo from "../media/logo.png"
import "../css/nav.css"
import { Icon } from "@iconify/react";
import useGenStore from "../store/store";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

function Navbar(){
    const setMenuActive = useGenStore((s) => s.setMenuActive);
    const setActiveLink = useGenStore((s) => s.setActiveLink);
    const location = useLocation();
    const navigate = useNavigate();

    const showFonMenu = () => {
        console.log("allo");
        setMenuActive(true);
    };

    const handleCall = () => {
        window.location.href = "tel:+13602974057";
    };

    const toHome = () => {
        navigate("/");
    };

    // Optional: Update store when route changes
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname, setActiveLink]);

    // Function to check if link is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    return(
        <nav>
            <div className="navPlacer">
                <div className="navLogo" onClick={()=>toHome()}>
                    <img src={logo} alt="" />
                </div>
                <div className="navLinks">
                    <div className={`navLink ${isActive("/") ? "active" : ""}`}>
                        <a href="/">Home</a>
                    </div>
                    <div className={`navLink ${isActive("/services") ? "active" : ""}`}>
                        <a href="/services">Services</a>
                    </div>
                    <div className={`navLink ${isActive("/approach") ? "active" : ""}`}>
                        <a href="/approach">My Approach</a>
                    </div>
                    <div className={`navLink ${isActive("/mediation") ? "active" : ""}`}>
                        <a href="/mediation">Why Mediation</a>
                    </div>
                    <div className={`navLink ${isActive("/about") ? "active" : ""}`}>
                        <a href="/about">About</a>
                    </div>
                    <div className={`navLink ${isActive("/contact") ? "active" : ""}`}>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
                <div className="fonNavIcon" onClick={() => showFonMenu()}>
                    <Icon className="faIcon" icon="solar:hamburger-menu-broken" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;