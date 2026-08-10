export const EASE_OUT = [0.22, 1, 0.36, 1];

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(8px)",
  },
};

export const pageTransition = {
  duration: 0.65,
  ease: EASE_OUT,
};

export const sectionVariants = {
  hidden: (direction = 1) => ({
    opacity: 0,
    y: direction * 56,
    filter: "blur(12px)",
  }),
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export const sectionTransition = {
  duration: 0.75,
  ease: EASE_OUT,
};

export const overlayVariants = {
  initial: { opacity: 0, backdropFilter: "blur(0px)" },
  animate: {
    opacity: 1,
    backdropFilter: "blur(6px)",
    transition: { duration: 0.25, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: { duration: 0.35, ease: EASE_OUT },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const fadeSlideItem = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: sectionTransition,
  },
};
