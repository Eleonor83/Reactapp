import React from 'react'

function Infosection() {
  return (
    <section class="info_box">
    <div class="container">
       <div class="box">
          <i class="fa-sharp fa-light fa-location-dot"></i>
          <div class="info">
             <h3>Visit us</h3>
             <p>Sveavägen 31</p>
             <p>111 34 STOCKHOLM</p>
          </div>
       </div>
       <div class="box">
          <i class="fa-light fa-phone"></i>
          <div class="info">
             <h3>Call us</h3>
             <p>+46 (8) 121 470 50</p>
             <p>+46 (8) 121 470 51</p>
          </div>
       </div>
       <div class="box">
          <i class="fa-sharp fa-light fa-location-dot"></i>
          <div class="info">
             <h3>Email us</h3>
             <p>info@crito.com</p>
             <p>support@crito.com</p>
          </div>
       </div>
    </div>
 </section>
  )
}

export default Infosection