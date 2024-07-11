import React, { useState } from 'react';

const SignUp = ({ onBackToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign up attempted with:', formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row my-auto p-2 bg-slate-700">
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
        <div className="flex justify-end gap-2 mb-4">
          <button 
            className="bg-none border-2 text-black px-4 py-1 rounded hover:scale-105 hover:bg-gray-300"
            onClick={onBackToLogin}
          >
            Log In
          </button>
          <button className="bg-blue-600 mr-2  text-white px-4 py-1 rounded">
            Sign Up
          </button>
        </div>
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
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
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
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-slate-500 focus:border-slate-500"
                placeholder="Mobile Number (optional)"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                className="h-4 w-4 text-slate-500 focus:ring-slate-500 border-gray-300 rounded"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
                By signing up I agree with <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
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
      </div>
    </div>
  );
};

export default SignUp;