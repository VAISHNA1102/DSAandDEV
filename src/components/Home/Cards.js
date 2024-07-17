import React from 'react';
import dsaLogo from '../../assets/DSA.jpg';
import devLogo from '../../assets/Dev.jpg';
import openSourceLogo from '../../assets/Open.jpg';

function Cards() {
  return (
    <div className='flex flex-col mt-5 md:flex-row md:px-2 lg:w-9/12 md:mx-auto md:gap-x-10'>
        <div className='flex flex-col w-8/12 mx-auto bg-gray-950 justify-center items-center rounded-2xl h-80 mt-5 glass hover:bg-gradient-to-r from-purple-300 to-blue-700 hover:text-black'>
            <img src={dsaLogo} alt="DSA logo" className='rounded-full' height={70} width={70}/>
            <div className='text-2xl m-4 text-center font-semibold'>Data Structure and Algorithm</div>
            <div className='text-center px-5 text-lg'>Understand and apply the basics of data structures and algorithms to solve problems efficiently.</div>
        </div>
        <div className='flex flex-col w-8/12 mx-auto bg-gray-950 justify-center items-center rounded-2xl h-80 mt-5 glass hover:bg-gradient-to-r from-purple-300 to-blue-700 hover:text-black'>
            <img src={openSourceLogo} alt="open Source logo" className='rounded-full' height={70} width={70}/>
            <div className='text-2xl m-4 text-center font-semibold'>Open Source</div>
            <div className='text-center px-5 text-lg'>Engage with open-source projects to collaborate and innovate, gaining valuable experience in software development.</div>
        </div>
        <div className='flex flex-col w-8/12 mx-auto bg-gray-950 justify-center items-center rounded-2xl h-80 mt-5 glass hover:bg-gradient-to-r from-purple-300 to-blue-700 hover:text-black'>
            <img src={devLogo} alt="Dev logo" className='rounded-full' height={70} width={70}/>
            <div className='text-2xl m-4 text-center font-semibold'>Developement</div>
            <div className='text-center px-5 text-lg'>Explore development techniques and best practices, enhancing your coding skills and efficiency in software creation.</div>
        </div>
    </div>
  )
}

export default Cards