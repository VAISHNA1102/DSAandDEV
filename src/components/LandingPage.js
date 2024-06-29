import React from 'react'
import grow from '../assets/diagram.png'

function LandingPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='inconsolataFontFamily font-light text-gray-600'>Start with</div>
        <div className='manropeFontFamily text-7xl'><img src={grow} alt="Not Found" style={{height:"4.5rem"}}/><span>DSA AND DEV</span></div>
        <div className='manropeFontFamily text-7xl'>Learning With Practice</div>
    </div>
  )
  

}

export default LandingPage