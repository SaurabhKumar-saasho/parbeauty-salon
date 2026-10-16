"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/site-config";

export const ServiceHighlights: React.FC = () => {
  // Custom luxury gold SVGs matching the reference image icons
  const renderIcon = (type: string) => {
    switch (type) {
      case "skin":
        return (
          // Skin care: delicate face contour with sparkles
          <svg
            className="w-6 h-6 text-[#B88736]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Sparkles */}
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeOpacity="0.6" />
            {/* Soft facial contour */}
            <path d="M7 11.5c0 3.2 2.2 5.5 5 5.5s5-2.3 5-5.5-2.2-6-5-6-5 2.8-5 6z" />
            <path d="M9.5 11a.5.5 0 100-1 .5.5 0 000 1z" fill="currentColor" />
            <path d="M14.5 11a.5.5 0 100-1 .5.5 0 000 1z" fill="currentColor" />
            <path d="M10.5 14c.8.6 2.2.6 3 0" />
          </svg>
        );

      case "brow":
        return (
          // Brow shaping & threading: stylized eye and defined eyebrow
          <svg
            className="w-6 h-6 text-[#B88736]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Sculpted Eyebrow */}
            <path d="M4 8.5c2.5-2.2 6.5-2.8 11-1.2 2 .7 4 2.2 5 3.2" strokeWidth="1.8" />
            {/* Eye contour */}
            <path d="M4 14.5c2.5-3.5 6-4.5 8-4.5s5.5 1 8 4.5" />
            <path d="M4 14.5c2.5 3 5.5 4 8 4s5.5-1 8-4" />
            {/* Iris */}
            <circle cx="12" cy="14" r="2.5" />
            <circle cx="12" cy="14" r="1" fill="currentColor" />
          </svg>
        );

      case "bridal":
        return (
          // Bridal makeup: graceful bridal bust with veil / jewelry
          <svg
            className="w-6 h-6 text-[#B88736]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Tiara / Bridal headband */}
            <path d="M7.5 7.5c1.5-1.5 3-2 4.5-2s3 .5 4.5 2" />
            <circle cx="12" cy="4" r="1" fill="currentColor" />
            {/* Face oval */}
            <path d="M8 9.5c0 2.8 1.8 4.5 4 4.5s4-1.7 4-4.5" />
            {/* Veil drapery */}
            <path d="M6 8c-1 3-1.5 7-1.5 11M18 8c1 3 1.5 7 1.5 11" />
            {/* Neck & necklace */}
            <path d="M10 14.5v2c-2.5 1-4.5 2.5-5.5 4.5M14 14.5v2c2.5 1 4.5 2.5 5.5 4.5" />
            <path d="M9.5 17c1.5 1 3.5 1 5 0" strokeDasharray="1.5 1.5" />
          </svg>
        );

      case "facial":
      default:
        return (
          // Facials: blooming serene lotus flower
          <svg
            className="w-6 h-6 text-[#B88736]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Center petal */}
            <path d="M12 4c-1.5 3.5-1.5 7.5 0 11 1.5-3.5 1.5-7.5 0-11z" />
            {/* Left petal */}
            <path d="M11 6.5C8 8.5 6 11.5 6 15c2.5 0 5-1 6-3" />
            {/* Right petal */}
            <path d="M13 6.5c3 2 5 5 5 8.5-2.5 0-5-1-6-3" />
            {/* Base water lily curve */}
            <path d="M4 17c3.5 2 12.5 2 16 0" />
          </svg>
        );
    }
  };

  return (
    <div className="pt-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 xl:gap-6 max-w-[620px]">
        {SITE_CONFIG.hero.serviceHighlights.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            {/* Circular gold-outline container */}
            <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full border border-[#B88736]/70 bg-[#FFF9F3]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-[#B88736] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(184,135,54,0.25)] mb-2.5">
              {renderIcon(item.icon)}
            </div>

            {/* Service Label */}
            <span className="text-[10.5px] sm:text-[11px] font-bold text-[#24082F] tracking-wider uppercase leading-tight group-hover:text-[#B88736] transition-colors max-w-[110px]">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
