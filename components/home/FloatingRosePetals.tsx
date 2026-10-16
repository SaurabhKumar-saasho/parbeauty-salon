"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface PetalConfig {
  id: number;
  type: "rose" | "petal";
  width: number;
  height: number;
  initialX: string;
  initialY: string;
  travelX: number[];
  travelY: number[];
  rotation: number[];
  rotateX: number[];
  rotateY: number[];
  opacity: number[];
  duration: number;
  delay: number;
  gradientId: string;
}

// 12 gracefully distributed 50px floating roses and velvety petals
const PETALS: PetalConfig[] = [
  // 1. Top-Left Corner Drift (Rose Flower)
  {
    id: 1,
    type: "rose",
    width: 50,
    height: 50,
    initialX: "3%",
    initialY: "5%",
    travelX: [0, 22, -12, 28, 8],
    travelY: [0, 60, 135, 215, 300],
    rotation: [0, 45, 90, 140, 180],
    rotateX: [0, 35, 55, 20, 0],
    rotateY: [0, 25, -20, 30, 0],
    opacity: [0, 0.85, 0.9, 0.7, 0],
    duration: 16,
    delay: 0,
    gradientId: "petalGradSoftRose",
  },
  // 2. Far Right Upper Margin (Velvet Petal)
  {
    id: 2,
    type: "petal",
    width: 48,
    height: 54,
    initialX: "88%",
    initialY: "7%",
    travelX: [0, -20, 14, -25, -5],
    travelY: [0, 70, 150, 240, 330],
    rotation: [-20, 15, -35, 10, -15],
    rotateX: [20, 60, 30, 50, 20],
    rotateY: [10, -40, 35, -20, 10],
    opacity: [0, 0.8, 0.9, 0.65, 0],
    duration: 18,
    delay: 1.5,
    gradientId: "petalGradBlushPink",
  },
  // 3. Upper Left-Center (Rose Flower)
  {
    id: 3,
    type: "rose",
    width: 50,
    height: 50,
    initialX: "22%",
    initialY: "4%",
    travelX: [0, 18, -10, 22, 6],
    travelY: [0, 55, 120, 190, 270],
    rotation: [15, 60, 110, 160, 210],
    rotateX: [10, 45, 25, 50, 10],
    rotateY: [-15, 30, -25, 20, -15],
    opacity: [0, 0.75, 0.85, 0.6, 0],
    duration: 17,
    delay: 3,
    gradientId: "petalGradChampagneRose",
  },
  // 4. Upper Right-Center (Rose Flower)
  {
    id: 4,
    type: "rose",
    width: 50,
    height: 50,
    initialX: "72%",
    initialY: "5%",
    travelX: [0, -16, 12, -20, 2],
    travelY: [0, 65, 140, 220, 305],
    rotation: [30, 80, 130, 185, 240],
    rotateX: [0, 40, 65, 25, 0],
    rotateY: [15, -30, 40, -10, 15],
    opacity: [0, 0.8, 0.9, 0.65, 0],
    duration: 19,
    delay: 4.5,
    gradientId: "petalGradDeepRose",
  },
  // 5. Mid-Left Flank (Velvet Petal)
  {
    id: 5,
    type: "petal",
    width: 50,
    height: 56,
    initialX: "5%",
    initialY: "36%",
    travelX: [0, 16, -14, 20, 4],
    travelY: [0, 50, 110, 175, 240],
    rotation: [30, -15, 25, -20, 10],
    rotateX: [0, 45, 20, 55, 0],
    rotateY: [0, -35, 30, -15, 0],
    opacity: [0, 0.75, 0.85, 0.55, 0],
    duration: 15,
    delay: 6,
    gradientId: "petalGradSoftRose",
  },
  // 6. Mid-Right Flank (Rose Flower)
  {
    id: 6,
    type: "rose",
    width: 50,
    height: 50,
    initialX: "91%",
    initialY: "32%",
    travelX: [0, -18, 10, -22, -6],
    travelY: [0, 55, 125, 195, 265],
    rotation: [-10, 40, 95, 150, 200],
    rotateX: [15, 55, 25, 60, 15],
    rotateY: [-20, 30, -45, 20, -20],
    opacity: [0, 0.85, 0.9, 0.7, 0],
    duration: 17.5,
    delay: 7.5,
    gradientId: "petalGradBlushPink",
  },
  // 7. Lower Left Edge (Rose Flower)
  {
    id: 7,
    type: "rose",
    width: 50,
    height: 50,
    initialX: "7%",
    initialY: "62%",
    travelX: [0, 14, -10, 18, 2],
    travelY: [0, 45, 95, 150, 210],
    rotation: [20, 70, 120, 175, 230],
    rotateX: [10, 40, 70, 30, 10],
    rotateY: [0, 45, -25, 35, 0],
    opacity: [0, 0.75, 0.85, 0.55, 0],
    duration: 14.5,
    delay: 9,
    gradientId: "petalGradChampagneRose",
  },
  // 8. Lower Right Flank (Velvet Petal)
  {
    id: 8,
    type: "petal",
    width: 48,
    height: 55,
    initialX: "86%",
    initialY: "58%",
    travelX: [0, -15, 12, -18, -2],
    travelY: [0, 50, 105, 165, 225],
    rotation: [-25, 20, -15, 30, 5],
    rotateX: [25, 50, 15, 45, 25],
    rotateY: [-15, 25, -35, 15, -15],
    opacity: [0, 0.8, 0.85, 0.6, 0],
    duration: 16.5,
    delay: 10.5,
    gradientId: "petalGradDeepRose",
  },
  // 9. Bottom Left Ambient (Rose Flower)
  {
    id: 9,
    type: "rose",
    width: 50,
    height: 50,
    initialX: "16%",
    initialY: "78%",
    travelX: [0, 12, -8, 15, 3],
    travelY: [0, 35, 75, 120, 170],
    rotation: [45, 95, 150, 205, 260],
    rotateX: [0, 50, 20, 65, 0],
    rotateY: [20, -25, 35, -15, 20],
    opacity: [0, 0.7, 0.8, 0.5, 0],
    duration: 15,
    delay: 12,
    gradientId: "petalGradSoftRose",
  },
  // 10. Bottom Right Ambient (Rose Flower)
  {
    id: 10,
    type: "rose",
    width: 50,
    height: 50,
    initialX: "78%",
    initialY: "75%",
    travelX: [0, -14, 8, -16, 0],
    travelY: [0, 40, 85, 135, 185],
    rotation: [-30, 20, 75, 130, 185],
    rotateX: [15, 45, 65, 30, 15],
    rotateY: [-10, 35, -20, 25, -10],
    opacity: [0, 0.75, 0.85, 0.55, 0],
    duration: 14,
    delay: 13.5,
    gradientId: "petalGradBlushPink",
  },
  // 11. Top Center Ambient Sky (Velvet Petal)
  {
    id: 11,
    type: "petal",
    width: 48,
    height: 54,
    initialX: "46%",
    initialY: "3%",
    travelX: [0, 20, -15, 25, 5],
    travelY: [0, 65, 140, 225, 310],
    rotation: [10, 55, 20, 70, 40],
    rotateX: [0, 40, 65, 25, 0],
    rotateY: [10, -30, 25, -20, 10],
    opacity: [0, 0.8, 0.9, 0.6, 0],
    duration: 18.5,
    delay: 15,
    gradientId: "petalGradChampagneRose",
  },
  // 12. Far Right Ambient Corner (Rose Flower)
  {
    id: 12,
    type: "rose",
    width: 50,
    height: 50,
    initialX: "94%",
    initialY: "48%",
    travelX: [0, -12, 10, -15, -3],
    travelY: [0, 50, 110, 175, 240],
    rotation: [-15, 35, 90, 145, 195],
    rotateX: [20, 55, 30, 60, 20],
    rotateY: [0, 40, -30, 25, 0],
    opacity: [0, 0.8, 0.85, 0.65, 0],
    duration: 16,
    delay: 8,
    gradientId: "petalGradDeepRose",
  },
];

export const FloatingRosePetals: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // 1. Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      return;
    }

    // 2. Performance: Pause rendering when hero section is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (reducedMotion || !isInView) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none"
      aria-hidden="true"
    >
      {/* Shared SVG Gradients for realism and zero extra asset downloads */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* 1. Soft Rose Gradient */}
          <linearGradient id="petalGradSoftRose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE2E4" />
            <stop offset="40%" stopColor="#F8A5B5" />
            <stop offset="80%" stopColor="#E26D8C" />
            <stop offset="100%" stopColor="#B94464" />
          </linearGradient>

          {/* 2. Blush Pink Gradient */}
          <linearGradient id="petalGradBlushPink" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#FFF0F3" />
            <stop offset="35%" stopColor="#FFB3C1" />
            <stop offset="75%" stopColor="#F43F72" />
            <stop offset="100%" stopColor="#C2214E" />
          </linearGradient>

          {/* 3. Champagne Rose Glow */}
          <linearGradient id="petalGradChampagneRose" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FFF5EB" />
            <stop offset="35%" stopColor="#FCC5BC" />
            <stop offset="75%" stopColor="#E88F80" />
            <stop offset="100%" stopColor="#B84F63" />
          </linearGradient>

          {/* 4. Deep Velvety Rose */}
          <linearGradient id="petalGradDeepRose" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#FFE3E8" />
            <stop offset="35%" stopColor="#F2849E" />
            <stop offset="75%" stopColor="#D93864" />
            <stop offset="100%" stopColor="#9C183E" />
          </linearGradient>

          {/* Subtle petal highlight curve */}
          <linearGradient id="petalVelvetSheen" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#FAD2E1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E2849D" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Render 12 lightweight Motion 50px floating roses and petals */}
      {PETALS.map((item) => (
        <motion.div
          key={item.id}
          style={{
            position: "absolute",
            left: item.initialX,
            top: item.initialY,
            width: item.width,
            height: item.height,
            willChange: "transform, opacity",
          }}
          animate={{
            x: item.travelX,
            y: item.travelY,
            rotate: item.rotation,
            rotateX: item.rotateX,
            rotateY: item.rotateY,
            opacity: item.opacity,
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none drop-shadow-[0_4px_12px_rgba(217,95,125,0.32)]"
        >
          {item.type === "rose" ? (
            /* 50px Blooming Rose Flower */
            <svg
              viewBox="0 0 50 50"
              fill="none"
              className="w-full h-full transform-gpu"
            >
              {/* Outer Bloom Silhouette */}
              <circle cx="25" cy="25" r="23" fill={`url(#${item.gradientId})`} />

              {/* Layer 1 Outer Curved Petals */}
              <path
                d="M25 2 C37 2 48 11 48 24 C48 37 37 48 25 48 C13 48 2 37 2 24 C2 11 13 2 25 2 Z"
                fill={`url(#${item.gradientId})`}
                stroke="#FFF0F3"
                strokeWidth="0.8"
                strokeOpacity="0.45"
              />

              {/* Layer 2 Mid Petal Swirls */}
              <path
                d="M10 17 C16 8 34 8 40 17 C45 25 40 38 32 42 C22 45 11 37 9 27 C8 22 9 19 10 17 Z"
                fill="url(#petalVelvetSheen)"
                fillOpacity="0.5"
              />

              {/* Layer 3 Inner Petal Ring */}
              <path
                d="M25 9 C33 9 40 16 40 25 C40 33 33 40 25 40 C17 40 10 33 10 25 C10 16 17 9 25 9 Z"
                fill={`url(#${item.gradientId})`}
                stroke="#B94464"
                strokeWidth="0.75"
                strokeOpacity="0.6"
              />

              {/* Inner Petal Contour */}
              <path
                d="M20 16 C26 12 33 15 34 21 C35 28 30 32 24 32 C18 31 16 26 18 20 C19 17 21 16 23 16"
                stroke="#FFF5F7"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Rosette Center Core */}
              <circle cx="25" cy="24.5" r="4" fill="#8C1D3E" fillOpacity="0.7" />
              <circle cx="25" cy="24.5" r="1.8" fill="#FFE5EC" />
            </svg>
          ) : (
            /* 50px Velvety Rose Petal */
            <svg
              viewBox="0 0 50 56"
              fill="none"
              className="w-full h-full transform-gpu"
            >
              {/* Base Petal Body */}
              <path
                d="M25 2 C39 5 49 16 48 32 C46 47 34 55 25 55 C16 55 4 47 2 32 C1 16 11 5 25 2 Z"
                fill={`url(#${item.gradientId})`}
              />

              {/* Delicate Natural Curled Edge & Center Vein Highlight */}
              <path
                d="M25 5 C34 9 42 20 40 32 C39 43 31 50 25 53 C22 43 22 21 25 5 Z"
                fill="url(#petalVelvetSheen)"
              />

              {/* Subtle soft-rose bottom petal shadow */}
              <path
                d="M19 51 C22 54 28 54 31 51 C29 47 21 47 19 51 Z"
                fill="#8C1D3E"
                fillOpacity="0.38"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingRosePetals;
