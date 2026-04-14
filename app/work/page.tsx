"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Full-Stack", "Frontend", "Design", "Backend", "Mobile"];

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted hover:text-accent transition-colors mb-12"
        >
          ← Home
        </Link>
        
        <SectionHeading 
          number="Work/" 
          title="All Projects" 
          subtitle="A collection of my recent digital works and experiments."
        />

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
                  layoutId="filter-underline-all"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                {/* Simplified card for grid view if needed, but ProjectCard works too */}
                <ProjectCard
                  project={project}
                  index={i + 1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-text-muted italic">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
