"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { experiences } from "@/lib/data/experience";
import { sectionReveal } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import { cn } from "@/lib/utils";

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-section-padding-mobile md:py-section-padding-desktop">
      <div className="container max-w-4xl">
        <SectionHeading number="03/" title="Experience" />

        <div className="relative flex flex-col gap-12 pt-8">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={sectionReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="relative pl-12"
            >
              {/* Dot */}
              <div className={cn(
                "absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-bg-primary z-10 transition-colors duration-300",
                exp.endDate === "Present" ? "bg-accent" : "bg-border"
              )} />

              <div 
                className={cn(
                  "p-6 md:p-8 rounded-card border border-border bg-bg-secondary/50 cursor-pointer group transition-all duration-300",
                  expandedId === exp.id && "bg-bg-secondary border-accent/20"
                )}
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold font-body text-text-primary group-hover:text-accent transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-text-secondary font-medium">{exp.role}</p>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="mono text-xs text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded mb-2">
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-text-muted uppercase tracking-widest">
                      <MapPin size={10} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary text-sm md:text-base mb-4">
                  {exp.description}
                </p>

                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border flex flex-col gap-4">
                        <ul className="flex flex-col gap-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-text-secondary">
                              <span className="text-accent mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-2">
                          <TechBadge name={exp.type} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 flex justify-center">
                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} className="text-text-muted group-hover:text-accent transition-colors" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
