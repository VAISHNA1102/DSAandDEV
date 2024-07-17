import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { GiOpenBook } from "react-icons/gi";
import { MdMenu, MdClose } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { logout } from '../../services/operations/authAPIs';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const navigate = useNavigate();

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

  const handleLogout = () => {
    dispatch(logout(() => {
      navigate('/'); // Navigate to home page after logout
    }));
  };

  const openLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const closeLogoutModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-15 left-4 z-20 text-gray-500"
        onClick={toggleSidebar}
      >
        {isOpen ? <MdClose size={24} className='md:hidden fixed top-4 left-4 z-20 text-gray-500'/> : <MdMenu size={24}/>}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-10
        md:relative md:translate-x-0
        w-80 bg-black h-[calc(100vh-70px)] text-gray-500 p-5 py-11
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
        </div>
        <div className='w-[83%] mx-auto border-t border-richblack-600'></div>
        <div className='mt-10'>
          <button
            onClick={openLogoutModal}
            className='flex flex-row items-center mb-5 p-2 rounded-lg transition-colors duration-200 text-gray-200 hover:bg-gray-700 w-full'
          >
            <FiLogOut className='mx-4 w-6 h-6' />
            <div className='text-lg'>Logout</div>
          </button>
        </div>
      </div>

      {/* Logout confirmation modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-gray-800 p-6 absolute right-[37%] top-[40%] ">
            <h2 className='text-2xl font-semibold text-white'>Are you Sure</h2>
            <p className="mt-3 mb-5 leading-6 text-slate-200">You will be logged out of your account</p>
            <div className="flex  gap-4">
              <button
                onClick={() => {
                  handleLogout();
                  closeLogoutModal();
                }}
                className="px-4 py-2 bg-blue-300 text-black rounded-lg font-semibold hover:bg-blue-400 hover:text-white hover:border-gray-500 focus:outline-none"
              >
                Logout
              </button>
              <button
                onClick={closeLogoutModal}
                className="px-4 py-2 font-semibold bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 hover:text-black focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
