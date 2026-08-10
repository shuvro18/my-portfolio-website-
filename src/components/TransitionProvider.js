"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { overlayVariants } from "../lib/motionVariants";

const TransitionContext = createContext(null);

export function useSectionTransition() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerSectionTransition = useCallback((duration = 700) => {
    setIsTransitioning(true);
    window.setTimeout(() => setIsTransitioning(false), duration);
  }, []);

  return (
    <TransitionContext.Provider value={{ triggerSectionTransition, isTransitioning }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="section-blur-overlay"
            className="fixed inset-0 z-40 pointer-events-none bg-background/15"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            aria-hidden
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
