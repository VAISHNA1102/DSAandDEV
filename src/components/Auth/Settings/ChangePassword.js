import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setEditPass} from "../../../services/slices/editSlice"
import {changePasswordBack} from "../../../services/operations/ProfileAPIs"

const ChangePassword = () => {
    const {editPass}=useSelector((state)=>state.edit);
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({
        oldPassword:"",
        newPassword:""
    })
    
    const {token}=useSelector((state)=>state.auth)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const toggleModal=()=>{
        dispatch(setEditPass(false));
    }
    const clickHandler=()=>{
        dispatch(changePasswordBack(token,formData));
    }
  return (
    <>
      {editPass && (
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
                  Change Password
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
              <form>
                <div className="flex flex-col gap-4 sm:gap-6 rounded-lg border border-richblack-700 bg-gray-900 w-[95%] mx-auto p-4 sm:p-8 px-6 sm:px-12 ">
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    Password
                  </h3>
                  <div className="flex flex-col lg:flex-row gap-6 justify-between ">
                    <label className="flex flex-col gap-4  w-[100%] lg:w-[50%] relative ">
                      <p className="font-normal text-base sm:text-lg text-slate-300">
                        Current Password
                      </p>
                      <input
                        type="password"
                        name="oldPassword"
                        value={formData.oldPassword}
                        onChange={handleChange}
                        placeholder="Enter Current Password"
                        className="p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2"
                      />
                      {/* <div className="absolute right-3 top-12 cursor-pointer ">
                        {showOldPassword ? (
                          <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                          <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                      </div> */}
                    </label>

                    <label className="flex flex-col  gap-4  w-[100%] lg:w-[50%] relative ">
                      <p className="font-normal text-base sm:text-lg text-slate-300">
                        New Password
                      </p>
                      <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        placeholder="Enter New Password"
                        className="p-2 sm:p-3 rounded-lg bg-gray-700 font-normal text-base sm:text-lg text-white outline-2"
                      />

                      {/* <div className="absolute right-3 top-12 cursor-pointer ">
                        {showNewPassword ? (
                          <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                          <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                      </div> */}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row-reverse md:mr-6 mt-6 sm:mt-10 gap-2">
                  <div
                    type="submit"
                    className="bg-blue-700 rounded-lg py-2 px-5 font-semibold cursor-pointer text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                    onClick={clickHandler}
                  >
                    Update
                  </div>
                  <button className="cursor-pointer rounded-lg bg-gray-300 py-2 px-5 font-semibold text-base sm:text-lg text-richblack-50 text-center w-full sm:w-auto mt-2 sm:mt-0" onClick={toggleModal}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
