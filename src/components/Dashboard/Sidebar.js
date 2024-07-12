import React, { useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import {FaShoppingCart} from 'react-icons/fa'
import { GiOpenBook } from "react-icons/gi";
import { MdOutlineSettings, MdMenu, MdClose } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => `
    flex flex-row items-center mb-5 p-2 rounded-lg transition-colors duration-200
    ${isActive(path) 
      ? ' bg-blue-300 text-black' 
      : 'text-gray-200 hover:bg-gray-800'}
  `;

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-20 text-gray-500"
        onClick={toggleSidebar}
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-10
        md:relative md:translate-x-0
        w-80 bg-black h-[calc(100vh-70px)]  text-gray-500 p-5 py-11
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className='mb-10'>
          <Link to="/dashboard/my-profile" className={linkClass("/dashboard/my-profile")}>
            <FaCircleUser className='mx-4 w-6 h-6' />
            <div className='text-lg'>My Profile</div>
          </Link>
          <Link to="/dashboard/myTutorials" className={linkClass("/dashboard/myTutorials")}>
            <GiOpenBook className='mx-4 w-6 h-6' />
            <div className='text-lg'>Enrolled Tutorials</div>
          </Link>
          <Link to="/dashboard/cart" className={linkClass("/dashboard/cart")}>
            <FaShoppingCart className='mx-4 w-6 h-6' />
            <div className='text-lg'>Cart</div>
          </Link>
        </div>
        <div className='w-[83%] mx-auto border-t border-richblack-600'></div>
        <div className='mt-10'>
          <Link to="/dashboard/settings" className={linkClass("/dashboard/settings")}>
            <MdOutlineSettings className='mx-4 w-6 h-6' />
            <div className='text-lg'>Settings</div>
          </Link>
          <Link to="/logout" className={linkClass("/logout")}>
            <FiLogOut className='mx-4 w-6 h-6' />
            <div className='text-lg'>Logout</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar