import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

    const loadingToast = toast.loading("Sending your message...", {
      style: {
        borderRadius: "10px",
        background: "#1e293b",
        color: "#fff",
      },
    });

    emailjs
      .sendForm(
        "service_5iwj5bi",
        "template_g21kx1q",
        form.current,
        "KTaSNsfJsyJ8NIJoR"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            id: loadingToast,
            duration: 3000,
            icon: "✅",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send message. Try again!", {
            id: loadingToast,
            duration: 3000,
            icon: "❌",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h2>

        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Let's discuss your project or IT requirements
        </p>
      </div>

      {/* রেসপন্সিভ গ্রিড: ডিফল্টভাবে ১ কলাম (মোবাইল), বড় স্ক্রিনে ২ কলাম */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        
        {/* Contact Info */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-transparent">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
            Contact Information
          </h3>

          <div className="space-y-5 sm:space-y-6 text-sm sm:text-base break-all">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-lg sm:text-xl flex-shrink-0" />
              <span>mohammad.arif.ahmed.08@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-500 text-lg sm:text-xl flex-shrink-0" />
              <span>+8801971556104</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-lg sm:text-xl flex-shrink-0" />
              <span>Keraniganj, Dhaka - 1312</span>
            </div>
          </div>

          {/* সোশ্যাল মিডিয়া লিংক */}
          <div className="flex gap-4 mt-8 sm:mt-10">
            <a
              href="https://www.facebook.com/share/1HwGkskm2A/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:border-blue-500 text-slate-400 hover:text-blue-500 transition duration-300"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/md-arif-ahmed-1a7a83371/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:border-blue-500 text-slate-400 hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/mohammad-arif-ahmed"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-700 hover:border-blue-500 text-slate-400 hover:text-blue-500 transition duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-transparent">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 sm:space-y-5"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-xl bg-transparent border border-slate-700 outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-xl bg-transparent border border-slate-700 outline-none focus:border-blue-500 transition"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-xl bg-transparent border border-slate-700 outline-none resize-none focus:border-blue-500 transition"
            />

            <button
              type="submit"
              className="
                w-full
                py-3
                sm:py-4
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                text-sm
                sm:text-base
                font-semibold
                hover:scale-[1.01]
                active:scale-[0.99]
                duration-300
                shadow-lg
                shadow-blue-500/10
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