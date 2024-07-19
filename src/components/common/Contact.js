import React, { useState } from 'react'
import { FaYoutube, FaLinkedin, FaTelegram, FaDiscord } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { ContactUs } from '../../services/operations/contactAPI';

const Contact = () => {
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({name:"",email:"",phoneNo:"",message:""});
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(prev=> ({
            ...prev,
            [name]:[value]
        }));
    }
    const submitHandler=()=>{
        dispatch(ContactUs(formData));
        setFormData(({name:"",email:"",phoneNo:"",message:""}))
    }
    return (
        <div className='min-h-screen flex flex-col items-center bg-gray-700 py-10 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl md:text-4xl font-bold manropeFontFamily text-center mb-2 text-white '>CONTACT</h1>
            <p className='text-center mb-2 text-gray-300'>We'd <span className="text-red-500">♥</span> to help!</p>
            <p className='text-center mb-8 text-gray-300 max-w-2xl'>We like to create things with fun, open-minded people. Feel free to say hello!</p>

            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden">
                <div className="w-full md:w-2/3 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a message</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block mb-1 text-slate-300">Name<span className="text-red-500 m-1">*</span></label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-2 w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-slate-300">Email<span className="text-red-500 m-1">*</span></label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-2 w-full" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-1 text-slate-300">Phone Number<span className="text-red-500 m-1">*</span></label>
                            <input type="tel" id="phone" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Enter your Phone Number" className="p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-1 text-slate-300">Message<span className="text-red-500 m-1">*</span></label>
                            <textarea id="message" rows="4" name="message" value={formData.message} onChange={handleChange}  placeholder="Enter your message" className="p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-2 w-full"></textarea>
                        </div>
                        <button type="button" className="bg-blue-300 text-black px-4 py-2 rounded-md flex items-center font-bold mt-4 hover:bg-blue-500 hover:text-white" onClick={submitHandler}>
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/3 bg-[#333F90] p-6 md:p-8 flex flex-col justify-between border-2 border-slate-600 rounded-lg">
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
                            <p>dsaanddev09@gmail.com</p>
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