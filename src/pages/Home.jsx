// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Background from "../components/Background";
import FeatureTabs from "../components/FeatureTabs";
import ChatBotButton from "../components/ChatBotButton";
import ChatBotPopup from "../components/ChatBotPopup";
import CursorTrail from "../components/CursorTrail";
import Logo from "../components/Logo";
import About from "../components/About";
import FeaturedApps from "../components/FeaturedApps";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PopupMessage from "../components/PopupMessage";

const Home = () => {
  return (
    <div className="min-h-screen font-sans">
      <Background />
      <Navbar />
      <Hero />
      <FeatureTabs />
      <Logo />
      <About />
      <FeaturedApps />
      <ChatBotPopup />
      <ChatBotButton />
      <CursorTrail />
      <Contact />
      <PopupMessage />
      <Footer />
    </div>
  );
};

export default Home;
