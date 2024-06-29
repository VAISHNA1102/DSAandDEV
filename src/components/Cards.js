import React from 'react';
import dsaLogo from '../assets/DSA.jpg';
import devLogo from '../assets/Dev.jpg';
import openSourceLogo from '../assets/Open.jpg';

const Cards = () => {
  return (
    <div className="flex flex-row mx-auto w-8/12 gap-x-10 m-10">
      <div className="flex-1 rounded-lg h-96 p-10 text-center shadow-lg cardBg text-white">
        <img src={dsaLogo} alt="DSA Logo" className="w-12 h-12 mx-auto mb-2 rounded-full" />
        <h2 className="text-xl mb-7 font-bold">Data Structures & Algorithms</h2>
        <p className="text-lg text-gray-400 font-md">Understand and apply the basics of data structures and algorithms to solve problems efficiently.</p>
      </div>
      <div className="flex-1 rounded-lg h-96 p-10 text-center shadow-lg cardBg text-white">
        <img src={openSourceLogo} alt="Open Source Logo" className="w-12 h-12 mx-auto mb-2 rounded-full" />
        <h2 className="text-xl mb-7 font-bold">Open Source</h2>
        <p className="text-lg  text-gray-400 font-md">Engage with open-source projects to collaborate and innovate, gaining valuable experience in software development.</p>
      </div>
      <div className="flex-1 rounded-lg h-96 p-10 text-center shadow-lg cardBg text-white">
        <img src={devLogo} alt="Development Logo" className="w-12 h-12 mx-auto mb-2 rounded-full" />
        <h2 className="text-xl mb-7 font-bold">Development</h2>
        <p className="text-lg text-gray-400 font-md">Explore development techniques and best practices, enhancing your coding skills and efficiency in software creation.</p>
      </div>
    </div>
  );
}

export default Cards;