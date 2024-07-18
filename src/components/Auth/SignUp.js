import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from "../common/Spinner"
import {setSignUpData} from "../../services/slices/auth"
import { useDispatch, useSelector } from 'react-redux';
import {sendOtp} from "../../services/operations/authAPIs"

const SignUp = ({ onBackToLogin }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const accountType="Student"

  const {loading} =useSelector((state)=>state.auth);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    let signupData = {
      ...formData,
      accountType,
    }
    dispatch(setSignUpData(signupData));
    dispatch(sendOtp(formData.email,navigate));

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      contactNumber: '',
    })
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-2 sm:p-6 lg:p-8">
    {loading ? (
        <Spinner/>
      ) : (
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row my-auto p-2 bg-gray-900">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 text-white">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold">Sign up</h2>
          <p className="text-xl">to use all features of the application</p>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto md:mx-0">
            <svg className=" w-11 h-11 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white py-2 md:p-12 flex flex-col justify-between rounded-md">
        <div className="max-w-md mx-auto w-full">
        <h2 className="text-3xl text-slate-700 font-bold mb-4 text-center md:text-left">Sign Up</h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="sr-only">Mobile Number (optional)</label>
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                placeholder="Mobile Number (optional)"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-300 text-black px-4 py-2 rounded-md flex justify-center font-bold mt-4 hover:bg-blue-500 hover:text-white w-full"
            >
              Sign up
            </button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-gray-600">or</span>{' '}
            <button 
              className="text-blue-600 hover:underline"
              onClick={onBackToLogin}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>)}
    </div>
  );
};

export default SignUp;