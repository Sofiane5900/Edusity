import React from "react";
import "./hero.css";
import dark_arrow from "../../assets/dark-arrow.png";


const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero_text">
                <h1>Nous assurons une meilleure éducation pour un monde meilleur</h1>
                <p>Notre mission est de garantir une éducation de qualité pour tous les étudiants, partout dans le monde.
                 </p>
                <button className="btn">En savoir plus <img src={dark_arrow} alt="fléche" /></button>
            </div>
        </div>
    );
}
export default Hero;