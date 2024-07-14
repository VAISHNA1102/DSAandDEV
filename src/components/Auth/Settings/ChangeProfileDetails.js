import React, { useState } from 'react';
import {setEditProfile} from "../../../services/slices/editSlice"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setProfile} from "../../../services/slices/profileSlice"
import {updateProfile} from "../../../services/operations/ProfileAPIs"

const ChangeProfileDetails = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const {user}=useSelector((state)=>state.profile)

    const {editProfile}=useSelector((state)=>state.edit)
    const {token}=useSelector((state)=>state.auth)

    // const {loading} =useSelector((state)=>state.auth);

    const [formData, setFormData] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        contactNumber: user?.additionalDetails?.contactNumber,
        dateOfBirth: user?.additionalDetails?.dateOfBirth ,
        gender: user?.additionalDetails?.gender,
        about:user?.additionalDetails?.about,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleModal = (e) => {
        e.preventDefault();
        
        dispatch(updateProfile(token,formData));

        console.log("-------------------- User---------------------------------",user);

        dispatch(setEditProfile(false));
    }
    const toggleModal=()=>{
        dispatch(setEditProfile(false));
    }
    return (
        <div>
            {editProfile && (
                <div 
                    id="crud-modal" 
                    tabIndex="-1" 
                    aria-hidden="true" 
                    className="fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-900">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Profile Information
                                </h3>
                                <button 
                                    type="button" 
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                                    onClick={toggleModal}
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form className='p-4'>
                                <div className='flex flex-col gap-4 sm:gap-6 rounded-lg border border-richblack-700 bg-gray-900 mx-auto sm:p-8 px-6 sm:px-12'>
                                    <h3 className='font-bold text-xl sm:text-2xl text-white'></h3>
                                    <div className='flex flex-col gap-4 sm:gap-6'>
                                        <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between'>
                                            {/* first name */}
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full lg:w-[48%]'>
                                                <p className='font-normal text-base sm:text-lg text-slate-300'>First Name</p>
                                                <input type="text"
                                                    name='firstName'
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder='Enter first name'
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2'
                                                />
                                            </label>

                                            {/* last name */}
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full lg:w-[48%]'>
                                                <p className='font-normal text-base sm:text-lg text-slate-300'>Last Name</p>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder='Enter Last name'
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2'
                                                />
                                            </label>
                                        </div>

                                        <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between'>
                                            {/* DOB */}
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full lg:w-[48%]'>
                                                <p className='font-normal text-base sm:text-lg text-slate-300'>Date of Birth</p>
                                                <input type="date"
                                                    name="dateOfBirth"
                                                    value={formData.dateOfBirth || ""}
                                                    onChange={handleChange}
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2'
                                                />
                                            </label>

                                            {/* gender */}
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full lg:w-[48%]'>
                                                <p className='font-normal text-base sm:text-lg text-slate-300'>Gender</p>
                                                <select
                                                    name="gender"
                                                    value={formData.gender || ""}
                                                    onChange={handleChange}
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-medium text-base sm:text-lg text-white outline-2'
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Non-Binary">Non-Binary</option>
                                                    <option value="Prefer not to say">Prefer not to say</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </label>
                                        </div>

                                        <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between'>
                                            {/* contact no. */}
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full lg:w-[48%]'>
                                                <p className='font-normal text-base sm:text-lg text-slate-300'>Contact Number</p>
                                                <input type="text"
                                                    name="contactNumber"
                                                    value={formData.contactNumber || ""}
                                                    onChange={handleChange}
                                                    placeholder='Enter Contact Number'
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2'
                                                />
                                            </label>

                                            {/* about */}
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full lg:w-[48%]'>
                                                <p className='font-normal text-base sm:text-lg text-slate-300'>About</p>
                                                <input
                                                    type="text"
                                                    name="about"
                                                    value={formData.about || ""}
                                                    onChange={handleChange}
                                                    placeholder='Enter Bio Details'
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-none'
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* buttons */}
                                <div className='flex flex-col-reverse sm:flex-row-reverse mr-6 mt-6 sm:mt-10 gap-2'>
                                    <div  className='bg-blue-700 rounded-lg py-2 px-5 font-semibold cursor-pointer text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto' onClick={handleModal}>
                                        Save
                                    </div>
                                    <div className="cursor-pointer rounded-lg bg-gray-300 py-2 px-5 font-semibold text-base sm:text-lg text-richblack-50 text-center w-full sm:w-auto mt-2 sm:mt-0">
                                        Cancel
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChangeProfileDetails;
