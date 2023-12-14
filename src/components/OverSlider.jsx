import React from 'react'
import '../styles/overslider.css'
import icon1 from '../images/product-20-320x320 1 (1).png'
import icon2 from '../images/image 11.png'
function OverSlider() {
  return (
    <div className="overslider">
        <div className="cardslider2">
            <img src={icon1} alt="" />
        </div>    
        <div className="cardslider2">
            <img src={icon2} alt="" />
        </div>
        <div className="cardslider2">
            <img src={icon1} alt="" />
        </div>
        <div className="cardslider2">
            <img src={icon2} alt="" />
        </div>
    </div>
  )
}

export default OverSlider