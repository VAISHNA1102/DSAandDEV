import React from 'react';
import dsaLogo from '../Images/DSA.jpg';
import devLogo from '../Images/Dev.jpg';
import openSourceLogo from '../Images/Open.jpg';

const Cards = () => {
  return (
    <div className="flex flex-row mx-auto w-11/12 max-w-screen-lg p-5 space-x-6">
      <div className="flex-1 rounded-lg p-5 text-center shadow-lg bg-black text-white">
        <img src={dsaLogo} alt="DSA Logo" className="w-12 h-12 mx-auto mb-2" />
        <h2 className="text-xl mb-2 font-bold">Data Structures & Algorithms</h2>
        <p className="text-lg text-gray-600 font-light">Understand and apply the basics of data structures and algorithms to solve problems efficiently.</p>
      </div>
      <div className="flex-1 rounded-lg p-5 text-center shadow-lg bg-black text-white">
        <img src={openSourceLogo} alt="Open Source Logo" className="w-12 h-12 mx-auto mb-2" />
        <h2 className="text-xl mb-2 font-bold">Open Source</h2>
        <p className="text-lg text-gray-600 font-light">Engage with open-source projects to collaborate and innovate, gaining valuable experience in software development.</p>
      </div>
      <div className="flex-1 rounded-lg p-5 text-center shadow-lg bg-black text-white">
        <img src={devLogo} alt="Development Logo" className="w-12 h-12 mx-auto mb-2" />
        <h2 className="text-xl mb-2 font-bold">Development</h2>
        <p className="text-lg text-gray-600 font-light">Explore development techniques and best practices, enhancing your coding skills and efficiency in software creation.</p>
      </div>
    </div>
  );
}

export default Cards;