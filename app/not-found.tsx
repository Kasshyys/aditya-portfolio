"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-bg-primary overflow-hidden">
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            y: { 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="text-[25vw] md:text-[20vw] font-display font-black text-accent opacity-20 select-none"
        >
          404
        </motion.h1>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-text-primary">
              Oops! You&apos;re lost.
            </h2>
            <p className="max-w-md mx-auto mt-4 text-text-secondary">
              The page you&apos;re looking for doesn&apos;t exist or has been moved to a different dimension.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8"
          >
            <MagneticButton>
              <Button href="/">
                Go Back Home
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
