import React from 'react'
import '../styles/inputheader.css'
import filter from '../images/Filter.png'
import rectan from '../images/Rectangle 97.png'
import search from '../images/Search (1).png'
function InputHeader() {
    return (
        <div className="InputHeader">
            <div className="InputHeaderWrapper">
                <input type="text" placeholder='Find your plants' />
                <img src={search} alt="" />
            </div>

            <div className="rectanImg">
                <img className='rectanImg1' src={filter} alt="" />
                <img className='rectanImg2' src={rectan} alt="" />
            </div> 
 
        </div>
    )
}

export default InputHeader