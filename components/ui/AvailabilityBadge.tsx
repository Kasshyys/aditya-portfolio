"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  available: boolean;
  className?: string;
}

const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({
  available,
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-tech border border-border bg-bg-secondary text-[10px] uppercase tracking-widest font-medium",
        available ? "text-accent border-accent/20" : "text-text-muted",
        className
      )}
    >
      <span className={cn(
        "h-1.5 w-1.5 rounded-full shadow-glow",
        available ? "bg-accent animate-pulse" : "bg-text-muted"
      )} />
      {available ? "Available for Freelance" : "Currently Unavailable"}
    </div>
  );
};

export default AvailabilityBadge;
