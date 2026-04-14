"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Calendar, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data/social";
import { personalInfo } from "@/lib/data/personal";
import Button from "@/components/ui/Button";
import BackToTop from "@/components/ui/BackToTop";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="w-full bg-bg-secondary border-t border-border pt-24 pb-12 relative">
      <div className="container flex flex-col gap-24">
        {/* Row 1: CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              Let&apos;s create something <span className="text-accent italic">amazing</span> together.
            </h2>
            <Button href="#contact" variant="primary">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Row 2: Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-border/50">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-text-muted">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted/60">
              Designed & Built by {personalInfo.name}
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent hover:scale-110 transition-all duration-300"
                aria-label={social.platform}
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;