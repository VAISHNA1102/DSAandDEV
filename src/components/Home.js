import React from 'react'
import LandingPage from './LandingPage'
import Details from './Details'
import Info from './Info'
import Team from './Team'
import Testimonals from './Review/Testimonals'
import Footer from './Footer'

function Home() {
  return (
    <div className='imgBack'>
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