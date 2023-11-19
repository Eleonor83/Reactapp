import React from 'react'
import kristine from '../assets/images/kristine_palmer.png'
import mark from '../assets/images/mark_aubri.png'
import kimberly from '../assets/images/kimberly-hansen.png'
import justin from '../assets/images/justin_willoman.png'
import cassandra from '../assets/images/cassandra_warren.png'
import amanda from '../assets/images/amanda_tulling.png'
import jack from '../assets/images/jack_mcdogglas.png'


const Meetourteam = () => {
  return (
    <section className="meet_our_team">
    <div className="container">
       <div className="title-button">
          <div className="section-title">
             <p>Meet Our Team</p>
             <h2>Experience Team Members</h2>
          </div>
          <a className="btn-yellow btn-login" href="team.html">Browse Team<i
                className="fa-regular fa-arrow-up-right"></i></a>
       </div>
       <div className="team">
          <div className="member">
             <img className="kristine" src={kristine} alt=""/>
             <h3>Kristine Palmer</h3>
             <p>Chef Operation Officer</p>
          </div>
          <div className="member">
             <img className="mark" src={mark} alt=""/>
             <h3>Mark Aubri</h3>
             <p>Senior Consultant</p>
          </div>
          <div className="member">
             <img className="kimberly" src={kimberly} alt=""/>
             <h3>Kimberly Hansen</h3>
             <p>Senior Consultant</p>
          </div>
          <div className="member">
             <img className="justin" src={justin} alt=""/>
             <h3>Justin Willoman</h3>
             <p>Senior Tech Consultant</p>
          </div>
       </div>
       <div className="dots">
          <a href=""><i className="fa-solid fa-circle"></i></a>
          <a href=""><i className="fa-solid fa-circle"></i></a>
          <a href=""><i className="fa-solid fa-circle"></i></a>
          <a href=""><i className="fa-solid fa-circle"></i></a>
          <a href=""><i className="fa-solid fa-circle"></i></a>
       </div>
    </div>
    <div className="testy">
       <div className="section-title">
          <p>Testimonial</p>
          <h2>What Our Client Says</h2>
       </div>
       <div className="testimonials">
          <div className="each_testimony">
             <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
             <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
             <div className="title">
                <img className="cassandra" src={cassandra} alt="cassandra_warren"/>
                <h2>Cassandra Warren</h2>
                <p>Business Manager, Dorfus</p>
             </div>
          </div>
          <div className="each_testimony">
             <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
             <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
             <div className="title">
                <img  className="amanda" src={amanda} alt="amanda_tulling"/>
                <h2>Amanda Tulling</h2>
                <p>Senior Developer, Square</p>
             </div>
          </div>
          <div className="each_testimony">
             <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
             <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
             <div className="title">
                <img className="jack" src={jack} alt="jack_mcdogglas"/>
                <h2>Jack McDogglas</h2>
                <p>Key Account Manager, Gobona</p>
             </div>
          </div>
       </div>
       <div className="center-content">
          <a className="btn-black" href="projects.html">All Reviews <i className="fa-regular fa-arrow-up-right"></i></a>
       </div>
    </div>
 </section>
  )
}

export default Meetourteam