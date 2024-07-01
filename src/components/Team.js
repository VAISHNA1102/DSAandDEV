import React from 'react'
import Bg from '../assets/Bg.png'
import Vbg from '../assets/Vbg.png'
import Sbg from '../assets/Sbg.png'

function Team() {
  return (
    <div  className='flex flex-col justify-center items-center mt-24'>
        <div className='text-2xl inconsolataFontFamily text-white md:4xl'>MEET THE TEAM</div>
        <div className='flex flex-col justify-center gap-y-1 text-white text-4xl font-bold  mt-5 md:5xl'>
            <div className='text-center'>The Minds Behind</div>
            <div className='text-center'>DSA&DEV</div>
        </div>
        <div className=' w-9/12  rounded-2xl mb-24 mt-10 md:flex-row flex flex-col gap-y-8 bg-gradient-to-r from-purple-300 to-blue-700'>
            <div className='imgg'></div>
            <div className='imgv'></div>
            <div className='imgs'></div>
        </div>
    </div>
  )
}

export default Team