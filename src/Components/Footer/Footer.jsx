import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.jpg'
import pintrest from '../../assets/pinterest-icon.jpg'  
import whatsapp from '../../assets/whatsapp-icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container"> 
              <img src={instagram} alt="" />
            </div>
            <div className="footer-icon-container"> 
              <img src={pintrest} alt="" />
            </div>
            <div className="footer-icon-container"> 
              <img src={whatsapp} alt="" />
            </div>
       
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2025 - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
