import React from 'react'
import Bg from '../assets/Bg.png'

function Team() {
  return (
    <div  className='flex flex-col justify-center items-center mt-24'>
        <div className='text-2xl inconsolataFontFamily text-gray-300 md:4xl'>MEET THE TEAM</div>
        <div className='flex flex-col justify-center gap-y-1 text-white text-4xl font-bold  mt-5 md:5xl'>
            <div className='text-center'>The Minds Behind</div>
            <div className='text-center'>DSA&DEV</div>
        </div>
        <div className='bg-gradient-to-r from-yellow-200 to-pink-400 w-7/12 rounded-2xl mb-80 mt-10'>
            <div className='object-contain'>
                <img src={Bg} alt="Team member" />
            </div>
        </div>
    </div>
  )
}

export default Team