import React from 'react'
import paperz from '../assets/images/paperz.svg'
import dorfus from '../assets/images/dorfus.svg'
import martino from '../assets/images/martino.svg'
import square from '../assets/images/square.svg'
import gobona from '../assets/images/gobona.svg'

const Brands = () => {
  return (
    <section className="brands">
    <div className="container">
       <div className="brand">
          <img className= "paperz" src={paperz} alt="paperz-logo"/>
          <img className= "dorfus" src={dorfus} alt="dorfus-logo"/>
          <img className= "martino" src={martino} alt="martino-logo"/>
          <img className= "square" src={square} alt="square-logo"/>
          <img className= "gobona" src={gobona} alt="gobona-logo"/>
       </div>
    </div>
 </section>
  )
}

export default Brands