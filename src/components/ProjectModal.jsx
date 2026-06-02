import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="
      fixed inset-0 z-[999]
      bg-black/70
      backdrop-blur-sm
      flex items-center justify-center
      p-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        relative
        w-full
        max-w-2xl
        max-h-[90vh]
        overflow-y-auto
        rounded-2xl
        bg-white
        dark:bg-slate-900
        border border-slate-700
        shadow-2xl
        "
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="
          absolute
          top-4
          right-4
          z-50
          w-10
          h-10
          rounded-full
          bg-red-500
          text-white
          flex
          items-center
          justify-center
          hover:bg-red-600
          duration-300
          "
        >
          <FaTimes />
        </button>

        {/* Image */}

        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-56
          object-cover
          "
        />

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

          <h2 className="text-2xl font-bold mb-4">
            {project.title}
          </h2>

          <p className="text-slate-500 mb-6">
            {project.description}
          </p>

          {/* Tech Stack */}

          <h3 className="font-semibold mb-3">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-2 mb-6">

            {project.tech?.map((item, index) => (
              <span
                key={index}
                className="
                px-3 py-1
                rounded-full
                border border-blue-500
                text-sm
                "
              >
                {item}
              </span>
            ))}

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-3">

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
              flex items-center gap-2
              px-4 py-3
              rounded-lg
              bg-blue-600
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
              px-4 py-3
              rounded-lg
              border border-slate-600
              "
            >
              <FaGithub />
              GitHub
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;