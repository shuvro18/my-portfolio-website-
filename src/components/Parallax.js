"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "./SmoothScrollProvider";

export default function Parallax({
  children,
  speed = 0.15,
  className = "",
  style,
}) {
  const ref = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis || !ref.current) return;

    const element = ref.current;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = center - window.innerHeight / 2;
      element.style.transform = `translate3d(0, ${distance * speed}px, 0)`;
    };

    lenis.on("scroll", update);
    update();

    return () => lenis.off("scroll", update);
  }, [lenis, speed]);

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
