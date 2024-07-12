import React from 'react'
import { FiUpload } from "react-icons/fi"

const ChangeProfilePicture = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between rounded-lg border-[1px] border-richblack-700 bg-gray-900 w-[95%] md:ml-10 p-4 sm:p-8 text-richblack-5">
        <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-4 w-full">
          <img 
            src={""} 
            alt="NF" 
            className="aspect-square w-[60px] sm:w-[78px] rounded-full object-cover mb-4 sm:mb-0"
          />
          <div className="space-y-2 text-center sm:text-left w-full">
            <p className="font-medium text-lg sm:text-xl text-slate-200">
              Change Profile Picture
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-2">
              <input type="file" className="hidden" accept="image/png, image/gif, image/jpeg" id="profilePicture"/>
              <label 
                htmlFor="profilePicture" 
                className="cursor-pointer rounded-lg bg-gray-300 py-2 px-5 font-semibold text-base sm:text-lg text-richblack-50 text-center"
              >
                Select
              </label>
              <button className='bg-blue-700 rounded-lg py-2 px-5 font-semibold cursor-pointer text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto mt-3 sm:mt-0'>
                <span>Upload</span>
                <FiUpload/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangeProfilePicture