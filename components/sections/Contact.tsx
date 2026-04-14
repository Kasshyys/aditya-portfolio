"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Calendar, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data/personal";
import { socialLinks } from "@/lib/data/social";
import { sectionReveal } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import MagneticButton from "@/components/ui/MagneticButton";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github": return <Github size={20} />;
      case "linkedin": return <Linkedin size={20} />;
      case "calendar": return <Calendar size={20} />;
      case "email": return <Mail size={20} />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-section-padding-mobile md:py-section-padding-desktop bg-bg-primary">
      <div className="container">
        <SectionHeading 
          number="05/" 
          title="Let's Work Together" 
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Info */}
          <div className="flex flex-col gap-12">
            <motion.div
              variants={sectionReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <AvailabilityBadge available={personalInfo.available} className="w-fit" />
              
              <div className="flex flex-col gap-2">
                <span className="mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
                  Email Me
                </span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-2xl md:text-3xl font-display font-medium text-text-primary hover:text-accent transition-colors underline-offset-8 hover:underline decoration-1"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-text-muted">
                <MapPin size={16} className="text-accent" />
                <span className="text-sm uppercase tracking-widest">{personalInfo.location}</span>
                <span className="text-xs italic ml-2 opacity-60">(Typically responds within 24h)</span>
              </div>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              custom={0.2}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                <span className="mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
                  Schedule a Call
                </span>
                <MagneticButton className="w-fit">
                  <a 
                    href={personalInfo.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-[#0a0a0a] rounded-button font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all"
                  >
                    Book a Call ↗
                  </a>
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div
              variants={sectionReveal}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              custom={0.4}
              className="flex flex-col gap-4"
            >
              <span className="mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
                Follow Me
              </span>
              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border text-text-muted hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300"
                    aria-label={social.platform}
                  >
                    {getIcon(social.platform)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            variants={sectionReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            custom={0.2}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
