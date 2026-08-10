"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "./SmoothScrollProvider";

export default function ScrollDepth({
  children,
  className = "",
  scaleFrom = 0.94,
  scaleTo = 1,
  shiftY = 36,
  style,
}) {
  const ref = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis || !ref.current) return;

    const element = ref.current;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight * 0.85))
      );
      const scale = scaleFrom + (scaleTo - scaleFrom) * progress;
      const translateY = (1 - progress) * shiftY;

      element.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    };

    lenis.on("scroll", update);
    update();

    return () => lenis.off("scroll", update);
  }, [lenis, scaleFrom, scaleTo, shiftY]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", ...style }}
    >
      {children}
    </div>
  );
}
