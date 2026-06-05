import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      border-t
      border-slate-700
      mt-10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        "
      >
        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          "
        >
          <div>
            <h3 className="text-2xl font-bold">
              Md. Arif
            </h3>

            <p className="text-slate-500 mt-2">
              IT Executive | Web Developer
            </p>
          </div>

          {/* সোশ্যাল মিডিয়া লিংক সেকশন */}
          <div className="flex gap-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1HwGkskm2A/" 
              target="_blank"
              rel="noreferrer"
              className="
              p-3
              rounded-full
              border border-slate-700
              hover:border-blue-500
              text-slate-400
              hover:text-blue-500
              transition
              duration-300
              "
            >
              <FaFacebook size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/md-arif-ahmed-1a7a83371/" 
              target="_blank"
              rel="noreferrer"
              className="
              p-3
              rounded-full
              border border-slate-700
              hover:border-blue-500
              text-slate-400
              hover:text-blue-500
              transition
              duration-300
              "
            >
              <FaLinkedin size={20} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mohammad-arif-ahmed" 
              target="_blank"
              rel="noreferrer"
              className="
              p-3
              rounded-full
              border border-slate-700
              hover:border-blue-500
              text-slate-400
              hover:text-blue-500
              transition
              duration-300
              "
            >
              <FaGithub size={20} />
            </a>

          </div>
        </div>

        <div
          className="
          text-center
          mt-8
          text-slate-500
          "
        >
          © 2026 Md. Arif. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;