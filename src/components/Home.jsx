import React from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaJava, 
  FaReact, 
  FaJs, 
  FaCss3, 
  FaPython, 
  FaNodeJs, 
  FaHtml5, 
  FaMicrosoft, 
  FaUnity,
  FaArrowDown 
} from "react-icons/fa";
import { SiVite, SiTailwindcss } from "react-icons/si";

const Home = () => {
  const skills = [
    { icon: <FaUnity />, name: "Unity", color: "text-gray-300", hoverColor: "text-white" },
    { icon: <FaJava />, name: "Java", color: "text-red-500", hoverColor: "text-red-400" },
    { icon: <FaPython />, name: "Python", color: "text-blue-400", hoverColor: "text-blue-300" },
    { icon: <FaReact />, name: "React", color: "text-cyan-400", hoverColor: "text-cyan-300" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400", hoverColor: "text-yellow-300" },
    { icon: <FaCss3 />, name: "CSS", color: "text-blue-500", hoverColor: "text-blue-400" },
    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500", hoverColor: "text-orange-400" },
    { icon: <FaMicrosoft />, name: "C#", color: "text-green-500", hoverColor: "text-green-400" },
    { icon: <SiVite />, name: "Vite", color: "text-purple-500", hoverColor: "text-purple-400" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400", hoverColor: "text-cyan-300" }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-gray-800/70">
      <div className='text-white text-center w-full py-16 px-4 max-w-6xl mx-auto'>
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500'>
              Derman Cetinalp
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Student & Full-Stack Developer
          </h2>

          <div className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto space-y-4">
            <p>
              Pursuing a Bachelor's Degree in Computer Science at York University.
            </p>
            <p>
              Passionate about building full-stack applications and learning new technologies.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/derman-cetinalp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-5xl md:text-6xl text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dse188"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-5xl md:text-6xl text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        {/* Skills Section */}
        <div className='mt-20'>
          <h1 className='text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500'>
            My Skills
          </h1>

          <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
            {skills.map((skill, index) => (
              <div key={index} className="group relative">
                <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm
                  border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-lg">
                  <div className={`text-5xl md:text-6xl ${skill.color} group-hover:${skill.hoverColor} transition-colors`}>
                    {skill.icon}
                  </div>
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                  bg-gray-900/90 text-white text-xs py-1 px-2 rounded opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
                  border border-white/20 shadow-md"
                >
                  {skill.name}
                </span> 
              </div>
            ))}
          </div>
        </div>

        {/* About Me Button */}
        <div className="mt-16">
          <button
            onClick={scrollToAbout}
            className="flex items-center justify-center mx-auto gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span>Learn More About Me</span>
            <FaArrowDown className="animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;