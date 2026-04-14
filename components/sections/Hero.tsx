"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MousePointer2 } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";
import { socialLinks } from "@/lib/data/social";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";

interface HeroProps {
  isVisible: boolean;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github": return <Github size={18} />;
      case "linkedin": return <Linkedin size={18} />;
      default: return null;
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <AvailabilityBadge available={personalInfo.available} />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-4"
        >
          <span className="mono text-text-muted uppercase tracking-[0.4em] text-xs md:text-sm">
            {personalInfo.title}
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="flex flex-col items-center mb-8">
          <AnimatedText 
            text="ADITYA" 
            className="text-[12vw] leading-[0.9] font-black font-display text-text-primary"
            delay={0.6}
            once={false}
          />
          <AnimatedText 
            text="PRAKASH" 
            className="text-[12vw] leading-[0.9] font-black font-display text-text-primary"
            delay={0.8}
            once={false}
          />
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-xl text-text-secondary text-base md:text-lg mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <MagneticButton>
            <Button href="#work" size="lg">
              View My Work
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button href="#contact" variant="secondary" size="lg">
              Get In Touch
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Social Icons (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-12 left-8 hidden lg:flex flex-col gap-6"
      >
        {socialLinks.slice(0, 2).map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-300"
            aria-label={social.platform}
          >
            {getIcon(social.platform)}
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator (Bottom Center) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.6 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent animate-bounce" />
        <span className="mono text-[10px] uppercase tracking-widest text-text-muted">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
