import React from 'react'
import AboutImage from '../assets/ZenithSpireThumbnail.png'

const About = () => {
  return (
    <div className='bg-black text-white fixed left-0 right-0 w-full py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4x1 font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt=""
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                <div className="flex-1">
                <p className="text-lg mb-8">
                    I am a passionate full-stack developer with a focus on building
                    modern and responsive web applications, with a strong foundation
                    in both frontend and backend technologies, I strive to create a 
                    seamless and efficient user experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                      HTML & CSS</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                      transform transition-transform duration-300 hover:scale-105 w-10/12">
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                      React JS</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                      transform transition-transform duration-300 hover:scale-105 w-11/12">
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">
                      Node.js</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                      transform transition-transform duration-300 hover:scale-105 w-9/12">
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-700 text-white py-20">
  <h2 className="text-center text-4xl">Next Section</h2>
</div>
    </div>
  )
}

export default About