import React from 'react'

function LandingPage() {
  return (
    <div className='text-white flex flex-col justify-center items-center'>
      <div className="text-xl mt-10 inconsolataFontFamily md:text-2xl">Start With</div>
      <div className='text-4xl md:text-6xl flex flex-col justify-center items-center font-bold mt-5 gradient-text italic manropeFontFamily '><span> DSA AND</span><span>DEVELOPEMENT</span></div>
      <div className='text-gray-100 text-lg md:text-xl'>Learning With Practice...</div>
      <div className='w-10/12 mt-20 text-center md:text-lg md:w-6/12 md:mt-16'>This website offers comprehensive resources for both Data Structures and Algorithms (DSA) and Web Development (Dev). Users can access tutorials for both fields, practice DSA questions, and use a built-in code editor for development. The platform is designed to be user-friendly, making it easy for engineering students to learn and practice these essential skills.</div>
      <button className='py-3 px-16 mt-14 bg-white text-black font-extrabold rounded-full hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:text-white md:px-32'>Start Now <span className='text-gray-400 font-bold '>-Free forever</span></button>
      <div className='text-sm underline mt-4 cursor-pointer md:text-lg'>Learn More</div>
    </div>
  )
}

export default LandingPage