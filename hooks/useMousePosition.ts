"use client";

import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let requestRef: number;

    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(requestRef);
      requestRef = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return mousePosition;
};
