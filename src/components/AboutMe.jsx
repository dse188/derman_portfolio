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
              Fully committed to life-long learning, I'm a full-stack developer with a deep passion for 
              JavaScript, React, and modern web development. What excites me most about this field is 
              the perfect blend of creativity and logic - the ability to build beautiful, functional 
              experiences while solving complex problems. I thrive on the constant evolution of 
              technology and the endless opportunities to learn and grow.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Beyond Coding</h2>
            <p className="text-gray-300 leading-relaxed">
              When I'm not at my computer, you'll find me reading tech blogs and science fiction, 
              staying active through weight training and basketball, or unwinding with my guitar. 
              I believe maintaining diverse interests makes me a more balanced developer and 
              brings fresh perspectives to my work. Currently pursuing my Computer Science degree 
              at York University, I'm always looking for new challenges and collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;