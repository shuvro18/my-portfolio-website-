"use client";

import { motion } from "framer-motion";
import { sectionTransition, sectionVariants } from "../lib/motionVariants";

export default function SectionTransition({
  children,
  className = "",
  direction = 1,
  delay = 0,
  as = "div",
}) {
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-8% 0px -8% 0px" }}
      variants={sectionVariants}
      transition={{ ...sectionTransition, delay }}
    >
      {children}
    </Tag>
  );
}
