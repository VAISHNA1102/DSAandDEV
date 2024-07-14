import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return ( 
      <nav className={`${isScrolled ? 'bg-gray-900' : 'bg-black'}  w-full top-0 start-0 border-b-2`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" >
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo"/>
            <div className='flex flex-col'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-white hover:bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 inline-block hover:text-transparent hover:bg-clip-text italic'>DSA&DEV</span>
            <span className='h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500'></span>
            </div>

        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div className='flex gap-2'>
              <Link to="/login">
                  <button type="button" className="text-white  focus:outline-none font-bold rounded-xl text-sm px-3 py-2 text-center  hover:bg-gray-700 hover:border-gray-500 hover:scale-105 border border-white hover:text-blue-500">Login</button>
                  </Link>

                  <Link to="/signup">
                  <button type="button" className="text-white  focus:outline-none font-bold rounded-xl text-sm px-3 py-2 text-center  hover:bg-gray-700 hover:border-gray-500 hover:scale-105 border border-white hover:text-blue-500">Signup</button>
                  </Link>
              </div>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gradient-to-r from-fuchsia-500   dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen} onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}  id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
              <a href="/" className="block text-white py-2 px-3 hover:scale-110 hover:underline md:hover:bg-transparent md:hover:text-blue-400 md:p-0  dark:border-gray-700 md:hover:underline-offset-4">Home</a>
            </li>
            <li>
              <a href="/" className="block text-white py-2 px-3 hover:scale-110 hover:underline md:hover:bg-transparent md:hover:text-blue-400 md:p-0  dark:border-gray-700 md:hover:underline-offset-4">About</a>
            </li>
            <li>
              <Link to={"/tutorial"} className="block text-white py-2 px-3 hover:scale-110 hover:underline md:hover:bg-transparent md:hover:text-blue-400 md:p-0  dark:border-gray-700 md:hover:underline-offset-4">Tutorial</Link>
            </li>
            <li>
              <Link to={"/contact"} className="block text-white py-2 px-3 hover:scale-110 hover:underline md:hover:bg-transparent md:hover:text-blue-400 md:p-0  dark:border-gray-700 md:hover:underline-offset-4">Contact</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
  );
}

export default Navbar;




