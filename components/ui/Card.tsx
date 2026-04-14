"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = "md",
  animate = true,
}) => {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const Component = animate ? motion.div : "div";

  return (
    <Component
      className={cn(
        "bg-card-bg border border-border rounded-card hover:bg-hover transition-colors duration-300",
        paddingStyles[padding],
        className
      )}
      {...(animate ? { whileHover: { y: -5 } } : {})}
    >
      {children}
    </Component>
  );
};

export default Card;
