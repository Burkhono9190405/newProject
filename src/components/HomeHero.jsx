import React from 'react'
import '../styles/homeheader.css'
import icon1 from '../images/01 1.png'
import icon2 from '../images/01 2.png'
import icon3 from '../images/01 1 (1).png'
import icon4 from '../images/Arrow - Right11.png'
import icon5 from '../images/01 2 (1).png'
function HomeHero() {
  return (
    <section>
      <div className="container">

        <div className="Hero__wrapper">
          <div className="Hero__content">
            <h4>Welcome to GreenShop</h4>
            <h1>  Let’s Make a Better <span>Planet</span></h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            <button>SHOP NOW</button>
          </div>
          <div className="Hero__images">
            <img className='abs' src={icon2} alt="" />
            <img className='rel' src={icon1} alt="" />
          </div>
        </div>

        <div className="phonehero">
          <div className="phonehero1">
            <h4>Welcome to GreenShop</h4>
            <h1>Let’s make a
              better <span>planet</span> </h1>
            <p>We are an online plant shop offering a wide range </p>
            <button><p>SHOP NOW</p> <img src={icon4} alt="" /></button>
          </div>
          <div className="phonehero2">
            <img className='imahebob1' src={icon5} alt="" />
            <img className='imahebob' src={icon3} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero