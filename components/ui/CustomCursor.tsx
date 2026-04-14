"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [cursorType, setCursorType] = useState<string>("default");
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    mouseX.set(x);
    mouseY.set(y);
  }, [x, y, mouseX, mouseY]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      
      if (cursorAttr) {
        setCursorType(cursorAttr);
      } else if (target.closest("a, button")) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (isMobile) return null;

  const variants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: "var(--accent)",
      boxShadow: "0 0 10px var(--accent)",
    },
    pointer: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid var(--accent)",
      mixBlendMode: "difference" as const,
    },
    project: {
      width: 90,
      height: 90,
      backgroundColor: "var(--accent)",
      color: "white",
      content: '"VIEW"',
      boxShadow: "0 0 20px rgba(220, 20, 60, 0.4)",
    },
    text: {
      width: 2,
      height: 24,
      borderRadius: "1px",
      backgroundColor: "var(--accent)",
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full flex items-center justify-center text-[10px] font-bold mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={cursorType}
        variants={variants as any}
      >
        {cursorType === "project" && "VIEW"}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent pointer-events-none z-[10001] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;