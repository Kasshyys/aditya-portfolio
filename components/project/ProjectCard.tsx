"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import TechBadge from "@/components/ui/TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
  reversed?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, reversed }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 group",
        reversed && "lg:flex-row-reverse"
      )}
    >
      {/* Image Section */}
      <Link 
        href={`/work/${project.slug}`} 
        className="flex-1 overflow-hidden rounded-card bg-bg-secondary relative aspect-video cursor-none"
        data-cursor="project"
      >
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="w-full h-full flex items-center justify-center text-text-muted font-display text-2xl group-hover:scale-105 transition-transform duration-700 ease-out">
          {/* Cover Image Placeholder */}
          {project.title}
        </div>
        {/* 
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        /> 
        */}
        <div className="absolute top-4 left-4 z-20">
          <span className="mono text-[10px] text-accent-alt bg-accent-alt/10 px-2 py-1 rounded backdrop-blur-md">
            {project.year}
          </span>
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <div className="flex items-center gap-4">
          <span className="mono text-accent text-sm font-bold opacity-40">
            {index.toString().padStart(2, "0")}
          </span>
          <TechBadge name={project.category} />
        </div>

        <Link href={`/work/${project.slug}`} className="group/link">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-text-primary group-hover/link:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-text-secondary line-clamp-2 italic">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <TechBadge key={tool} name={tool} />
          ))}
          {project.tools.length > 4 && (
            <span className="text-[10px] text-text-muted self-center ml-1">
              +{project.tools.length - 4} more
            </span>
          )}
        </div>

        <Link 
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-text-primary hover:text-accent transition-colors w-fit mt-2 group/btn"
        >
          View Case Study
          <span className="w-8 h-[1px] bg-text-primary group-hover/btn:bg-accent group-hover/btn:w-12 transition-all" />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
