import React from 'react';
import Bg from '../../assets/Bg.png';
import Vbg from '../../assets/Vbg.png';
import Sbg from '../../assets/Sbg.png';
import './Team.css'; // Import your CSS file where you define styles

function Team() {
  return (
    <div className='flex flex-col justify-center items-center mt-24'>
      <div className='text-2xl inconsolataFontFamily text-white md:4xl'>MEET THE TEAM</div>
      <div className='flex flex-col justify-center gap-y-1 text-white text-4xl font-bold mt-5 md:5xl'>
        <div className='text-center'>The Minds Behind DSA&DEV</div>
        <div className='text-center'></div>
      </div>

      <div className='team-images-container'>
        <div>
          <div className='team-image'>
            <img src={Bg} alt="Bg" />
          </div>
          <h3 className='text-white flex justify-center text-xl inconsolataFontFamily'>Karan Wagh</h3>
        </div>
        <div>
          <div className='team-image'>
            <img src={Vbg} alt="Vbg" />
          </div>
          <h3 className='text-white flex justify-center text-xl inconsolataFontFamily'>Vaishnavi Sirimalla</h3>
        </div>
        <div>
          <div className='team-image'>
            <img src={Sbg} alt="Sbg" />
          </div>
          <h3 className='text-white flex justify-center text-xl inconsolataFontFamily'>Sanjay Sargam</h3>
        </div>
      </div>
    </div>


  );
}

export default Team;
