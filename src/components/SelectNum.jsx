import React from 'react'
import '../styles/selectnum.css'
function SelectNum({ title, img, option, placeholder}) {
    return (
        <div className="SelectNum">
            <div className="BillingAddressWrapper">
                <h4>{title}</h4>
                <img src={img} alt="" />
            </div>
            <select>
                <option selected disabled hidden >{placeholder}</option>
                <option value="">{option}</option>
            </select>
        </div>  
    )
}

export default SelectNum