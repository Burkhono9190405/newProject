import React from 'react'
import PhoneCards2 from './PhoneCards2'
import '../styles/phonewrapper2.css'
import icon1 from '../images/image 11 (2).png'
import icon2 from '../images/image 15 (2).png'
import icon3 from '../images/image 16 (2).png'
import icon4 from '../images/image 9 (2).png' 
function PhoneWrapper2() {
  return (
    <div className="PhoneWrapper2">
        <PhoneCards2 image={icon1} title='Barberton Daisy' id='Size : M' price='$119.00' />
        <PhoneCards2 image={icon2} title='Blushing Bromeliad' id='Size : S' price='$139.00' />
        <PhoneCards2 image={icon3} title='Aluminum Plant' id='Size : M' price='$358.00' />
        <PhoneCards2 image={icon4} title="Bird's Nest Fern" id='Size : M' price='$198.00' />
    </div>
  )
}

export default PhoneWrapper2