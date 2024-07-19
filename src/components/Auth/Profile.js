import React,{useState} from 'react'
import Sidebar from '../Dashboard/Sidebar'
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {setEditProfile,setEditPass,setEditPic} from "../../services/slices/editSlice"
import ChangeProfileDetails from './Settings/ChangeProfileDetails'
import ChangePassword from './Settings/ChangePassword'
import ChangeProfilePicture from './Settings/ChangeProfilePicture'
import { FaTrash } from "react-icons/fa";
import {deleteProfile} from "../../services/operations/ProfileAPIs"
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const {user}=useSelector((state)=>state.profile);
  const {token}=useSelector((state)=>state.auth)
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [showDeleteModal, setShowLogoutModal] = useState(false);

  const editProfileHandler=()=>{
    console.log("click....");
    dispatch(setEditProfile(true));
  }
  
  const editPasswordHandler=()=>{
    console.log("click....");
    dispatch(setEditPass(true));
  }

  const editPicHandler=()=>{
    console.log("click....");
    dispatch(setEditPic(true));
  }

  const deletehandler=()=>{
    dispatch(deleteProfile(token,navigate));
  }

  const showDeleteModalhandler=()=>{
    setShowLogoutModal(true);
  }

  const closeDeleteModalhandler=()=>{
    setShowLogoutModal(false);
  }

  return (
    <div className='bg-gray-700 h-[calc(100vh-88px)]'>
      <ChangeProfileDetails/>
      <ChangePassword/>
      <ChangeProfilePicture/>

      {/* Modal for delete account*/}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-gray-800 p-6 absolute right-[37%] top-[40%] ">
            <h2 className='text-2xl font-semibold text-white'>Are you Sure</h2>
            <p className="mt-3 mb-5 leading-6 text-slate-200">After Clicking Delete button account will deleted permanently.</p>
            <div className="flex  gap-4">
              <button
                onClick={() => {
                  deletehandler();
                  closeDeleteModalhandler();
                }}
                className="px-4 py-2 bg-blue-300 text-black rounded-lg font-semibold hover:bg-blue-400 hover:text-white hover:border-gray-500 focus:outline-none"
              >
                Delete
              </button>
              <button
                onClick={closeDeleteModalhandler}
                className="px-4 py-2 font-semibold bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 hover:text-black focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


      <div className='flex flex-row h-full overflow-hidden'>
        <Sidebar />
        <div className='p-4 w-full overflow-y-auto'>
          <h1 className="text-3xl font-bold mb-6 text-white pb-10 mx-10 my-5">My Profile</h1>
          <div className='flex flex-col space-y-6 md:space-y-10 mx-10'>
            <div className='flex flex-col md:flex-row border w-full p-4 md:p-6 items-center rounded-lg bg-gray-900 justify-between sm:overflow-x-hidden sm:mx-auto'>
              <div className='flex flex-col md:flex-row items-center py-2 px-4 sm:px-0'>
                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center mb-4 md:mb-0 hover:cursor-pointer' onClick={editPicHandler}>
                  <img src={user?.image} alt="" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className='md:mx-8 text-center md:text-left'  >
                  <h2 className='text-xl md:text-2xl font-bold text-white'>{(user?.firstName).charAt(0).toUpperCase() + (user?.firstName).slice(1) + " " + (user?.lastName).charAt(0).toUpperCase() + (user?.lastName).slice(1)}</h2>
                  <h4 className='text-base md:text-xl  text-slate-400'>{user?.email}</h4>
                </div>
              </div>
              <div className="flex gap-4 lg:flex-row sm:flex-col sm:gap-2">
              <div className="bg-blue-300 text-black px-4 py-2 rounded-md flex items-center font-bold mt-4 md:mt-0" onClick={editProfileHandler}>
                <div className='px-2 text-base hover:cursor-pointer'>Edit</div>
                <FaRegEdit />
              </div>
              <div className="bg-blue-300 text-black px-4 py-2 rounded-md flex items-center font-bold mt-4 md:mt-0 hover:cursor-pointer" onClick={editPasswordHandler}>
                <div className='px-2 text-base hover:cursor-pointer'>Change Password</div>
                <FaRegEdit />
              </div>
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
            <div className='rounded-lg border border-red-700 bg-red-900 flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-8  my-6 sm:my-10'>
                {/* image */}
                <div className='bg-red-700 rounded-full h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center aspect-square mx-auto sm:mx-0'>
                    <FaTrash fontSize="24px" className='text-red-200 sm:text-3xl'/>
                </div>

                {/* content */}
                <div className='w-full flex flex-col items-center sm:items-start gap-2 text-center sm:text-left'>
                    <h3 className='font-bold text-lg sm:text-xl text-red-100'>Delete Account</h3>
                    <div className='w-full sm:w-[80%] lg:w-[60%]'>
                        <p className='font-medium text-sm sm:text-base text-red-100 mb-2'>Would you like to delete account?</p>
                        <p className='font-medium text-sm sm:text-base text-red-100'>
                            This account contains Paid Courses. Deleting your account is permanent and will remove all the content associated with it.
                        </p>
                    </div>

                    <button className='font-medium italic text-base sm:text-lg text-red-300 mt-2 sm:mt-4' onClick={showDeleteModalhandler}>
                        I want to delete my account.
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;