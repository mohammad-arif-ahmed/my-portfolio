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

    // বাটন ক্লিক করার সাথে সাথে ইনস্ট্যান্ট লোডিং টোস্ট দেখাবে
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
          // লোডিং টোস্টটিকে মূহুর্তের মধ্যে সাকসেস টোস্টে পরিবর্তন করবে
          toast.success("Message sent successfully!", {
            id: loadingToast,
            duration: 3000, // ৩ সেকেন্ড পর নিজে নিজেই চলে যাবে
            icon: "✅",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error);
          // ব্যর্থ হলে লোডিং টোস্টটি এরর টোস্টে কনভার্ট হবে
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
              className="w-full p-4 rounded-xl bg-transparent border border-slate-700 outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-transparent border border-slate-700 outline-none focus:border-blue-500 transition"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-transparent border border-slate-700 outline-none resize-none focus:border-blue-500 transition"
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
                active:scale-[0.98]
                duration-300
                shadow-lg
                shadow-blue-500/20
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