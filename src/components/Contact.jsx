import React, { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import PopupMessage from "./PopupMessage";

const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_ctcse8x",
        "template_rymvarw",
        form.current,
        "m74UMco8sBiKa_oxz"
      )
      .then(() => {
        setPopup({ type: "success", message: "✅ Message sent successfully!" });
        form.current.reset();
        setSending(false);
        setTimeout(() => setPopup(null), 4000);
      })
      .catch(() => {
        setPopup({ type: "error", message: "❌ Failed to send message." });
        setSending(false);
        setTimeout(() => setPopup(null), 4000);
      });
  };

  const contactInfo = [
    { icon: <FiMail />, label: "Email", value: "funclexa.app@gmail.com", href: "mailto:funclexa.app@gmail.com" },
    { icon: <FiPhone />, label: "Phone", value: "+91 9122189160", href: "tel:+919122189160" },
    { icon: <FiMapPin />, label: "Location", value: "India", href: null },
  ];

  const socials = [
    { icon: <FiGithub />, href: "https://github.com/ansarisultan", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/SultanSAnsari", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">// Contact</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Have an idea, system, or challenge? Let's build something intelligent together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left Info — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href || "#"}
                  className="group flex items-center gap-4 p-4 rounded-xl
                             border border-white/[0.06] bg-white/[0.02]
                             hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]
                             transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 
                                  flex items-center justify-center text-cyan-400
                                  group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider">{item.label}</p>
                    <p className="text-white/70 text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/30 text-xs font-mono uppercase tracking-wider mb-4">Social</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-white/[0.06] bg-white/[0.02]
                               flex items-center justify-center text-white/50
                               hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5
                               hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]
                               transition-all duration-300"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Available for work</span>
              </div>
              <p className="text-white/30 text-xs leading-relaxed">
                Open to freelance projects, collaborations, and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Right Form — 3 cols */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-2 block">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm
                                 outline-none placeholder:text-white/20
                                 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]
                                 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-2 block">Email</label>
                    <input
                      type="email"
                      name="reply_to"
                      required
                      className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm
                                 outline-none placeholder:text-white/20
                                 focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]
                                 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-2 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm
                               outline-none resize-none placeholder:text-white/20
                               focus:border-cyan-400/40 focus:bg-cyan-400/[0.02]
                               transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-sm uppercase tracking-widest
                             bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                             hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]
                             disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-500"
                >
                  <FiSend className={sending ? "animate-bounce" : ""} />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Popup */}
        {popup && <PopupMessage type={popup.type} message={popup.message} />}
      </div>
    </section>
  );
};

export default Contact;
