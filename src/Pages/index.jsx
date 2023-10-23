import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { AboutObjOne } from "../Components/InfoSection/Data";
import Skills from "../Components/Skills";
import { SkillsObjOne } from "../Components/Skills/Data";
import Projects from "../Components/Projects";
import ContectMe from "../Components/ContectMe";
import Footer from "../Components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...AboutObjOne} />
      <Skills {...SkillsObjOne} />
      <Projects />
      <ContectMe />
      <Footer />
    </>
  );
};

export default Home;
