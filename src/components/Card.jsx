import React from 'react'
import '../styles/card.css'
import heart from '../images/heart 1.png'
import shopping from '../images/shopping 1.png'
import icon10 from '../images/Frame (7).png'
import icon2 from '../images/Rectangle 10.png'
function Card({image,title,price,discount}) {
  return (
    <div className="Card__wrapper">
        <img className='card_wrapper_image_card' src={image} alt="" /> 
        
        <h4>{title}</h4>
        <div className="wrapper__div">
            <h5>{price}</h5>      
            
            <p>{discount}</p>       
        </div> 
        <div className="overlay_card1">
          
        </div>
        <div className="bob4">
        <img className='shopping' src={shopping} alt="" />
        <img className='heart' src={heart} alt="" />
        <img className='search' src={icon10} alt="" />
      </div>
       <img className='card_wrapper_image_card_position' src={icon2} alt="" />
    </div>
  )
}

export default Card 