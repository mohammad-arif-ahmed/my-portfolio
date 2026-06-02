import { useState } from "react";
import { FaBars, FaTimes, FaPaperPlane } from "react-icons/fa";

import logo from "../assets/icons/logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Gallery", path: "#gallery" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className="
      sticky top-0 z-50
      backdrop-blur-md
      bg-white/80
      dark:bg-slate-950/80
      border-b
      border-slate-200
      dark:border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="font-bold text-xl">
                Arif Portfolio
              </h1>

              <p className="text-xs text-blue-500">
                IT Executive
              </p>
            </div>

          </div>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex gap-8 font-medium">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="
                  hover:text-blue-500
                  duration-300
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Hire Me Link Button */}
            <a
              href="#contact"
              className="
              hidden md:flex
              group
              items-center
              gap-2
              px-6 py-3
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              hover:scale-105
              duration-300
              shadow-lg
              shadow-blue-500/30
              text-white
              font-semibold
              "
            >
              Hire Me

              <FaPaperPlane
                className="
                group-hover:translate-x-1
                duration-300
                "
              />
            </a>

          </div>

        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div
            className="
            lg:hidden
            mt-4
            border-t
            border-slate-700
            pt-4
            "
          >
            <ul className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="
                    block
                    hover:text-blue-500
                    duration-300
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;