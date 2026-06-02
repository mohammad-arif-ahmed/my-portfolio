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

          <div className="flex gap-4">

            <a
              href="#"
              className="
              p-3
              rounded-full
              border border-slate-700
              hover:border-blue-500
              "
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="
              p-3
              rounded-full
              border border-slate-700
              hover:border-blue-500
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="
              p-3
              rounded-full
              border border-slate-700
              hover:border-blue-500
              "
            >
              <FaGithub />
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