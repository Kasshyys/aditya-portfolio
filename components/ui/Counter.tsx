"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
  className?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({
  target,
  suffix = "",
  label,
  className,
  duration = 2000,
}) => {
  const [ref, isInView] = useInView(0.2);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number | null = null;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function (easeOutQuad)
        const easedProgress = 1 - (1 - progress) * (1 - progress);
        
        setCount(Math.floor(easedProgress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration, hasAnimated]);

  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-baseline">
        <span className="text-4xl md:text-5xl font-bold font-display text-accent">
          {count}
        </span>
        <span className="text-2xl font-bold font-display text-accent">{suffix}</span>
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted">
        {label}
      </span>
    </div>
  );
};

export default Counter;
