"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/site-config";
import { ServiceHighlights } from "./ServiceHighlights";
import { FloatingRosePetals } from "./FloatingRosePetals";

export const HeroSection: React.FC = () => {
  return (
    <>
      {/* ============================================================== */}
      {/* DESKTOP HERO SECTION (100% UNTOUCHED ORIGINAL DESIGN)          */}
      {/* ============================================================== */}
      <section className="hidden lg:flex relative w-full h-[calc(100vh-162px)] min-h-[720px] max-h-[820px] bg-[#FFF9F3] overflow-hidden items-center">
        {/* BACKGROUND IMAGE: ONLY /images/hero.jpg */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <Image
            src="/images/hero.jpg"
            alt="Parul Beauty Salon - Luxury Bridal Makeover and Salon Interior"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Soft, silky ivory ambient contrast veil on the left for crystal-clear readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F3]/50 via-[#FFF9F3]/65 to-transparent w-full lg:w-[54%] hidden sm:block pointer-events-none" />
          <div className="absolute inset-0 bg-[#FFF9F3]/55 sm:hidden pointer-events-none" />
        </div>

        {/* ELEGANT FLOATING ROSE PETALS (HERO PERIPHERY) */}
        <FloatingRosePetals />

        {/* HERO CONTENT CONTAINER (LEFT CONTENT OVERLAY) */}
        <div className="relative z-20 max-w-[1680px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6 flex flex-col justify-center h-full">
          <div className="w-full lg:w-[50%] xl:w-[46%] flex flex-col justify-center space-y-4 lg:space-y-4.5">
            {/* Eyebrow Text: — LOOK BEAUTIFUL • FEEL CONFIDENT • BE YOU — */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center space-x-3 text-[#24082F]/85"
            >
              <span className="w-8 h-[1.5px] bg-[#B88736]/70 hidden sm:block" />
              <p className="text-[11.5px] sm:text-[12.5px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-[#24082F]">
                {SITE_CONFIG.hero.eyebrow}
              </p>
              <span className="w-8 h-[1.5px] bg-[#B88736]/70 hidden sm:block" />
            </motion.div>

            {/* Main Headline (H1): Exactly 2 Lines on Laptop & Desktop */}
            <h1 className="flex flex-col space-y-0.5">
              {/* Line 1: Elevate Your Beauty, */}
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                className="font-serif text-[42px] lg:text-[50px] xl:text-[62px] 2xl:text-[72px] font-medium text-[#24082F] leading-[1.08] tracking-[-0.015em] drop-shadow-sm whitespace-nowrap"
              >
                {SITE_CONFIG.hero.headingLine1}
              </motion.span>

              {/* Line 2: Reveal Your Radiance. */}
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="font-serif italic text-[42px] lg:text-[50px] xl:text-[62px] 2xl:text-[72px] font-normal text-[#B88736] gold-text-gradient leading-[1.08] tracking-[0.01em] drop-shadow-sm whitespace-nowrap"
              >
                {SITE_CONFIG.hero.headingLine2}
              </motion.span>
            </h1>

            {/* Supporting Text: High-contrast, clean sans-serif */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-[16.5px] sm:text-[18.5px] md:text-[20px] text-[#24082F]/90 font-normal leading-relaxed max-w-[540px]"
            >
              {SITE_CONFIG.hero.supportingText}
            </motion.p>

            {/* CTA Buttons: Primary & Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-1"
            >
              {/* Primary Button: Book Your Visit */}
              <Link href={SITE_CONFIG.hero.primaryCta.href}>
                <motion.button
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ y: 0, scale: 0.99 }}
                  className="group relative h-[52px] sm:h-[56px] px-7 rounded-xl gold-gradient gold-gradient-hover text-white font-semibold text-[15px] tracking-wide inline-flex items-center justify-center space-x-2.5 luxury-gold-shadow transition-all duration-300 cursor-pointer w-full sm:w-auto"
                >
                  <Calendar
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <span>{SITE_CONFIG.hero.primaryCta.text}</span>
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>

              {/* Secondary Button: Explore Services */}
              <Link href={SITE_CONFIG.hero.secondaryCta.href}>
                <motion.button
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ y: 0, scale: 0.99 }}
                  className="group relative h-[52px] sm:h-[56px] px-7 rounded-xl border-2 border-[#24082F] bg-[#FFF9F3]/80 hover:bg-[#24082F] hover:text-white text-[#24082F] font-semibold text-[15px] tracking-wide inline-flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer w-full sm:w-auto shadow-sm"
                >
                  <span>{SITE_CONFIG.hero.secondaryCta.text}</span>
                  <ChevronRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Service Highlights Row */}
            <div className="pt-2">
              <ServiceHighlights />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* MOBILE HERO SECTION (LUXURY BEAUTY PRODUCT STYLE)              */}
      {/* ============================================================== */}
      <section className="block lg:hidden relative w-full bg-[#FFF9F3] overflow-hidden">
        {/* Background Layer: /images/hero-mobile-bg.jpg */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <Image
            src="/images/hero-mobile-bg.jpg"
            alt="Parul Beauty Salon"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F3]/55 via-[#FFF9F3]/50 to-[#FFF9F3]/75 pointer-events-none" />
        </div>

        {/* ELEGANT FLOATING ROSE PETALS (MOBILE PERIPHERY) */}
        <FloatingRosePetals />

        {/* Content Container: Compact vertical flow tailored for mobile viewports - CENTERED */}
        <div className="relative z-20 px-4 pt-10 pb-10 flex flex-col items-center text-center space-y-2.5 max-w-[480px] mx-auto">

          {/* 1. Luxury Beauty Pill Badge - CENTERED */}
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-[#D6A64D]/50 shadow-[0_2px_8px_rgba(184,135,54,0.12)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B88736] animate-pulse" />
              <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-[#24082F]">
                25+ Years Beauty Excellence
              </span>
            </div>
          </div>

          {/* 2. Headline: Strictly 2 Lines on Mobile - CENTERED */}
          <h1 className="font-serif leading-[1.12] tracking-[-0.01em] text-center">
            <span className="block text-[40px] sm:text-[45px] font-medium text-[#24082F] whitespace-nowrap">
              {SITE_CONFIG.hero.headingLine1}
            </span>
            <span className="block italic text-[40px] sm:text-[45px] font-normal text-[#B88736] gold-text-gradient whitespace-nowrap mt-0.5">
              {SITE_CONFIG.hero.headingLine2}
            </span>
          </h1>

          {/* Golden Flourish Curve Underline - CENTERED */}
          <div className="-mt-1 py-0.5 flex justify-center">
            <svg className="w-40 h-2.5 text-[#B88736]" viewBox="0 0 160 12" fill="none">
              <defs>
                <linearGradient id="mobileFlourishGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C59849" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#F0CE84" stopOpacity="1" />
                  <stop offset="100%" stopColor="#B88736" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 0,6 C 35,12 75,0 115,7 C 135,10 150,3 160,6"
                stroke="url(#mobileFlourishGold)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 3. Subtitle Paragraph: Refined & Compact for Mobile - CENTERED */}
          <p className="text-[14px] sm:text-[15px] text-[#24082F]/85 font-normal leading-[1.42] line-clamp-2 text-center max-w-[360px] mx-auto">
            Led by master specialist Parul Patel. Precision eyebrow threading, Hydra Facials & bridal elegance in Tampa, FL.
          </p>

          {/* 4. Luxury Dual CTA Buttons (Side-by-Side Beauty Product Pills) - CENTERED */}
          <div className="grid grid-cols-2 gap-2.5 pt-0.5 w-full max-w-[340px] mx-auto">
            {/* Primary CTA */}
            <Link href={SITE_CONFIG.hero.primaryCta.href} className="w-full">
              <button className="w-full h-[44px] rounded-full gold-gradient text-white font-semibold text-[13px] sm:text-[13.5px] tracking-wide inline-flex items-center justify-center space-x-1.5 shadow-[0_4px_14px_rgba(184,135,54,0.32)] active:scale-[0.98] transition-transform cursor-pointer">
                <Calendar size={15} className="text-white shrink-0" />
                <span className="whitespace-nowrap">{SITE_CONFIG.hero.primaryCta.text}</span>
              </button>
            </Link>

            {/* Secondary CTA */}
            <Link href={SITE_CONFIG.hero.secondaryCta.href} className="w-full">
              <button className="w-full h-[44px] rounded-full border border-[#24082F]/30 bg-white/80 backdrop-blur-md text-[#24082F] font-semibold text-[13px] sm:text-[13.5px] tracking-wide inline-flex items-center justify-center space-x-1 shadow-sm active:scale-[0.98] transition-transform cursor-pointer">
                <span className="whitespace-nowrap">{SITE_CONFIG.hero.secondaryCta.text}</span>
                <ChevronRight size={15} className="text-[#24082F]/70 shrink-0" />
              </button>
            </Link>
          </div>

          {/* 5. 2x2 Luxury Beauty Product Service Cards - CENTERED */}
          <div className="pt-2 w-full max-w-[380px] mx-auto">
            <div className="grid grid-cols-2 gap-2">
              {/* Card 1: Brow & Facial Threading */}
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-white/85 backdrop-blur-md border border-[#D6A64D]/40 shadow-[0_2px_10px_rgba(184,135,54,0.08)]">
                <div className="w-[36px] h-[36px] rounded-full border border-[#B88736]/70 bg-gradient-to-br from-[#FFF9F3] to-[#F5EAD8] flex items-center justify-center shrink-0 text-[#B88736] shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 10 C10 6 18 6 26 9.5" strokeWidth="2" />
                    <path d="M5 18 C9 12 17 12 27 18" />
                    <path d="M5 18 C9 23 17 23 27 18" />
                    <circle cx="16" cy="17.5" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold text-[#24082F] tracking-[0.03em] uppercase leading-tight truncate">
                    Brow Threading
                  </span>
                  <span className="text-[8.5px] text-[#B88736] font-medium tracking-wide">
                    Precision Shape
                  </span>
                </div>
              </div>

              {/* Card 2: Hydra & Advanced Facials */}
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-white/85 backdrop-blur-md border border-[#D6A64D]/40 shadow-[0_2px_10px_rgba(184,135,54,0.08)]">
                <div className="w-[36px] h-[36px] rounded-full border border-[#B88736]/70 bg-gradient-to-br from-[#FFF9F3] to-[#F5EAD8] flex items-center justify-center shrink-0 text-[#B88736] shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 6 C14 11 14 17 16 21 C18 17 18 11 16 6 Z" />
                    <path d="M15 10 C11 12 9 17 11 21 C13 21 15 19 16 17" />
                    <path d="M17 10 C21 12 23 17 21 21 C19 21 17 19 16 17" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold text-[#24082F] tracking-[0.03em] uppercase leading-tight truncate">
                    Hydra Facials
                  </span>
                  <span className="text-[8.5px] text-[#B88736] font-medium tracking-wide">
                    Skin Glow Care
                  </span>
                </div>
              </div>

              {/* Card 3: Comfortable Waxing */}
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-white/85 backdrop-blur-md border border-[#D6A64D]/40 shadow-[0_2px_10px_rgba(184,135,54,0.08)]">
                <div className="w-[36px] h-[36px] rounded-full border border-[#B88736]/70 bg-gradient-to-br from-[#FFF9F3] to-[#F5EAD8] flex items-center justify-center shrink-0 text-[#B88736] shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 7 C16 7 10 16 10 20 C10 23.3 12.7 26 16 26 C19.3 26 22 23.3 22 20 C22 16 16 7 16 7 Z" />
                    <path d="M14 17 C13 18.5 13 21 14.5 22.5" strokeWidth="1.2" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold text-[#24082F] tracking-[0.03em] uppercase leading-tight truncate">
                    Gentle Waxing
                  </span>
                  <span className="text-[8.5px] text-[#B88736] font-medium tracking-wide">
                    Smooth Comfort
                  </span>
                </div>
              </div>

              {/* Card 4: Bridal & Henna */}
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-white/85 backdrop-blur-md border border-[#D6A64D]/40 shadow-[0_2px_10px_rgba(184,135,54,0.08)]">
                <div className="w-[36px] h-[36px] rounded-full border border-[#B88736]/70 bg-gradient-to-br from-[#FFF9F3] to-[#F5EAD8] flex items-center justify-center shrink-0 text-[#B88736] shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 8 C14 5 21 6 24 11 C26 15 25 21 21 25" />
                    <path d="M12 9 C15 7 20 8 22 12" strokeWidth="1" strokeOpacity="0.7" />
                    <circle cx="9" cy="8" r="1.5" fill="#B88736" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold text-[#24082F] tracking-[0.03em] uppercase leading-tight truncate">
                    Bridal & Henna
                  </span>
                  <span className="text-[8.5px] text-[#B88736] font-medium tracking-wide">
                    Artistry & Glam
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
