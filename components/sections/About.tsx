"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data/personal";
import { sectionReveal, imageReveal } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import MagneticButton from "@/components/ui/MagneticButton";

const About: React.FC = () => {
  return (
    <section id="about" className="py-section-padding-mobile md:py-section-padding-desktop">
      <div className="container">
        <SectionHeading 
          number="01/" 
          title="About Me" 
          subtitle="A peek into my journey and philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Text */}
          <div className="flex flex-col gap-8">
            {personalInfo.bio.map((para, i) => (
              <motion.p 
                key={i}
                variants={sectionReveal}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="text-text-secondary text-base md:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: para.replace(
                    /(full-stack|designer|digital products|thoughtful design|robust engineering|pixel-perfect|scalable backend|empathy|attention to detail)/g,
                    '<span class="text-accent">$1</span>'
                  )
                }}
              />
            ))}

            <motion.blockquote
              variants={sectionReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="border-l-2 border-accent pl-6 py-2 my-4 italic font-display text-xl text-text-muted"
            >
              "I believe in building software that not only solves problems but delights the people who use it."
            </motion.blockquote>

            <motion.div
              variants={sectionReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="mt-4"
            >
              <MagneticButton>
                <Button href={personalInfo.resumeUrl} external>
                  Download Resume ↓
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            variants={imageReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0 rounded-card overflow-hidden group"
          >
            <div className="absolute inset-0 bg-accent/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
            <div className="w-full h-full bg-bg-secondary flex items-center justify-center text-text-muted font-display text-2xl">
              {/* Photo Placeholder */}
              PHOTO
            </div>
            {/* 
            <Image
              src="/images/profile/aditya-prakash.jpg"
              alt="Aditya Prakash"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            /> 
            */}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {personalInfo.stats.map((stat, i) => (
            <Counter
              key={i}
              target={parseInt(stat.value)}
              suffix={stat.value.replace(/[0-9]/g, "")}
              label={stat.label}
              className={cn(
                i !== 0 && "lg:border-l lg:border-border lg:pl-8 text-center lg:text-left"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for cn in this file since it's used inside the map
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default About;
