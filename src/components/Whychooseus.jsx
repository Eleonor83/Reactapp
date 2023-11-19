import React from 'react'
import thumbsup from "../assets/images/thumbsup.png"
import pentagon from "../assets/images/pentagon.png"
import pentip from "../assets/images/pentip.png"
import headwheel from "../assets/images/headwheel.png"
import ladiesinmeeting from "../assets/images/wcu_ladies.png"

const Whychooseus = () => {
  return (
    <section className="why_choose_us">
    <div className="container">
       <div className="wcu_left">
          <div className="section-title">
             <p>Why Choose Us</p>
             <h2>Why We Are The Best Business Consulting Agency</h2>
          </div>
          <div className="wcu_box">
             <img className='thumbsup' src={thumbsup} alt=""/>
             <h3>Process Excellence</h3>
             <p>Lorem, ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="wcu_box">
             <img className='pentagon' src={pentagon} alt=""/>
             <h3>Strategic Planning</h3>
             <p>Lorem, ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="wcu_box">
             <img className='pentip' src={pentip} alt=""/>
             <h3>Experience Design</h3>
             <p>Lorem, ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="wcu_box">
             <img className='headwheel' src={headwheel} alt=""/>
             <h3>Artificial Inteligence</h3>
             <p>Lorem, ipsum dolor sit amet consectetur.</p>
          </div>
       </div>
       <div className="wcu_right">
          <div className="wcu_picture">
             <div className="greybox"></div>
             <img className='ladiesinmeeting' src={ladiesinmeeting} alt="two ladies in meeting"/>
          </div>
       </div>
    </div>

 </section>
  )
}

export default Whychooseus