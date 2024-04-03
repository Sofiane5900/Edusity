import React from 'react'
import './campus.css'
import gallerie_1 from '../../assets/gallery-1.png'
import gallerie_2 from '../../assets/gallery-2.png'
import gallerie_3 from '../../assets/gallery-3.png'
import gallerie_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'




const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallerie">
            <img src={gallerie_1} alt="image du campus" />
            <img src={gallerie_2} alt="image du campus" />
            <img src={gallerie_3} alt="image du campus" />
            <img src={gallerie_4} alt="image du campus" />
        </div>

        <button className='btn dark-btn'>
            Voir plus de photos
            <img src={white_arrow} alt="fléche" />
        </button>
    </div>
  )
}

export default Campus