import React, { useState } from 'react';

const reviews = [
  {
    review: "This website is a game-changer! The lessons are well-structured, and the practice problems are challenging yet doable. Highly recommend it to my peers.",
    name: "Vaishnavi Sirimalla"
  },
  {
    review: "I appreciate how beginner-friendly this website is. The step-by-step explanations make complex concepts easier to understand.",
    name: "Karan Wagh"
  },
  {
    review: "The combination of Data Structures, Algorithms, and Web Development all in one place is fantastic. I can already see an improvement in my coding skills.",
    name: "Sanjay Sargam"
  },
  {
    review: "The UI is clean and intuitive, which makes navigating through the lessons and exercises a breeze. I love how I can track my progress.",
    name: "Tina Dalvi"
  }
];

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const ReviewCard = ({ review, name }) => (
  <div className="glass text-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto flex flex-col h-64">
    <p className="text-3xl manropeFontFamily font-bold mb-3">"</p>
    <p className="mb-4 flex-grow inconsolataFontFamily font-light overflow-hidden">
      {truncateText(review, 25)}
    </p>
    <p className="font-bold manropeFontFamily">{name}</p>
  </div>
);

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="py-12 relative mb-24 md:mb-34">
      <div className="container mx-auto px-4 md:px-15 lg:w-10/12">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % reviews.length;
            return (
              <div key={index} className={`w-full md:w-1/3 ${offset === 1 ? 'block' : 'hidden md:block'}`}>
                <ReviewCard {...reviews[index]} />
              </div>
            );
          })}
        </div>
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Reviews;