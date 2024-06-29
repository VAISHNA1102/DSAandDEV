import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='inconsolataFontFamily'>
        <div className='flex justify-between items-center w-11/12 mx-auto min-h-10'>
            <div className='flex flex-col justify-center'>
                <img src={logo} alt="Not Found" className='place-self-center'/>
                <span className='relative font-bold text-2xl text-gray-800'>Dsa&Dev</span>
            </div>
            <div className='flex flex-row gap-x-10 items-center'>
                <div className='md:text-lg hover:underline cursor-pointer text-gray-800'>Home</div>
                <div className='md:text-lg hover:underline cursor-pointer text-gray-800'>About</div>
                <div className='md:text-lg hover:underline cursor-pointer text-gray-800'>Tutorial</div>
                <div className='md:text-lg hover:underline cursor-pointer text-gray-800'>Contactus</div>
                <div>
                  <button className='py-3 px-12 bg-black text-white rounded-full text-md'>Login</button>
                  {/* <button className='py-2 px-6 bg-black text-white rounded-full ml-1'>Signup</button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar