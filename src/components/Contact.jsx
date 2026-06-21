import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
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
      .sendForm("service_ctcse8x", "template_rymvarw", form.current, "m74UMco8sBiKa_oxz")
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
    { icon: FiMail, label: "Email", value: "funclexa.app@gmail.com", href: "mailto:funclexa.app@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "+91 9122189160", href: "tel:+919122189160" },
    { icon: FiMapPin, label: "Location", value: "India", href: null },
  ];

  const socials = [
    { icon: FiGithub, href: "https://github.com/ansarisultan", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/SultanSAnsari", label: "LinkedIn" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/[0.03] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}>
          <p className="text-cyan-400/60 font-mono text-[11px] tracking-[0.3em] uppercase mb-4">
            <span className="text-white/20">{'// '}</span>Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-white mb-5 tracking-tight">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-white/35 text-[15px] sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            Have an idea, system, or challenge? Let's build something intelligent together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.div className="lg:col-span-2 space-y-6"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}>
            <div className="space-y-3">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a key={i} href={item.href || "#"}
                    className="group flex items-center gap-4 p-4 rounded-xl
                               border border-white/[0.05] bg-white/[0.015]
                               hover:border-cyan-400/15 hover:bg-white/[0.03] transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/[0.06] border border-cyan-400/10
                                    flex items-center justify-center text-cyan-400/60
                                    group-hover:text-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.15)] transition-all duration-300">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="text-white/20 text-[9px] font-mono uppercase tracking-[0.15em]">{item.label}</p>
                      <p className="text-white/60 text-sm font-medium">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div>
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.15em] mb-3">Social</p>
              <div className="flex gap-2.5">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                      className="w-10 h-10 rounded-xl border border-white/[0.05] bg-white/[0.015]
                                 flex items-center justify-center text-white/35
                                 hover:border-cyan-400/20 hover:text-cyan-400 hover:bg-cyan-400/[0.04]
                                 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-300">
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.015]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-400/80 text-[10px] font-semibold uppercase tracking-[0.12em]">Available for work</span>
              </div>
              <p className="text-white/25 text-xs leading-relaxed">
                Open to freelance projects, collaborations, and full-time opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}>
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.015]">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/25 text-[10px] font-mono uppercase tracking-[0.15em] mb-2 block">Name</label>
                    <input type="text" name="from_name" required
                      className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white text-sm
                                 outline-none placeholder:text-white/15
                                 focus:border-cyan-400/25 focus:bg-cyan-400/[0.015] focus:shadow-[0_0_15px_rgba(34,211,238,0.05)]
                                 transition-all duration-300"
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-white/25 text-[10px] font-mono uppercase tracking-[0.15em] mb-2 block">Email</label>
                    <input type="email" name="reply_to" required
                      className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white text-sm
                                 outline-none placeholder:text-white/15
                                 focus:border-cyan-400/25 focus:bg-cyan-400/[0.015] focus:shadow-[0_0_15px_rgba(34,211,238,0.05)]
                                 transition-all duration-300"
                      placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="text-white/25 text-[10px] font-mono uppercase tracking-[0.15em] mb-2 block">Message</label>
                  <textarea name="message" required rows={5}
                    className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white text-sm
                               outline-none resize-none placeholder:text-white/15
                               focus:border-cyan-400/25 focus:bg-cyan-400/[0.015] focus:shadow-[0_0_15px_rgba(34,211,238,0.05)]
                               transition-all duration-300"
                    placeholder="Tell me about your project..." />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-[12px] uppercase tracking-[0.1em]
                             bg-gradient-to-r from-cyan-500 to-blue-600 text-white btn-shine
                             hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                             disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-500">
                  <FiSend size={13} className={sending ? "animate-bounce" : ""} />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {popup && <PopupMessage type={popup.type} message={popup.message} />}
      </div>
    </section>
  );
};

export default Contact;
