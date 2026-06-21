import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMic, FiMicOff } from "react-icons/fi";

const AskFLexaRouter = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);
  const listeningRef = useRef(false);
  const stopTimerRef = useRef(null);
  const navigate = useNavigate();

  // Keep ref in sync to avoid useEffect lifecycle tearing down the recognition
  useEffect(() => {
    listeningRef.current = listening;
  }, [listening]);

  /* ---------------- SPEECH INIT ---------------- */
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      console.warn("Web Speech API is not supported in this browser.");
      return;
    }

    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (e) => {
      const text = e.results[e.results.length - 1][0].transcript.toLowerCase().trim();
      setTranscript(text);
      handleCommand(text);
      resetAutoStop();
    };

    recognition.onend = () => {
      // Re-start if still marked as listening (browser auto-stops on long silence)
      if (listeningRef.current) {
        try {
          recognition.start();
        } catch (err) {
          console.error("Failed to restart speech recognition:", err);
        }
      }
    };

    recognition.onerror = (e) => {
      console.error("Speech recognition error:", e.error);
      if (e.error === "not-allowed") {
        respond("Microphone access is denied.");
        stopListening();
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  /* ---------------- SPEAK ---------------- */
  const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    window.speechSynthesis.speak(utter);
  };

  const respond = (text) => {
    speak(text);
    setTranscript(text);
  };

  /* ---------------- AUTO STOP ---------------- */
  const resetAutoStop = () => {
    clearTimeout(stopTimerRef.current);
    stopTimerRef.current = setTimeout(stopListening, 25000);
  };

  const stopListening = () => {
    setListening(false);
    clearTimeout(stopTimerRef.current);
    try {
      recognitionRef.current?.stop();
    } catch {}
  };

  /* ---------------- HELPERS ---------------- */
  const goToSection = (id, msg) => {
    respond(msg);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const safeNavigate = (path, msg) => {
    respond(msg);
    setTimeout(() => navigate(path), 400);
  };

  const openExternal = (url, msg) => {
    respond(msg);
    window.open(url, "_blank");
  };

  const dispatchChatBotEvent = (openState, msg) => {
    respond(msg);
    const event = new CustomEvent("toggle-chatbot", { detail: openState });
    window.dispatchEvent(event);
  };

  /* ---------------- COMMAND REGISTRY ---------------- */
  const commands = [
    // Navigation & Sections
    { keys: ["open about", "show about", "go to about", "about section"], action: () => goToSection("about", "Showing the about platform section") },
    { keys: ["open featured", "open products", "show products", "show featured", "products section"], action: () => goToSection("featured", "Navigating to featured products") },
    { keys: ["open contact", "show contact", "go to contact", "contact section"], action: () => goToSection("contact", "Showing the contact form") },
    { keys: ["open journey", "open portfolio", "show journey", "show portfolio", "journey section"], action: () => safeNavigate("/journey", "Navigating to your journey page") },
    { keys: ["open projects", "show projects", "projects section"], action: () => safeNavigate("/projects", "Opening the projects display") },
    { keys: ["go home", "go to top", "scroll to top", "top of page"], action: () => { window.scrollTo({ top: 0, behavior: "smooth" }); respond("Scrolling to top of the page"); } },
    { keys: ["go to bottom", "scroll to bottom", "show footer"], action: () => { window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); respond("Scrolling to the footer"); } },
    { keys: ["scroll down", "niche", "go down"], action: () => { window.scrollBy({ top: 500, behavior: "smooth" }); respond("Scrolling down"); } },
    { keys: ["scroll up", "upar", "go up"], action: () => { window.scrollBy({ top: -500, behavior: "smooth" }); respond("Scrolling up"); } },
    
    // Chatbot Commands
    { keys: ["open chatbot", "open assistant", "show chatbot", "show assistant", "open chat"], action: () => dispatchChatBotEvent(true, "Opening LexaChat assistant") },
    { keys: ["close chatbot", "close assistant", "hide chatbot", "hide assistant", "close chat"], action: () => dispatchChatBotEvent(false, "Hiding LexaChat assistant") },

    // External sites / Socials
    { keys: ["open youtube"], action: () => openExternal("https://youtube.com", "Opening YouTube") },
    { keys: ["open github"], action: () => openExternal("https://github.com/ansarisultan", "Opening GitHub") },
    { keys: ["open linkedin"], action: () => openExternal("https://linkedin.com/in/SultanSAnsari", "Opening LinkedIn") },

    // Core Platform Information
    { keys: ["who are you", "who is this", "what is your name"], action: () => respond("I am FLexa, your context-aware virtual voice assistant for the FuncLexa ecosystem.") },
    { keys: ["who created you", "who is your developer", "who built you", "who made you"], action: () => respond("I was built by Sultan Salauddin Ansari as part of the FuncLexa suite.") },
    { keys: ["what is funclexa", "tell me about funclexa"], action: () => respond("FuncLexa is a developer ecosystem and product studio for intelligent, modern dev tools.") },
    { keys: ["what is funcsilo", "tell me about funcsilo"], action: () => respond("FuncSilo is a premium developer sandbox workspace with high-fidelity UI templates.") },
    { keys: ["what is funcspan", "tell me about funcspan"], action: () => respond("FuncSpan is a developer sandbox built to inspect API payloads and simulate network latencies.") },
    { keys: ["what is lexachat", "tell me about lexachat"], action: () => respond("LexaChat is a high-performance, context-aware AI chat application powered by Groq API.") },

    // Utilities
    { keys: ["time", "what time is it"], action: () => respond(`The current time is ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`) },
    { keys: ["date", "what is the date", "today's date"], action: () => respond(`Today's date is ${new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`) },
    { keys: ["clear", "reset transcript"], action: () => { setTranscript(""); speak("Transcript cleared."); } },
    { keys: ["help", "commands", "what can you do"], action: () => respond("You can ask me to navigate to sections, open projects, show or hide the chatbot, open social links, or ask about FuncLexa products.") },
    
    // Stop
    { keys: ["stop", "band", "exit", "quiet"], action: () => { respond("Deactivating assistant"); stopListening(); } },
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
      if (q) { openExternal(`https://google.com/search?q=${encodeURIComponent(q)}`, `Searching Google for ${q}`); return; }
    }
    if (cmd.startsWith("play")) {
      const q = cmd.replace("play", "").trim();
      if (q) { openExternal(`https://youtube.com/results?search_query=${encodeURIComponent(q)}`, `Playing ${q} on YouTube`); return; }
    }
    
    respond("Command not recognized. Say help for list of commands.");
  };

  /* ---------------- TOGGLE ---------------- */
  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      respond("Hi, I'm FLexa. How can I help you?");
      setTimeout(() => {
        try {
          if (recognitionRef.current) {
            recognitionRef.current.start();
            resetAutoStop();
          }
        } catch (err) {
          console.error("Start failed:", err);
        }
      }, 1800);
    }
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
