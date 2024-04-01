import React from 'react'
import './programmes.css'
// Images
import programme_1 from '../../assets/program-1.png'
import programme_2 from '../../assets/program-2.png'
import programme_3 from '../../assets/program-3.png'
// Icones
import programme_icon_1 from '../../assets/program-icon-1.png'
import programme_icon_2 from '../../assets/program-icon-2.png'
import programme_icon_3 from '../../assets/program-icon-3.png'



const Programmes = () => {
  return (
    <div className='programmes'>

      <div className="programme">
        <img src={programme_1} alt="programme numero 1" />
        <div className="caption">
          <img src={programme_icon_1} alt='Diplômes'></img>
          <p>Diplômes de Licences</p>
        </div>
      </div>

      <div className="programme">
        <img src={programme_2} alt="programme numero 2" />
        <div className="caption">
          <img src={programme_icon_2} alt='Diplôme de Masters'></img>
          <p>Diplômes de Masters</p>
        </div>
      </div>

      <div className="programme">
        <img src={programme_3} alt="programme numero 3" />
        <div className="caption">
          <img src={programme_icon_3} alt='Post-Graduation'></img>
          <p>Post-Graduation</p>
        </div>
      </div>

    </div>
  )
}

export default Programmes