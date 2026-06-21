// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import TechMarquee from "../components/TechMarquee";
import Background from "../components/Background";
import ChatBotButton from "../components/ChatBotButton";
import ChatBotPopup from "../components/ChatBotPopup";
import About from "../components/About";
import FeaturedApps from "../components/FeaturedApps";
import HowItWorks from "../components/HowItWorks";
import CTABanner from "../components/CTABanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PopupMessage from "../components/PopupMessage";

const Home = () => {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Particle Background — absolute, covers full page */}
      <Background />
      
      {/* All content rendered on top */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Metrics />
        <TechMarquee />
        <FeaturedApps />
        <HowItWorks />
        <About />
        <CTABanner />
        <Contact />
        <ChatBotPopup />
        <ChatBotButton />
        <PopupMessage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
