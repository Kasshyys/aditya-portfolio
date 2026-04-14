"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sectionReveal } from "@/lib/animations";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  className,
  centered = false,
}) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col gap-4 mb-xl",
        centered && "items-center text-center",
        className
      )}
      variants={sectionReveal}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="mono text-accent text-sm uppercase tracking-widest">
        {number}
      </span>
      <h2 className="text-4xl md:text-6xl uppercase leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
