import React from 'react'
import icon1 from '../images/image 17.png'
import '../styles/bloginfopayment.css'
function BlogInfoPayment() {
    return (
        <div className="BlogInfoPayment">
            <h5>Have a coupon code?<span> Click here </span></h5>
          
             <div className="Fakeul">
                <h2><p>Subtotal</p><h3>$2,683.00</h3></h2>
                <h2><p>Coupon Discount</p><h3>(-) 00.00</h3></h2>
                <h2><p>Shiping</p><h3>$16.00</h3></h2>
            </div>   

            <p className='honey'>View shipping charge</p>
            <div className="PlantInputContentAnchor">
                <h3>Total</h3>
                <h4>$2,699.00</h4>
            </div>
            <div className="radiopaymentmethod">
                <h6>Payment Method</h6>
 
                <div className="radiopaymentmethoddiv">
                    <input type="radio" name="" id="" />
                    <img src={icon1} alt="" />
                </div>
                <div className="radiopaymentmethoddiv">
                    <input type="radio" name="" id="" />
                    <p>Dorect bank transfer</p>
                </div>
                <div className="radiopaymentmethoddiv">
                    <input type="radio" name="" id="" /> 
                    <p>Cash on delivery</p>
                </div>

                <button>Place Order</button>
            </div>
        </div>
    )
}

export default BlogInfoPayment