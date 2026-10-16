"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface AppointmentButtonProps {
  href?: string;
  text?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export const AppointmentButton: React.FC<AppointmentButtonProps> = ({
  href = "#",
  text = "Book an Appointment",
  size = "md",
  className = "",
  onClick,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2 h-[48px]",
    lg: "px-8 py-3.5 text-base gap-2.5 h-[56px] md:h-[60px]",
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 20,
  };

  const content = (
    <motion.button
      type="button"
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.99 }}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center font-semibold text-white rounded-xl transition-all duration-300 gold-gradient gold-gradient-hover luxury-gold-shadow cursor-pointer tracking-wide ${sizeClasses[size]} ${className}`}
    >
      <Calendar
        size={iconSizes[size]}
        className="shrink-0 transition-transform duration-300 group-hover:scale-110"
      />
      <span>{text}</span>
      <ChevronRight
        size={iconSizes[size]}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
};
