import React from 'react'
import Cards from './Cards'

function Details() {
  return (
    <div className='flex flex-col mt-24 justify-center items-center text-white'>
        <div className='text-2xl inconsolataFontFamily text-gray-300 md:4xl'>What is it</div>
        <div><Cards/></div>
    </div>
  )
}

export default Details