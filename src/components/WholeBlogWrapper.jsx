import React from 'react'
import '../styles/wholeblogwrapper.css'
import icon1 from '../images/_.png'
import LoginSignUp from './LoginSignUp'
import SelectOptionBlog from './SelectOptionBlog'
import SelectNum from './SelectNum'
function WholeBlogWrapper() {
    return (
        <div className="WholeBlogWrapper1">
            <div className="WholeBlogWrapper">
                <LoginSignUp title='First Name' img={icon1} />
                <LoginSignUp title='Last Name' img={icon1} /> 
            </div>
            <div className="WholeBlogWrapper">
                <SelectOptionBlog title='Country / Region' img={icon1} placeholder1='Select a country / region' option='Uzbekistan' />
                <LoginSignUp title='Town / City' img={icon1} />
            </div>
            <div className="WholeBlogWrapper">
                <LoginSignUp title='Street Address' img={icon1} placeholder='House number and street name' />
                <LoginSignUp placeholder='Appartment, suite, unit, etc. (optional)' />
            </div>
            <div className="WholeBlogWrapper">
                <SelectOptionBlog title='State' img={icon1} placeholder1='Select a state' option='i dont know' />
                <LoginSignUp title='Zip' img={icon1} />
            </div>
            <div className="WholeBlogWrapper">
                <LoginSignUp title='Email address' img={icon1} />
                <SelectNum title='Phone Number' img={icon1} placeholder='+966' option='+998' />
            </div>
        </div>
    )
}

export default WholeBlogWrapper