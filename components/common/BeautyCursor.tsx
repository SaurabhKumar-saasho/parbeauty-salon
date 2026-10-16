"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  driftX: number;
  driftY: number;
  rotation: number;
}

// Sophisticated beauty color palette: Champagne Gold, Rose Gold, Warm Gold, Soft Blush
const SPARKLE_COLORS = [
  "#E5BD6F", // Champagne Gold
  "#F3CF82", // Radiant Warm Gold
  "#E5A9B4", // Rose Gold Glow
  "#E8B4B8", // Soft Blush Petal
  "#D6A64D", // Salon Accent Gold
];

export const BeautyCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  // Motion values for ultra-performant, 60fps GPU position tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Soft trailing spring for the blush-pink radial glow (soft, luxurious damping)
  const glowSpringConfig = { damping: 28, stiffness: 180, mass: 0.8 };
  const smoothGlowX = useSpring(mouseX, glowSpringConfig);
  const smoothGlowY = useSpring(mouseY, glowSpringConfig);

  // Closer spring for delicate rose-gold cursor ring/halo
  const haloSpringConfig = { damping: 22, stiffness: 320, mass: 0.3 };
  const smoothHaloX = useSpring(mouseX, haloSpringConfig);
  const smoothHaloY = useSpring(mouseY, haloSpringConfig);

  // Transform coordinates so glow is centered on cursor (320px glow -> offset -160px)
  const glowTranslateX = useTransform(smoothGlowX, (x) => x - 160);
  const glowTranslateY = useTransform(smoothGlowY, (y) => y - 160);

  // Transform coordinates for delicate cursor halo (36px halo -> offset -18px)
  const haloTranslateX = useTransform(smoothHaloX, (x) => x - 18);
  const haloTranslateY = useTransform(smoothHaloY, (y) => y - 18);

  // Throttle references for sparkle generation to keep CPU/GPU lightweight
  const lastSparkleTime = useRef(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const sparkleIdCounter = useRef(0);

  const addSparkle = useCallback((x: number, y: number) => {
    const now = Date.now();
    // Throttle: spawn at most once every 90ms
    if (now - lastSparkleTime.current < 90) return;

    // Minimum distance moved before spawning a sparkle (16px)
    const dx = x - lastMousePos.current.x;
    const dy = y - lastMousePos.current.y;
    const distance = Math.hypot(dx, dy);
    if (distance < 16) return;

    lastSparkleTime.current = now;
    lastMousePos.current = { x, y };

    const randomColor =
      SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
    const randomSize = 10 + Math.random() * 8; // 10px to 18px
    const angle = Math.random() * Math.PI * 2;
    const driftDistance = 14 + Math.random() * 22;

    const newSparkle: Sparkle = {
      id: sparkleIdCounter.current++,
      x: x + (Math.random() - 0.5) * 12,
      y: y + (Math.random() - 0.5) * 12,
      size: randomSize,
      color: randomColor,
      driftX: Math.cos(angle) * driftDistance,
      driftY: Math.sin(angle) * driftDistance - 10, // slight upward float
      rotation: Math.random() * 90 - 45,
    };

    setSparkles((prev) => {
      // Keep maximum 8 active sparkles concurrently
      const trimmed = prev.length >= 8 ? prev.slice(prev.length - 7) : prev;
      return [...trimmed, newSparkle];
    });

    // Automatically remove sparkle after animation completes
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 850);
  }, []);

  useEffect(() => {
    // 1. Accessibility: Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // 2. Mobile / Touch Devices: Disable entirely on touch devices
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Interactive hover check
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            "button, a, input, textarea, select, [role='button'], .cursor-pointer"
          )
        );
        setIsHovering(isInteractive);
      }

      addSparkle(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, addSparkle]);

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. SOFT BLUSH-PINK & WARM GOLD RADIAL GLOW (TRAILS MOUSE FLUIDLY) */}
      <motion.div
        style={{
          x: glowTranslateX,
          y: glowTranslateY,
          width: 320,
          height: 320,
        }}
        animate={{
          scale: isHovering ? 1.25 : 1,
          opacity: isHovering ? 0.95 : 0.75,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute rounded-full pointer-events-none"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(244, 194, 206, 0.28) 0%, rgba(240, 206, 132, 0.16) 38%, rgba(235, 178, 185, 0.08) 58%, rgba(255, 249, 243, 0) 72%)",
            filter: "blur(6px)",
          }}
        />
      </motion.div>

      {/* 2. DELICATE ROSE-GOLD & CHAMPAGNE HALO RING */}
      <motion.div
        style={{
          x: haloTranslateX,
          y: haloTranslateY,
          width: 46,
          height: 46,
        }}
        animate={{
          scale: isHovering ? 1.45 : 1,
          borderColor: isHovering
            ? "rgba(229, 189, 111, 0.85)"
            : "rgba(232, 169, 180, 0.55)",
          backgroundColor: isHovering
            ? "rgba(244, 194, 206, 0.12)"
            : "rgba(255, 249, 243, 0.04)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute rounded-full border border-dashed pointer-events-none shadow-[0_0_12px_rgba(229,189,111,0.25)]"
      >
        {/* Subtle center golden pin-light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#E5BD6F]/60" />
      </motion.div>

      {/* 3. FLOATING ROSE-GOLD & CHAMPAGNE-GOLD BEAUTY SPARKLES */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{
              x: sparkle.x - sparkle.size / 2,
              y: sparkle.y - sparkle.size / 2,
              scale: 0.2,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              x: sparkle.x - sparkle.size / 2 + sparkle.driftX,
              y: sparkle.y - sparkle.size / 2 + sparkle.driftY,
              scale: [0.2, 1.1, 0.85, 0],
              opacity: [0, 1, 0.85, 0],
              rotate: [0, sparkle.rotation, sparkle.rotation * 1.8],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: sparkle.size,
              height: sparkle.size,
              color: sparkle.color,
            }}
            className="absolute pointer-events-none will-change-transform"
          >
            {/* Elegant 4-pointed Diamond Star / Beauty Sparkle */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full drop-shadow-[0_0_6px_rgba(240,206,132,0.6)]"
            >
              <path d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BeautyCursor;
