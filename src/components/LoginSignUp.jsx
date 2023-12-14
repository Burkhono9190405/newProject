import React from 'react'
import '../styles/loginsignup.css'
function LoginSignUp({title,img,placeholder,}) {
  return (
      <div className="BillingAddress">
        <div className="BillingAddressWrapper">
          <h4>{title}</h4>
          <img src={img} alt="" />
        </div>
        <input type="text" placeholder={placeholder} />
      </div>
  )
}

export default LoginSignUp