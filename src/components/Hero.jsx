import React from 'react'
import HeroImage from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className=' text-white text-center  w-full py-16 '>
        <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105'></img>
        <h1 className='text-3xl font-bold'>
            Hi, I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400'>Derman Cetinalp</span>
            , Full-Stack Developer
        </h1>
        <div className="text-xl ">
          <p className='mt-4 text-gray-300'>
              Pursuing a Bachelor's Degree in Computer Science at York University.
          </p>
          <p className='mt-4 text-gray-300'>
              I specialize in building modern and responsive web applications.
          </p>
        </div>

        
    </div>
  )
}
/*
This goes below the <p></p>
<div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-gray-700 via-indigo-800 to-gray-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button 
            className='bg-gradient-to-r from-gray-700 to-indigo-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
*/

export default Hero