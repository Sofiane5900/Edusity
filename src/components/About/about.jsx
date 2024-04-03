import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' alt='about-img'></img>
            <img src={play_icon} className='play-icon' alt='play-icon' onClick={() =>
             {setPlayState(true)}}></img>
        </div>

        <div className="about-right">
        <h3>A propos du campus</h3>
        <h2>Former Aujourd'hui Les Leaders De Demain</h2>
        <p>Découvrez notre campus moderne, un environnement inspirant conçu pour cultiver l'excellence académique et le développement personnel des étudiants</p>
        <p>Plongez au cœur de notre campus et explorez un univers où la curiosité est encouragée, les idées sont partagées et le potentiel est libéré.
         Avec des installations de pointe et une équipe dévouée, nous façonnons les leaders de demain.</p>
        <p>Notre campus est bien plus qu'un lieu d'études. C'est un véritable écosystème où l'apprentissage se mêle à la créativité,
             où les défis deviennent des opportunités et où chaque étudiant est soutenu dans sa quête d'excellence et de réussite.</p>
        </div>


    </div>
  )
}

export default About