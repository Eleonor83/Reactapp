import React from 'react'
import line2 from "../assets/images/Line 2.png"
import backgroundlines from "../assets/images/background-lines-right.svg"

const Ourservices = () => {
  return (
    <section className="our-services">
    <div className="container">
       <div className="section-title">
          <p>Our Services</p>
          <h2>We Provide The Best Service For Consulting</h2>
       </div>
       <div className="boxes">
          <div className="box">
             <img className='line2' src={line2} alt=""/>
             <h3>Business Advice</h3>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
             <a href="#"><i className="fa-thin fa-arrow-right"></i></a>
          </div>

          <div className="box">
             <img className='line2' src={line2} alt=""/>
             <h3>Startup Business</h3>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
             <a href="#"><i className="fa-thin fa-arrow-right"></i></a>
          </div>
          <div className="box">
             <img className='line2' src={line2} alt=""/>
             <h3>Financial Advice</h3>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
             <a href="#"><i className="fa-thin fa-arrow-right"></i></a>
          </div>
          <div className="box">
             <img className='line2' src={line2} alt=""/>
             <h3>Risk Management</h3>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
             <a href="#"><i className="fa-thin fa-arrow-right"></i></a>
          </div>
       </div>
       <div className="button">
          <a className="btn-transparent" href="services.html">Browse Services<i
                className="fa-regular fa-arrow-up-right"></i></a>
       </div>
       
    </div>
    <div><img className="backgroundlines" src={backgroundlines} alt=""/></div>
 </section>
  )
}

export default Ourservices