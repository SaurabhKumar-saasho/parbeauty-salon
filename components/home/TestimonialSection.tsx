"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, ExternalLink, Edit3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/data/site-config";

const GoogleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.15C3.27 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.27C.46 8.2 0 10.04 0 12s.46 3.8 1.27 5.41l4.01-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.64 1.27 6.59l4.01 3.15c.95-2.84 3.6-4.99 6.72-4.99z"
    />
  </svg>
);

interface Testimonial {
  id: string;
  name: string;
  initial: string;
  isLocalGuide?: boolean;
  rating: number;
  date: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Juhi Radiya",
    initial: "J",
    rating: 5,
    date: "Recent Client",
    text: "The Hydra facial left my skin feeling refreshed and rejuvenated, with noticeable results that I loved. The waxing service was surprisingly comfortable, and my eyebrows were perfectly shaped, enhancing my overall look. Highly recommend Parul's salon for top-notch skincare!",
  },
  {
    id: "2",
    name: "Krisha Gandhi",
    initial: "K",
    isLocalGuide: true,
    rating: 5,
    date: "Verified Visit",
    text: "I had my eyebrows shaped, waxing done, and a facial — every service exceeded my expectations. Parul was incredibly professional, attentive, and made sure I was comfortable throughout. My skin feels amazing, and my brows have never looked better!",
  },
  {
    id: "3",
    name: "Pallu Gupta",
    initial: "P",
    rating: 5,
    date: "Regular Client",
    text: "What a wonderful place. Clean and well maintained with separate sections for waxing, facials, and threading without feeling claustrophobic. Parul takes great care in giving you her best treatment that you become a repeat customer. Very reasonably priced too!",
  },
  {
    id: "4",
    name: "Nishi Singh",
    initial: "N",
    isLocalGuide: true,
    rating: 5,
    date: "Local Guide",
    text: "Cleanliness is something you immediately feel when you visit. Parul has kept the place very clean with all the modern tools for facials. The products did not create any issues on my sensitive skin. Truly exceptional service and decor!",
  },
  {
    id: "5",
    name: "Rajashri Bharathan",
    initial: "R",
    rating: 5,
    date: "Verified Visit",
    text: "You must go visit Parul! I had my eyebrows threaded by her and gotten a facial, and wow — my face has never felt cleaner or softer. She is a true perfectionist and prides herself in hygiene, cleanliness, and client comfort.",
  },
];

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Mobile single-card slider state
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileDirection, setMobileDirection] = useState(0);

  // Responsive items per view: desktop displays 3
  const totalSlides = TESTIMONIALS.length - 2; // for 3 cards per view

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  const handleMobilePrev = () => {
    setMobileDirection(-1);
    setMobileIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleMobileNext = () => {
    setMobileDirection(1);
    setMobileIndex((prev) => (prev >= TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

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
      
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src="/images/about-section-bg.jpg"
          alt="Parul Beauty Salon - Client Testimonials"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1E0528]/40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ============================================================== */}
        {/* 2. SECTION HEADER (CENTER)                                     */}
        {/* ============================================================== */}
        <div className="flex flex-col items-center text-center max-w-[780px] mx-auto mb-6  lg:mb-8">
          {/* Gold Lotus Icon */}
          <div className="mb-2 text-[#E5BD6F]">
            {renderLotus()}
          </div>

          {/* Eyebrow: ———— CLIENT TESTIMONIALS ———— */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-2.5 text-[#D6A64D]"
          >
            <span className="w-10 h-[1.5px] bg-[#B88736]/70" />
            <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.26em] uppercase text-[#E5BD6F]">
              CLIENT TESTIMONIALS
            </span>
            <span className="w-10 h-[1.5px] bg-[#B88736]/70" />
          </motion.div>

          {/* Headline: Real Stories, Beautiful Results */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 mb-3 text-center"
          >
            <span className="font-serif text-[40px] sm:text-[50px] md:text-[56px] font-semibold text-white leading-tight tracking-[-0.01em]">
              Real Stories,
            </span>
            <span className="font-serif italic text-[40px] sm:text-[50px] md:text-[56px] font-normal text-[#D6A64D] gold-text-gradient leading-tight">
              Beautiful Results
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15.5px] sm:text-[17px] text-[#FFF9F3]/85 font-normal leading-relaxed max-w-[620px]"
          >
            Trusted by our clients for exceptional beauty care and unforgettable experiences.
          </motion.p>
        </div>

        {/* ============================================================== */}
        {/* 3A. DESKTOP CAROUSEL (3 CARDS PER VIEW - UNTOUCHED)           */}
        {/* ============================================================== */}
        <div className="hidden md:flex relative items-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-5 lg:-left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D6A64D]/80 bg-[#25072F]/80 backdrop-blur-md flex items-center justify-center text-[#E5BD6F] hover:bg-[#E5BD6F] hover:text-[#1E0528] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Testimonial Cards Carousel */}
          <div className="w-full overflow-hidden px-4 sm:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              {TESTIMONIALS.slice(currentIndex, currentIndex + 3).map((item) => (
                <div
                  key={item.id}
                  className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[24px] bg-[#220527]/85 backdrop-blur-xl border border-[#D6A64D]/70 shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(214,166,77,0.18)] transition-all duration-300 hover:border-[#F3CF82] hover:shadow-[0_16px_45px_rgba(229,189,111,0.28)] group"
                >
                  {/* Top glowing neon edge highlight */}
                  <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#F7D893] to-transparent pointer-events-none" />

                  {/* Top-Right Decorative Quote Marks */}
                  <div className="absolute top-5 right-6 text-4xl sm:text-5xl font-serif text-[#783669]/40 select-none pointer-events-none leading-none">
                    “
                  </div>

                  {/* Card Content Top */}
                  <div>
                    {/* User Header */}
                    <div className="flex items-center space-x-3.5 mb-4">
                      {/* Avatar with illuminated gold ring */}
                      <div className="relative w-13 h-13 rounded-full border-[1.5px] border-[#E5BD6F] bg-gradient-to-br from-[#3D104E] to-[#1E0528] flex items-center justify-center text-[#F3CF82] font-serif font-bold text-xl shadow-[0_0_14px_rgba(229,189,111,0.35)] shrink-0">
                        <span>{item.initial}</span>
                        {/* Optional Local Guide Star Badge */}
                        {item.isLocalGuide && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#E57E25] border border-white flex items-center justify-center text-white text-[9px] shadow-sm">
                            ★
                          </div>
                        )}
                      </div>

                      {/* Name & Review Meta */}
                      <div className="flex flex-col">
                        <span className="font-serif text-[18px] sm:text-[19px] font-bold text-white tracking-wide leading-tight">
                          {item.name}
                        </span>
                        {/* Rating Stars & Date */}
                        <div className="flex items-center space-x-2.5 mt-1.5">
                          <div className="flex space-x-0.5 text-[#F3CF82]">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className="fill-[#F3CF82] text-[#F3CF82]"
                              />
                            ))}
                          </div>
                          <span className="text-[11.5px] text-[#FFF9F3]/60 font-light">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-[13.5px] sm:text-[14.5px] text-[#FFF9F3]/90 font-light leading-relaxed relative z-10 pt-1">
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom-Right Golden Closing Quote */}
                  <div className="flex justify-end pt-3">
                    <span className="font-serif text-3xl sm:text-4xl text-[#E5BD6F] leading-none select-none">
                      ”
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-5 lg:-right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D6A64D]/80 bg-[#25072F]/80 backdrop-blur-md flex items-center justify-center text-[#E5BD6F] hover:bg-[#E5BD6F] hover:text-[#1E0528] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Desktop Pagination Dots */}
        <div className="hidden md:flex items-center justify-center space-x-2.5 mt-8 sm:mt-9">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === index
                  ? "w-3 h-3 bg-[#E5BD6F] shadow-[0_0_8px_rgba(229,189,111,0.6)]"
                  : "w-2.5 h-2.5 border border-[#D6A64D]/60 hover:bg-[#D6A64D]/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* ============================================================== */}
        {/* 3B. MOBILE SLIDER (EXACTLY 1 CARD - ULTRA SMOOTH TOUCH SLIDER) */}
        {/* ============================================================== */}
        <div className="block md:hidden relative">
          <div className="relative flex items-center">
            {/* Mobile Left Arrow */}
            <button
              onClick={handleMobilePrev}
              className="absolute -left-2 z-20 w-9 h-9 rounded-full border border-[#D6A64D]/80 bg-[#25072F]/90 backdrop-blur-md flex items-center justify-center text-[#E5BD6F] active:scale-90 transition-transform shadow-lg cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Mobile 1-Card Slider Container */}
            <div className="w-full overflow-hidden px-4 py-1">
              <AnimatePresence initial={false} custom={mobileDirection} mode="wait">
                <motion.div
                  key={mobileIndex}
                  custom={mobileDirection}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (offset.x < -35 || swipe < -120) {
                      handleMobileNext();
                    } else if (offset.x > 35 || swipe > 120) {
                      handleMobilePrev();
                    }
                  }}
                  initial={{ opacity: 0, x: mobileDirection > 0 ? 50 : -50, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: mobileDirection > 0 ? -50 : 50, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full select-none"
                >
                  {/* Single Card */}
                  {(() => {
                    const item = TESTIMONIALS[mobileIndex];
                    return (
                      <div className="relative flex flex-col justify-between p-6 rounded-[22px] bg-[#220527]/90 backdrop-blur-xl border border-[#D6A64D]/70 shadow-[0_12px_36px_rgba(0,0,0,0.5),0_0_20px_rgba(214,166,77,0.16)] min-h-[290px]">
                        {/* Top glowing neon edge highlight */}
                        <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#F7D893] to-transparent pointer-events-none" />

                        {/* Top-Right Decorative Quote Marks */}
                        <div className="absolute top-4 right-5 text-4xl font-serif text-[#783669]/40 select-none pointer-events-none leading-none">
                          “
                        </div>

                        {/* Card Content Top */}
                        <div>
                          {/* User Header */}
                          <div className="flex items-center space-x-3 mb-3">
                            {/* Avatar with illuminated gold ring */}
                            <div className="relative w-12 h-12 rounded-full border-[1.5px] border-[#E5BD6F] bg-gradient-to-br from-[#3D104E] to-[#1E0528] flex items-center justify-center text-[#F3CF82] font-serif font-bold text-lg shadow-[0_0_14px_rgba(229,189,111,0.35)] shrink-0">
                              <span>{item.initial}</span>
                              {item.isLocalGuide && (
                                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#E57E25] border border-white flex items-center justify-center text-white text-[9px] shadow-sm">
                                  ★
                                </div>
                              )}
                            </div>

                            {/* Name & Review Meta */}
                            <div className="flex flex-col">
                              <span className="font-serif text-[17px] font-bold text-white tracking-wide leading-tight">
                                {item.name}
                              </span>
                              {/* Rating Stars & Date */}
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="flex space-x-0.5 text-[#F3CF82]">
                                  {[...Array(item.rating)].map((_, i) => (
                                    <Star
                                      key={i}
                                      size={13}
                                      className="fill-[#F3CF82] text-[#F3CF82]"
                                    />
                                  ))}
                                </div>
                                <span className="text-[11px] text-[#FFF9F3]/60 font-light">
                                  {item.date}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Review Text */}
                          <p className="text-[13.5px] text-[#FFF9F3]/90 font-light leading-relaxed relative z-10 pt-1">
                            {item.text}
                          </p>
                        </div>

                        {/* Bottom-Right Golden Closing Quote */}
                        <div className="flex justify-end pt-2">
                          <span className="font-serif text-3xl text-[#E5BD6F] leading-none select-none">
                            ”
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Right Arrow */}
            <button
              onClick={handleMobileNext}
              className="absolute -right-2 z-20 w-9 h-9 rounded-full border border-[#D6A64D]/80 bg-[#25072F]/90 backdrop-blur-md flex items-center justify-center text-[#E5BD6F] active:scale-90 transition-transform shadow-lg cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Mobile Pagination Dots (5 Dots for all 5 Testimonials) */}
          <div className="flex items-center justify-center space-x-2 mt-5">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setMobileDirection(index > mobileIndex ? 1 : -1);
                  setMobileIndex(index);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  mobileIndex === index
                    ? "w-4 h-2 bg-[#E5BD6F] shadow-[0_0_8px_rgba(229,189,111,0.6)]"
                    : "w-2 h-2 border border-[#D6A64D]/60 hover:bg-[#D6A64D]/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 5. GOOGLE REVIEW ACTION BUTTONS                                */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
        >
          {/* Button 1: Read Reviews */}
          <a
            href={
              SITE_CONFIG.contact.googleReviewsUrl ||
              "https://www.google.com/search?sca_esv=46aa4e94e8aa63dc&sxsrf=APpeQnsU-pSLmc1AJ_OmUJg0xW0SAlcbmA:1792102790551&q=Eyebrow+Threading+Waxing+Facial+by+Parul&ludocid=8981376430886071488&lsig=AB86z5Uu8fYunzXNOcSW5Lg-ycvg&sa=X&ved=2ahUKEwiTge2Rh72XAxWIR2wGHcnmAygQoAJ6BAgnEBo&biw=1920&bih=945&dpr=1&zx=1792102796493#lrd=0x88c2b79c20eaf269:0x7ca442474d07acc0,1,,,,"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-3.5 px-7 py-3.5 rounded-full border border-[#D6A64D]/80 bg-[#25072F]/85 backdrop-blur-md text-[#FFF9F3] hover:text-[#1E0528] hover:bg-[#E5BD6F] hover:border-[#F3CF82] transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_10px_28px_rgba(229,189,111,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* Google Icon in a clean circle badge */}
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <GoogleIcon className="w-4 h-4" />
            </span>
            <span className="text-[13px] sm:text-[14px] font-semibold tracking-[0.14em] uppercase font-serif text-[#FFF9F3] group-hover:text-[#1E0528] transition-colors">
              Read Reviews
            </span>
            <ExternalLink size={15} className="text-[#E5BD6F] group-hover:text-[#1E0528] transition-colors" />
          </a>

          {/* Button 2: Write a Review */}
          <a
            href={
              SITE_CONFIG.contact.googleWriteReviewUrl ||
              "https://www.google.com/search?sca_esv=46aa4e94e8aa63dc&sxsrf=APpeQnsU-pSLmc1AJ_OmUJg0xW0SAlcbmA:1792102790551&q=Eyebrow+Threading+Waxing+Facial+by+Parul&ludocid=8981376430886071488&lsig=AB86z5Uu8fYunzXNOcSW5Lg-ycvg&sa=X&ved=2ahUKEwiTge2Rh72XAxWIR2wGHcnmAygQoAJ6BAgnEBo&biw=1920&bih=945&dpr=1&zx=1792102796493#lrd=0x88c2b79c20eaf269:0x7ca442474d07acc0,3,,,,"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-3.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D6A64D] via-[#F3CF82] to-[#B88736] text-[#1E0528] font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(214,166,77,0.35)] hover:shadow-[0_12px_32px_rgba(229,189,111,0.55)] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* Google Icon in a clean circle badge */}
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <GoogleIcon className="w-4 h-4" />
            </span>
            <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.14em] uppercase font-serif text-[#1E0528]">
              Write a Review
            </span>
            <Edit3 size={15} className="text-[#1E0528]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialSection;
