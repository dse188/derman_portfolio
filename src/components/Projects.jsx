import React from "react";
import ZenithSpire from "../assets/ZenithSpireThumbnail.png";
import NeonVendetta from "../assets/NeonVendetta.png";
import FitLog from "../assets/FitLogThumbnail.png";
import UniversitySim from "../assets/UniversitySim.png";
import PersonalPortfolio from "../assets/DC_Portfolio.png";
import {
  FaGamepad,
  FaCode,
  FaObjectGroup,
  FaCogs,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  features,
  image,
  imagePosition = "left",
  projectLink, // New prop for project URL
}) => {
  return (
    <div
      className={`group mt-12 flex flex-col ${
        imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8`}
    >
      {/* Image Section - Now clickable */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-md group-hover:blur-lg transition-all duration-500 -z-10"></div>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group"
        >
          <img
            src={image}
            alt={title}
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/20 border-2 border-white/10 hover:border-blue-400/30 object-cover aspect-video"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-xl flex items-center justify-center transition-opacity duration-300">
            <div className="flex items-center gap-2 text-white text-lg font-medium">
              View Project <FaExternalLinkAlt className="text-sm" />
            </div>
          </div>
        </a>
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-400/20 transition-all duration-300">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            {title.includes("(In Development)") ? (
              <>
                {title.replace("(In Development)", "")}
                <span className="text-xl"> (In Development)</span>
              </>
            ) : (
              title
            )}
          </h2>
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              aria-label={`View ${title} project`}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
        <p className="text-xl text-gray-300 mb-6 mt-2">{description}</p>

        <h3 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
          <FaGamepad className="text-blue-400" />
          Project Highlights:
        </h3>
        <ul className="space-y-4 text-left">
          {features.map((feature, index) => (
            <li key={index} className="text-lg text-gray-300 flex items-start">
              <span className="text-blue-400 mr-3 mt-1">
                {index % 4 === 0 ? (
                  <FaCode />
                ) : index % 4 === 1 ? (
                  <FaObjectGroup />
                ) : index % 4 === 2 ? (
                  <FaCogs />
                ) : (
                  <FaGamepad />
                )}
              </span>
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "FitLog",
      description:
        "A comprehensive fitness tracking app that allows users to log workouts, track progress, and set fitness goals. Built with React Native and Firebase.",
      image: FitLog,
      projectLink: "https://fitlogdc.netlify.app/",
      features: [
        "Utilizes <strong class='text-blue-400'>React Native</strong> for cross-platform compatibility",
        "Integrates <strong class='text-blue-400'>Firebase</strong> for real-time data storage",
        "Features a <strong class='text-blue-400'>user-friendly interface</strong> with intuitive navigation",
        "Includes a <strong class='text-blue-400'>custom workout tracker</strong> with progress visualization",
      ],
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS for a modern, responsive design.",
      image: PersonalPortfolio,
      projectLink: "https://derman-portfolio.netlify.app/",
      features: [
        "Developed with <strong class='text-blue-400'>React</strong> for dynamic content",
        "Styled using <strong class='text-blue-400'>Tailwind CSS</strong> for a modern look",
        "Includes a <strong class='text-blue-400'>responsive design</strong> for mobile and desktop",
        "Features smooth <strong class='text-blue-400'>scroll animations</strong> and transitions",
      ],
    },
    {
      title: "Neon Vendetta",
      description:
        "A story-driven 2D platformer with meticulously crafted levels where narrative and gameplay intertwine to create an immersive experience.",
      image: NeonVendetta,
      projectLink: "https://mamemor.itch.io/neon-vendetta",
      features: [
        "Emphasis on <strong class='text-blue-400'>complex level design</strong> and storytelling",
        "Integrating <strong class='text-blue-400'>data-driven UI</strong> features",
        "Implementing <strong class='text-blue-400'>unique physics</strong> for movement",
      ],
    },
    {
      title: "Zenith Spire",
      description:
        "A Vampire Survivors-inspired roguelike with procedural enemy swarms, deep ability customization, and chaotic combat—built in Unity with C#.",
      image: ZenithSpire,
      projectLink: "https://dermanc.itch.io/zenith-spire",
      features: [
        "Utilizing <strong class='text-blue-400'>ScriptableObjects</strong> for efficient data management",
        "Applying <strong class='text-blue-400'>C# interfaces</strong> to enhance modularity",
        "Implementing a <strong class='text-blue-400'>custom ability system</strong> for upgrades",
        "Focus on <strong class='text-blue-400'>procedural generation</strong> and dynamic combat",
      ],
    },
    {
      title: "University Simulator (In Development)",
      description:
        "A simulation game where players manage a university, balancing resources, student satisfaction, and academic performance. Developed in Unity.",
      image: UniversitySim,
      projectLink: "https://dermanc.itch.io/university-simulator",
      features: [
        "Features a <strong class='text-blue-400'>dynamic resource management</strong> system",
        "Incorporates <strong class='text-blue-400'>AI-driven student behavior</strong>",
        "Utilizes <strong class='text-blue-400'>Unity's UI system</strong> for interactive dashboards",
        "Focuses on <strong class='text-blue-400'>strategic decision-making</strong> and long-term planning",
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
        My Projects
      </h1>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            imagePosition={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
