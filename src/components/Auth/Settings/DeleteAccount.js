import React from 'react'
import { FaTrash } from "react-icons/fa";

const DeleteAccount = () => {
  return (
    <div className='rounded-lg border border-red-700 bg-red-900 flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-8 w-[95%] md:ml-10 my-6 sm:my-10'>
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

            <button className='font-medium italic text-base sm:text-lg text-red-300 mt-2 sm:mt-4'>
                I want to delete my account.
            </button>
        </div>
    </div>
  )
}

export default DeleteAccount