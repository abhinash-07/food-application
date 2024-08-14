import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
         <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p> Aur bhai kya hal chhaal </p>
         <div className="footer-social-icons">
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
         </div>
         </div>
         <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
           </ul>
         </div>
         <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8658660892</li>
            <li>Tomato351@gmail.com</li>
            <li>Address: 123, ABC Street, XYZ City</li>

          </ul>
         </div>
        </div>
        <hr/>
        <p className="footer-copyright">
          Copyright 2024 ©️
        </p>
    </div>
  )
}

export default Footer
