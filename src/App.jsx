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

      {/* --- অ্যানিমেটেড হোয়াটসঅ্যাপ বাটন শুরু --- */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        
        {/* লেজার গ্লোয়িং ইফেক্ট ১ (বাইরের রিং) */}
        <span className="absolute inline-flex h-16 w-16 animate-ping rounded-full bg-green-500 opacity-40"></span>
        
        {/* লেজার গ্লোয়িং ইফেক্ট ২ (ভেতরের রিং যা একটু দ্রুত পালস করবে) */}
        <span className="absolute inline-flex h-14 w-14 animate-pulse rounded-full bg-green-400 opacity-60 blur-[2px]"></span>

        {/* মূল হোয়াটসঅ্যাপ বাটন */}
        <a
          href="https://wa.me/8801616188734"
          target="_blank"
          rel="noreferrer"
          className="
            relative
            flex
            items-center
            justify-center
            bg-green-500
            text-white
            p-4
            rounded-full
            shadow-[0_0_20px_rgba(34,197,94,0.6)] /* সবুজ লেজার গ্লো শ্যাডো */
            hover:shadow-[0_0_30px_rgba(34,197,94,0.9)]
            hover:bg-green-600
            hover:scale-110
            active:scale-95
            duration-300
            cursor-pointer
          "
        >
          <FaWhatsapp size={28} className="animate-bounce [animation-duration:3s]" />
        </a>
      </div>
      {/* --- অ্যানিমেটেড হোয়াটসঅ্যাপ বাটন শেষ --- */}

    </div>
  );
}

export default App;