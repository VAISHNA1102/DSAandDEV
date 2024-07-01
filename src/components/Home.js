import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Details from './Details'
import Info from './Info'
import Team from './Team'
import Footer from './Footer'

function Home() {
  return (
    <div className='imgBack'>
      <Navbar/>
      <LandingPage/>
      <Details/>
      <Info/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home