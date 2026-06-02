import profile from "../assets/images/profile.jpg";
import HeroGallery from "../sections/HeroGallery";
import { FaPaperPlane, FaDownload } from "react-icons/fa";
/* ১. framer-motion থেকে motion ইম্পোর্ট করা হয়েছে */
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="text-center lg:text-left">

          <p className="text-blue-500 font-medium mb-3 text-sm sm:text-base">
            Welcome To My Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
            Md. <span className="text-blue-500">Arif</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
            IT Executive | Networking & Web Development
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-7 sm:leading-8 mb-8 max-w-xl mx-auto lg:mx-0">
            Experienced in Computer Hardware Troubleshooting,
            Networking, MikroTik Maintenance, CCTV Installation
            and IT Support. Currently learning modern Web
            Development and building responsive web applications.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 mb-8">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-blue-500 whitespace-nowrap">
              IT Support
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-blue-500 whitespace-nowrap">
              Networking
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-blue-500 whitespace-nowrap">
              MikroTik
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-blue-500 whitespace-nowrap">
              CCTV
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border border-blue-500 whitespace-nowrap">
              Web Development
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#contact"
              className="
  group
  flex-1 sm:flex-none
  flex items-center justify-center gap-2
  px-6 sm:px-8 py-3
  rounded-xl
  bg-gradient-to-r
  from-blue-600
  to-cyan-500
  text-white
  font-semibold
  hover:scale-105
  duration-300
  shadow-lg
  shadow-blue-500/30
  text-sm sm:text-base
  "
            >
              <FaPaperPlane className="group-hover:translate-x-1 duration-300" />
              Hire Me
            </a>

            <a
              href="/cv.pdf"
              download
              className="
  flex-1 sm:flex-none
  flex items-center justify-center gap-2
  px-6 sm:px-8 py-3
  rounded-xl
  border border-blue-500
  hover:bg-blue-500
  hover:text-white
  duration-300
  text-sm sm:text-base
  "
            >
              <FaDownload />
              Download CV
            </a>

          </div>

          {/* Profile Card */}
          {/* ২. সাধারণ div-কে পরিবর্তন করে motion.div করা হয়েছে এবং অ্যানিমেশন প্রোপস যুক্ত করা হয়েছে */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            flex items-center gap-4
            p-4
            rounded-2xl
            border border-slate-700
            max-w-sm
            mx-auto lg:mx-0
            text-left
            "
          >
            <img
              src={profile}
              alt="Profile"
              className="
              w-14 h-14 sm:w-16 sm:h-16
              rounded-full
              object-cover
              border-2 border-blue-500
              "
            />

            <div>
              <h3 className="font-semibold text-sm sm:text-base">
                Md. Arif
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                IT Executive
              </p>
            </div>
          </motion.div> {/* ৩. এখানে motion.div ক্লোজ করা হয়েছে */}

        </div>

        {/* Right Side */}
        <div className="w-full">

          <HeroGallery />

          {/* Service Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">

            <div className="p-3 sm:p-4 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-sm sm:text-base">
                Networking
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                LAN, WAN, MikroTik
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-sm sm:text-base">
                CCTV
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Camera Installation
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-sm sm:text-base">
                IT Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                User Assistance
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl border border-slate-700">
              <h3 className="font-semibold text-sm sm:text-base">
                Hardware
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Troubleshooting
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;