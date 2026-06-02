import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white duration-300">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Gallery />
      <Projects />
      <Contact />
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <a
        href="https://wa.me/8801616188734"
        target="_blank"
        rel="noreferrer"
        className="
  fixed
  bottom-6
  right-6
  z-50
  bg-green-500
  text-white
  p-4
  rounded-full
  shadow-lg
  hover:scale-110
  duration-300
  "
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

export default App;