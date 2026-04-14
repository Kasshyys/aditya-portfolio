"use client";

import React from "react";
import { marqueeSkillsRow1, marqueeSkillsRow2 } from "@/lib/data/skills";
import Marquee from "@/components/ui/Marquee";

const SkillsMarquee: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-y border-border overflow-hidden bg-bg-secondary/50">
      <div className="flex flex-col gap-12">
        <Marquee direction="left" speed={25} className="py-2">
          {marqueeSkillsRow1.map((skill) => (
            <div key={skill} className="flex items-center gap-4 px-8">
              <span className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-text-primary">
                {skill}
              </span>
              <span className="text-accent text-3xl md:text-5xl">•</span>
            </div>
          ))}
        </Marquee>

        <Marquee direction="right" speed={30} className="py-2 opacity-70">
          {marqueeSkillsRow2.map((skill) => (
            <div key={skill} className="flex items-center gap-4 px-8">
              <span className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-text-primary">
                {skill}
              </span>
              <span className="text-accent text-3xl md:text-5xl">•</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SkillsMarquee;
