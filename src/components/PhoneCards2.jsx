import React from 'react'
import '../styles/phonecards2.css'
function PhoneCards2({image,title,id,price}) {
  return (
    <div className="PhoneCards2">
        <div className="PhoneCards22">
        <img src={image} alt="" />
         <div className="PhoneCards222">
            <h1>{title}</h1>
            <p>{id}</p>
            <h4>{price}</h4>
         </div>
        </div>
       <div className="plusminus3">
        <div className="plusminus33">
            -
        </div>
        <p>1</p>
        <div className="plusminus33">
            -
        </div>
       </div>
    </div>
  )
}

export default PhoneCards2