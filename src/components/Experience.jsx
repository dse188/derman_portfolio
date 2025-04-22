import React from 'react';
import { FaUnity, FaRocket, FaUsers, FaChartLine, FaCode } from 'react-icons/fa';

const Experience = () => {
  return (
    <div id="experience" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
        Work Experience
      </h2>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Twenty Ninety Creative</h3>
            <p className="text-gray-300">Software Developer Intern</p>
          </div>
          <div className="mt-2 md:mt-0">
            <p className="text-blue-300 font-medium">Sep 2023 – Apr 2024</p>
            <p className="text-gray-400">Toronto, ON</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="text-blue-400 mt-1 mr-4">
              <FaUnity className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Game Development</h4>
              <p className="text-gray-300">
                Developed gameplay systems for "Dead Flamingo" using Unity and C#, focusing on player mechanics and enemy AI
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-400 mt-1 mr-4">
              <FaRocket className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Rapid Prototyping</h4>
              <p className="text-gray-300">
                Created multiple vertical slice prototypes, iterating quickly based on playtesting feedback and technical constraints
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-400 mt-1 mr-4">
              <FaChartLine className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Data-Driven Design</h4>
              <p className="text-gray-300">
                Conducted market analysis and player research to inform feature development, balancing creative vision with market trends
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-400 mt-1 mr-4">
              <FaUsers className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Agile Collaboration</h4>
              <p className="text-gray-300">
                Participated in daily scrums and sprint planning, adapting development priorities based on team feedback and production needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;