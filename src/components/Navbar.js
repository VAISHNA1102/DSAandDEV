import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
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
    <div>
      <nav className={`${isScrolled ? 'bg-gray-900' : 'bg-black'}  w-full top-0 start-0 border-b-2`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" >
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo"/>
            <div className='flex flex-col'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white italic'>DSA&DEV</span>
            <span className='h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500'></span>
            </div>

        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/login">
            <button type="button" className="text-white  focus:outline-none font-bold rounded-xl text-sm px-3 py-2 text-center  dark:hover:bg-gradient-to-r from-fuchsia-500  border border-white">Get Started</button>
            </Link>
            
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gradient-to-r from-fuchsia-500   dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen} onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}  id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:px-2 dark:text-white dark:hover:bg-gradient-to-r from-fuchsia-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:hover:underline">Home</a>
            </li>
            <li>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:px-2 dark:text-white dark:hover:bg-gradient-to-r from-fuchsia-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:hover:underline">About</a>
            </li>
            <li>
              <Link to={"/tutorial"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:px-2 dark:text-white dark:hover:bg-gradient-to-r from-fuchsia-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:hover:underline">Tutorial</Link>
            </li>
            <li>
              <Link to={"/contact"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:px-2 dark:text-white dark:hover:bg-gradient-to-r from-fuchsia-500  dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;




