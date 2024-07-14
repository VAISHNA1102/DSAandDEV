import React from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {setEditProfile} from "../../services/slices/editSlice"
import ChangeProfileDetails from './Settings/ChangeProfileDetails'


const Profile = () => {
  const {user}=useSelector((state)=>state.profile)
  const dispatch=useDispatch();
  const {editProfile}=useSelector((state)=>state.edit)

  const editProfileHandler=()=>{
    console.log("click....");
    dispatch(setEditProfile(true));
    console.log(editProfile);
  }
  return (
    <div className='bg-gray-700 h-[calc(100vh-70px)]'>
      <ChangeProfileDetails/>
      <div className='flex flex-row h-full overflow-hidden'>
        <Sidebar />
        <div className='p-4 w-full overflow-y-auto'>
          <h1 className="text-3xl font-bold mb-6 text-white pb-10 mx-10 my-5">My Profile</h1>
          <div className='flex flex-col space-y-6 md:space-y-10 mx-10'>
            <div className='flex flex-col md:flex-row border w-full p-4 md:p-6 items-center rounded-lg bg-gray-900 justify-between'>
              <div className='flex flex-col md:flex-row items-center py-2 px-4'>
                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center mb-4 md:mb-0'>
                  <img src={user?.image} alt="" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className='md:mx-10 text-center md:text-left'>
                  <h2 className='text-xl md:text-2xl font-bold text-white'>{(user?.firstName).charAt(0).toUpperCase() + (user?.firstName).slice(1) + " " + (user?.lastName).charAt(0).toUpperCase() + (user?.lastName).slice(1)}</h2>
                  <h4 className='text-base md:text-xl  text-slate-400'>{user?.email}</h4>
                </div>
              </div>
              <div className="bg-blue-300 text-black px-4 py-2 rounded-md flex items-center font-bold mt-4 md:mt-0" onClick={editProfileHandler}>
                <div className='px-2 text-base hover:cursor-pointer'>Edit</div>
                <FaRegEdit />
              </div>
            </div>
            <div className='flex flex-col border w-full p-4 md:p-6 rounded-lg bg-gray-900'>
              <div className='flex items-center justify-between mb-4 md:mb-6' >
                <p className='font-bold text-xl md:text-2xl text-white pt-2'>About</p>
              </div>
              <div className='text-slate-400'>
              { user?.additionalDetails?.about ? (<p className='font-normal text-sm text-white' >{user?.additionalDetails?.about}</p>) : (<p className='font-normal text-sm text-richblack-300' >Write Something About Yourself</p>) }
              </div>
            </div>
            <div className='flex flex-col border w-full p-4 md:p-6 rounded-lg bg-gray-900'>
              <div className='flex justify-between items-center mb-4 md:mb-6' >
                <p className='font-bold text-xl md:text-2xl text-white pt-2'>Personal Details</p>
              </div>

              {/* details */}
              <div className='flex flex-col md:flex-row md:items-center md:gap-48' >
                <div className='flex flex-col gap-4 md:gap-5 mb-4 md:mb-0' >
                  {/* first name */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>First Name</p>
                    <p className='text-slate-100 font-semibold text-sm'>{(user?.firstName).charAt(0).toUpperCase() + (user?.firstName).slice(1) }</p>
                  </div>

                  {/* email */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Email</p>
                    <p className='text-slate-100 font-semibold text-sm'>{user?.email}</p>
                  </div>

                  {/* gender */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Gender</p>
                    {user?.additionalDetails?.gender ? (<p className='text-white font-semibold text-sm' >{user?.additionalDetails?.gender}</p>) : (<p className='text-richblack-5 font-semibold text-sm' >Add Gender</p>) }
                  </div>
                </div>

                <div className='flex flex-col gap-4 md:gap-5' >
                  {/* last name */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Last Name</p>
                    <p className='text-slate-100 font-semibold text-sm'>{(user?.lastName).charAt(0).toUpperCase() + (user?.lastName).slice(1) }</p>
                  </div>

                  {/* phone number */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Phone Number</p>
                    {user?.additionalDetails?.contactNumber ? (<p className='text-white font-semibold text-sm' >{user?.additionalDetails?.contactNumber}</p>) : (<p className='text-richblack-5 font-semibold text-sm' >Phone Number</p>) }
                  </div>

                  {/* DOB */}
                  <div className='flex flex-col gap-1 md:gap-2' >
                    <p className='font-normal text-sm md:text-md text-slate-400'>Date Of Birth</p>
                    {user?.additionalDetails?.dateOfBirth ? (<p className='text-white font-semibold text-sm' >{user?.additionalDetails?.dateOfBirth}</p>) : (<p className='text-richblack-5 font-semibold text-sm' >Add Date Of Birth</p>) }
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