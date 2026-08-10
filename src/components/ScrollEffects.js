"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Vertical parallax for images and content blocks */
export function Parallax({
  children,
  className = "",
  speed = 30,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}px`, `${speed}px`]);

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </Tag>
  );
}

/** Parallax for absolute-positioned backgrounds inside a section */
export function ParallaxLayer({ className = "", style, speed = 0.35 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 60}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className={className}
        style={{ ...style, y, scale }}
      />
    </div>
  );
}

/** Scale + shift depth effect as elements enter the viewport */
export function ScrollDepth({
  children,
  className = "",
  yOffset = 48,
  scaleFrom = 0.94,
  scaleTo = 1,
  fade = true,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [scaleFrom, scaleTo]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], fade ? [0.55, 1] : [1, 1]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, scale, opacity }}
    >
      {children}
    </motion.div>
  );
}
