"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Glassmorphism effect
      setIsScrolled(currentScrollY > 50);

      // Hide/Show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-[9999] transition-all duration-500",
          isScrolled ? "bg-bg-primary/80 backdrop-blur-lg border-bottom border-border py-4" : "bg-transparent py-8",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-bold tracking-tighter text-text-primary">
            AP<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] uppercase tracking-widest font-medium text-text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button href="https://calendly.com/aditya-prakash-devlop" size="sm" external>
                Book a Call
              </Button>
            </div>
            
            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;