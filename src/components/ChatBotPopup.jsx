import React, { useState, useEffect, useRef } from "react";

const ChatBotPopup = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi, I’m LexaChat.\nYour AI assistant inside FuncLexa.\nHow can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Show temporary thinking state
    setMessages((prev) => [...prev, { from: "bot", text: "Thinking...", isTyping: true }]);

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY;
      if (!apiKey) {
        throw new Error("VITE_GROQ_API_KEY is not defined in environment.");
      }

      // Convert message history for LLM (excluding thinking message)
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

      if (!response.ok) {
        throw new Error(`Groq API returned status: ${response.status}`);
      }

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

    // ---------------- GREETINGS ----------------
    if (msg.includes("hello") || msg.includes("hi")) return "Hey there 👋 How can I assist you?";
    if (msg.includes("how are you")) return "I’m running smoothly ⚡ How about you?";
    if (msg.includes("bye")) return "Goodbye 👋 Come back anytime!";
    if (msg.includes("who are you")) return "I’m LexaChat 🤖 — an AI assistant built for FuncLexa.";
    if (msg.includes("what can you do")) return "I can guide you, explain projects, and answer tech questions.";

    // ---------------- TECH / DEV ----------------
    if (msg.includes("react")) return "React is a JavaScript library used to build fast, component-based user interfaces.";
    if (msg.includes("node")) return "Node.js allows JavaScript to run on the server side.";
    if (msg.includes("express")) return "Express.js is a lightweight backend framework for Node.js.";
    if (msg.includes("mongodb")) return "MongoDB is a NoSQL database that stores data in JSON-like documents.";
    if (msg.includes("mern")) return "MERN stack includes MongoDB, Express, React, and Node.js.";
    if (msg.includes("frontend")) return "Frontend is the visual part of a website users interact with.";
    if (msg.includes("backend")) return "Backend handles server logic, database, and APIs.";
    if (msg.includes("full stack")) return "Full stack development includes both frontend and backend.";
    if (msg.includes("api")) return "API allows different applications to communicate with each other.";
    if (msg.includes("rest")) return "REST API follows standard HTTP methods like GET, POST, PUT, DELETE.";
    if (msg.includes("socket")) return "Socket.IO enables real-time communication between client and server.";

    // ---------------- AI / ML ----------------
    if (msg.includes("ai")) return "AI helps machines perform tasks that normally require human intelligence.";
    if (msg.includes("machine learning")) return "Machine Learning allows systems to learn from data without explicit programming.";
    if (msg.includes("ml")) return "ML is a subset of AI focused on learning from data.";
    if (msg.includes("llm")) return "LLM stands for Large Language Model, used for text-based AI systems.";
    if (msg.includes("chatgpt")) return "ChatGPT is an AI language model developed by OpenAI.";
    if (msg.includes("voice assistant")) return "A voice assistant responds to spoken commands using speech recognition.";

    // ---------------- FUNCLEXA ----------------
    if (msg.includes("funclexa")) return "FuncLexa is a personal AI-integrated developer platform by Sultan Salauddin Ansari.";
    if (msg.includes("flexa")) return "Flexa is the AI virtual assistant project built under FuncLexa.";
    if (msg.includes("projects")) return "FuncLexa projects showcase real-world web, AI, and full-stack applications.";
    if (msg.includes("portfolio")) return "This portfolio highlights skills, projects, and development journey.";
    if (msg.includes("who made funclexa")) return "FuncLexa was created by Sultan Salauddin Ansari.";
    if (msg.includes("owner")) return "FuncLexa is developed and maintained by Sultan Salauddin Ansari.";

    // ---------------- STUDENT / CAREER ----------------
    if (msg.includes("internship")) return "Internships provide hands-on experience and industry exposure.";
    if (msg.includes("job")) return "Jobs allow you to apply your skills professionally.";
    if (msg.includes("resume")) return "A resume summarizes your skills, projects, and education.";
    if (msg.includes("placement")) return "Placements help students transition into professional careers.";
    if (msg.includes("cgpa")) return "CGPA stands for Cumulative Grade Point Average.";

    // ---------------- HINDI / HINGLISH ----------------
    if (msg.includes("react kya hai")) return "React ek JavaScript library hai jo UI banane ke liye use hoti hai.";
    if (msg.includes("mern kya hai")) return "MERN ek full stack hai: MongoDB, Express, React aur Node.js.";
    if (msg.includes("ai kya hai")) return "AI ka matlab Artificial Intelligence hota hai.";
    if (msg.includes("funclexa kya hai")) return "FuncLexa ek personal developer aur AI project platform hai.";
    if (msg.includes("tum kaun ho")) return "Main LexaChat hoon, FuncLexa ka AI assistant.";
    if (msg.includes("ye portfolio hai")) return "Haan, ye ek personal developer portfolio hai.";
    if (msg.includes("madad")) return "Aap mujhse technology, projects ya FuncLexa ke baare mein pooch sakte ho.";
    if (msg.includes("project dikhao")) return "Aap Featured Apps section check kar sakte ho.";
    if (msg.includes("contact kaise kare")) return "Contact section mein jaakar aap message bhej sakte ho.";

    // ---------------- GENERAL ----------------
    if (msg.includes("time")) return `Current time is ${new Date().toLocaleTimeString()}`;
    if (msg.includes("date")) return `Today's date is ${new Date().toLocaleDateString()}`;
    if (msg.includes("joke")) return "Why do programmers prefer dark mode? Because light attracts bugs!";
    if (msg.includes("quote")) return "Code is like humor. When you have to explain it, it’s bad.";

    // ===================== CREATOR : SULTAN =====================
    if (msg.includes("sultan")) return "Sultan Salauddin Ansari is a web and AI developer, creator of FuncLexa, and a passionate builder focused on real-world projects.";
    if (msg.includes("who is sultan")) return "Sultan Salauddin Ansari is the developer behind FuncLexa and all its projects.";
    if (msg.includes("funclexa kisne banaya")) return "FuncLexa Sultan Salauddin Ansari ne banaya hai.";
    if (msg.includes("owner of funclexa")) return "FuncLexa is fully created, owned, and maintained by Sultan Salauddin Ansari.";
    if (msg.includes("about sultan")) return "Sultan is a B.Tech CSE student and developer who focuses on AI-integrated web applications and real-time systems.";
    if (msg.includes("tumhara creator kaun")) return "Mere creator Sultan Salauddin Ansari hain.";
    if (msg.includes("who made you")) return "I was built by Sultan Salauddin Ansari as part of the FuncLexa ecosystem.";

    return "You can ask about FuncLexa, Sultan, projects, skills, journey, tech stack, or say madad/help 😊";
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50
                   bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
                   p-4 rounded-full
                   shadow-[0_0_30px_rgba(0,234,255,0.8)]
                   hover:scale-105 transition-all duration-300"
      >
        🤖
      </button>

      {/* AI Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-80 h-[420px]
                     bg-gradient-to-br from-slate-900 via-slate-900 to-black
                     border border-cyan-400/30
                     rounded-2xl shadow-[0_0_40px_rgba(0,234,255,0.25)]
                     flex flex-col z-40 overflow-hidden"
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-cyan-400/20 flex items-center justify-between">
            <div>
              <p className="text-cyan-300 font-semibold tracking-widest text-sm text-left">
                LEXACHAT AI
              </p>
              <p className="text-xs text-white/60 text-left">Status: Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-cyan-300"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm flex flex-col">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-xl leading-relaxed whitespace-pre-line text-left
                  ${
                    msg.from === "user"
                      ? "ml-auto bg-cyan-500/20 text-white border border-cyan-400/30"
                      : "mr-auto bg-white/5 text-cyan-300 border border-white/10"
                  }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-cyan-400/20">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg
                         bg-black/40 text-white text-sm
                         outline-none border border-white/10
                         focus:border-cyan-400/50"
              placeholder="Ask LexaChat..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotPopup;
