import React from 'react'
import '../styles/shopcardslider.css'
function ShopCardSlider({image,title,price}) {
  return (
    <div className="ShopCardSlider">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{price}</p>
    </div>
  )
}

export default ShopCardSlider