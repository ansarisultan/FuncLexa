import React, { useState, useEffect, useRef } from "react";
import { FiX, FiSend } from "react-icons/fi";

const ChatBotPopup = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, I'm LexaChat.\nYour AI assistant inside FuncLexa.\nHow can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    const handleToggle = (e) => {
      if (e.detail !== undefined) {
        setIsOpen(e.detail);
      } else {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("toggle-chatbot", handleToggle);
    return () => window.removeEventListener("toggle-chatbot", handleToggle);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { from: "bot", text: "Thinking...", isTyping: true }]);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!apiKey) throw new Error("VITE_GROQ_API_KEY is not defined in environment.");

      const chatHistory = messages
        .filter((m) => !m.isTyping)
        .map((m) => ({
          role: m.from === "user" ? "user" : "assistant",
          content: m.text,
        }));

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `You are LexaChat, the context-aware AI assistant inside Sultan Salauddin Ansari's personal developer platform (FuncLexa).
Sultan's Bio & Background:
- B.Tech CSE (Computer Science & Engineering) student.
- Started coding at 12 years old.
- Completed ADCA (Advanced Diploma in Computer Applications) in class 8 (covering MS Office, basic programming, CorelDRAW, databases).
- Flagship projects/ecosystem: FuncLexa (with components like LexaChat, Flexa AI assistant, MERN-stack web chat, E-Commerce clone).
- Certifications: Oracle Generative AI Professional, Oracle APEX Cloud Developer, IBM Cybersecurity Fundamentals, IBM Frontend Developer Internship, plus 20+ credentials from Accenture, Deloitte, Walmart, Google, Microsoft, Tata.
- Technical skills: React, Node.js, Express, MongoDB, Tailwind CSS, Socket.IO, REST APIs, and LLM integrations.

Role guidelines:
- Answer questions about Sultan, his background, education, projects, skills, and certifications.
- Answer user queries contextually and intelligently.
- Support English, Hindi, and Hinglish. Keep responses concise, helpful, and premium.`
            },
            ...chatHistory,
            { role: "user", content: input }
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      });

      if (!response.ok) throw new Error(`Groq API returned status: ${response.status}`);

      const data = await response.json();
      const reply = data.choices[0].message.content;

      setMessages((prev) =>
        prev.map((msg) => (msg.isTyping ? { from: "bot", text: reply } : msg))
      );
    } catch (error) {
      console.warn("Groq API error. Falling back to local responder:", error);
      const fallbackReply = getBotResponse(input);
      setMessages((prev) =>
        prev.map((msg) => (msg.isTyping ? { from: "bot", text: fallbackReply } : msg))
      );
    } finally {
      setLoading(false);
    }
  };

  const getBotResponse = (msg) => {
    msg = msg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) return "Hey there! How can I assist you?";
    if (msg.includes("how are you")) return "Running smoothly! How about you?";
    if (msg.includes("bye")) return "Goodbye! Come back anytime.";
    if (msg.includes("who are you")) return "I'm LexaChat — an AI assistant built for FuncLexa.";
    if (msg.includes("what can you do")) return "I can guide you, explain projects, and answer tech questions.";
    if (msg.includes("react")) return "React is a JavaScript library used to build fast, component-based user interfaces.";
    if (msg.includes("node")) return "Node.js allows JavaScript to run on the server side.";
    if (msg.includes("express")) return "Express.js is a lightweight backend framework for Node.js.";
    if (msg.includes("mongodb")) return "MongoDB is a NoSQL database that stores data in JSON-like documents.";
    if (msg.includes("mern")) return "MERN stack includes MongoDB, Express, React, and Node.js.";
    if (msg.includes("ai")) return "AI helps machines perform tasks that normally require human intelligence.";
    if (msg.includes("funclexa")) return "FuncLexa is a developer ecosystem by Sultan Salauddin Ansari.";
    if (msg.includes("flexa")) return "Flexa is the AI virtual assistant project built under FuncLexa.";
    if (msg.includes("sultan")) return "Sultan Salauddin Ansari is the developer behind FuncLexa and all its projects.";
    if (msg.includes("who made you")) return "I was built by Sultan Salauddin Ansari as part of the FuncLexa ecosystem.";
    if (msg.includes("time")) return `Current time is ${new Date().toLocaleTimeString()}`;
    if (msg.includes("date")) return `Today's date is ${new Date().toLocaleDateString()}`;
    if (msg.includes("joke")) return "Why do programmers prefer dark mode? Because light attracts bugs!";
    if (msg.includes("tum kaun ho")) return "Main LexaChat hoon, FuncLexa ka AI assistant.";
    if (msg.includes("funclexa kya hai")) return "FuncLexa ek developer ecosystem aur AI platform hai.";
    return "You can ask about FuncLexa, Sultan, projects, skills, journey, tech stack, or say help.";
  };

  const renderMessageText = (text) => {
    if (!text) return "";
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let html = line;
      // Bold
      html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      // Inline code
      html = html.replace(/`(.*?)`/g, '<code class="bg-white/10 px-1 py-0.5 rounded font-mono text-cyan-300 text-xs">$1</code>');
      
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        const content = html.trim().replace(/^[-*]\s+/, "");
        return (
          <li key={idx} className="ml-4 list-disc text-white/75 my-1" dangerouslySetInnerHTML={{ __html: content }} />
        );
      }
      return (
        <p key={idx} className="my-1 text-white/75 min-h-[1rem]" dangerouslySetInnerHTML={{ __html: html }} />
      );
    });
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50
                   w-12 h-12 rounded-xl
                   bg-gradient-to-br from-cyan-500 to-blue-600
                   flex items-center justify-center
                   shadow-[0_0_25px_rgba(34,211,238,0.3)]
                   hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
                   hover:scale-105 active:scale-95
                   transition-all duration-300"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* AI Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[430px]
                        bg-[#030712]/95 backdrop-blur-2xl
                        border border-white/[0.08]
                        rounded-2xl shadow-[0_8px_50px_rgba(0,0,0,0.5)]
                        flex flex-col z-40 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-white/[0.06] flex items-center justify-between">
            <div>
              <p className="text-white/80 font-display font-semibold text-sm tracking-wide">
                LexaChat AI
              </p>
              <p className="text-[10px] text-emerald-400/60 font-mono flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                Online
              </p>
            </div>
            <button onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg flex items-center justify-center
                         text-white/30 hover:text-white/70 hover:bg-white/[0.05] transition-all duration-200">
              <FiX size={14} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-[13px] flex flex-col">
            {messages.map((msg, i) => (
              <div key={i}
                className={`max-w-[85%] px-3.5 py-2.5 rounded-xl leading-relaxed text-left
                  ${msg.from === "user"
                    ? "ml-auto bg-cyan-500/[0.1] text-white/80 border border-cyan-400/15"
                    : "mr-auto bg-white/[0.03] text-white/60 border border-white/[0.06]"
                  }`}>
                {renderMessageText(msg.text)}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/[0.06]">
            <div className="flex gap-2">
              <input type="text"
                className="flex-1 px-3.5 py-2.5 rounded-xl
                           bg-white/[0.03] text-white text-sm
                           outline-none border border-white/[0.06]
                           focus:border-cyan-400/25 placeholder:text-white/15
                           transition-all duration-300"
                placeholder="Ask LexaChat..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend} disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-xl bg-cyan-500/[0.1] border border-cyan-400/15
                           flex items-center justify-center text-cyan-400/60
                           hover:bg-cyan-500/[0.15] hover:text-cyan-400
                           disabled:opacity-30 transition-all duration-300">
                <FiSend size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotPopup;
