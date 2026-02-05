import React, { useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import PopupMessage from "./PopupMessage";

const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ctcse8x",
        "template_rymvarw",
        form.current,
        "m74UMco8sBiKa_oxz"
      )
      .then(() => {
        setPopup({ type: "success", message: "✅ Transmission successful." });
        form.current.reset();
        setTimeout(() => setPopup(null), 4000);
      })
      .catch(() => {
        setPopup({ type: "error", message: "❌ Transmission failed." });
        setTimeout(() => setPopup(null), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="relative px-6 sm:px-20 py-24 overflow-hidden"
    >
      {/* Ambient AI glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <h2 className="text-center text-3xl sm:text-4xl font-bold text-cyan-400 uppercase tracking-widest mb-14">
        Get In Touch
      </h2>

      <div className="relative flex flex-col lg:flex-row justify-between gap-14 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <h3 className="text-xl font-semibold text-white">
            Initiate Collaboration
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Have an idea, system, or challenge in mind?  
            Let’s connect and build something intelligent together.
          </p>

          <div className="flex items-center gap-3 text-cyan-300">
            <FiMail />
            <span>funclexa.app@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-cyan-300">
            <FiPhone />
            <span>+91 9122189160</span>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="flex-1 relative
                     bg-gradient-to-br from-white/10 to-white/5
                     backdrop-blur-xl
                     border border-cyan-400/30
                     p-8 rounded-2xl
                     shadow-[0_0_40px_rgba(0,234,255,0.15)]"
        >
          {/* AI scan line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-white/80">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full mt-1 p-3 rounded-lg
                           bg-black/40 border border-white/20
                           text-white outline-none
                           focus:border-cyan-400/60"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/80">
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                required
                className="w-full mt-1 p-3 rounded-lg
                           bg-black/40 border border-white/20
                           text-white outline-none
                           focus:border-cyan-400/60"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-white/80">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full mt-1 p-3 h-32 rounded-lg
                           bg-black/40 border border-white/20
                           text-white outline-none resize-none
                           focus:border-cyan-400/60"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl
                         uppercase tracking-widest text-sm
                         bg-gradient-to-r from-cyan-500 to-blue-500
                         hover:shadow-[0_0_30px_rgba(0,234,255,0.6)]
                         transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {popup && <PopupMessage type={popup.type} message={popup.message} />}
    </section>
  );
};

export default Contact;
