import React, { useRef } from 'react'
import grow from '../assets/diagram.png'
import women1 from '../assets/woman1.webp'
import women2 from '../assets/woman1-2.webp'
import dev from '../assets/Dev.jpg'
import dsa from '../assets/DSA.jpg'

function LandingPage() {
  return (
    <div className='flex flex-col justify-center items-center gap-y-3'>
        <div className='inconsolataFontFamily font-light text-gray-700 text-lg italic'>Start with</div>
        <div className='flex flex-col gap-y-6'>
          <div className='manropeFontFamily flex justify-center'><span className='text-5xl italic'>DSA AND DEV</span></div>
          <div className='flex justify-center'>
              <img src={grow} alt="Not Found" style={{height:"4.5rem"}}/>
          </div>
          <div className='manropeFontFamily'><span className='text-7xl italic'>Learning With Practice...</span></div>
          <div>
          </div>
        </div>
        <div className='flex justify-center items-center w-11/12 mx-auto'>
        
          {/* <div ><img src={dsa} alt="Not Found"className='rounded-full' style={{height:"10rem"}}/></div> */}
          <div className='flex justify-center relative'>
              <div className='imgBack h-[31.2rem] w-96 rounded-[2rem] absolute top-14 ml-20' ></div>
              <img src={women1} alt="" className="z-10"/>
          </div>
          {/* <div><img src={dev} alt="Not Found" className='rounded-full z-1 logoAnim' style={{height:"10rem"}}/></div> */}
        </div>
    </div>
  )
  

}

export default LandingPage