import React from 'react'
import '../styles/plantinput.css'

function PlantInput() {
    return (
        <div className="PlantInput">
            <h1>Cart Totals </h1>
            <div className="PlantInputHolder">
                <h2>Coupon Apply</h2>
                <div className="PlantInputHolderWrapper">
                    <input type="text" placeholder='Enter coupon code here...' />
                    <button>Apply</button>
                </div>
                <ul> 
                    <li><p>Subtotal</p><h5>$2,683.00</h5></li>
                    <li><p>Coupon Discount</p><h5>(-) 00.00</h5></li>
                    <li><p>Shiping</p><h5>$16.00</h5></li>
                </ul>
                <p className='view'>View shipping charge</p> 
  
                <div className="PlantInputContentAnchor">
                    <h3>Total</h3>
                    <h4>$2,699.00</h4>
                </div>
                <div className="PlantInputContent">
                    <button>Proceed To Checkout</button>
                    <h6>Continue Shopping</h6>
                </div>

            </div>
        </div>
    )
}

export default PlantInput