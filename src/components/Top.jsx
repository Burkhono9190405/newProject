import React from 'react'
import arrow from '../images/Arrow - Right 2.png'
import '../styles/top.css'
function Top() {
  return (
    <section>
        <div className="wrapper__top">
            <div className="item1">
                1
            </div> 
            <div className="item1">
                2
            </div>
            <div className="item1">
                3
            </div>
            <div className="item1">
                4
            </div>
            <div className="item1">
            <img src={arrow} alt="" />
            </div>
           
        </div>
    </section>
  )
}

export default Top