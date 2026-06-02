import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
      relative
      w-16
      h-8
      rounded-full
      bg-slate-700
      dark:bg-blue-600
      transition-all
      duration-300
      "
    >
      <span
        className={`
          absolute top-1
          w-6 h-6
          bg-white
          rounded-full
          flex items-center justify-center
          text-xs
          transition-all duration-300
          ${
            darkMode
              ? "translate-x-8"
              : "translate-x-1"
          }
        `}
      >
        {darkMode ? <FaMoon /> : <FaSun />}
      </span>
    </button>
  );
};

export default ThemeToggle;