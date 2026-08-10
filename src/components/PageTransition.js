"use client";

import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../lib/motionVariants";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
