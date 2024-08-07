import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/logo.png';
import '../../index.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-white py-12 border-t bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-4 md:w-11/12 md:mx-auto">
                    <div className="mb-4 md:mb-0">
                        <img src={logo} className="h-20 mx-auto md:mx-0" alt="Logo" />
                    </div>
                    <div className="space-x-0 md:space-x-1 mb-4 md:mb-0 text-center md:text-left space-y-2 md:ml-28">
                        <Link to="/about" className="md:hover:text-blue-400 hover:scale-110 hover:underline px-4 hover:text-black hover:rounded-md md:text-xl">About</Link>
                        <Link to="/contact" className="md:hover:text-blue-400 hover:scale-110 hover:underline px-4 hover:text-black hover:rounded-md md:text-xl ">Contact</Link>
                        <Link to="/tutorial" className="md:hover:text-blue-400 hover:scale-110 hover:underline px-4 hover:text-black hover:rounded-md md:text-xl ">Tutorial</Link>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4 sm:space-x-3 xs:space-x-2">
                        <Link to="https://www.facebook.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="https://www.twitter.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="https://www.instagram.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="https://www.linkedin.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </div>
                </div>
                <div className="text-sm text-center">
                    &copy; {new Date().getFullYear()} DSA & Dev. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
