import React from 'react';
import HeroImage from '../assets/hero-image.jpg';

const AboutMe = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12" id="about">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 mb-12">
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <img 
            src={HeroImage} 
            alt="Derman Cetinalp" 
            className="w-full max-w-md mx-auto rounded-lg shadow-xl object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex-1 space-y-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">My Passion for Development</h2>
            <p className="text-gray-300 leading-relaxed">
            I'm a developer who is totally dedicated to lifelong learning and flourishes
             where creativity and problem-solving meet. The chance to create sophisticated 
             solutions that improve the ease and intuitiveness of daily life is what most 
             excites me about this line of work. Whether it's streamlining processes, 
             optimizing code, or figuring out the best way to tackle a problem, 
             I'm naturally motivated to improve. I take pride in my ability to quickly 
             adapt and apply new concepts to create solutions that are both thoughtfully 
             crafted and functional, and the constant evolution of technology keeps me motivated.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Beyond Coding</h2>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me playing video games 
              (which constantly inspire my approach to UX and problem-solving), lifting weights 
              to stay sharp, or exploring local cafés during walks—because the best ideas often 
              come when you step away from the screen. I've found that maintaining these diverse 
              interests doesn't just make life richer; it helps me bring fresh perspectives to 
              my work as a developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;