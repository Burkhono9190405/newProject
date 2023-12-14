import React from 'react'
import '../styles/Top3.css'

function Top3() {
    return (
        <div className="top3__wrapper">
            <div className="content_top3">

                <div className="nav__top3">
                    <p>All Plants</p>
                    <p>New Arrivals</p> 
                    <p>Sale</p>
                </div>
                <div className="select_op">
                    <h2>Short by:</h2>
                    <select className=''>
                        <option>Default sorting</option>
                        <option>Default sorting</option>
                        <option>Default sorting</option>
                    </select>
                </div>

            </div>
           
        </div>
    )
}

export default Top3