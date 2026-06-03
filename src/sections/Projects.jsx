import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import ProjectModal from "../components/ProjectModal";

import swiftcart from "../assets/images/projects/swiftcart.png";
import learninghub from "../assets/images/projects/learninghub.png";
import heroGallery from "../assets/images/projects/hero-gallery.png";
import contestHub from "../assets/images/projects/contest.png";

const projects = [
 {
    title: "SwiftCart E-Commerce",
    category: "Web Development",
    image: swiftcart, 
    live: "https://your-live-link.com", 
    github: "https://github.com/mohammad-arif-ahmed/your-repo-name", 
    tech: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
    ],
    description:
      "A fully responsive e-commerce web application inspired by platforms like Daraz, featuring dynamic product grids, category filtering, and an interactive shopping cart system.",
  },

  {
    title: "Online Learning Hub",
    category: "Web Development",
    image: learninghub,
    live: "https://online-learning-platform-08.netlify.app/",
    github: "https://github.com/mohammad-arif-ahmed/Assignment-Projects-10-Client.git",
    tech: [
      "React",
      "Tailwind CSS",
      "Firebase",
    ],
    description:
      "Online learning platform with authentication, course management and responsive UI.",
  },

  {
    title: "Hero App Gallery",
    category: "Web Development",
    image: heroGallery,
    live: "https://frabjous-mousse-b52ae6.netlify.app/",
    github: "https://github.com/mohammad-arif-ahmed/Assignment-Projects-8.git",
    tech: [
      "React",
      "JavaScript",
      "CSS",
    ],
    description:
      "Interactive hero gallery showcasing heroes with responsive design and modern UI.",
  },

 {
    title: "ContestHub",
    category: "Web Development",
    image: contestHub, 
    live: "https://your-live-link.com", 
    github: "https://github.com/mohammad-arif-ahmed/your-repo-name", 
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    description:
      "A dynamic contest management platform where users can discover, participate, and manage various online contests with real-time updates.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24"
    >
      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          My Projects
        </h2>

        <p className="text-slate-500 mt-4">
          Some of my featured web development projects
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="
            overflow-hidden
            rounded-2xl
            border border-slate-700
            hover:border-blue-500
            duration-300
            group
            "
          >
            {/* Project Image */}

            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-60
                object-cover
                group-hover:scale-105
                duration-500
                "
              />
            </div>

            {/* Content */}

            <div className="p-6">

              <span
                className="
                inline-block
                px-3 py-1
                rounded-full
                bg-blue-500/10
                text-blue-500
                text-sm
                mb-4
                "
              >
                {project.category}
              </span>

              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-500 mb-6">
                {project.description}
              </p>

              {/* Buttons */}

              <div className="flex flex-wrap gap-3">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  "
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  border border-slate-600
                  hover:border-blue-500
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="
                mt-5
                text-blue-500
                hover:text-blue-400
                font-medium
                "
              >
                View Details →
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Modal */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;