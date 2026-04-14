"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { Project } from "@/types";

interface ProjectNavProps {
  currentProject: Project;
}

const ProjectNav: React.FC<ProjectNavProps> = ({ currentProject }) => {
  const currentIndex = projects.findIndex((p) => p.id === currentProject.id);
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <div className="py-24 border-t border-border flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
      {/* Previous */}
      <Link 
        href={`/work/${prevProject.slug}`}
        className="flex-1 p-12 group transition-colors hover:bg-bg-secondary"
      >
        <div className="flex flex-col gap-4">
          <span className="mono text-[10px] uppercase tracking-[0.4em] text-text-muted">
            Previous Project
          </span>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary group-hover:text-accent group-hover:translate-x-4 transition-all duration-500">
            {prevProject.title}
          </h3>
        </div>
      </Link>

      {/* Next */}
      <Link 
        href={`/work/${nextProject.slug}`}
        className="flex-1 p-12 group transition-colors hover:bg-bg-secondary md:text-right"
      >
        <div className="flex flex-col gap-4 md:items-end">
          <span className="mono text-[10px] uppercase tracking-[0.4em] text-text-muted">
            Next Project
          </span>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary group-hover:text-accent group-hover:-translate-x-4 transition-all duration-500">
            {nextProject.title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectNav;