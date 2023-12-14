import React from 'react'
import '../styles/phonecardswrapper.css'
import PhoneCards from './PhoneCards'
import icon1 from '../images/image 1 (2).png'
import icon2 from '../images/image 2 (1).png'
import icon3 from '../images/image 2.png'
import icon4 from '../images/01 3.png'
import icon5 from '../images/image 7.png'
import icon6 from '../images/image 8.png' 
import icon7 from '../images/image 9.png'
import icon8 from '../images/product-20-320x320 1.png'
function PhoneCardsWrapper() {
    return (
        <div className="PhoneCardsWrapper">
            <div className="PhoneCardsWrapper1">
                <PhoneCards image={icon1} title='Barberton Daisy' text='$119.00' />
                <PhoneCards image={icon2} title='Angel Wing Begonia' text='$169.00' />
                <PhoneCards image={icon3} title='African Violet' text='$119.00' />
                <PhoneCards image={icon4} title='Beach Spider Lily' text='$129.00' />
            </div>
            <div className="PhoneCardsWrapper2">
                <PhoneCards image={icon5} title='Blushing Bromeliad' text='$139.00' />
                <PhoneCards image={icon6} title="Bird's Nest Fern"  text='$119.00' />
                <PhoneCards image={icon7} title='Broadleaf Lady Palm' text='$119.00' />
                <PhoneCards image={icon8} title='Chinese Evergreen' text='$119.00' />
            </div>
        </div>
    )
}

export default PhoneCardsWrapper