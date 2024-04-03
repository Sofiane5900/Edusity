import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {

    
    const slider = useRef();
    let transformX = 0;

    const slideForward = () => {
        if(transformX > -50 ){
            transformX -= 25;
        }

        slider.current.style.transform = `translateX(${transformX}%)`;
    }

    const slideBackward = () => {
        if(transformX < 0 ){
            transformX += 25;
        }
        
        slider.current.style.transform = `translateX(${transformX}%)`;
    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>

                <li>
                    <div className="slide">
                         <div className='user-info'>
                           <img src={user_1} alt="user" />
                        <div>
                            <h3>Camille Dubois</h3>
                            <span>Edusity, France</span>
                        </div>

                        </div>
                        <div>
                            <p>"Edusity m'a aidé à réaliser mon rêve de devenir ingénieur. 
                                Je suis très reconnaissant envers toute l'équipe pour leur soutien et leur dévouement."
                                </p>
                        </div>

                    </div>
                </li>

                 <li>
                    <div className="slide">
                         <div className='user-info'>
                           <img src={user_2} alt="user" />
                        <div>
                            <h3>Sam Jackson</h3>
                            <span>Edusity, France</span>
                        </div>
                        
                        </div>
                        <div>
                            <p>
                                "Edusity m'a été d'un soutien immense dans l'accomplissement de mon objectif de devenir architecte d'intérieur."
                                </p>
                        </div>

                    </div>
                </li>

                <li>
                    <div className="slide">
                         <div className='user-info'>
                           <img src={user_3} alt="user" />
                        <div>
                            <h3>Emma Martin</h3>
                            <span>Edusity, France</span>
                        </div>
                        
                        </div>
                        <div>
                            <p>"Grâce à l'équipe d'Edusity, j'ai réalisé mon rêve de devenir traductrice.
                                 Je leur suis très reconnaissante pour leur soutien inconditionnel et leur dévouement sans faille"
                                </p>
                        </div>

                    </div>
                </li>

                <li>
                    <div className="slide">
                         <div className='user-info'>
                           <img src={user_4} alt="user" />
                        <div>
                            <h3>Mathieu Lefebvre</h3>
                            <span>Edusity, France</span>
                        </div>
                        
                        </div>
                        <div>
                            <p>"Edusity a été un pilier dans la concrétisation de mon ambition de devenir photographe. 
                                Je suis infiniment reconnaissant envers toute l'équipe pour leur soutien sans faille et leur dévouement inébranlable."
                                </p>
                        </div>

                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Testimonials