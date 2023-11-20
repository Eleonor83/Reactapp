import React from 'react'
import backgroundlines from '../assets/images/background-lines.svg'

function Letsconnect() {
  return (
    <section class="lets_connect">
    <div class="container">
       <div class="menu">
             <a class="active" href="index.html">Home</a>
             <a href="contact.html">Contact</a>
       </div>
       <div class="content">
          <h1>Let's Connect</h1>
       </div>
    </div>
    <img class="backgroundlines" src={backgroundlines} alt=""/>
 </section>
  )
}

export default Letsconnect