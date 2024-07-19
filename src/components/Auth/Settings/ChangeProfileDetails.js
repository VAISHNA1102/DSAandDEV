import React, { useState } from 'react';
import { setEditProfile } from "../../../services/slices/editSlice"
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from "../../../services/operations/ProfileAPIs"

const ChangeProfileDetails = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.profile)

    const { editProfile } = useSelector((state) => state.edit)
    const { token } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        contactNumber: user?.additionalDetails?.contactNumber,
        dateOfBirth: user?.additionalDetails?.dateOfBirth,
        gender: user?.additionalDetails?.gender,
        about: user?.additionalDetails?.about,
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
        dispatch(updateProfile(token, formData));
        console.log("-------------------- User---------------------------------", user);
        dispatch(setEditProfile(false));
    }

    const toggleModal = () => {
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
                    <div className="relative p-4 w-full max-w-md md:max-w-lg lg:max-w-xl max-h-full">
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
                            <form className='p-4 md:p-6'>
                                <div className='flex flex-col gap-4 sm:gap-6 rounded-lg border border-richblack-700 bg-gray-900 mx-auto p-4 sm:p-6 md:p-8'>
                                    {/* <h3 className='font-bold text-xl sm:text-2xl md:text-3xl text-white'></h3> */}
                                    <div className='flex flex-col gap-4 sm:gap-6'>
                                        <div className='flex flex-col md:flex-row gap-4 sm:gap-6 justify-between'>
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full md:w-[48%]'>
                                                <p className='font-normal text-sm sm:text-base md:text-lg text-slate-300'>First Name</p>
                                                <input type="text"
                                                    name='firstName'
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder='Enter first name'
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-2'
                                                />
                                            </label>

                                            <label className='flex flex-col gap-1 sm:gap-2 w-full md:w-[48%]'>
                                                <p className='font-normal text-sm sm:text-base md:text-lg text-slate-300'>Last Name</p>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder='Enter Last name'
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-2'
                                                />
                                            </label>
                                        </div>

                                        <div className='flex flex-col md:flex-row gap-4 sm:gap-6 justify-between'>
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full md:w-[48%]'>
                                                <p className='font-normal text-sm sm:text-base md:text-lg text-slate-300'>Date of Birth</p>
                                                <input type="date"
                                                    name="dateOfBirth"
                                                    value={formData.dateOfBirth || ""}
                                                    onChange={handleChange}
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-2'
                                                />
                                            </label>

                                            <label className='flex flex-col gap-1 sm:gap-2 w-full md:w-[48%]'>
                                                <p className='font-normal text-sm sm:text-base md:text-lg text-slate-300'>Gender</p>
                                                <select
                                                    name="gender"
                                                    value={formData.gender || ""}
                                                    onChange={handleChange}
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-medium text-sm sm:text-base md:text-lg text-white outline-2'
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

                                        <div className='flex flex-col md:flex-row gap-4 sm:gap-6 justify-between'>
                                            <label className='flex flex-col gap-1 sm:gap-2 w-full md:w-[48%]'>
                                                <p className='font-normal text-sm sm:text-base md:text-lg text-slate-300'>Contact Number</p>
                                                <input type="text"
                                                    name="contactNumber"
                                                    value={formData.contactNumber || ""}
                                                    onChange={handleChange}
                                                    placeholder='Enter Contact Number'
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-2'
                                                />
                                            </label>

                                            <label className='flex flex-col gap-1 sm:gap-2 w-full md:w-[48%]'>
                                                <p className='font-normal text-sm sm:text-base md:text-lg text-slate-300'>About</p>
                                                <input
                                                    type="text"
                                                    name="about"
                                                    value={formData.about || ""}
                                                    onChange={handleChange}
                                                    placeholder='Enter Bio Details'
                                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-sm sm:text-base md:text-lg text-white outline-none'
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col sm:flex-row justify-end mt-6 sm:mt-8 gap-2'>
                                    <button type="button" onClick={toggleModal} className="cursor-pointer rounded-lg bg-gray-300 py-2 px-4 sm:px-5 font-semibold text-sm sm:text-base md:text-lg text-richblack-50 text-center w-full sm:w-auto">
                                        Cancel
                                    </button>
                                    <button type="button" onClick={handleModal} className='bg-blue-700 rounded-lg py-2 px-4 sm:px-5 font-semibold cursor-pointer text-sm sm:text-base md:text-lg text-white flex items-center justify-center gap-2 w-full sm:w-auto'>
                                        Save
                                    </button>
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