import React from 'react'
import Cards from './Cards';
// import

const Details = () => {
  return (
    <div className='flex flex-col justify-center items-center back'>
      <div className='inconsolataFontFamily font-light text-gray-400'>What is it</div>
      <div className='manropeFontFamily text-xl text-white'>This is the platform where the engineering students can learn and practice</div>
      <div className='manropeFontFamily text-xl text-white'>the Data Structure Algorithm and Web Development.</div>
      <div>
        <Cards/>
      </div>
    </div>
  )
}

export default Details
