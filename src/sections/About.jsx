import FadeIn from "../components/FadeIn";
const About = () => {
  return (
    <FadeIn>
    <section
      id="about"
      className="max-w-7xl
mx-auto
px-6
py-16
scroll-mt-24"
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

        <div>
          <img
            src="/src/assets/icons/logo.png"
            alt="IT Executive"
            className="w-80 mx-auto"
          />
        </div>

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

        </div>
      </div>
    </section>
    </FadeIn>
  );
};

export default About;