import React from 'react'
import critologo from '../assets/images/logotype.svg'
import wiglylinesright from '../assets/images/Rectangle 116.png'

const Footer = () => {
  return (
    <footer>
       <div className="container top">
            <div className="logotype">
               <a href="index.html"><img className='critologo' src={critologo} alt="crito-logotype"/></a>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates!
                  Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="block">
               <h4>Company</h4>
               <a href="#">About</a>
               <a href="#">Features</a>
               <a href="#">Works</a>
               <a href="#">Career</a>
            </div>
            <div className="block">
               <h4>Help</h4>
               <a href="#">Customer Support</a>
               <a href="#">Delivery Details</a>
               <a href="#">Terms & Conditions</a>
               <a href="#">Privacy Policy</a>
            </div>
            <div className="block">
               <h4>Resources</h4>
               <a href="#">Free eBooks</a>
               <a href="#">Development Tutorial</a>
               <a href="#">How-to Blog</a>
               <a href="#">YouTube Playlist</a>
            </div>
            <div className="block">
               <h4>Links</h4>
               <a href="#">Free eBooks</a>
               <a href="#">Development Tutorial</a>
               <a href="#">How-to Blog</a>
               <a href="#">YouTube Playlist</a>
            </div>
         </div>
         <img className="wiglylinesright" src={wiglylinesright} alt=""/>
         <hr></hr>
         <div className="container bottom">

            <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>

            <div className="socialmedia-bar">
               <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
               <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
               <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
               <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
         </div>
    </footer>
  )
}

export default Footer