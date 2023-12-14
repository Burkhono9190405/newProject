import React from 'react'
import Card from './Card'
import '../styles/cardwrapper.css'
import icon1 from '../images/image 1.png'
import icon2 from '../images/product-21-320x320 1.png'
import icon3 from '../images/image 2.png'
import icon4 from '../images/01 3.png'
import icon5 from '../images/image 7.png'
import icon6 from '../images/image 8.png' 
import icon7 from '../images/image 9.png'
import icon8 from '../images/product-20-320x320 1.png'
import icon9 from '../images/image 10.png'
function CardWrapper() {
  return (

    <div className="cardwrapper">
      <Card image={icon1} title='Barberton Daisy' price='$119.00' />
      <Card image={icon2} title='Angel Wing Begonia' price='$169.00' />
      <Card image={icon3} title='African Violet' price='$199.00' discount='$229.00' />
      <Card image={icon4} title='Beach Spider Lily' price='$129.00' />
      <Card image={icon5} title='Blushing Bromeliad' price='$139.00' />
      <Card image={icon6} title='Aluminum Plant' price='$179.00' />
      <Card image={icon7} title="Bird's Nest Fern " price='$99.00' />
      <Card image={icon8} title='Broadleaf Lady Palm' price='$59.00' />
      <Card image={icon9} title='Chinese Evergreen' price='$39.00' />
      

      <div className="green_bg">
        <p>13% OFF</p>
      </div>
    </div>
  )
}

export default CardWrapper