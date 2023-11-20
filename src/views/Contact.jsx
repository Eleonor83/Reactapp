import React from 'react'
import Header from '@components/header'
import Footer from '@components/Footer'
import Letsconnect from '../components/Letsconnect'
import Infosection from '../components/Infosection'
import Formsection from '../components/Formsection'
import Map from '../components/Map'

function Contact() {
  return (
    <div className='wrapper-grid'>
    <Header/>
    <main>
        <Letsconnect/>
        <Infosection/>
        <Formsection/>
        <Map/>
    </main>
    <Footer/>
    </div>

  )
}

export default Contact