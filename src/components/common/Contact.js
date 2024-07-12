import React from 'react'
import { FaYoutube, FaLinkedin, FaTelegram, FaDiscord } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

const Contact = () => {
    return (
        <div className='min-h-screen flex flex-col items-center bg-gray-950 py-10 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl md:text-4xl font-bold manropeFontFamily text-center mb-2 text-white'>CONTACT</h1>
            <p className='text-center mb-2 text-gray-300'>We'd <span className="text-red-500">♥</span> to help!</p>
            <p className='text-center mb-8 text-gray-300 max-w-2xl'>We like to create things with fun, open-minded people. Feel free to say hello!</p>

            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-gray-800 text-white rounded-lg overflow-hidden">
                <div className="w-full md:w-2/3 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a message</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block mb-1">Name<span className="text-red-500">*</span></label>
                                <input type="text" id="name" placeholder="Enter your name" className="w-full bg-gray-800 border border-gray-700 rounded p-2" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1">Email<span className="text-red-500">*</span></label>
                                <input type="email" id="email" placeholder="Enter your email" className="w-full bg-gray-800 border border-gray-700 rounded p-2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-1">Phone Number<span className="text-red-500">*</span></label>
                            <input type="tel" id="phone" placeholder="Enter your Phone Number" className="w-full bg-gray-800 border border-gray-700 rounded p-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-1">Message<span className="text-red-500">*</span></label>
                            <textarea id="message" rows="4" placeholder="Enter your message" className="w-full bg-gray-800 border border-gray-700 rounded p-2"></textarea>
                        </div>
                        <button type="submit" className="bg-gray-800 border border-gray-700 rounded px-4 py-2 hover:bg-blue-900 hover:text-white font-bold">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/3 bg-blue-900 p-6 md:p-8 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold mb-6 mx-auto">Contact Information</h2>
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <IoLocationOutline size={24} className="mr-2" />
                            <p>123 Web Dev Street, Coding City, 12345</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <IoCallOutline size={24} className="mr-2" />
                            <p>+91 - 7581286025</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <IoMailOutline size={24} className="mr-2" />
                            <p>dsaanddev1507@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="flex space-x-4">
                        <FaYoutube size={24} className="cursor-pointer hover:text-gray-300" />
                        <FaLinkedin size={24} className="cursor-pointer hover:text-gray-300" />
                        <FaTelegram size={24} className="cursor-pointer hover:text-gray-300" />
                        <FaDiscord size={24} className="cursor-pointer hover:text-gray-300" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact