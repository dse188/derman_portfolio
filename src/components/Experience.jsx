import React from 'react';
import { FaUnity, FaCodeBranch, FaChartLine, FaUsers } from 'react-icons/fa';

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
                Contributed to the development of Twenty Ninety Creative's Dead Flamingo, implementing new gameplay mechanics
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-400 mt-1 mr-4">
              <FaChartLine className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Market Research</h4>
              <p className="text-gray-300">
                Conducted market research by analyzing trends to shape Dead Flamingo's features
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-400 mt-1 mr-4">
              <FaCodeBranch className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Rapid Prototyping</h4>
              <p className="text-gray-300">
                Contributed to the development of undisclosed vertical slice projects with emphasis on rapid prototyping and testing in Unity
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-400 mt-1 mr-4">
              <FaUsers className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Agile Development</h4>
              <p className="text-gray-300">
                Actively engaged in Scrum meetings to coordinate tasks, track progress, identify problems and strategize for efficient development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;