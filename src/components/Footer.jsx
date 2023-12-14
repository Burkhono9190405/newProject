import React from 'react'
import '../styles/footer.css'
import shadow from '../images/Ellipse 9.png'
import base from '../images/Frame (1).png'
import plant from '../images/Frame.png'
import base2 from '../images/Frame (3).png'
import plant2 from '../images/Frame (4).png'
import plant3 from '../images/Frame (6).png'
import base3 from '../images/Frame (5).png'
import logo from '../images/Logo.png'
import location from '../images/Location.png'
import message from '../images/Message.png'
import calling from '../images/Calling.png'
import bank from '../images/image 16.png'
import icon1 from '../images/Facebook.png'
import icon2 from '../images/Instagram.png'
import icon3 from '../images/Twitter.png'
import icon4 from '../images/Linkedin.png'
import icon5 from '../images/Union.png'
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="card__content">
            <div className="cardFooters">
              <img className='image__base1' src={base} alt="" />
              <img className='image__plant' src={plant} alt="" />
              <img className='image__shadow' src={shadow} alt="" />
              <h4>Garden Care</h4>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>

            <div className="cardFooters">
              <img className='image__base1' src={base2} alt="" />
              <img className='image__plant1' src={plant2} alt="" />
              <img className='image__shadow1' src={shadow} alt="" />
              <h4>Plant Renovation</h4>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>

            <div className="cardFooters">
              <img className='image__base' src={base3} alt="" />
              <img className='image__plant2' src={plant3} alt="" />
              <img className='image__shadow2' src={shadow} alt="" />
              <h4>Watering Graden</h4>
              <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>

            <div className="contact">
              <h2>Would you like to join newsletters?</h2>
              <div className="btn_wrap">
                <input type="text" placeholder='enter your email address...' />
                <button>Join</button>
              </div>
              <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>

          </div>
          <div className="location">
            <ul>
              <li><img src={logo} alt="" /></li> 
              <li><img src={location} alt="" /><p>70 West Buckingham Ave. Farmingdale, NY 11735</p></li>
              <li><img src={message} alt="" /><p>contact@greenshop.com</p></li>
              <li className='bob2'><img src={calling} alt="" /><p>+88 01911 717 490</p></li>
            </ul>
          </div>
          <div className="about__footer">
            <ul className='bob'>
              <h2>My Account</h2>
              <li>My Account</li>
              <li>Our stores</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Specials</li>
            </ul>
            <ul>
              <h2>Help & Guide</h2>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>Product Policy</li>
              <li>How to Return</li>
            </ul>
            <ul>
              <h2>Categories</h2>
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
            <div className="social_media">
              <h2>Social Media</h2>
              <div className="social_image_wrapper">
                <div className="socialwrap">
                  <img src={icon1} alt="" />
                </div>
                <div className="socialwrap">
                  <img src={icon2} alt="" />
                </div>
                <div className="socialwrap">
                  <img src={icon3} alt="" />
                </div>
                <div className="socialwrap">
                  <img src={icon4} alt="" />
                </div>
                <div className="socialwrap">
                  <img src={icon5} alt="" />
                </div>
              </div>
              <h2>We accept</h2>
              <div className="bank_company_wrapper">
                <img src={bank} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer