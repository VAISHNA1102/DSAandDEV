import React from 'react'
import LandingPage from './LandingPage'
import Details from './Details'
import Team from './Team'
import Testimonals from './Testimonals'
import Footer from '../common/Footer'

function Home() {
  return (
    <div className='imgBack'>
      <LandingPage/>
      <Details/>
      <Team/>
      <Testimonals/>
      <Footer/>
    </div>
  )
}

export default Home