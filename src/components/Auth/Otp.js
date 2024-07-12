import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center inconsolataFontFamily uppercase">Verify email</h2>
        <p className="text-xs sm:text-sm text-gray-400 mb-6 text-center manropeFontFamily">
          A verification code has been sent to you. Enter the code below
        </p>
        
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
          {otp.map((data, index) => {
            return (
              <input
                className="w-8 h-8 sm:w-12 sm:h-12 text-center text-lg sm:text-xl border border-gray-700 rounded-md bg-gray-800 focus:border-blue-500 focus:outline-none"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            );
          })}
        </div>
        
        <button className="w-full bg-blue-700 text-white font-bold py-2 sm:py-3 rounded-md mb-6 hover:bg-blue-900 transition duration-300 text-lg sm:text-lg">
          Verify email
        </button>
        
        <div className="flex justify-between text-xs sm:text-sm">
          <Link to={"/login"} className="text-gray-400 hover:text-white transition duration-300">
            ← Back to login
          </Link>
          <a href="#" className="text-teal-500 hover:text-teal-400 transition duration-300">
            ↻ Resend it
          </a>
        </div>
      </div>
    </div>
  );
};

export default Otp;