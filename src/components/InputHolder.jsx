import React from 'react'
import '../styles/inputholder.css'
import delete1 from '../images/Delete.png'
import icon1 from '../images/image 11 (1).png'
import icon2 from '../images/image 15 (1).png'
import icon3 from '../images/image 16 (1).png'
function InputHolder() {
  return (
    <div className="InputHolder">
        <ul>
            <li className='bob6'>Products</li>
            <li>Price</li>
            <li>Quantity</li>
            <li className='totalli'>Total</li>
        </ul> 
        <div className="InputHolder__content">
        <div className="LongCard">
             <div className="smallcard">
                <img src={icon1} alt="" />
                <div className="smallcard_content">
                    <h2>Barberton Daisy</h2>
                    <p><span>SKU:</span>1995751877966</p>
                </div>
             </div>
              <h2 className='pricecard'>$119.00</h2>
            <div className="plusminus  bob11">
                <div className="minus">
                    -
                </div>
                <p>2</p>
                <div className="plus">
                    +
                </div>
            </div> 
             <h3 className='totalprice'>$238.00</h3>
            <img className='delete_small' src={delete1} alt="" />
        </div>



        <div className="LongCard">
             <div className="smallcard bob12">
                <img src={icon2} alt="" />
                <div className="smallcard_content">
                    <h2>Blushing Bromeliad</h2>
                    <p><span>SKU:</span>19957518757065</p>
                </div>
             </div>
              <h2 className='pricecard bob9'>$139.00</h2>
            <div className="plusminus bob11">
                <div className="minus">
                    -
                </div>
                <p>6</p>
                <div className="plus">
                    +
                </div>
            </div> 
             <h3 className='totalprice1'>$834.00</h3>
            <img className='delete_small bob10' src={delete1} alt="" />
        </div>



        <div className="LongCard">
             <div className="smallcard bob13">
                <img src={icon3} alt="" />
                <div className="smallcard_content">
                    <h2>Aluminum Plant</h2>
                    <p><span>SKU:</span>1995751877786</p>
                </div>
             </div>
              <h2 className='pricecard'>$179.00</h2>
            <div className="plusminus bob11">
                <div className="minus">
                    -
                </div>
                <p>9</p>
                <div className="plus">
                    +
                </div>
            </div> 
             <h3 className='totalprice2'>$1,611.00</h3>
            <img className='delete_small' src={delete1} alt="" />
        </div>



        </div>
    </div>
  )
}

export default InputHolder