"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
  once = true,
  tag = "div",
}) => {
  const words = text.split(" ");

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const Component = motion[tag] as any;

  return (
    <Component
      className={cn("flex flex-wrap gap-x-[0.3em] overflow-hidden", className)}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-1">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

export default AnimatedText;
