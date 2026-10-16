"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  icon: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "eyebrow-threading",
    title: "Eyebrow Threading",
    description:
      "Unveil the art of precision and elegance in eyebrow grooming, upper lips, chin, and full-face hair removal.",
    image: "/images/services/threading-service.jpg",
    href: "#",
    icon: "threading",
  },
  {
    id: "advanced-facial",
    title: "Advanced Facial",
    description:
      "Rejuvenate and revitalize with custom Hydra, Gold, Herbal, Diamond, and soothing Acne care facials.",
    image: "/images/services/facial-service.jpg",
    href: "#",
    icon: "facial",
  },
  {
    id: "henna-tattoo",
    title: "Henna Tattoo",
    description:
      "Adorn yourself with intricate, beautiful henna body art using 100% natural and skin-safe henna paste.",
    image: "/images/services/henna-service.jpg",
    href: "#",
    icon: "henna",
  },
  {
    id: "waxing",
    title: "Waxing",
    description:
      "Relax with our virtually painless, gentle waxing for hands, legs, underarms, and full body hair removal.",
    image: "/images/services/waxing-service.jpg",
    href: "#",
    icon: "waxing",
  },
  {
    id: "eyebrow-tinting",
    title: "Eyebrow Tinting",
    description:
      "Unveil bolder, more expressive eyes and natural brow fullness with professional tinting services.",
    image: "/images/services/tinting-service.jpg",
    href: "#",
    icon: "tinting",
  },
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    description:
      "Look radiant and unforgettable on your wedding day with customized bridal makeup and party glam.",
    image: "/images/services/bridal-service.jpg",
    href: "#",
    icon: "bridal",
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    description:
      "Bring your vision to life with professional party styling, traditional wedding updos, and blowouts.",
    image: "/images/services/hair-service.jpg",
    href: "#",
    icon: "hairstyling",
  },
  {
    id: "hair-henna",
    title: "Hair Henna",
    description:
      "Embrace the allure of herbal henna to nourish your scalp and impart rich, natural color and conditioning.",
    image: "/images/services/hairhenna-service.jpg",
    href: "#",
    icon: "hairhenna",
  },
];

export const ServiceSection: React.FC = () => {
  const renderCardIcon = (icon: string) => {
    switch (icon) {
      case "threading":
        return (
          <svg className="w-5 h-5 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 9c2-2 5-2.5 8-1 2 .5 5 2.5 7 3" strokeWidth="1.8" />
            <path d="M5 14c2.5-3 5-3.5 7-3.5s4.5.5 7 3.5" />
            <path d="M5 14c2.5 3 5 3.5 7 3.5s4.5-.5 7-3.5" />
            <circle cx="12" cy="14" r="2" fill="currentColor" />
            <path d="M2 7l18 10M20 7L2 17" strokeDasharray="1.5 2" strokeOpacity="0.7" />
          </svg>
        );
      case "facial":
        return (
          <svg className="w-5 h-5 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 11.5c0 3.2 2.2 5.5 5 5.5s5-2.3 5-5.5-2.2-6-5-6-5 2.8-5 6z" />
            <path d="M12 2v2.5M12 19.5V22M3 12h2.5M18.5 12H21" strokeOpacity="0.7" />
            <circle cx="10" cy="11" r="0.8" fill="currentColor" />
            <circle cx="14" cy="11" r="0.8" fill="currentColor" />
            <path d="M10.5 14c.8.6 2.2.6 3 0" />
          </svg>
        );
      case "henna":
        return (
          <svg className="w-5 h-5 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            <path d="M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2" />
          </svg>
        );
      case "waxing":
        return (
          <svg className="w-5 h-5 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="6" y="10" width="12" height="10" rx="2" strokeWidth="1.5" />
            <path d="M9 10V6a3 3 0 016 0v4" />
            <path d="M10 14h4" />
          </svg>
        );
      case "tinting":
        return (
          <svg className="w-5 h-5 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="19" x2="19" y2="5" strokeWidth="1.8" />
            <line x1="5" y1="5" x2="19" y2="19" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        );
      case "bridal":
        return (
          <svg className="w-5 h-5 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 7c1.5-1.5 3-2 4-2s2.5.5 4 2" />
            <circle cx="12" cy="4" r="1" fill="currentColor" />
            <path d="M8 10c0 2.8 1.8 4.5 4 4.5s4-1.7 4-4.5" />
            <path d="M6 8c-1 3-1.5 7-1.5 11M18 8c1 3 1.5 7 1.5 11" />
          </svg>
        );
      case "hairstyling":
        return (
          <svg className="w-5 h-5 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="9" r="4.5" />
            <path d="M7 16c2 3 8 3 10 0" />
            <path d="M12 4.5c2 1 3 3 3 4.5" />
          </svg>
        );
      case "hairhenna":
      default:
        return (
          <svg className="w-5 h-5 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21c-4.5-4-8-7.5-8-12 0-3.5 3-6 8-6s8 2.5 8 6c0 4.5-3.5 8-8 12z" />
            <path d="M12 6v10M9 9l3 3 3-3" />
          </svg>
        );
    }
  };

  const renderLotus = () => (
    <svg className="w-6 h-6 text-[#B88736]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 4c-1.5 3.5-1.5 7.5 0 11 1.5-3.5 1.5-7.5 0-11z" />
      <path d="M11 6.5C8 8.5 6 11.5 6 15c2.5 0 5-1 6-3" />
      <path d="M13 6.5c3 2 5 5 5 8.5-2.5 0-5-1-6-3" />
      <path d="M4 17c3.5 2 12.5 2 16 0" />
    </svg>
  );

  return (
    <section className="relative w-full py-8  lg:py-16 bg-[#FFF9F3] overflow-hidden">
      {/* ============================================================== */}
      {/* 1. BACKGROUND IMAGE: /images/service-bg.jpg                    */}
      {/* ============================================================== */}
      <div className="absolute inset-0 w-full h-[full] pointer-events-none select-none">
        <Image
          src="/images/service-section-bg.jpg"
          alt="Parul Beauty Salon - Tailored Beauty Services"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Soft center veil to keep cards crisp */}
        <div className="absolute  pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* ============================================================== */}
        {/* 2. SECTION HEADER (CENTER) & RIGHT EMBLEM                      */}
        {/* ============================================================== */}
        <div className="relative flex flex-col items-center text-center max-w-[780px] mx-auto mb-6 lg:mb-8">

          {/* Eyebrow: ———— OUR SERVICES ———— */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3  text-[#24082F]/75"
          >
            <span className="w-10 h-[1px] bg-[#B88736]/70" />
            <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.26em] uppercase text-[#24082F]">
              OUR SERVICES
            </span>
            <span className="w-10 h-[1px] bg-[#B88736]/70" />
          </motion.div>

          {/* Headline: Beauty Services Tailored For You */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col space-y-1 "
          >
            <span className="font-serif text-[42px] sm:text-[52px] md:text-[60px] font-semibold text-[#24082F] leading-tight ">
              Beauty Services
            </span>
            <span className="font-serif italic text-[42px] sm:text-[52px] md:text-[60px] font-normal text-[#B88736] gold-text-gradient leading-tight">
              Tailored For You
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] sm:text-[17.5px] text-[#24082F]/85 font-normal leading-relaxed max-w-[620px]"
          >
            From flawless brows to radiant skin and stunning bridal looks, our expert
            services are designed to enhance your natural beauty.
          </motion.p>

          {/* Top-Right Decorative Royal Niche Text Badge (Matching Reference) */}
          <div className="hidden xl:flex absolute -top-4 -right-[360px] 2xl:-right-[400px] w-[130px] flex-col items-center justify-center text-center text-white/95 pt-8 pointer-events-none">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase leading-tight text-[#E5BD6F]">
              EXPERT
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase leading-tight text-[#E5BD6F]">
              CARE
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase leading-tight text-white mt-1">
              BEAUTIFUL
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase leading-tight text-white">
              YOU
            </span>
            <div className="mt-2 text-[#E5BD6F] scale-90">
              {renderLotus()}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. 8 SERVICE CARDS GRID (4 COLUMNS × 2 ROWS)                   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 xl:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#FFFDFB] rounded-[22px] border border-[#B88736]/25 shadow-[0_8px_24px_rgba(36,8,47,0.06)] hover:shadow-[0_16px_36px_rgba(184,135,54,0.18)] hover:border-[#B88736]/60 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Arched Top Photographic Card Header */}
              <div className="relative w-full h-[182px] overflow-hidden rounded-t-[22px] bg-[#F5EBE1]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Inner fine gold arch line */}
                <div className="absolute inset-2 rounded-t-[18px] border border-white/50 pointer-events-none" />

                {/* Circular Icon Badge overlapping lower-left */}
                <div className="absolute -bottom-3 left-4 w-12 h-12 rounded-full bg-[#FFFDFB] border border-[#B88736] shadow-md flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-300">
                  {renderCardIcon(service.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5  flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between ">
                    <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#24082F] group-hover:text-[#351044] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Circle Arrow Action Button */}
                    <Link
                      href={service.href}
                      className="w-8 h-8 rounded-full border border-[#B88736]/60 flex items-center justify-center text-[#B88736] group-hover:bg-[#B88736] group-hover:text-white group-hover:border-[#B88736] transition-all duration-300 shrink-0 ml-2"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  <p className="text-[13px] text-[#24082F]/75 font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* 4. BOTTOM ACTION & LOTUS DIVIDER                               */}
        {/* ============================================================== */}
        <div className="mt-6 lg:mt-8 flex items-center justify-center space-x-4 sm:space-x-8 max-w-[800px] mx-auto">
          {/* Left gold line & lotus */}
          <div className="flex items-center space-x-3 flex-1">
            <span className="h-[1px] bg-[#B88736]/50 flex-1" />
            <span className="shrink-0">{renderLotus()}</span>
          </div>

          {/* Center Button: EXPLORE ALL SERVICES > */}
          <Link href="#">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.99 }}
              className="h-[50px] sm:h-[54px] px-8 sm:px-10 rounded-xl gold-gradient gold-gradient-hover text-white font-bold text-[13px] sm:text-[14px] tracking-[0.16em] uppercase inline-flex items-center justify-center space-x-2.5 luxury-gold-shadow transition-all duration-300 cursor-pointer shrink-0"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ChevronRight size={16} />
            </motion.button>
          </Link>

          {/* Right lotus & gold line */}
          <div className="flex items-center space-x-3 flex-1">
            <span className="shrink-0">{renderLotus()}</span>
            <span className="h-[1px] bg-[#B88736]/50 flex-1" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
