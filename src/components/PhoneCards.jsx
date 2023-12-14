import React from 'react'
import '../styles/phonecards.css'
import pos from '../images/Group 57.png'
function PhoneCards({image,title,text}) {
  return (
    <div className="Phone_cards">
         <img className='img1' src={image} alt="" />
         <h2>{title}</h2>
         <p>{text}</p>
         <img className='pos123' src={pos} alt="" />
    </div>
  )
} 
 
export default PhoneCards