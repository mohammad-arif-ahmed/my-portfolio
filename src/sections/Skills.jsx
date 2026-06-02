import FadeIn from "../components/FadeIn";
import {
  FaNetworkWired,
  FaTools,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaNetworkWired size={30} />,
      title: "Networking",
      description: "LAN, WAN, Routing & Switching",
    },
    {
      icon: <FaServer size={30} />,
      title: "MikroTik",
      description: "Router Configuration & Maintenance",
    },
    {
      icon: <FaTools size={30} />,
      title: "Hardware",
      description: "PC Troubleshooting & Maintenance",
    },
    {
      icon: <FaHtml5 size={30} />,
      title: "HTML5",
      description: "Modern Semantic Structure",
    },
    {
      icon: <FaCss3Alt size={30} />,
      title: "CSS & Tailwind",
      description: "Responsive UI Design",
    },
    {
      icon: <FaReact size={30} />,
      title: "React",
      description: "Component Based Development",
    },
    {
      icon: <FaJs size={30} />,
      title: "JavaScript",
      description: "Frontend Logic & Interactivity",
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Skills & Expertise
        </h2>

        <p className="text-slate-500 mt-4">
          Technologies and services I work with
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          /* ১. map এর ঠিক পরেই FadeIn শুরু এবং এখানে key ও delay সেট করা হয়েছে */
          <FadeIn key={index} delay={index * 0.1}>
            
            <div
              className="
              p-6
              rounded-2xl
              border border-slate-700
              hover:border-blue-500
              hover:-translate-y-2
              duration-300
              h-full
              "
            >
              <div className="text-blue-500 mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {skill.title}
              </h3>

              <p className="text-slate-500">
                {skill.description}
              </p>
            </div>

          </FadeIn> /* ২. এখানে FadeIn শেষ হয়েছে */
        ))}
      </div>
    </section>
  );
};

export default Skills;