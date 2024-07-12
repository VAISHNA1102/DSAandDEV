import React from 'react'
import { useNavigate } from 'react-router-dom'
import htmlImg from '../../assets/TutorialImg/HTML.png'
import cssImg from '../../assets/TutorialImg/CSS.png'
import javascriptImg from '../../assets/TutorialImg/JS.png'
import javaImg from '../../assets/TutorialImg/Java.png'
import cppImg from '../../assets/TutorialImg/c++.png'
import pythonImg from '../../assets/TutorialImg/python.png'
import Footer from '../common/Footer'

const cardData = [
  {
    photo: htmlImg,
    heading: "HTML",
    about: "Markup language for creating web pages",
    date: ""
  },
  {
    photo: cssImg,
    heading: "CSS",
    about: "Style sheet language for describing document presentation",
    date: ""
  },
  {
    photo: javascriptImg,
    heading: "JavaScript",
    about: "High-level, interpreted programming language",
    date: ""
  },
  {
    photo: javaImg,
    heading: "Java",
    about: "Object-oriented programming language",
    date: ""
  },
  {
    photo: cppImg,
    heading: "C++",
    about: "General-purpose programming language created as an extension of C",
    date: ""
  },
  {
    photo: pythonImg,
    heading: "Python",
    about: "High-level, interpreted, general-purpose programming language",
    date: ""
  }
];
const Tutorials = () => {
  const navigate = useNavigate();

  const handleCardClick = (heading) => {
    navigate(`/tutorial/${heading.toLowerCase()}`);
  };

  return (
    <div >
      <div className="px-4 py-8 bg-slate-900">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 inconsolataFontFamily text-gray-200">Tutorials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-11/12 mx-auto">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden flex flex-col items-center border-2 border-gray-200 border-opacity-20 group hover:cursor-pointer"
            onClick={() => handleCardClick(card.heading)}
          >
            <div className="overflow-hidden">
              <img 
                src={card.photo} 
                alt={card.heading} 
                className="w-56 h-56 md:w-56 md:h-52 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <div className="p-3 md:p-4 w-full border-t border-gray-500 group-hover:bg-slate-400 h-[42%]">
              <h2 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-white group-hover:text-black">{card.heading}</h2>
              <p className="text-sm md:text-base text-gray-300 mb-1 md:mb-2 group-hover:text-black">{card.about}</p>
              <p className="text-xs md:text-sm text-gray-400 group-hover:text-black">Released: {card.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Tutorials