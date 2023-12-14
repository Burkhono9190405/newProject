import React from 'react'
import '../styles/infpshop.css'
import star from '../images/Star.png'
import star2 from '../images/emptystart.png'
import t from '../images/Twitter (1).png'
import f from '../images/Facebook (1).png'
import l from '../images/Linkedin (1).png'
import m from '../images/Message12.png'
import v from '../images/Vector (1).png'

function InfoShop() {
    return (

        <div className="infoshop">
            <h1>Barberton Daisy</h1>

            <div className="daisy">
                <p>$119.00</p>
                <div className="img__infoshop">
                    <div className="starwrap">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star2} alt="" />
                    </div>
                    <h5>19 Customer Review</h5>
                </div>
            </div>

            <div className="description">
                <h4>Short Description:</h4>
                <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
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

            <div className="update">
                <div className="plusminus">
                    <div className="minus">
                        -
                    </div>
                    <p>1</p>
                    <div className="plus">
                        +
                    </div>
                </div>
                <div className="btn_one">
                    <button className='infoshop_btn1'>Buy NOW</button>
                    <button className='infoshop_btn2'>Add to cart</button>
                    <button className='infoshop_btn3'><img src={v} alt="" /></button>
                </div>
            </div>

            <ul>
                <li>SKU: <span> 1995751877966</span></li>
                <li>Categories: <span>Potter Plants</span> </li>
                <li>Tags: <span>Home, Garden, Plants</span> </li>
                <li><p>Share this products:</p><img src={t} alt="" /><img src={f} alt="" /><img src={l} alt="" /><img src={m} alt="" /></li>
            </ul>
        </div>
    )
}

export default InfoShop 