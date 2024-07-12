import React from 'react'

const ChangeProfileDetails = () => {
    return (
        <div className='my-6 sm:my-10'>
            <form>
                <div className='flex flex-col gap-4 sm:gap-6 rounded-lg border border-richblack-700 bg-gray-900 w-[95%] md:ml-10 p-4 sm:p-8 px-6 sm:px-12'>
                    <h3 className='font-bold text-xl sm:text-2xl text-white'>Profile Information</h3>
                    <div className='flex flex-col gap-4 sm:gap-6'>
                        <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between'>
                            {/* first name */}
                            <label className='flex flex-col gap-1 sm:gap-2 w-full lg:w-[48%]'>
                                <p className='font-normal text-base sm:text-lg text-slate-300'>First Name</p>
                                <input type="text"
                                    name='firstName'
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
                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2'
                                />
                            </label>

                            {/* gender */}
                            <label className='flex flex-col gap-1 sm:gap-2 w-full lg:w-[48%]'>
                                <p className='font-normal text-base sm:text-lg text-slate-300'>Gender</p>
                                <select
                                    name="gender"
                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-medium text-base sm:text-lg text-white outline-2'
                                >
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
                                    placeholder='Enter Bio Details'
                                    className='p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-none'
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* buttons */}
                <div className='flex flex-col-reverse sm:flex-row-reverse mr-6 mt-6 sm:mt-10 gap-2'>
                    <button type="submit" className='bg-blue-700 rounded-lg py-2 px-5 font-semibold cursor-pointer text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto'>
                        Save
                    </button>
                    <button className="cursor-pointer rounded-lg bg-gray-300 py-2 px-5 font-semibold text-base sm:text-lg text-richblack-50 text-center w-full sm:w-auto mt-2 sm:mt-0">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChangeProfileDetails