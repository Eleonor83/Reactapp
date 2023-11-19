import React from 'react'
import daria from '../assets/images/daria-pimkina-small.png'

const Aboutcompany = () => {
  return (
    <section className="about-company">
    <div className="container">
       <img className= "daria" src={daria} alt=""/>
       <div className="image_info">
          <div className="info"><span className="name">Samantha Brown,</span><span className="title">Founder</span>
             <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          </div>
       </div>

       <div className="about">
          <div className="section-title">
             <p>About Company</p>
             <h2>We Are Business Consulting & Credit Repair Experts</h2>
          </div>
          <div className="about_text">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
                obcaecati? Ex esse error voluptates iure vel totam eos.</p>
             <br></br>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
                accusantium libero provident voluptate amet.</p>
          </div>
          <div className="buttons">
             <a className="btn-black" href="#">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
             <a href="#"><i className="fa-regular fa-circle-play"></i> Intro Video</a>
          </div>
       </div>
    </div>

 </section>
  )
}

export default Aboutcompany