import FadeIn from "../components/FadeIn";
import logo from "../assets/icons/logo.png";

const About = () => {
  return (
    <FadeIn>
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            About Me
          </h2>

          <p className="text-slate-500 mt-4">
            My professional journey and skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}

          <div className="flex justify-center">
            <div
              className="
              p-4
              rounded-full
              border-4 border-blue-500
              shadow-lg shadow-blue-500/20
              "
            >
              <img
                src={logo}
                alt="Arif Logo"
                className="
                w-64
                h-64
                object-cover
                rounded-full
                "
              />
            </div>
          </div>

          {/* Right Side */}

          <div>
            <h3 className="text-3xl font-bold mb-6">
              IT Executive & Web Development Learner
            </h3>

            <p className="text-slate-400 leading-8 mb-6">
              I am working as an IT Executive with practical experience in
              Computer Hardware Troubleshooting, Networking, CCTV Installation,
              MikroTik Configuration and IT Support.
            </p>

            <p className="text-slate-400 leading-8">
              Alongside my professional IT career, I am learning modern web
              development using React, JavaScript, Tailwind CSS, Firebase,
              Node.js and MongoDB to build modern web applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-blue-500 text-xl">
                  3+
                </h4>
                <p className="text-sm text-slate-500">
                  Years IT Experience
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-blue-500 text-xl">
                  11+
                </h4>
                <p className="text-sm text-slate-500">
                  Web Projects
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default About;