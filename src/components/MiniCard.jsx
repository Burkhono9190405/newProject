import React from 'react'
import '../styles/minicard.css'
import right from '../images/Arrow - Right.png'
import elipse from '../images/Ellipse 7.png'
import elipse2 from '../images/Ellipse 8 (1).png'
function MiniCard({title,text,image}) { 
  return (
    <div className="card_wrap">  
        <img className='bigone4' src={image} alt="" />
        <div className="content2">
           <h2>{title}</h2>
           <p>{text}</p>
           <button>Find More <img src={right} alt="" /></button>
        </div>
        <img className='positionimg' src={elipse} alt="" />
        <img className='positionimg1' src={elipse2} alt="" />
        <div className="overla">

        </div>
    </div>
  )
}

export default MiniCard