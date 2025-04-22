import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaCode } from 'react-icons/fa';

const HeadBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "projects", label: "Projects", icon: <FaCode /> }
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center md:justify-between items-center py-3">
          {/* Logo/Name - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Derman Cetinalp
            </span>
          </div>
          
          {/* Navigation */}
          <div className="flex gap-6 md:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <span className="text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </span>
                <span className="text-sm md:text-base font-medium">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;