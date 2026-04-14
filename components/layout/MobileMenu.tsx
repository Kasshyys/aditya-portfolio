"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { socialLinks } from "@/lib/data/social";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9998] bg-bg-primary flex flex-col items-center justify-center p-8"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="flex flex-col items-center gap-12 w-full">
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  custom={i}
                  variants={linkVariants}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-4xl font-display uppercase tracking-widest hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              variants={linkVariants}
              custom={navLinks.length}
              className="mt-8"
            >
              <Button href="https://calendly.com/aditya-prakash-devlop" external>
                Book a Call
              </Button>
            </motion.div>

            <motion.div
              variants={linkVariants}
              custom={navLinks.length + 1}
              className="flex gap-8 mt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  <span className="sr-only">{social.platform}</span>
                  {/* Dynamic icon logic can be added here or in social icons component */}
                  <span className="uppercase text-xs tracking-widest">{social.platform}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
