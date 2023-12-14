import React from 'react'
import '../styles/bigcard.css'
import icon1 from '../images/Super Sale.png'
import icon2 from '../images/image 12.png'
function BigCard() {
  return (
    <div className="bigcard__wrapper">
      
        <img className='idk' src={icon1} alt="" />

        <h1>UP TO 75% OFF</h1>

        <img className='big' src={icon2} alt="" />
        <div className="overlay2">
          
        </div>
    </div>
  )
}

export default BigCard 