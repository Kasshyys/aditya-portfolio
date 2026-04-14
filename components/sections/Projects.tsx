"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { Project } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/project/ProjectCard";
import { cn } from "@/lib/utils";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Full-Stack", "Frontend", "Design"];

  const filteredProjects = useMemo(() => {
    const featured = projects.filter((p) => p.featured);
    if (filter === "All") return featured;
    return featured.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="work" className="py-section-padding-mobile md:py-section-padding-desktop">
      <div className="container">
        <SectionHeading number="04/" title="Selected Work" />

        <div className="flex flex-wrap gap-8 mb-16 border-b border-border pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "mono text-xs uppercase tracking-[0.2em] pb-4 relative transition-colors duration-300",
                filter === cat ? "text-accent" : "text-text-muted hover:text-text-primary"
              )}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard
                  project={project}
                  index={i + 1}
                  reversed={i % 2 !== 0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <Link
            href="/work"
            className="group flex flex-col items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-text-primary hover:text-accent transition-colors"
          >
            <span>View All Projects</span>
            <div className="w-12 h-[1px] bg-accent transition-all duration-500 group-hover:w-24" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
