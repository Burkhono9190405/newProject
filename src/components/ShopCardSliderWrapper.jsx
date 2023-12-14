import React from 'react'
import '../styles/shopcardsliderwrapper.css'
import ShopCardSlider from './ShopCardSlider'
import icon1 from '../images/01 3 (1).png'
import icon2 from '../images/image 7 (1).png'
import icon3 from '../images/image 8 (1).png'
import icon4 from '../images/image 9 (1).png'
import icon5 from '../images/image 10 (1).png'
function ShopCardSliderWrapper() {
  return (
    <section>
        <div className="container">
            <div className="ShopCardSliderWrapper">
                <ShopCardSlider image={icon1} title='Beach Spider Lily' price='$129.00'/>
                <ShopCardSlider image={icon2} title='Blushing Bromeliad' price='$139.00'/>
                <ShopCardSlider image={icon3} title='Aluminum Plant' price='$179.00'/>
                <ShopCardSlider image={icon4} title="Bird's Nest Fern" price='$99.00'/>
                <ShopCardSlider image={icon5} title='Chinese Evergreen' price='$39.00'/>
            </div>
        </div>
    </section>
  )
}

export default ShopCardSliderWrapper