import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5iwj5bi",
        "template_g21kx1q",
        form.current,
        "KTaSNsfJsyJ8NIJoR"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

        <p className="text-slate-500 dark:text-slate-400">
          Let's discuss your project or IT requirements
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Info */}

        <div className="p-8 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-semibold mb-8">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <span>mohammad.arif.ahmed.08@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-500 text-xl" />
              <span>+8801971556104</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <span>Keraniganj, Dhaka - 1312</span>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:border-blue-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:border-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:border-blue-500 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Contact Form */}

        <div className="p-8 rounded-2xl border border-slate-700">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-transparent border border-slate-700 outline-none"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-transparent border border-slate-700 outline-none"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-transparent border border-slate-700 outline-none resize-none"
            />

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                font-semibold
                hover:scale-[1.02]
                duration-300
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;