"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data/site-config";

export const TopContactBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-[46px] purple-gradient-bar border-b border-[#B88736]/35 text-white text-xs sm:text-[13px] relative z-40"
    >
      <div className="max-w-[1680px] h-full mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left Side: Contact Details (Address -> Phone -> Email) */}
        <div className="flex items-center space-x-3 sm:space-x-5 overflow-x-auto no-scrollbar py-1">
          {/* Address */}
          <a
            href={SITE_CONFIG.contact.addressMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200 shrink-0 group"
            title="Open salon location in Google Maps"
          >
            <span className="w-5 h-5 rounded-full border border-[#D6A64D]/70 flex items-center justify-center text-[#D6A64D] group-hover:border-[#D6A64D] group-hover:scale-105 transition-all">
              <MapPin size={10} />
            </span>
            <span className="font-light tracking-wide max-w-[210px] sm:max-w-none truncate sm:overflow-visible">
              {SITE_CONFIG.contact.address}
            </span>
          </a>

          {/* Divider */}
          <span className="text-[#B88736]/50 select-none inline">|</span>

          {/* Phone */}
          <a
            href={SITE_CONFIG.contact.phoneTel}
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200 shrink-0 group"
            title="Call Parul Beauty Salon"
          >
            <span className="w-5 h-5 rounded-full border border-[#D6A64D]/70 flex items-center justify-center text-[#D6A64D] group-hover:border-[#D6A64D] group-hover:scale-105 transition-all">
              <Phone size={10} className="fill-[#D6A64D]/20" />
            </span>
            <span className="font-light tracking-wide">{SITE_CONFIG.contact.phone}</span>
          </a>

          {/* Divider */}
          <span className="text-[#B88736]/40 select-none hidden sm:inline">|</span>

          {/* Email */}
          <a
            href={SITE_CONFIG.contact.emailMailto}
            className="hidden sm:flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200 shrink-0 group"
            title="Email Parul Beauty Salon"
          >
            <span className="w-5 h-5 rounded-full border border-[#D6A64D]/70 flex items-center justify-center text-[#D6A64D] group-hover:border-[#D6A64D] group-hover:scale-105 transition-all">
              <Mail size={10} />
            </span>
            <span className="font-light tracking-wide">{SITE_CONFIG.contact.email}</span>
          </a>
        </div>

        {/* Right Side: Social Media Icons (Facebook, Instagram, YouTube) */}
        <div className="flex items-center space-x-2 shrink-0 pl-3">
          {/* Facebook */}
          <a
            href={SITE_CONFIG.socials.find((s) => s.platform === "facebook")?.href || "https://www.facebook.com/ParBeautySalon"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Parul Beauty Salon on Facebook"
            className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-[#C89B3C]/60 hover:border-[#F5D78E] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(200,155,60,0.4)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-0.5 bg-black/20"
          >
            <Image
              src="/images/icons/facebook.png"
              alt="Facebook"
              width={26}
              height={26}
              className="w-full h-full object-contain"
            />
          </a>

          {/* Instagram */}
          <a
            href={SITE_CONFIG.socials.find((s) => s.platform === "instagram")?.href || "#"}
            aria-label="Visit Parul Beauty Salon on Instagram"
            className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-[#C89B3C]/60 hover:border-[#F5D78E] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(200,155,60,0.4)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-0.5 bg-black/20"
          >
            <Image
              src="/images/icons/instagram.png"
              alt="Instagram"
              width={26}
              height={26}
              className="w-full h-full object-contain"
            />
          </a>

          {/* YouTube */}
          <a
            href={SITE_CONFIG.socials.find((s) => s.platform === "youtube")?.href || "#"}
            aria-label="Visit Parul Beauty Salon on YouTube"
            className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-[#C89B3C]/60 hover:border-[#F5D78E] shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(200,155,60,0.4)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-0.5 bg-black/20"
          >
            <Image
              src="/images/icons/youtube.png"
              alt="YouTube"
              width={26}
              height={26}
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
