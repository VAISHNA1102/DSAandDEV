import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Details from './Details'
import Info from './Info'
import Team from './Team'
import Footer from './Footer'
import Testimonals from './Testimonals'

function Home() {
  return (
    <div className='imgBack'>
      <Navbar/>
      <LandingPage/>
      <Details/>
      <Info/>
      <Team/>
      <Testimonals/>
      <Footer/>
    </div>
  )
}

export default Home