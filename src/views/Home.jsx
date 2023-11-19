import React from 'react'
import Header from '@components/header'
import Footer from '@components/Footer'
import Showcase from '@components/Showcase'
import Brands from '../components/Brands'
import Feautures from '../components/Feautures'
import Aboutcompany from '../components/Aboutcompany'
import Ourservices from '../components/Ourservices'
import Whychooseus from '../components/Whychooseus'
import Projectcase from '../components/Projectcase'
import Meetourteam from '../components/Meetourteam'
import Articleandnews from '../components/Articleandnews'
import Newsletter from '../components/Newsletter'


const Home = () => {
  return (
    <div className='wrapper-grid'>
        <Header/>
        <main> 
        <Showcase/>
        <Brands/>
        <Feautures/>
        <Aboutcompany/>
        <Ourservices/>
        <Whychooseus/>
        <Projectcase/>
        <Meetourteam/>
        <Articleandnews/>
        <Newsletter/>
        </main>
        <Footer/>
    </div>
    
  )
}

export default Home