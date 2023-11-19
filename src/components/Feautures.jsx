import React from 'react'
import handshake from '../assets/images/handshake.png'
import headbulb from '../assets/images/headbulb.png'
import finance from '../assets/images/finance.png'
import riskmanagment from '../assets/images/riskmanagment.png'

const Feautures = () => {
  return (
    <section className="features">
    <div className="container">
       <div className="section-title">
          <p>Features</p>
          <h2>Our Accounting is trusted by thousand of companies</h2>
          <a className="btn-yellow" href="learnmore.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
       </div>
       <div className="squares">
          <div className="square">
             <img className="handshake" src={handshake} alt=""/>
             <h3>Business Advice</h3>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="square">
             <img className="headbulb" src={headbulb} alt=""/>
             <h3>Startup Business</h3>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="square">
             <img className="finance" src={finance} alt=""/>
             <h3>Financial Advice</h3>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="square">
             <img className="riskmanagment" src={riskmanagment} alt=""/>
             <h3>Risk Managment</h3>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
       </div>
    </div>
 </section>
  )
}

export default Feautures