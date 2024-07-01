import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import '../index.css'; 

const Footer = () => {
    return (
        <footer className="text-white py-6" style={{
            background: 'rgb(46,40,181)',
            background: 'radial-gradient(circle, rgba(46,40,181,1) 0%, rgba(49,51,78,1) 51%, rgba(9,21,65,1) 89%)'
        }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
                    <div className="mb-4 md:mb-0">
                        <img src={logo} className="h-20 mx-auto md:mx-0" alt="Logo" />
                    </div>
                    <div className="space-x-0 md:space-x-4 mb-4 md:mb-0 text-center md:text-left">
                        <a href="#" className="back block md:inline md:text-2xl ">About</a>
                        <a href="#" className="back block md:inline md:text-2xl ">Contact</a>
                        <a href="#" className="back block md:inline md:text-2xl ">Tutorial</a>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4 sm:space-x-3 xs:space-x-2">
                        <a href="https://www.facebook.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" className="icons" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="text-sm text-center md:text-lg">
                    &copy; {new Date().getFullYear()} DSA & Dev. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
