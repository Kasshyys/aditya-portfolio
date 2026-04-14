"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonHover } from "@/lib/animations";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  external = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-xs focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary min-h-[44px] min-w-[44px]";
  
  const variants = {
    primary: "bg-accent text-white rounded-button hover:bg-hover hover:shadow-glow transition-shadow duration-300",
    secondary: "bg-transparent border border-border text-text-primary rounded-button hover:bg-card-bg hover:shadow-sm",
    ghost: "bg-transparent text-text-primary hover:underline underline-offset-4",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-8 py-3 text-xs",
    lg: "px-10 py-4 text-sm",
  };

  const content = (
    <>
      {loading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </>
  );

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          whileHover="hover"
          variants={buttonHover}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          className={combinedClassName}
          whileHover="hover"
          variants={buttonHover}
        >
          {content}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClassName}
      whileHover="hover"
      variants={buttonHover}
    >
      {content}
    </motion.button>
  );
};

export default Button;
