import React from 'react'
import imgDev from '../assets/DEVimg.jpeg'
import imgDsa from '../assets/DSAimg.jpeg'

const Info = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-24'>
        <div className='text-2xl inconsolataFontFamily text-gray-300 md:4xl uppercase'>About us</div>
        <div className='text-white flex flex-col gap-y-10 mt-6 md:m-8'>

            <div className='glass flex flex-col md:flex-row w-10/12 mx-auto justify-center items-center rounded-2xl md:w-10/12 md:rounded-2xl '>
                <div className='rounded-b-2xl md:rounded-2xl dark:hover:bg-gradient-to-r from-[#805ad5] to-[#3f37c9] cursor-pointer '>
                    <div className='text-2xl font-bold text-center my-2 md:text-3xl'>Welcome to DSA Learning</div>
                    <div className='text-center text-sm my-1 w-11/12 mx-auto md:text-lg'>Master Data Structures and Algorithms,Explore tutorials and practice questions in C, C++, Java, and Python. </div>
                    <div className='text-2xl font-semibold mt-6 mb-2 text-center md:text-3xl'>Our platform offers:</div>
                    <ul className='w-9/12 mx-auto flex flex-col gap-y-1 list-disc justify-center'>
                        <li className=''><span className='font-bold'>Expert Tutorials :</span> Simplified explanations and real-world examples.</li>
                        <li><span className='font-bold'>Practice Questions:</span> Curated top questions to test and improve your skills.</li>
                    </ul>
                    <p className='my-6 text-center font-bold md-text-2xl'>Start your DSA journey with us today!</p>
                </div>
            </div>

            <div className='glass flex flex-col md:flex-row w-10/12 mx-auto justify-center items-center rounded-2xl md:w-10/12 md:rounded-2xl'>
                <div className='rounded-b-2xl md:rounded-2xl dark:hover:bg-gradient-to-r from-[#805ad5] to-[#3f37c9] cursor-pointer'>
                    <div className='text-2xl font-bold text-center my-2 md:text-3xl'>Welcome to Developement Learning</div>
                    <div className='text-center text-sm my-1 w-11/12 mx-auto md:text-lg'>Master Developement,Explore tutorials and practice questions in Web, Android, Blockchain, and ML. </div>
                    <div className='text-2xl font-semibold mt-6 mb-2 text-center md:text-3xl'>Our platform offers:</div>
                    <ul className='w-9/12 mx-auto flex flex-col gap-y-1 list-disc justify-center'>
                        <li className=''><span className='font-bold'>Expert Tutorials :</span> Simplified explanations and real-world examples.</li>
                        <li><span className='font-bold'>Practice Questions:</span> Execute your ideas and practice coding directly in your browser.</li>
                    </ul>
                    <p className='my-6 text-center font-bold md-text-2xl'>Start your DEVELOPEMENT journey with us today!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info