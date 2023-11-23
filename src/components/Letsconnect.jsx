import React from 'react'
import backgroundlines from '../assets/images/background-lines.svg'

function Letsconnect() {
  return (
    <section className="lets_connect">
    <div className="container">
       <div className="menu">
             <a className="active" href="index.html">Home</a>
             <a href="contact.html">Contact</a>
       </div>
       <div className="content">
          <h1>Let's Connect</h1>
       </div>
    </div>
    <img className="backgroundlines" src={backgroundlines} alt=""/>
 </section>
  )
}

export default Letsconnect