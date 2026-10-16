"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Diamond, Users, Leaf, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const renderLotus = () => (
    <svg className="w-8 h-8 text-[#E5BD6F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 4c-1.5 3.5-1.5 7.5 0 11 1.5-3.5 1.5-7.5 0-11z" />
      <path d="M11 6.5C8 8.5 6 11.5 6 15c2.5 0 5-1 6-3" />
      <path d="M13 6.5c3 2 5 5 5 8.5-2.5 0-5-1-6-3" />
      <path d="M4 17c3.5 2 12.5 2 16 0" />
    </svg>
  );

  return (
    <section className="relative w-full py-8 lg:py-16 bg-[#1E0528] text-white overflow-hidden">
      {/* ============================================================== */}
      {/* 1. BACKGROUND IMAGE: /images/about-bg.jpg                      */}
      {/* ============================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src="/images/about-section-bg.jpg"
          alt="Parul Beauty Salon - Luxury About Us"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-[#1E0528]/25 pointer-events-none" />
      </div>

      {/* ============================================================== */}
      {/* 2. SECTION CONTENT CONTAINER                                    */}
      {/* ============================================================== */}
      <div className="relative z-10 max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ============================================================== */}
          {/* LEFT COLUMN: ABOUT STORY (Cols 1-6)                            */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:space-y-6.5 max-w-[680px]">

            {/* Eyebrow: ———— ABOUT US ———— */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 text-[#D6A64D]"
            >
              <span className="w-10 h-[1.5px] bg-[#B88736]/70" />
              <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.26em] uppercase text-[#E5BD6F]">
                ABOUT US
              </span>
              <span className="w-10 h-[1.5px] bg-[#B88736]/70" />
            </motion.div>

            {/* Headline: Discover The Ultimate Special Experience */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col space-y-1"
            >
              <span className="font-serif text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] font-medium text-white leading-[1.08] tracking-[-0.01em]">
                Discover The Ultimate
              </span>
              <span className="font-serif italic text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] font-normal text-[#D6A64D] gold-text-gradient leading-[1.08] inline-flex items-center flex-wrap gap-x-2.5">
                <span>Salon Experience</span>
                <span className="inline-flex items-center">
                  <span>in Tampa</span>
                  {/* Delicate gold leaf flourish */}
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-[#E5BD6F] inline-block ml-2 opacity-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 21c4-4 7.5-7.5 7.5-12 0-3.5-3-6-7.5-6S4.5 5.5 4.5 9c0 4.5 3.5 8 7.5 12z" />
                    <path d="M12 6v10M9 9l3 3 3-3" />
                  </svg>
                </span>
              </span>
            </motion.h2>

            {/* Paragraph Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15.5px] sm:text-[17px] text-[#FFF9F3]/90 font-normal leading-relaxed"
            >
              With 25 years of hands-on expertise, founder Parul Patel enhances natural beauty through
              expert skincare, precision eyebrow threading, and virtually painless waxing. From advanced Hydra
              Facials to herbal treatments, every visit is deeply personalized in our clean, private suites.
            </motion.p>

            {/* ============================================================== */}
            {/* FOUNDER SPOTLIGHT HIGHLIGHT CARD: PARUL PATEL                  */}
            {/* ============================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2F0B3A]/95 via-[#3D114B]/85 to-[#220427]/95 border border-[#D6A64D]/60 p-5 sm:p-6 shadow-[0_14px_40px_rgba(0,0,0,0.48),0_0_28px_rgba(214,166,77,0.2)]"
            >
              {/* Top glowing neon champagne edge line */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#F7D893] to-transparent pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                {/* Large Founder Portrait with Glowing Double Gold Ring & Floating Badge */}
                <div className="relative shrink-0">
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-tr from-[#B88736] via-[#F5D78E] to-[#E5BD6F] shadow-[0_0_24px_rgba(229,189,111,0.5)]">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-[2.5px] border-[#1E0528] bg-[#1E0528]">
                      <Image
                        src="/images/parul1.jpg"
                        alt="Parul Patel - Founder & Master Specialist at Parul Beauty Salon"
                        fill
                        priority
                        className="object-cover object-top filter contrast-[1.06] scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Golden 'FOUNDER' Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#C59849] via-[#F0CE84] to-[#B88736] text-[#1E0528] text-[9.5px] sm:text-[10px] font-extrabold tracking-[0.18em] uppercase shadow-lg border border-[#FFF9F3]/40 whitespace-nowrap">
                    FOUNDER
                  </div>
                </div>

                {/* Founder Info, Credentials & Philosophy Quote */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                    <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-white tracking-wide leading-tight">
                      Parul Patel
                    </h3>
                    <span className="text-[10.5px] sm:text-[11px] px-3 py-0.5 rounded-full border border-[#D6A64D]/60 bg-[#E5BD6F]/15 text-[#F5D78E] font-semibold tracking-wide shadow-sm">
                      ★ 25+ Years Mastery
                    </span>
                  </div>

                  <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#E5BD6F]">
                    Founder & Master Specialist
                  </p>

                  {/* Founder Quote */}
                  <div className="relative pt-1 flex items-start space-x-1.5">
                    <span className="font-serif text-2xl sm:text-3xl text-[#E5BD6F] leading-none select-none shrink-0 -mt-1">
                      “
                    </span>
                    <p className="font-serif italic text-[14px] sm:text-[15.5px] text-[#FFF9F3]/95 leading-relaxed">
                      Beauty is not just what you see, it’s how you feel about yourself.
                    </p>
                    <span className="font-serif text-2xl sm:text-3xl text-[#E5BD6F] leading-none select-none shrink-0 self-end -mb-1">
                      ”
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-1">
              {/* Pillar 1: 25+ YEARS CARE */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-col items-start space-y-2"
              >
                <div className="w-11 h-11 rounded-full border border-[#D6A64D]/80 bg-[#351044]/80 backdrop-blur-sm flex items-center justify-center text-[#E5BD6F] shadow-md">
                  <svg className="w-5 h-5 text-[#E5BD6F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 4c-1.5 3.5-1.5 7.5 0 11 1.5-3.5 1.5-7.5 0-11z" />
                    <path d="M11 6.5C8 8.5 6 11.5 6 15c2.5 0 5-1 6-3" />
                    <path d="M13 6.5c3 2 5 5 5 8.5-2.5 0-5-1-6-3" />
                    <path d="M4 17c3.5 2 12.5 2 16 0" />
                  </svg>
                </div>
                <h4 className="text-[12px] font-bold tracking-[0.14em] uppercase text-white">
                  25+ YEARS CARE
                </h4>
                <p className="text-[12px] text-[#FFF9F3]/80 leading-relaxed">
                  Decades of master esthetician artistry and precision.
                </p>
              </motion.div>

              {/* Pillar 2: GENTLE & PAINLESS */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-start space-y-2"
              >
                <div className="w-11 h-11 rounded-full border border-[#D6A64D]/80 bg-[#351044]/80 backdrop-blur-sm flex items-center justify-center text-[#E5BD6F] shadow-md">
                  <Heart size={18} className="text-[#E5BD6F]" />
                </div>
                <h4 className="text-[12px] font-bold tracking-[0.14em] uppercase text-white">
                  GENTLE & PAINLESS
                </h4>
                <p className="text-[12px] text-[#FFF9F3]/80 leading-relaxed">
                  Comfort-first hair removal tailored to every skin type.
                </p>
              </motion.div>

              {/* Pillar 3: PRISTINE SUITES */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-col items-start space-y-2"
              >
                <div className="w-11 h-11 rounded-full border border-[#D6A64D]/80 bg-[#351044]/80 backdrop-blur-sm flex items-center justify-center text-[#E5BD6F] shadow-md">
                  <svg className="w-5 h-5 text-[#E5BD6F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" />
                    <path d="M19 17l1.2 2.8L23 21l-2.8 1.2L19 25l-1.2-2.8L15 21l2.8-1.2L19 17z" />
                  </svg>
                </div>
                <h4 className="text-[12px] font-bold tracking-[0.14em] uppercase text-white">
                  PRISTINE SUITES
                </h4>
                <p className="text-[12px] text-[#FFF9F3]/80 leading-relaxed">
                  Strict sanitation protocols & private treatment rooms.
                </p>
              </motion.div>
            </div>

            {/* CTA Button: READ MORE -> */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-1"
            >
              <Link href="#">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ y: 0, scale: 0.99 }}
                  className="h-[48px] sm:h-[52px] px-8 rounded-xl gold-gradient gold-gradient-hover text-white font-bold text-[13px] sm:text-[14px] tracking-[0.18em] uppercase inline-flex items-center justify-center space-x-2.5 luxury-gold-shadow transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <span>Read More</span>
                  <ArrowRight size={17} />
                </motion.button>
              </Link>
            </motion.div>

          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: GRAND ARCHED "WHY CHOOSE" PANEL (Cols 7-12)       */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 flex flex-col items-center">

            {/* Grand Arched Card Container with Glowing Gold Outline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[620px] rounded-t-[120px] sm:rounded-t-[140px] rounded-b-[28px] border-2 border-[#D6A64D]/70 bg-[#220427]/85 backdrop-blur-md p-6 sm:p-8 pt-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Outer decorative arch accent ring */}
              <div className="absolute inset-[-6px] rounded-t-[126px] sm:rounded-t-[146px] rounded-b-[34px] border border-[#D6A64D]/35 pointer-events-none" />

              {/* Panel Header */}
              <div className="flex flex-col items-center text-center mb-7">
                {/* Glowing Gold Lotus Emblem */}
                <div className="mb-2 text-[#E5BD6F] filter drop-shadow-[0_2px_8px_rgba(229,189,111,0.4)]">
                  {renderLotus()}
                </div>

                {/* Subheading: — WE HAVE 25 YEARS OF EXPERIENCE — */}
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-[#E5BD6F] mb-1">
                  — WE HAVE 25 YEARS OF EXPERIENCE —
                </span>

                {/* Brand Name Heading */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-wide mb-2 drop-shadow-sm">
                  Parul Beauty Salon
                </h3>

                {/* Subtext */}
                <p className="text-[13px] sm:text-[14px] text-[#FFF9F3]/85 leading-relaxed max-w-[460px]">
                  Beauty is an art, and our salon is a canvas where radiant, confident, and
                  stunning transformations come to life with gentle precision and strict hygiene.
                </p>
              </div>

              {/* 4 Feature Cards (2 × 2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                {/* Card 1: Advanced Skincare */}
                <div className="flex items-start space-x-3.5 p-4 sm:p-4.5 rounded-[18px] bg-[#2E0B38]/90 border border-[#D6A64D]/60 shadow-md hover:border-[#E5BD6F] transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-full border border-[#D6A64D] bg-[#1E0528] flex items-center justify-center text-[#E5BD6F] shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    <Diamond size={19} />
                  </div>
                  <div>
                    <h5 className="font-serif text-[15px] font-bold text-white mb-1">
                      Advanced Skincare
                    </h5>
                    <p className="text-[12px] text-[#FFF9F3]/80 leading-relaxed font-normal">
                      Hydra, Gold, Herbal & Acne treatments for healthy, luminous skin.
                    </p>
                  </div>
                </div>

                {/* Card 2: Painless Waxing */}
                <div className="flex items-start space-x-3.5 p-4 sm:p-4.5 rounded-[18px] bg-[#2E0B38]/90 border border-[#D6A64D]/60 shadow-md hover:border-[#E5BD6F] transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-full border border-[#D6A64D] bg-[#1E0528] flex items-center justify-center text-[#E5BD6F] shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    <Users size={19} />
                  </div>
                  <div>
                    <h5 className="font-serif text-[15px] font-bold text-white mb-1">
                      Painless Waxing
                    </h5>
                    <p className="text-[12px] text-[#FFF9F3]/80 leading-relaxed font-normal">
                      Gentle, efficient hair removal tailored for maximum comfort.
                    </p>
                  </div>
                </div>

                {/* Card 3: Clean & Hygienic */}
                <div className="flex items-start space-x-3.5 p-4 sm:p-4.5 rounded-[18px] bg-[#2E0B38]/90 border border-[#D6A64D]/60 shadow-md hover:border-[#E5BD6F] transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-full border border-[#D6A64D] bg-[#1E0528] flex items-center justify-center text-[#E5BD6F] shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    <Leaf size={19} />
                  </div>
                  <div>
                    <h5 className="font-serif text-[15px] font-bold text-white mb-1">
                      Clean & Hygienic
                    </h5>
                    <p className="text-[12px] text-[#FFF9F3]/80 leading-relaxed font-normal">
                      Strict sanitization protocols and private, spacious suites.
                    </p>
                  </div>
                </div>

                {/* Card 4: Client Satisfaction */}
                <div className="flex items-start space-x-3.5 p-4 sm:p-4.5 rounded-[18px] bg-[#2E0B38]/90 border border-[#D6A64D]/60 shadow-md hover:border-[#E5BD6F] transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-full border border-[#D6A64D] bg-[#1E0528] flex items-center justify-center text-[#E5BD6F] shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    <Heart size={19} />
                  </div>
                  <div>
                    <h5 className="font-serif text-[15px] font-bold text-white mb-1">
                      Client Happiness
                    </h5>
                    <p className="text-[12px] text-[#FFF9F3]/80 leading-relaxed font-normal">
                      Success is when we see our client smile with true confidence.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Stats Card spanning beneath the cards */}
              <div className="rounded-[18px] bg-[#2E0B38]/95 border border-[#D6A64D]/65 p-4 sm:p-5 shadow-lg">
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-[#B88736]/40">
                  <div className="flex flex-col items-center justify-center px-1">
                    <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5BD6F] leading-none mb-1">
                      25+
                    </span>
                    <span className="text-[9.5px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-white/90 leading-tight">
                      YEARS EXPERIENCE
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-1">
                    <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5BD6F] leading-none mb-1">
                      100%
                    </span>
                    <span className="text-[9.5px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-white/90 leading-tight">
                      NATURAL PRODUCTS
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center px-1">
                    <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5BD6F] leading-none mb-1">
                      10K+
                    </span>
                    <span className="text-[9.5px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-white/90 leading-tight">
                      SATISFIED CLIENTS
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
