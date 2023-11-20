import React from 'react'
import critologo from '../assets/images/logotype.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div className="container">
       <button className="btnmenu-bars"> <i className="fa-solid fa-bars-staggered"></i> </button>
       <div className="logotype">
       <Link to="/">
            <img className='critologo' src={critologo} alt="crito-logotype" />
          </Link>
       </div>
       <div className="contactinformation-bar">
          <div className="content-box">
             <i className="fa-light fa-phone-volume"></i>
             +46 (8) 121 470 50
          </div>
          <div className="content-box">
             <i className="fa-regular fa-envelope"></i>
             info@crito.com
          </div>
          <div className="content-box last">
             <i className="fa-sharp fa-regular fa-location-dot"></i>
             Sveavägen 31, 111 34 STOCKHOLM
          </div>
       </div>
       <div className="socialmedia-bar">
          <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
       </div>
       <div className="menu">
       <nav>
            <Link to="/" className="active">Home</Link>
            <Link to="/services">Service</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Link to="/login" className="btn-yellow btn-login">Login<i className="fa-regular fa-arrow-up-right"></i></Link>
       </div>
    </div>
 </header>
  )
}

export default Header