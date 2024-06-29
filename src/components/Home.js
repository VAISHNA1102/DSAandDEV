import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Details from './Details'

function Home() {
  return (
    <div className="homeBg realtive">
       <Navbar/>
       <LandingPage/>
       <Details/>
    </div>
  )
}

export default Home