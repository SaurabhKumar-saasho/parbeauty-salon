"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  category: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Column 1 - Top
  {
    id: "threading",
    title: "Eyebrow Threading",
    subtitle: "Precision Arches & Hair Removal",
    image: "/images/gallery/threading-service.jpg",
    alt: "Expert Eyebrow Threading treatment at Parul Beauty Salon",
    category: "Brows & Face",
    description: "Authentic, time-honored organic cotton threading for crisp, clean brow definition and ultra-smooth skin with zero chemicals.",
  },
  // Column 2 - Top
  {
    id: "facial",
    title: "Hydra & Herbal Facial",
    subtitle: "Spa Glow & Skin Rejuvenation",
    image: "/images/gallery/herbal-facial.jpg",
    alt: "Relaxing customized facial treatment at Parul Beauty Salon",
    category: "Skin Care",
    description: "Customized deep pore cleansing, diamond microdermabrasion, herbal masks, and gentle face massage for luminous, radiant complexion.",
  },
  // Column 3 - Top
  {
    id: "henna",
    title: "Intricate Henna Tattoo",
    subtitle: "100% Organic Henna Body Art",
    image: "/images/gallery/henna-service.jpg",
    alt: "Traditional Indian bridal and party mehndi henna tattoo",
    category: "Henna Art",
    description: "Bespoke traditional and contemporary henna motifs handcrafted with all-natural, dark-staining herbal henna paste.",
  },
  // Column 4 - Top
  {
    id: "waxing",
    title: "Gentle Body Waxing",
    subtitle: "Silky Smooth Results",
    image: "/images/gallery/wax-service.jpg",
    alt: "Professional gentle waxing service for legs and arms",
    category: "Waxing",
    description: "Virtually painless warm waxing using soothing botanical formulas that protect sensitive skin while leaving long-lasting smoothness.",
  },
  // Column 1 - Bottom
  {
    id: "tinting",
    title: "Eyebrow Tinting & Spoolie Care",
    subtitle: "Full & Defined Brows",
    image: "/images/gallery/tinting.jpg",
    alt: "Eyebrow tinting and styling with precision spoolie brush",
    category: "Brows & Lashes",
    description: "Custom shade matching semi-permanent tinting that accentuates natural brow arches and adds noticeable fullness and depth.",
  },
  // Column 2 - Bottom
  {
    id: "bridal",
    title: "Bridal Glamour & Makeup",
    subtitle: "Radiant South Asian & Modern Glam",
    image: "/images/gallery/bridal.jpg",
    alt: "Stunning Indian bride with flawless bridal makeup and jewelry",
    category: "Bridal",
    description: "Flawless long-lasting bridal makeup, dupatta setting, and jewelry coordination tailored to celebrate your most magical moments.",
  },
  // Column 3 - Bottom
  {
    id: "hairstyling",
    title: "Bridal & Party Hair Updos",
    subtitle: "Artisan Braids & Floral Accents",
    image: "/images/gallery/party-hair.jpg",
    alt: "Elegant braided bridal hair updo with pearl floral accessories",
    category: "Hair Artistry",
    description: "Sophisticated textured updos, traditional Indian bridal braids, and glamorous event styling accessorized to perfection.",
  },
  // Column 4 - Bottom
  {
    id: "hairhenna",
    title: "Organic Hair Henna Treatment",
    subtitle: "Scalp Nourishment & Natural Sheen",
    image: "/images/gallery/hair-henna.jpg",
    alt: "Herbal hair henna application and scalp conditioning treatment",
    category: "Hair Care",
    description: "Holistic herbal conditioning paste infused with natural herbs to strengthen roots, combat dandruff, and impart rich natural highlights.",
  },
];

// Organized into 4 columns for curved fan geometry:
const COLUMNS = [
  {
    id: "col-1",
    items: [GALLERY_ITEMS[0], GALLERY_ITEMS[4]],
    tiltClass: "lg:rotate-[2.5deg] lg:translate-y-2",
  },
  {
    id: "col-2",
    items: [GALLERY_ITEMS[1], GALLERY_ITEMS[5]],
    tiltClass: "lg:rotate-[0.8deg] lg:translate-y-8",
  },
  {
    id: "col-3",
    items: [GALLERY_ITEMS[2], GALLERY_ITEMS[6]],
    tiltClass: "lg:-rotate-[0.8deg] lg:translate-y-8",
  },
  {
    id: "col-4",
    items: [GALLERY_ITEMS[3], GALLERY_ITEMS[7]],
    tiltClass: "lg:-rotate-[2.5deg] lg:translate-y-2",
  },
];

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setSelectedIndex((prev) =>
      prev === null ? 0 : prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Keyboard navigation support for slider
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const activeItem = selectedIndex !== null ? GALLERY_ITEMS[selectedIndex] : null;

  return (
    <section
      className="relative w-full py-6 sm:py-14 lg:py-0 lg:h-[700px] flex flex-col justify-center overflow-hidden select-none bg-[#FDF5F2]"
      style={{
        backgroundImage: "url('/images/gallery-section-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFF7F2]/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 lg:mb-10">
          {/* Top Lotus Emblem with flanking gold accent lines */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-1.5"
          >
            <span className="w-16 sm:w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C] to-[#C89B3C]" />

            {/* Symmetrical Gold Lotus Emblem */}
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 text-[#C89B3C]">
              <svg
                viewBox="0 0 64 64"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(200,155,60,0.3)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient id="lotusGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D78E" />
                    <stop offset="50%" stopColor="#D4A34A" />
                    <stop offset="100%" stopColor="#A87524" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 10 C32 10 24 24 24 38 C24 45 28 50 32 50 C36 50 40 45 40 38 C40 24 32 10 32 10 Z"
                  stroke="url(#lotusGoldGrad)"
                  fill="url(#lotusGoldGrad)"
                  fillOpacity="0.18"
                />
                <path
                  d="M30 20 C24 24 16 32 17 42 C18 47 22 50 28 49 C26 44 26 36 30 20 Z"
                  stroke="url(#lotusGoldGrad)"
                  fill="url(#lotusGoldGrad)"
                  fillOpacity="0.12"
                />
                <path
                  d="M34 20 C40 24 48 32 47 42 C46 47 42 50 36 49 C38 44 38 36 34 20 Z"
                  stroke="url(#lotusGoldGrad)"
                  fill="url(#lotusGoldGrad)"
                  fillOpacity="0.12"
                />
                <path
                  d="M25 32 C17 35 10 42 12 48 C14 52 20 52 26 48 C22 44 23 38 25 32 Z"
                  stroke="url(#lotusGoldGrad)"
                  fill="url(#lotusGoldGrad)"
                  fillOpacity="0.08"
                />
                <path
                  d="M39 32 C47 35 54 42 52 48 C50 52 44 52 38 48 C42 44 41 38 39 32 Z"
                  stroke="url(#lotusGoldGrad)"
                  fill="url(#lotusGoldGrad)"
                  fillOpacity="0.08"
                />
                <path d="M22 52 C27 55 37 55 42 52" stroke="url(#lotusGoldGrad)" strokeWidth="2" />
              </svg>
            </div>

            <span className="w-16 sm:w-24 md:w-32 h-[1px] bg-gradient-to-l from-transparent via-[#C89B3C] to-[#C89B3C]" />
          </motion.div>

          {/* Heading: "Gallery" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#27072E] tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(39,7,46,0.12)]">
              Gallery
            </h2>

            {/* Custom Golden Underline Flourish */}
            <div className="relative -mt-1 sm:-mt-1.5 w-48 sm:w-56 md:w-64 h-7 sm:h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 280 36"
                className="w-full h-full overflow-visible"
                fill="none"
              >
                <defs>
                  <linearGradient id="goldFlourishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.15" />
                    <stop offset="25%" stopColor="#E2B766" stopOpacity="0.9" />
                    <stop offset="65%" stopColor="#D4A34A" stopOpacity="1" />
                    <stop offset="92%" stopColor="#C89B3C" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#E8C57C" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 24,14 C 75,9 125,24 182,21 C 216,19 248,27 262,20 C 265,18 266,16 264,15 C 259,18 238,15 208,16 C 152,18 98,10 32,12 Z"
                  fill="url(#goldFlourishGrad)"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* ================= 8-CARD CURVED GALLERY GRID ================= */}
        {/* Pure Clean Cards (No text overlays or badges) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 items-start justify-center max-w-6xl mx-auto">
          {COLUMNS.map((col, colIdx) => (
            <div
              key={col.id}
              className={`flex flex-col gap-3.5 sm:gap-4 lg:gap-5 transition-transform duration-500 ${col.tiltClass}`}
            >
              {col.items.map((item, itemIdx) => {
                const globalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: (colIdx * 2 + itemIdx) * 0.06,
                    }}
                    whileHover={{ scale: 1.04, y: -4 }}
                    onClick={() => {
                      setDirection(0);
                      setSelectedIndex(globalIndex >= 0 ? globalIndex : 0);
                    }}
                    className="group relative cursor-pointer rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden border-[2px] border-[#DEB76A]/80 hover:border-[#F3D592] bg-white/40 backdrop-blur-sm shadow-[0_6px_20px_rgba(180,130,50,0.18)] hover:shadow-[0_14px_34px_rgba(200,150,50,0.38)] transition-all duration-300"
                  >
                    {/* Aspect Ratio Container (16:10.5 matching reference mockup) */}
                    <div className="relative w-full aspect-[16/10.5] overflow-hidden rounded-[14px] sm:rounded-[16px] lg:rounded-[18px]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />

                      {/* Pure glowing gold inner ring accent */}
                      <div className="absolute inset-0 rounded-[14px] sm:rounded-[16px] lg:rounded-[18px] ring-1 ring-inset ring-white/25 pointer-events-none" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL WITH WORKING SLIDER ================= */}
      <AnimatePresence>
        {selectedIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.92, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 16, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#FFF9F3] rounded-3xl overflow-hidden shadow-2xl border border-[#D6A64D]/50 flex flex-col"
            >
              {/* Top Header Bar */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-[#E5BD6F]/30 bg-[#FFF3E8]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88736]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>{activeItem.category}</span>
                  <span className="text-[#C89B3C]/50">•</span>
                  <span className="text-[#6B5A72] font-medium tracking-normal">
                    {selectedIndex + 1} of {GALLERY_ITEMS.length}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Close image modal"
                  className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-[#27072E] flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Image Slider Viewport */}
              <div className="relative w-full aspect-[16/10] bg-black/20 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeItem.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeItem.image}
                      alt={activeItem.alt}
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Navigation Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6 text-[#F5D78E]" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6 text-[#F5D78E]" />
                </button>
              </div>

              {/* Bottom Details & Booking Action */}
              <div className="p-5 sm:p-7 bg-[#FFF9F3]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#27072E] font-medium mb-1">
                      {activeItem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D4E63] max-w-xl leading-relaxed">
                      {activeItem.description}
                    </p>
                  </div>

                  <Link
                    href="#"
                    onClick={() => setSelectedIndex(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2A0835] via-[#4A0E4E] to-[#2A0835] text-white text-sm font-medium tracking-wide shadow-lg shadow-[#2A0835]/25 hover:shadow-xl hover:from-[#380A47] hover:to-[#380A47] transition-all shrink-0"
                  >
                    <Calendar className="w-4 h-4 text-[#E5BD6F]" />
                    <span>Book Service</span>
                  </Link>
                </div>

                {/* Mini Thumbnails Strip */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#E5BD6F]/25 overflow-x-auto pb-1">
                  {GALLERY_ITEMS.map((g, idx) => (
                    <button
                      key={g.id}
                      onClick={() => {
                        setDirection(idx > (selectedIndex ?? 0) ? 1 : -1);
                        setSelectedIndex(idx);
                      }}
                      className={`relative w-12 h-9 sm:w-14 sm:h-10 rounded-lg overflow-hidden border-[1.5px] transition-all shrink-0 ${idx === selectedIndex
                        ? "border-[#C89B3C] ring-2 ring-[#C89B3C]/50 scale-105"
                        : "border-black/15 opacity-60 hover:opacity-100"
                        }`}
                    >
                      <Image
                        src={g.image}
                        alt={g.title}
                        fill
                        unoptimized
                        sizes="60px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
