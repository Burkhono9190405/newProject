import React from 'react'
import '../styles/selectoptionblog.css'

function SelectOptionBlog({ title, img, placeholder1, option }) {
    return (
        <div className="SelectOptionBlog">
            <div className="BillingAddressWrapper">
                <h4>{title}</h4>
                <img src={img} alt="" />
            </div>
            <select>
                <option className='optionSelectedPLaceholder' value="" disabled selected hidden>{placeholder1}</option>
                <option className='doe'>{option}</option>
                <option className='doe'>{option}</option>
                <option className='doe'>{option}</option>
            </select>
        </div>
    )
}

export default SelectOptionBlog