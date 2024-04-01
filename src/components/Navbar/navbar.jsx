import React, { useEffect, useState }from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";


const Navbar = () => {

    const [sticky, setSticky] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={`container ${sticky? 'dark-nav' : '' }`}>
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