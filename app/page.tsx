"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/ui/Loader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Check if loader has already played in this session
    const loaderPlayed = sessionStorage.getItem("ap-loader-played");
    if (loaderPlayed) {
      setLoading(false);
      setContentVisible(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("ap-loader-played", "true");
    setLoading(false);
    // Add a slight delay before showing hero content to smooth the transition
    setTimeout(() => setContentVisible(true), 100);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <div className={loading ? "hidden" : "block"}>
        <Hero isVisible={contentVisible} />
        <About />
        <SkillsMarquee />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
