import React from 'react'
import lines from '../assets/images/background-lines.svg'
import showcasepicture from '../assets/images/showcase-image.svg'

const Showcase = () => {
  return (
    <section className="showcase">
    <img className="lines" src={lines} alt=""/>
    <div className="container">
       <div className="content">
          <h1>We Provide The Best Business Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          <a className="btn-yellow" href="consulting.html">Get Consulting<i
                className="fa-regular fa-arrow-up-right"></i></a>
          <a className="btn-transparent" href="services.html">Learn more<i
                className="fa-regular fa-arrow-up-right"></i></a>
       </div>
       <img className='showcase-image' src={showcasepicture} alt="image of a man in a suit with a tablet"/>
    </div>
 </section>
  )
}

export default Showcase