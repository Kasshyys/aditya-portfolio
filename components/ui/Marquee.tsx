"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "left",
  speed = 20,
  pauseOnHover = true,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex overflow-hidden select-none group w-full",
        className
      )}
      role="marquee"
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4 items-center justify-around",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 gap-4 items-center justify-around",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
