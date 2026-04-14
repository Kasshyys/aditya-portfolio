"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setSelectedIdx(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-8 md:gap-16">
        {images.map((img, i) => {
          const isFullWidth = i % 3 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={cn(
                "relative rounded-card overflow-hidden bg-bg-secondary aspect-video cursor-zoom-in group",
                !isFullWidth && "lg:w-[48%]"
              )}
              onClick={() => openLightbox(i)}
            >
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="w-full h-full flex items-center justify-center text-text-muted font-display text-2xl uppercase">
                Screenshot {i + 1}
              </div>
              {/* 
              <Image 
                src={img} 
                alt={`Screenshot ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              /> 
              */}
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10010] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center pt-12 pb-24" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full h-full">
                <div className="w-full h-full flex items-center justify-center text-white/20 font-display text-4xl md:text-8xl font-black uppercase text-center">
                  Screenshot {selectedIdx + 1}
                </div>
                {/* 
                <Image 
                  src={images[selectedIdx]} 
                  alt={`Screenshot ${selectedIdx + 1}`}
                  fill
                  className="object-contain"
                /> 
                */}
              </div>

              {/* Navigation */}
              <button 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-accent transition-colors p-4"
                onClick={prevImage}
              >
                <ChevronLeft size={48} />
              </button>
              <button 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-accent transition-colors p-4"
                onClick={nextImage}
              >
                <ChevronRight size={48} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 mono text-white/60 text-sm tracking-widest uppercase">
                {selectedIdx + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper for cn in this file
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default ProjectGallery;