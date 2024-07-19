import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from "../common/Spinner"
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {resetPassword} from "../../services/operations/authAPIs"

const UpdatePassword = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // fetching data from slices
  const {loading} = useSelector((state) => state.auth)

  // creating state variable for distinguishing btw two pages
  const [ passwordUpdated, setPasswordUpdated ] = useState(false);

  //it will decide to show password or not
  const [ showPassword, setShowPassword ] = useState(false);

  // it will decide to show confirm password or not
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);

  // email which we will diaplay on resetPassword successfull page
  const [email, setEmail] = useState("");

  // form data
  const [ formData, setFormData ] = useState({password: "", confirmPassword: "" });

  // change handler function
  const changeHandler = (event) => {
    setFormData( (prevData) => (
        {
          ...prevData,
          [event.target.name]: event.target.value,
        }
    )
    )
  }

  // fetching token from url using useLocation
  const token = location.pathname.split("/").at(-1);

  // destructure formdata
  const { password, confirmPassword} = formData;


  // submit handler function
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(resetPassword(password, confirmPassword, token,setPasswordUpdated, setEmail));
  }

  return (
    <div className='mx-auto min-h-screen flex items-center justify-center bg-gray-700' >
        {
          loading ? 
          (
            <Spinner/>
          ) :
          (
            <div className=' flex flex-col gap-6 w-[32%] ' >

              <div className='flex flex-col gap-3 ' >
                <h1 className='font-semibold text-white text-3xl text-richblack-5 ' >{ passwordUpdated ? "Reset complete!" : "Choose  new password" }</h1>
                <p className='text-slate-300 font-normal text-lg font-inter ' >{ passwordUpdated ? `All done! We have sent an email to ${email} to confirm` : "Almost done. Enter your new password and your all set."}</p>
              </div>

              {/* form */}
              {
                !passwordUpdated && (
                  <form className='flex flex-col gap-5' >
                    {/* password */}
                    <label className='flex flex-col gap-2 relative ' >
                      <p className='font-normal text-base text-slate-100 flex flex-row gap-1 ' >New password<span className='text-red-300 text-sm font-normal' >*</span></p>
                      <input
                        required
                        type={showPassword? "text" : "password"}
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter your password'
                        className='bg-richblack-800 p-3 rounded-lg inputShadow text-base font-medium text-richblack-5 outline-none'
                      />

                      {/* visible ans unvisible eye */}
                      <span onClick={() => setShowPassword( (prev) => (!prev) )} className='absolute cursor-pointer right-3 top-10 ' >
                        {
                          showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        }
                      </span>
                    </label>

                    {/* confirm password */}
                    <label className='relative flex flex-col gap-2 ' >
                      <p className='font-normal text-base text-slate-100 flex flex-row gap-1 ' >Confirm new password<span className='text-pink-200 text-sm font-normal' >*</span></p>
                      <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder='Enter confirm password'
                        className='bg-richblack-800 p-3 rounded-lg inputShadow text-base font-medium text-richblack-5 outline-none'
                      />

                      {/* visible ans unvisible eye */}
                      <span onClick={() => setShowConfirmPassword( (prev) => (!prev))} className='absolute cursor-pointer right-3 top-10' >
                        {
                          showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        }
                      </span>
                    </label>
                  </form>
                )
              }

              {/* button */}
              <div className='flex flex-col gap-3' >
                <button onClick={ passwordUpdated ? () => navigate("/login") : submitHandler} className='bg-blue-300 p-3 rounded-lg text-base font-bold hover:bg-blue-400 text-black' >
                  { passwordUpdated ? "Return to login" : "Reset Password" }
                </button>

                <Link to={"/login"} >
                  <div className='text-blue-300 flex gap-2 items-center p-3 pl-0' >
                    <FiArrowLeft fontSize={16} />
                    <p className='font-medium text-base' >Back to login</p>
                  </div>
                </Link>

              </div>
            </div>
          )
        }
    </div>
  )
}

export default UpdatePassword;