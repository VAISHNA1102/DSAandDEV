import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { FaRegEdit } from "react-icons/fa";
import logo from '../../assets/logo.png'

const Profile = () => {
  return (
    <div className='bg-gray-700 h-[calc(100vh-70px)]'>
      <div className='flex flex-row h-full overflow-hidden'>
        <Sidebar />
        <div className='p-4 w-full overflow-y-auto'>
          <h1 className="text-3xl font-bold mb-6 text-white pb-10 mx-10 my-5">My Profile</h1>
          <div className='flex flex-col space-y-6 md:space-y-10 mx-10'>
            <div className='flex flex-col md:flex-row border w-full p-4 md:p-6 items-center rounded-lg bg-gray-900 justify-between'>
              <div className='flex flex-col md:flex-row items-center py-2 px-4'>
                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center mb-4 md:mb-0'>
                  <img src={logo} alt="" className="w-full h-full object-cover" />
                </div>
                <div className='md:mx-10 text-center md:text-left'>
                  <h2 className='text-xl md:text-2xl font-bold text-white'>Name</h2>
                  <h4 className='text-base md:text-xl  text-slate-400'>Email</h4>
                </div>
              </div>
              <div className="bg-blue-300 text-black px-4 py-2 rounded-md flex items-center font-bold mt-4 md:mt-0">
                <button className='px-2 text-base'>Edit</button>
                <FaRegEdit />
              </div>
            </div>
            <div className='flex flex-col border w-full p-4 md:p-6 rounded-lg bg-gray-900'>
              <div className='flex items-center justify-between mb-4 md:mb-6' >
                <p className='font-bold text-xl md:text-2xl text-white'>About</p>
                <div className="bg-blue-300 text-black px-4 py-2 rounded-md flex items-center font-bold">
                  <button className='px-2 text-base'>Edit</button>
                  <FaRegEdit />
                </div>
              </div>
              <div className='text-slate-400'>
                <p>Write Something About Yourself</p>
              </div>
            </div>
            <div className='flex flex-col border w-full p-4 md:p-6 rounded-lg bg-gray-900'>
              <div className='flex justify-between items-center mb-4 md:mb-6' >
                <p className='font-bold text-xl md:text-2xl text-white'>Personal Details</p>
                <div className="bg-blue-300 text-black px-4 py-2 rounded-md flex items-center font-bold">
                  <button className='px-2 text-base'>Edit</button>
                  <FaRegEdit />
                </div>
              </div>

              {/* details */}
              <div className='flex flex-col md:flex-row md:items-center md:gap-48' >
                <div className='flex flex-col gap-4 md:gap-5 mb-4 md:mb-0' >
                  {/* first name */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>First Name</p>
                    <p className='text-slate-100 font-semibold text-sm'>XYZ</p>
                  </div>

                  {/* email */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Email</p>
                    <p className='text-slate-100 font-semibold text-sm'>xyz@gmail.com</p>
                  </div>

                  {/* gender */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Gender</p>
                    <p className='text-slate-100 font-semibold text-sm'>Add Gender</p>
                  </div>
                </div>

                <div className='flex flex-col gap-4 md:gap-5' >
                  {/* last name */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Last Name</p>
                    <p className='text-slate-100 font-semibold text-sm'>ABC</p>
                  </div>

                  {/* phone number */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Phone Number</p>
                    <p className='text-slate-100 font-semibold text-sm'>Add Contact Number</p>
                  </div>

                  {/* DOB */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Date Of Birth</p>
                    <p className='text-slate-100 font-semibold text-sm'>Add Date Of Birth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;