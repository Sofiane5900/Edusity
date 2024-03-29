import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";


const Navbar = () => {
    return (
        <nav className="container">
            <img src={Logo} alt="logo edusity" className="logo_navbar"></img>
            <ul>
                <li>Accueil</li>
                <li>Programme</li>
                <li>À propos de nous</li>
                <li>Campus</li>
                <li>Témoignages</li>
                <li><button className="btn">Contact</button></li>
            </ul>
        </nav>
    );
    }

export default Navbar;