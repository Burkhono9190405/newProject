import React from 'react'
import '../styles/shoptop.css'
function ShopTop({title,text}) {
  return (
    <section>
        <div className="container">
            <div className="shoptop">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
        </div>
    </section>
  )
}

export default ShopTop