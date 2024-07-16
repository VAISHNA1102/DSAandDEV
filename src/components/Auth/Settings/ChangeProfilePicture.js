import React from 'react'
import { FiUpload } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import {setEditPic} from "../../../services/slices/editSlice"

const ChangeProfilePicture = () => {
  const {editPic}=useSelector((state)=>state.edit);
  const dispatch=useDispatch();

  const toggleModal=()=>{
    dispatch(setEditPic(false));
}
  return (
    <>
    {editPic && (
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
                  Change Profile Picture
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
      <div className="mx-auto flex flex-col sm:flex-row items-center justify-between rounded-lg border-[1px] border-richblack-700 bg-gray-900 w-[95%] p-4 sm:p-8 text-richblack-5">
        <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-4 w-full">
          <div className="space-y-2 text-center sm:text-left w-full">
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-2 items-center justify-center">
              <input type="file" className="hidden" accept="image/png, image/gif, image/jpeg" id="profilePicture"/>
              <label 
                htmlFor="profilePicture" 
                className="cursor-pointer rounded-lg bg-gray-300 py-2 px-5 font-semibold text-base sm:text-lg text-richblack-50 text-center"
              >
                Select
              </label>
              <button className='bg-blue-700 rounded-lg py-2 px-5 font-semibold cursor-pointer text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto mt-3 sm:mt-0 text-white'>
                <span>Upload</span>
                <FiUpload/>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      )}
    </>
  )
}

export default ChangeProfilePicture