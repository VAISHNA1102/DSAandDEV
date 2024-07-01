import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Details from './Details'
import Info from './Info'
import Team from './Team'

function Home() {
  return (
    <div className='imgBack'>
      <Navbar/>
      <LandingPage/>
      <Details/>
      <Info/>
      <Team/>
    </div>
  )
}

export default Home