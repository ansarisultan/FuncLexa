import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMic, FiMicOff } from "react-icons/fi";

const AskFLexaRouter = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);
  const stopTimerRef = useRef(null);
  const navigate = useNavigate();

  /* ---------------- SPEECH INIT ---------------- */
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;

    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognition.onstart = () => setListening(true);
    recognition.onresult = (e) => {
      const text = e.results[e.results.length - 1][0].transcript.toLowerCase().trim();
      setTranscript(text);
      handleCommand(text);
      resetAutoStop();
    };
    recognition.onend = () => {
      if (listening) {
        try { recognition.start(); } catch {}
      }
    };
    recognition.onerror = () => stopListening();
    recognitionRef.current = recognition;
    return () => recognition.stop();
  }, [listening]);

  /* ---------------- SPEAK ---------------- */
  const speak = (text) => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "hi-IN";
    window.speechSynthesis.speak(utter);
  };

  const respond = (text) => {
    speak(text);
    setTranscript(text);
  };

  /* ---------------- AUTO STOP ---------------- */
  const resetAutoStop = () => {
    clearTimeout(stopTimerRef.current);
    stopTimerRef.current = setTimeout(stopListening, 20000);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    clearTimeout(stopTimerRef.current);
    setListening(false);
  };

  /* ---------------- HELPERS ---------------- */
  const goToSection = (id, msg) => {
    respond(msg);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const safeNavigate = (path, msg) => {
    respond(msg);
    setTimeout(() => navigate(path), 300);
  };

  const openExternal = (url, msg) => {
    respond(msg);
    window.location.assign(url);
  };

  /* ---------------- COMMAND REGISTRY ---------------- */
  const commands = [
    { keys: ["open about"], action: () => goToSection("about", "Opening about") },
    { keys: ["open featured"], action: () => goToSection("featured", "Opening featured apps") },
    { keys: ["open contact"], action: () => goToSection("contact", "Opening contact") },
    { keys: ["open journey"], action: () => safeNavigate("/journey", "Opening journey") },
    { keys: ["open portfolio"], action: () => safeNavigate("/journey", "Opening journey") },
    { keys: ["open projects"], action: () => safeNavigate("/projects", "Opening projects") },
    { keys: ["open virtual assistant"], action: () => openExternal("https://flexaai-funclexa.vercel.app/", "Opening virtual assistant") },
    { keys: ["open text assistant"], action: () => openExternal("https://lexachat-funclexa.vercel.app/", "Opening text assistant") },
    { keys: ["scroll down", "niche"], action: () => { window.scrollBy({ top: 500, behavior: "smooth" }); respond("Scrolling down"); }},
    { keys: ["scroll up", "upar"], action: () => { window.scrollBy({ top: -500, behavior: "smooth" }); respond("Scrolling up"); }},
    { keys: ["who are you"], action: () => respond("I am FLexa, your advanced virtual assistant.") },
    { keys: ["who created you"], action: () => respond("I was created by Sultan Salauddin Ansari.") },
    { keys: ["time"], action: () => respond(`Time is ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`) },
    { keys: ["date"], action: () => respond(`Today's date is ${new Date().toLocaleDateString("en-IN")}`) },
    { keys: ["open youtube"], action: () => openExternal("https://youtube.com", "Opening YouTube") },
    { keys: ["open github"], action: () => openExternal("https://github.com/ansarisultan", "Opening GitHub") },
    { keys: ["open linkedin"], action: () => openExternal("https://linkedin.com/in/SultanSAnsari", "Opening LinkedIn") },
    { keys: ["stop", "band"], action: () => { respond("Stopping assistant"); stopListening(); } },
  ];

  /* ---------------- COMMAND MATCHER ---------------- */
  const handleCommand = (cmd) => {
    for (const command of commands) {
      if (command.keys.some((k) => cmd.includes(k))) {
        command.action();
        return;
      }
    }
    if (cmd.startsWith("search")) {
      const q = cmd.replace("search", "").trim();
      if (q) { openExternal(`https://google.com/search?q=${encodeURIComponent(q)}`, `Searching ${q}`); return; }
    }
    if (cmd.startsWith("play")) {
      const q = cmd.replace("play", "").trim();
      if (q) { openExternal(`https://youtube.com/results?search_query=${encodeURIComponent(q)}`, `Playing ${q}`); return; }
    }
    respond("Command not recognized. Say help.");
  };

  /* ---------------- TOGGLE ---------------- */
  const toggleListening = () => {
    if (listening) return stopListening();
    respond("Hi, I'm FLexa. Listening.");
    setTimeout(() => {
      try { recognitionRef.current.start(); resetAutoStop(); } catch {}
    }, 800);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="relative">
      <button
        onClick={toggleListening}
        className={`group flex items-center gap-2 px-3.5 py-2 rounded-lg text-[11px] font-semibold tracking-wide
                   border transition-all duration-300
                   ${listening 
                     ? "border-violet-400/30 text-violet-300 bg-violet-400/[0.06] shadow-[0_0_15px_rgba(124,58,237,0.15)]" 
                     : "border-white/[0.08] text-white/40 hover:text-cyan-400 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"}`}
      >
        {listening ? <FiMicOff size={12} /> : <FiMic size={12} />}
        <span className="hidden sm:inline">{listening ? "FLexa Active" : "FLexa"}</span>
      </button>

      {transcript && (
        <div className="absolute top-full mt-2 right-0 p-3 bg-[#030712]/90 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-xl min-w-[200px] z-50">
          <p className="text-xs text-white/60 leading-relaxed">"{transcript}"</p>
        </div>
      )}
    </div>
  );
};

export default AskFLexaRouter;
