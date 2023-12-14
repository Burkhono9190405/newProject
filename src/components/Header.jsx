import React from 'react'
import '../styles/header.css'
import icon1 from '../images/Logo.png'
import icon2 from '../images/Vector.png'
import icon3 from '../images/Logout.png'
import icon4 from '../images/photo_2023-12-09_16-29-28.jpg'
import line from '../images/Line 2.png'
import heart from '../images/Vector (3).png'
import shop from '../images/Shop.png'
import user from '../images/User.png'
import elipse from '../images/Ellipse 39.png'
import group from '../images/Group.png'
import header_image from '../images/Vector (2).png'
import home1 from '../images/Home.png'

import { NavLink, useLocation } from 'react-router-dom'
function Header() {
  let home = useLocation()
  return (
    <div className="div">
      <header className='header'>
        <ul >
          <li><NavLink to='/' /> <img src={icon1} alt="" /> <NavLink /></li>
        </ul>
        <ul className='header__nav'>
          <li className='head_pos'> <NavLink to='/' > Home </NavLink ><img className='line' src={home.pathname === '/' ? line : "among us"} alt="" /> </li>
          <li className='head_pos'> <NavLink to='/shop' >  Shop</NavLink ><img className='line' src={home.pathname === '/shop' ? line : "among us"} alt="" /></li>
          <li className='head_pos'> <NavLink to='/plant' >  Plant Care</NavLink ><img className='line' src={home.pathname === '/plant' ? line : "among us"} alt="" /></li>
          <li className='head_pos'> <NavLink to='/blog' > Blogs </NavLink ><img className='line' src={home.pathname === '/blog' ? line : "among us"} alt="" /></li>
        </ul>
        <ul className='header__cta'>
          <img src={icon2} alt="" />
          <img src={icon4} alt="" />
          <button><img src={icon3} alt="" />Login</button>
        </ul>

       

      </header>
      <div className='phone_header_main'>
          <div className="phone_header_main_image">
            <img src={header_image} alt="" />
          </div>

          <div className="phone_header">
            <div className="phone_header1">
              <NavLink to='/'> <img src={home1} alt="" /></NavLink>
              <NavLink to='/shop'><img src={heart} alt="" /></NavLink>
            </div>
            <div className="phone_header1">
                 <NavLink to='/plant'><img src={shop} alt="" /> </NavLink>
                 <NavLink to='/blog'><img src={user} alt="" /></NavLink>                   
            </div>
          </div> 
          <div className="scan_img">
            <img className='scan_img1' src={elipse} alt="" />
            <img className='scan_img2' src={group} alt="" />
          </div>
        </div>
    </div>


  )
}

export default Header