import React from 'react';
import Cards from './Cards';

const Details = () => {
  return (
    <div >
      <div className='flex flex-col justify-center items-center back absolute w-full top-[46.4rem] z-10 pt-72'>
      <div className='inconsolataFontFamily font-light text-gray-400 mb-1 text-lg'>What is it</div>
      <div className='flex justify-center flex-col items-center my-3'>
          <div className='manropeFontFamily text-xl text-white'>This is the platform where the engineering students can learn and practice</div>
          <div className='manropeFontFamily text-xl text-white'>the Data Structure Algorithm and Web Development.</div>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
    </div>
  )
}

export default Details
