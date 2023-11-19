import React from 'react'
import Header from '@components/header'
import Footer from '@components/Footer'
import Showcase from '@components/Showcase'


const Home = () => {
  return (
    <div className='wrapper-grid'>
        <Header />
        <Showcase />
        <Footer />
    </div>
    
  )
}

export default Home