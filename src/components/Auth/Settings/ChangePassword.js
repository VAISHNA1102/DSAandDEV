    import React from 'react'
    import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
    import { useState } from 'react';


    const ChangePassword = () => {
        const [ showOldPassword, setShowOldPassword ] = useState(false);

    // state variable for new password
    const [ showNewPassword, setShowNewPassword ] = useState(false);
        return (
            <>
                <form>
                    <div className='flex flex-col gap-4 sm:gap-6 rounded-lg border border-richblack-700 bg-gray-900 w-[95%] md:ml-10 p-4 sm:p-8 px-6 sm:px-12 ' >
                        <h3 className='font-bold text-xl sm:text-2xl text-white'>Password</h3>
                        <div className='flex flex-col lg:flex-row gap-6 justify-between ' >
                            <label className='flex flex-col gap-4  w-[100%] lg:w-[50%] relative ' >
                                <p className='font-normal text-base sm:text-lg text-slate-300' >Current Password</p>
                                <input
                                    type="password"
                                    name='oldPassword'
                                    placeholder='Enter Current Password'
                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2'
                                />
                                <div className='absolute right-3 top-12 cursor-pointer ' >
                                    {
                                        showOldPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    }
                                </div>
                            </label>

                            <label className='flex flex-col  gap-4  w-[100%] lg:w-[50%] relative ' >
                                <p className='font-normal text-base sm:text-lg text-slate-300' >New Password</p>
                                <input
                                    type="password"
                                    name='newPassword'
                                    placeholder='Enter New Password'
                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2'
                                />

                            
                                <div className='absolute right-3 top-12 cursor-pointer ' >
                                    {
                                        showNewPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    }
                                </div>
                            </label>
                        </div>

                        
                    </div>

                    <div className='flex flex-col-reverse sm:flex-row-reverse md:mr-6 mt-6 sm:mt-10 gap-2'>
                    <button type="submit" className='bg-blue-700 rounded-lg py-2 px-5 font-semibold cursor-pointer text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto'>
                       Update
                    </button>
                    <button className="cursor-pointer rounded-lg bg-gray-300 py-2 px-5 font-semibold text-base sm:text-lg text-richblack-50 text-center w-full sm:w-auto mt-2 sm:mt-0">
                        Cancel
                    </button>
                </div>
                </form>
            </>
        )
    }

    export default ChangePassword
