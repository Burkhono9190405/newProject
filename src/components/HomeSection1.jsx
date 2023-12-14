import React from 'react'
import '../styles/homesection1.css'

function HomeSection1() {
  
  return (
    <section>
        <div className="container">
      
     
            <div className="main__text">
              <h2>Categories</h2>
              <ul>
                <li><span>House Plants</span> <span>(33)</span></li>
                <li> <p>Potter Plants</p> <h6>(12)</h6></li>
                <li> <p>Seeds</p> <h6>(65)</h6></li>
                <li> <p>Small Plants</p> <h6>(39)</h6></li>
                <li> <p>Big Plants</p> <h6>(23)</h6></li>
                <li> <p>Succulents</p> <h6>(17)</h6></li>
                <li> <p>Trerrariums</p> <h6>(19)</h6></li>
                <li> <p>Gardening</p> <h6>(13)</h6></li>
                <li> <p>Accessories</p> <h6>(18)</h6></li>
              </ul>
              <h2>Price Range</h2> 
              <ul>
                <li className='thumb' ><input type="range" name="" id="" /></li>
                <li><p>Price: <span>$39 - $1230</span>  </p></li>
                <li><button>Filter</button></li>
              </ul>
              <h2>Filter</h2>
              <ul>
                <li><p>Small</p><h6>(119)</h6></li>
                <li><p>Medium</p><h6>(86)</h6></li>
                <li><p>Large</p><h6>(78)</h6></li>
              </ul>
              
             
              
            </div>
        </div>
    </section>
  )
}

export default HomeSection1 