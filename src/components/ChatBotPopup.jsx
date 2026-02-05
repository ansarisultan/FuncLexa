import React, { useState } from "react";

const ChatBotPopup = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi, I’m LexaChatBot.\nYour AI assistant inside FuncLexa.\nHow can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { from: "user", text: input },
      { from: "bot", text: getBotResponse(input) }
    ];

    setMessages(newMessages);
    setInput("");
  };

  const getBotResponse = (msg) => {
    msg = msg.toLowerCase();

    // ---------------- GREETINGS ----------------
    if (msg.includes("hello") || msg.includes("hi")) return "Hey there 👋 How can I assist you?";
    if (msg.includes("how are you")) return "I’m running smoothly ⚡ How about you?";
    if (msg.includes("bye")) return "Goodbye 👋 Come back anytime!";
    if (msg.includes("who are you")) return "I’m LexaChatBot 🤖 — an AI assistant built for FuncLexa.";
    if (msg.includes("what can you do")) return "I can guide you, explain projects, and answer tech questions.";

    // ---------------- FUNCLEXA ----------------
    if (msg.includes("funclexa")) return "FuncLexa is a futuristic ecosystem for AI & web systems.";
    if (msg.includes("projects")) return "You’ll find real-world, flagship projects inside FuncLexa.";
    if (msg.includes("contact")) return "You can connect through the Contact section.";

    // ---------------- TECH ----------------
  // ---------------- WEB / DEV ----------------
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
if (msg.includes("tum kaun ho")) return "Main FuncBot hoon, FuncLexa ka AI assistant.";
if (msg.includes("ye portfolio hai")) return "Haan, ye ek personal developer portfolio hai.";
if (msg.includes("madad")) return "Aap mujhse technology, projects ya FuncLexa ke baare mein pooch sakte ho.";
if (msg.includes("project dikhao")) return "Aap Featured Apps section check kar sakte ho.";
if (msg.includes("contact kaise kare")) return "Contact section mein jaakar aap message bhej sakte ho.";

// ---------------- GENERAL ----------------
if (msg.includes("time")) return `Current time is ${new Date().toLocaleTimeString()}`;
if (msg.includes("date")) return `Today's date is ${new Date().toLocaleDateString()}`;
if (msg.includes("joke")) return "Why do programmers prefer dark mode? Because light attracts bugs!";
if (msg.includes("quote")) return "Code is like humor. When you have to explain it, it’s bad.";
// ===================== FUNCLEXA IDENTITY =====================
if (msg.includes("funclexa")) 
  return "FuncLexa is a personal AI-powered developer platform created by Sultan Salauddin Ansari to showcase real-world web, AI, and full-stack projects.";

if (msg.includes("what is funclexa")) 
  return "FuncLexa is Sultan Salauddin Ansari’s personal project ecosystem focused on modern web apps, AI integration, and real-time systems.";

if (msg.includes("funclexa kya hai")) 
  return "FuncLexa Sultan Salauddin Ansari ka personal developer aur AI projects ka platform hai.";

if (msg.includes("why funclexa")) 
  return "FuncLexa was created to dream, code, and ship real projects instead of just learning theory.";

if (msg.includes("funclexa meaning")) 
  return "FuncLexa represents Functional + Flexible + Logic-driven development.";


// ===================== CREATOR : SULTAN =====================
if (msg.includes("sultan")) 
  return "Sultan Salauddin Ansari is a web and AI developer, creator of FuncLexa, and a passionate builder focused on real-world projects.";

if (msg.includes("who is sultan")) 
  return "Sultan Salauddin Ansari is the developer behind FuncLexa and all its projects.";

if (msg.includes("funclexa kisne banaya")) 
  return "FuncLexa Sultan Salauddin Ansari ne banaya hai.";

if (msg.includes("owner of funclexa")) 
  return "FuncLexa is fully created, owned, and maintained by Sultan Salauddin Ansari.";

if (msg.includes("about sultan")) 
  return "Sultan is a B.Tech CSE student and developer who focuses on AI-integrated web applications and real-time systems.";

if (msg.includes("tumhara creator kaun")) 
  return "Mere creator Sultan Salauddin Ansari hain.";

if (msg.includes("who made you")) 
  return "I was built by Sultan Salauddin Ansari as part of the FuncLexa ecosystem.";


// ===================== FUNCLEXA PROJECTS =====================
if (msg.includes("projects")) 
  return "FuncLexa projects include AI assistants, real-time chat apps, e-commerce clones, and frontend experiments.";

if (msg.includes("all projects")) 
  return "All FuncLexa projects are designed and developed by Sultan as part of his learning and building journey.";

if (msg.includes("featured apps")) 
  return "Featured apps showcase flagship projects built under FuncLexa.";

if (msg.includes("flexa")) 
  return "Flexa is an AI virtual assistant project that supports voice and text-based interaction.";

if (msg.includes("flexa kya hai")) 
  return "Flexa ek AI virtual assistant hai jo FuncLexa ke under banaya gaya hai.";

if (msg.includes("web chat")) 
  return "FuncLexa Web Chat is a real-time messaging app built using MERN stack and Socket.IO.";

if (msg.includes("chat app")) 
  return "The chat app demonstrates real-time communication, authentication, and message storage.";

if (msg.includes("e commerce")) 
  return "FuncLexa E-Commerce Clone showcases product listings, cart logic, and modern UI design.";

if (msg.includes("shopping project")) 
  return "Shopping project ek e-commerce clone hai jo real-world workflows ko demonstrate karta hai.";


// ===================== TECHNOLOGY STACK =====================
if (msg.includes("tech stack")) 
  return "FuncLexa projects use React, Tailwind CSS, Node.js, Express, MongoDB, and AI APIs.";

if (msg.includes("react")) 
  return "React is used heavily in FuncLexa for building fast and interactive user interfaces.";

if (msg.includes("tailwind")) 
  return "Tailwind CSS is used in FuncLexa for modern, responsive, and futuristic UI design.";

if (msg.includes("node")) 
  return "Node.js powers backend logic in FuncLexa projects.";

if (msg.includes("mern")) 
  return "MERN stack is used for full-stack projects under FuncLexa.";

if (msg.includes("socket")) 
  return "Socket.IO enables real-time features like chat in FuncLexa projects.";

if (msg.includes("ai")) 
  return "AI in FuncLexa is used for assistants, automation, and intelligent interactions.";


// ===================== JOURNEY & MINDSET =====================
if (msg.includes("journey")) 
  return "FuncLexa represents Sultan’s journey from learning basics to building complete projects.";

if (msg.includes("learning")) 
  return "FuncLexa focuses on learning by building, not just watching tutorials.";

if (msg.includes("dream it")) 
  return "Dream it. Code it. Launch it. That is the FuncLexa mindset.";

if (msg.includes("goal")) 
  return "The goal of FuncLexa is to build impactful, real-world software projects.";

if (msg.includes("future")) 
  return "FuncLexa will continue expanding with more AI and full-stack projects.";

if (msg.includes("why you build this")) 
  return "FuncLexa was built to grow as a developer and showcase real skills.";


// ===================== PORTFOLIO =====================
if (msg.includes("portfolio")) 
  return "This website is Sultan Salauddin Ansari’s personal developer portfolio.";

if (msg.includes("ye portfolio hai")) 
  return "Haan, ye Sultan ka personal developer portfolio hai.";

if (msg.includes("resume")) 
  return "FuncLexa projects strengthen Sultan’s resume with real-world implementations.";

if (msg.includes("hire")) 
  return "FuncLexa showcases projects for internships, freelancing, and developer opportunities.";


// ===================== CONTACT =====================
if (msg.includes("contact")) 
  return "You can contact Sultan using the Contact section on this website.";

if (msg.includes("email")) 
  return "You can reach Sultan via email provided in the Contact section.";

if (msg.includes("connect")) 
  return "You can connect with Sultan on GitHub and LinkedIn from the footer.";


// ===================== HINDI / HINGLISH GENERAL =====================
if (msg.includes("tum kaun ho")) 
  return "Main FuncBot hoon, FuncLexa ka AI assistant.";

if (msg.includes("madad")) 
  return "Aap FuncLexa, projects, Sultan, ya technology ke baare mein pooch sakte ho.";

if (msg.includes("kaise bana")) 
  return "FuncLexa projects React, Node.js aur modern tools se banaye gaye hain.";

if (msg.includes("kya seekha")) 
  return "FuncLexa ke through Sultan ne real-world development seekha hai.";

if (msg.includes("sab kuch batao")) 
  return "FuncLexa Sultan ke saare projects, skills aur journey ko represent karta hai.";
// ===================== FUNCLEXA CORE =====================
if (msg.includes("funclexa")) 
  return "FuncLexa is Sultan Salauddin Ansari’s personal AI-integrated development platform showcasing real-world web and full-stack projects.";

if (msg.includes("funclexa platform")) 
  return "FuncLexa is a project showcase platform, learning space, and experimentation hub for modern web and AI applications.";

if (msg.includes("funclexa vision")) 
  return "The vision of FuncLexa is to build real, usable software instead of just academic or tutorial-based projects.";

if (msg.includes("funclexa mission")) 
  return "FuncLexa’s mission is learning by building and shipping projects consistently.";

if (msg.includes("funclexa ecosystem")) 
  return "The FuncLexa ecosystem includes AI assistants, real-time apps, full-stack systems, and UI experiments.";

if (msg.includes("funclexa name")) 
  return "FuncLexa stands for Functional, Flexible, and Logic-driven development.";


// ===================== SULTAN – PERSONAL =====================
if (msg.includes("sultan salauddin ansari")) 
  return "Sultan Salauddin Ansari is a B.Tech Computer Science student and developer who created FuncLexa.";

if (msg.includes("who is sultan")) 
  return "Sultan is a passionate web and AI developer focused on building real-world applications.";

if (msg.includes("about sultan")) 
  return "Sultan is a self-driven developer who believes in learning through hands-on projects.";

if (msg.includes("sultan background")) 
  return "Sultan has a background in computer science and focuses on frontend, backend, and AI integration.";

if (msg.includes("sultan goal")) 
  return "Sultan’s goal is to become a strong full-stack and AI-focused engineer.";

if (msg.includes("sultan journey")) 
  return "Sultan’s journey includes learning fundamentals, building projects, debugging deeply, and deploying applications.";

if (msg.includes("tumhare creator")) 
  return "Mere creator Sultan Salauddin Ansari hain.";

if (msg.includes("developer kaun")) 
  return "FuncLexa ke developer Sultan Salauddin Ansari hain.";


// ===================== PROJECT DETAILS =====================
if (msg.includes("flexa ai")) 
  return "Flexa is an AI virtual assistant that supports voice and text interaction within web applications.";

if (msg.includes("flexa features")) 
  return "Flexa supports voice commands, text chat, navigation help, and contextual responses.";

if (msg.includes("web chat")) 
  return "FuncLexa Web Chat is a real-time chat application built using MERN stack and Socket.IO.";

if (msg.includes("chat project")) 
  return "The chat project demonstrates real-time messaging, authentication, and database integration.";

if (msg.includes("ecommerce")) 
  return "FuncLexa E-Commerce Clone showcases shopping workflows like product listing and cart management.";

if (msg.includes("shopping app")) 
  return "The shopping app is built to understand real-world e-commerce UI and logic.";

if (msg.includes("flagship project")) 
  return "Flexa AI Assistant and Web Chat are flagship projects under FuncLexa.";

if (msg.includes("demo link")) 
  return "Each project includes a live demo link and GitHub repository.";


// ===================== TECHNOLOGIES =====================
if (msg.includes("react")) 
  return "React is the primary frontend library used across FuncLexa projects.";

if (msg.includes("tailwind")) 
  return "Tailwind CSS is used for building modern, responsive, and futuristic UIs.";

if (msg.includes("javascript")) 
  return "JavaScript is the core language behind FuncLexa applications.";

if (msg.includes("node")) 
  return "Node.js is used for backend logic in FuncLexa projects.";

if (msg.includes("express")) 
  return "Express.js helps build REST APIs for backend services.";

if (msg.includes("mongodb")) 
  return "MongoDB is used to store application data in FuncLexa projects.";

if (msg.includes("socket")) 
  return "Socket.IO enables real-time communication features like chat.";

if (msg.includes("api")) 
  return "APIs are used to connect frontend, backend, and AI services.";

if (msg.includes("ai api")) 
  return "AI APIs help power intelligent responses and automation.";


// ===================== LEARNING & SKILLS =====================
if (msg.includes("skills")) 
  return "Sultan’s skills include frontend development, backend APIs, real-time systems, and AI integration.";

if (msg.includes("what did you learn")) 
  return "Through FuncLexa, Sultan learned debugging, deployment, architecture, and system thinking.";

if (msg.includes("debugging")) 
  return "Debugging is a core skill developed while building FuncLexa projects.";

if (msg.includes("deployment")) 
  return "FuncLexa projects are deployed using modern hosting platforms.";

if (msg.includes("problem solving")) 
  return "FuncLexa focuses on solving real problems through code.";


// ===================== PORTFOLIO & CAREER =====================
if (msg.includes("portfolio")) 
  return "This website is Sultan’s personal developer portfolio.";

if (msg.includes("resume")) 
  return "FuncLexa projects strengthen Sultan’s resume with real-world experience.";

if (msg.includes("hire")) 
  return "FuncLexa showcases projects for internship and job opportunities.";

if (msg.includes("freelance")) 
  return "FuncLexa can be used to demonstrate skills for freelance work.";

if (msg.includes("internship")) 
  return "Sultan is actively building projects to prepare for internships.";


// ===================== HINDI / HINGLISH =====================
if (msg.includes("funclexa kya hai")) 
  return "FuncLexa ek personal developer aur AI projects ka platform hai.";

if (msg.includes("sultan kaun hai")) 
  return "Sultan Salauddin Ansari ek developer aur FuncLexa ke creator hain.";

if (msg.includes("ye kaunsa project")) 
  return "Ye FuncLexa ka project showcase section hai.";

if (msg.includes("tum kya kar sakte ho")) 
  return "Main FuncLexa aur Sultan ke baare mein information de sakta hoon.";

if (msg.includes("madad chahiye")) 
  return "Aap projects, skills, ya FuncLexa ke baare mein pooch sakte ho.";

if (msg.includes("future plan")) 
  return "Future mein FuncLexa aur zyada AI aur full-stack projects add karega.";

if (msg.includes("sab batao")) 
  return "FuncLexa Sultan ke projects, journey aur skills ko represent karta hai.";


// ===================== PERSONALITY =====================
if (msg.includes("why build")) 
  return "FuncLexa was built to grow as a developer through real projects.";

if (msg.includes("mindset")) 
  return "FuncLexa follows a builder mindset: dream, code, and ship.";

if (msg.includes("motivation")) 
  return "Consistency and real-world practice drive FuncLexa.";


// ===================== DEFAULT =====================
return "You can ask about FuncLexa, Sultan, projects, skills, journey, tech stack, or say madad/help 😊";
// ===================== FUNCLEXA DNA =====================
if (msg.includes("funclexa")) 
  return "FuncLexa is not just a website — it is Sultan Salauddin Ansari’s personal development ecosystem, documenting his growth through real projects.";

if (msg.includes("funclexa platform")) 
  return "FuncLexa acts as a project lab, portfolio, and experimentation space for modern web and AI systems.";

if (msg.includes("funclexa ecosystem")) 
  return "The FuncLexa ecosystem includes AI assistants, real-time apps, full-stack systems, and futuristic UI experiments.";

if (msg.includes("funclexa philosophy")) 
  return "FuncLexa follows a build-first philosophy: learn concepts only to apply them immediately.";

if (msg.includes("funclexa vision")) 
  return "FuncLexa’s vision is to become a living portfolio of real-world engineering skills.";

if (msg.includes("funclexa mission")) 
  return "FuncLexa’s mission is to turn ideas into working software.";

if (msg.includes("dream it")) 
  return "Dream it. Code it. Launch it. That line defines FuncLexa.";

if (msg.includes("why funclexa exists")) 
  return "FuncLexa exists to prove skill through execution, not certificates.";


// ===================== SULTAN — CORE IDENTITY =====================
if (msg.includes("sultan")) 
  return "Sultan Salauddin Ansari is a self-driven developer focused on web, AI, and system building.";

if (msg.includes("who is sultan")) 
  return "Sultan is a Computer Science student and creator of FuncLexa.";

if (msg.includes("about sultan")) 
  return "Sultan believes real growth comes from building, breaking, and fixing projects.";

if (msg.includes("sultan mindset")) 
  return "Sultan has a builder mindset — he prefers solving problems over memorizing theory.";

if (msg.includes("sultan personality")) 
  return "Sultan is focused, disciplined, and obsessed with improving through practice.";

if (msg.includes("sultan goal")) 
  return "Sultan’s goal is to become a strong full-stack and AI-focused engineer.";

if (msg.includes("sultan dream")) 
  return "Sultan dreams of building intelligent products that people actually use.";

if (msg.includes("tumhare creator")) 
  return "Mere creator Sultan Salauddin Ansari hain.";

if (msg.includes("tum kaun ho")) 
  return "Main FuncBot hoon — Sultan ka banaya hua AI assistant.";


// ===================== LEARNING STYLE =====================
if (msg.includes("how do you learn")) 
  return "FuncLexa follows learning by building complete applications.";

if (msg.includes("learning style")) 
  return "Sultan learns by creating projects, not by passive watching.";

if (msg.includes("tutorial")) 
  return "Tutorials are used only to understand concepts, not to copy projects.";

if (msg.includes("debugging")) 
  return "Debugging is a core skill learned deeply through FuncLexa projects.";

if (msg.includes("errors")) 
  return "Errors are treated as learning opportunities, not failures.";

if (msg.includes("struggle")) 
  return "FuncLexa represents struggle, consistency, and progress.";


// ===================== PROJECTS — DEEP =====================
if (msg.includes("projects")) 
  return "FuncLexa projects demonstrate real-world software development.";

if (msg.includes("flagship project")) 
  return "Flexa AI and Web Chat are flagship FuncLexa projects.";

if (msg.includes("flexa")) 
  return "Flexa is an AI virtual assistant with voice and text interaction.";

if (msg.includes("flexa ai")) 
  return "Flexa AI is designed to assist users through intelligent conversation.";

if (msg.includes("chat app")) 
  return "The chat app demonstrates real-time messaging and backend systems.";

if (msg.includes("real time")) 
  return "Real-time features are built using Socket.IO and WebSockets.";

if (msg.includes("ecommerce")) 
  return "The e-commerce clone helps understand real-world product flows.";

if (msg.includes("portfolio project")) 
  return "This portfolio itself is a project built with care and intention.";

if (msg.includes("why these projects")) 
  return "Projects are chosen to cover frontend, backend, and system thinking.";


// ===================== TECHNOLOGY — REAL =====================
if (msg.includes("react")) 
  return "React is used for component-based UI development.";

if (msg.includes("tailwind")) 
  return "Tailwind CSS enables rapid and consistent UI styling.";

if (msg.includes("javascript")) 
  return "JavaScript powers all FuncLexa applications.";

if (msg.includes("node")) 
  return "Node.js is used for server-side logic.";

if (msg.includes("express")) 
  return "Express.js is used for backend routing and APIs.";

if (msg.includes("mongodb")) 
  return "MongoDB stores application data.";

if (msg.includes("mern")) 
  return "MERN stack is used for full-stack development.";

if (msg.includes("socket")) 
  return "Socket.IO enables instant communication.";

if (msg.includes("ai")) 
  return "AI is integrated to improve interaction and automation.";


// ===================== DEPLOYMENT & REAL WORLD =====================
if (msg.includes("deployment")) 
  return "FuncLexa projects are deployed on modern platforms.";

if (msg.includes("production")) 
  return "Projects are built with real-world deployment in mind.";

if (msg.includes("scalability")) 
  return "Scalability concepts are considered during development.";

if (msg.includes("performance")) 
  return "Performance optimization is an ongoing focus.";

if (msg.includes("security")) 
  return "Basic security practices are applied in backend projects.";


// ===================== CAREER & FUTURE =====================
if (msg.includes("future")) 
  return "FuncLexa will expand with more AI and system-level projects.";

if (msg.includes("next project")) 
  return "Future projects will focus more on AI integration.";

if (msg.includes("career")) 
  return "FuncLexa is built to support Sultan’s developer career.";

if (msg.includes("internship")) 
  return "FuncLexa projects prepare Sultan for internships.";

if (msg.includes("job")) 
  return "FuncLexa showcases real skills to recruiters.";

if (msg.includes("hire")) 
  return "This portfolio exists to demonstrate capability, not claims.";


// ===================== HINDI / HINGLISH — DEEP =====================
if (msg.includes("funclexa kya hai")) 
  return "FuncLexa Sultan ka personal developer aur AI projects ka platform hai.";

if (msg.includes("sultan kaun hai")) 
  return "Sultan Salauddin Ansari ek developer aur FuncLexa ke creator hain.";

if (msg.includes("ye website kis liye hai")) 
  return "Ye website Sultan ke projects aur skills dikhane ke liye hai.";

if (msg.includes("tum kya kar sakte ho")) 
  return "Main FuncLexa, projects aur Sultan ke baare mein bata sakta hoon.";

if (msg.includes("kaise seekha")) 
  return "Sultan ne projects bana bana ke seekha.";

if (msg.includes("sab batao")) 
  return "FuncLexa Sultan ki journey, struggle aur growth ko represent karta hai.";

if (msg.includes("future plan kya hai")) 
  return "Future mein aur advanced AI aur full-stack projects aayenge.";

if (msg.includes("ye real project hai")) 
  return "Haan, ye sab real projects hain, sirf demos nahi.";


// ===================== META =====================
if (msg.includes("why this chatbot")) 
  return "This chatbot exists to explain FuncLexa interactively.";

if (msg.includes("tum ai ho")) 
  return "Haan, main ek simple rule-based AI assistant hoon.";

if (msg.includes("kaam kaise karta hai")) 
  return "Main predefined logic ke through questions ka jawab deta hoon.";

if (msg.includes("future ai")) 
  return "Future mein main advanced AI se connected ho sakta hoon.";


// ===================== DEFAULT =====================
// return "You can ask literally anything about FuncLexa, Sultan, projects, tech, journey, mindset, or future 😊";


// ===================== DEFAULT =====================
// return "You can ask me about FuncLexa, Sultan, projects, tech stack, journey, or say madad/help 😊";

// ---------------- DEFAULT ----------------
// return "I'm still learning 😊 You can ask about React, AI, FuncLexa, projects, or say madad/help.";

    // ---------------- DEFAULT ----------------
    // return "🤔 I’m still learning. Try asking something related to FuncLexa or tech.";
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
              <p className="text-cyan-300 font-semibold tracking-widest text-sm">
                FUNCBOT AI
              </p>
              <p className="text-xs text-white/60">Status: Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-cyan-300"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-xl leading-relaxed
                  ${
                    msg.from === "user"
                      ? "ml-auto bg-cyan-500/20 text-white border border-cyan-400/30"
                      : "mr-auto bg-white/5 text-cyan-300 border border-white/10"
                  }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-cyan-400/20">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg
                         bg-black/40 text-white text-sm
                         outline-none border border-white/10
                         focus:border-cyan-400/50"
              placeholder="Ask FuncBot..."
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
