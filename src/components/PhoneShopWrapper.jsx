import React from 'react'
import '../styles/phoneshopwrapper.css'
import big from '../images/image 1 (3).png'
import left from '../images/Arrow - Left 2.png'
import heart from '../images/Heart.png'
import star from '../images/Star.png'
import shopping from '../images/Shop (1).png'
function PhoneShopWrapper() {
    return (
        <div className="PhoneShopWrapper">
            <div className="Bigimagewrap">
                <img className='bob1000' src={big} alt="" />
                <img className='heartposition1' src={heart} alt="" />
                <img className='leftposition' src={left} alt="" />
            </div>
 
            <div className="PhoneShopWrapper1">
                <h1>Barberton Daisy</h1>
                <div className="minidiv">
                    <img src={star} alt="" />
                    <p>4.8</p>
                    <span>(19)  </span>
                </div>
            </div>

            <div className="PhoneShopWrapper2">
                <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come.</p>
            </div>

            <h2>Size:</h2>
            <div className="size_info">
                <div className="sizecards">
                    <p>F</p>
                </div>
                <div className="sizecards">
                    <p>M</p>
                </div>
                <div className="sizecards">
                    <p>L</p>
                </div>
                <div className="sizecards">
                    <p>XL</p>
                </div>
            </div>

            <ul>
                <li>SKU: <span> 1995751877966</span></li>
                <li>Categories: <span>Potter Plants</span> </li>
                <li>Tags: <span>Home, Garden, Plants</span> </li>
            </ul>

            <div className="PhoneShopWrapper10">
                <div className="PhoneShopWrapper11">
                    <p>Qty</p>
                    <button>-</button>
                    <h6>1</h6>
                    <button>+</button>
                </div>
                <h4>$119.00</h4>
            </div>

            <div className="PhoneShopWrapper12">
              <button>Buy Now</button>
              <div className="smalldiv">
                <img src={shopping} alt="" />
              </div>
            </div>
        </div>
    )
}

export default PhoneShopWrapper