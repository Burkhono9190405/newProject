import React from 'react'
import '../styles/bigimage.css'
import icon1 from '../images/Search.png'
function BigImage({image}) {
  return (
    <div className="wrap_image_big">
        <img className='bigboy' src={image} alt="" />
        <img className='bob5' src={icon1} alt="" />
    </div>
  ) 
} 

export default BigImage