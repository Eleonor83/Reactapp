import React from 'react'
import wavylines from "../assets/images/background-wavy-lines.svg"

const Newsletter = () => {
  return (
    <section className="newsletter">
    <img className="wavylines" src={wavylines} alt=""/>
    <div className="container">
       <h2>Get News Updates By Signup </h2>
       <form>
          <input type="text" placeholder="username@domain.com"/>
          <button className="btn-yellow">Suscribe <i className="fa-regular fa-arrow-up-right"></i></button>
       </form>
    </div>
 </section>
  )
}

export default Newsletter