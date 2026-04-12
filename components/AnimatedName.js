"use client";

import { useEffect, useRef } from "react";
import { useNativeAnimation } from "@mihirsarya/manim-scroll";

export default function AnimatedName() {
  const containerRef = useRef(null);
  const hasPlayedRef = useRef(false);

  const { isReady, play } = useNativeAnimation({
    ref: containerRef,
    text: "Nihar Kodkani",
    fontSize: 42,
    color: "#f0ece0",
    fontUrl:
      "/fonts/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf",
    strokeWidth: 1.6,
  });

  useEffect(() => {
    if (isReady) {
      const svg = containerRef.current?.querySelector("svg");
      if (svg) {
        svg.style.verticalAlign = "top";
        svg.style.display = "block";
        svg.style.transform = "translateY(-26px)";
      }
    }
  }, [isReady]);

  useEffect(() => {
    if (isReady && !hasPlayedRef.current) {
      hasPlayedRef.current = true;
      play({
        duration: 1450,
        easing: "ease-out",
      });
    }
  }, [isReady, play]);

  return (
    <h1 className="hero-name">
      <span className="hero-name-placeholder" aria-hidden="true">
        Nihar Kodkani
      </span>
      <span ref={containerRef} className="hero-manim-shell" aria-hidden="true" />
    </h1>
  );
}
