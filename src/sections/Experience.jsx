import FadeIn from "../components/FadeIn";
import {
  FaBriefcase,
  FaNetworkWired,
  FaVideo,
  FaTools,
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      icon: <FaBriefcase />,
      title: "IT Executive",
      description:
        "Providing IT support, troubleshooting hardware and software issues, and maintaining office systems.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking",
      description:
        "LAN/WAN setup, cable management, switch configuration, and network maintenance.",
    },
    {
      icon: <FaVideo />,
      title: "CCTV Installation",
      description:
        "Camera setup, DVR/NVR configuration, monitoring and maintenance.",
    },
    {
      icon: <FaTools />,
      title: "Hardware Support",
      description:
        "Computer assembly, repair, upgrades, and troubleshooting.",
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Professional Experience
        </h2>

        <p className="text-slate-500 mt-4">
          My practical IT and technical support experience
        </p>
      </div>

      <div className="relative">

        {/* Vertical Line */}
        <div
          className="
          hidden md:block
          absolute left-1/2
          top-0
          bottom-0
          w-1
          bg-blue-500/30
          -translate-x-1/2
          "
        />

        <div className="space-y-12">
          {experiences.map((item, index) => (
            
            /* ১. ম্যাপের ঠিক পরেই FadeIn শুরু এবং এখানে key ও ছবির নিয়মানুযায়ী delay={index * 0.15} দেওয়া হয়েছে */
            <FadeIn key={index} delay={index * 0.15}>
              
              <div
                className={`
                flex flex-col md:flex-row items-center gap-6
                ${index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                  }
                `}
              >
                <div className="md:w-1/2 w-full">

                  <div
                    className="
                    p-6
                    rounded-2xl
                    border border-slate-700
                    hover:border-blue-500
                    duration-300
                    "
                  >
                    <div className="text-blue-500 text-3xl mb-4">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-semibold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-500">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Timeline Dot */}
                <div
                  className="
                  hidden md:flex
                  w-6 h-6
                  rounded-full
                  bg-blue-500
                  border-4
                  border-slate-950
                  z-10
                  "
                />

                <div className="md:w-1/2 hidden md:block" />
              </div>

            </FadeIn> /* ২. এখানে FadeIn শেষ */
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;