"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, className }) => {
  return (
    <span
      className={cn(
        "mono text-[10px] md:text-xs uppercase px-3 py-1 rounded-tech bg-bg-secondary border border-border text-text-muted hover:text-accent hover:border-accent transition-colors duration-300",
        className
      )}
    >
      {name}
    </span>
  );
};

export default TechBadge;
