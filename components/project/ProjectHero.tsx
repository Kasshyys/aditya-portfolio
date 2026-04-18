"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Project } from "@/types";
import TechBadge from "@/components/ui/TechBadge";

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
    }
  };

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-bg-secondary">
      <motion.div style={{ y }} className="relative w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="w-full h-full flex items-center justify-center text-white/20 font-display text-4xl md:text-6xl font-black uppercase text-center px-8">
          {project.title}
        </div>
        {/* 
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        /> 
        */}
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8"
      >
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TechBadge name={project.category} className="bg-accent text-[#0a0a0a] border-none px-4 py-1.5" />
          </motion.div>
          
          <motion.h1
            initial="initial"
            animate="animate"
            variants={titleVariants}
            className="text-5xl md:text-8xl font-display font-black text-white uppercase drop-shadow-xl"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-4 text-white/80 mono text-xs uppercase tracking-[0.4em]"
          >
            <span>{project.year}</span>
            <span className="w-8 h-[1px] bg-white/40" />
            <span>{project.client}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Fade out bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent z-20" />
    </div>
  );
};

export default ProjectHero;