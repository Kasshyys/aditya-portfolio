import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (custom?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom || 0,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const sectionReveal: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const imageReveal: Variants = {
  initial: {
    scale: 1.1,
    opacity: 0,
    clipPath: "inset(100% 0 0 0)",
  },
  whileInView: {
    scale: 1,
    opacity: 1,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const projectCardHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  exit: { opacity: 0 },
};

export const loaderExit: Variants = {
  animate: {
    y: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
