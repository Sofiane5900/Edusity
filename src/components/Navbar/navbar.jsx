import React, { useEffect, useState }from "react";
import { Link } from 'react-scroll';
import "./navbar.css";
import Logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";



const Navbar = () => {

    const [sticky, setSticky] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);


    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky? 'dark-nav' : '' }`}>
            <img src={Logo} alt="logo edusity" className="logo_navbar"></img>
            <ul className={mobileMenu? '' : 'hide-mobile-menu' }>
                <li><Link to="hero" smooth={true} offset={0} duration={500}> Accueil</Link></li>
                <li><Link to="programmes" smooth={true} offset={-260} duration={500}> Programme </Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}> À propos de nous </Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}> Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500}> Témoignages</Link></li>
                <li><Link className="btn" smooth={true} offset={-260} duration={500}>Contact</Link></li>
            </ul>
            <img src={menu_icon} alt="menu icon" className="menu-icon" onClick={toggleMenu}></img>
        </nav>
    );
    }

export default Navbar;