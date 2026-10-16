"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/data/site-config";
import { AppointmentButton } from "../ui/AppointmentButton";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <>
      <header className="relative w-full z-30 select-none">

        {/* DESKTOP SVG CURVE (STRICTLY lg:block - UNTOUCHED ORIGINAL DESKTOP DESIGN) */}
        <div className="hidden lg:block absolute inset-0 w-full h-[132px] pointer-events-none overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1920 132"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="navbarGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C59849" stopOpacity="0.95" />
                <stop offset="20%" stopColor="#E5BD6F" stopOpacity="1" />
                <stop offset="40%" stopColor="#C59849" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#D6A64D" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#B88736" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="navIvoryFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF9F3" />
                <stop offset="100%" stopColor="#FFF9F3" />
              </linearGradient>
              <filter id="goldGlow" x="-5%" y="-20%" width="110%" height="150%">
                <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#B88736" floodOpacity="0.25" />
              </filter>
            </defs>

            <path
              d="M 0,0 L 1920,0 L 1920,104 L 430,104 C 365,104 330,130 220,130 C 120,130 55,116 0,106 Z"
              fill="url(#navIvoryFill)"
            />

            <path
              d="M 0,106 C 55,116 120,130 220,130 C 330,130 365,104 430,104 L 1920,104"
              stroke="url(#navbarGoldLine)"
              strokeWidth="1.8"
              filter="url(#goldGlow)"
              fill="none"
            />

            <path
              d="M 0,40 C 35,55 75,95 85,132"
              stroke="#B88736"
              strokeWidth="1"
              strokeOpacity="0.3"
              fill="none"
            />
          </svg>
        </div>

        <div className="hidden lg:block absolute top-0 left-0 right-0 h-[104px] bg-[#FFF9F3] -z-10" />

        {/* MOBILE LEFT-SIDE CLIP PATH CURVE DESIGN (CRADLING LOGO INSIDE) */}
        <div className="block lg:hidden absolute inset-0 w-full h-[96px] pointer-events-none overflow-hidden -z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 390 96"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient id="mobileNavGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C59849" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#F0CE84" stopOpacity="1" />
                <stop offset="100%" stopColor="#B88736" stopOpacity="0.8" />
              </linearGradient>
              <filter id="mobileGoldGlow" x="-10%" y="-20%" width="120%" height="150%">
                <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#B88736" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Ivory Fill covering the left side where logo sits */}
            <path
              d="M 0,0 L 280,0 C 268,26 248,58 205,76 C 158,92 80,90 0,76 Z"
              fill="#FFF9F3"
            />

            {/* Golden glowing curved border swooping around the logo */}
            <path
              d="M 280,0 C 268,26 248,58 205,76 C 158,92 80,90 0,76"
              stroke="url(#mobileNavGoldLine)"
              strokeWidth="1.8"
              filter="url(#mobileGoldGlow)"
              fill="none"
            />

            {/* Delicate secondary accent arc */}
            <path
              d="M 0,32 C 40,46 110,72 215,60"
              stroke="#B88736"
              strokeWidth="1"
              strokeOpacity="0.3"
              fill="none"
            />
          </svg>
        </div>

        {/* ============================================================== */}
        {/* NAVBAR CONTENT                                                 */}
        {/* ============================================================== */}
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-12 h-[84px] lg:h-[104px] flex items-center justify-between relative z-10">

          <Link
            href="/"
            className="flex items-center space-x-3 group cursor-pointer shrink-0 pt-0.5"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden shadow-md border-2 border-[#B88736]/40 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#B88736]"
            >
              <Image
                src={SITE_CONFIG.brand.logo}
                alt={SITE_CONFIG.brand.fullName}
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <span className="font-serif text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#24082F] tracking-[0.02em] leading-none group-hover:text-[#351044] transition-colors">
                {SITE_CONFIG.brand.name}
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.24em] text-[#24082F]/85 uppercase mt-1">
                {SITE_CONFIG.brand.subtitle}
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 pt-0.5">
            {SITE_CONFIG.navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="inline-flex items-center space-x-1.5 text-[15px] font-medium text-[#24082F] hover:text-[#B88736] transition-colors py-2 tracking-wide group"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={15}
                        className={`text-[#24082F]/70 group-hover:text-[#B88736] transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-[#FFF9F3] border border-[#B88736]/30 rounded-xl shadow-xl py-3 z-50 overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-5 py-2.5 text-sm text-[#24082F] hover:text-[#B88736] hover:bg-[#F8EFE4] transition-colors font-medium"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={item.label} className="relative py-2">
                  <Link
                    href={item.href}
                    className={`text-[15px] tracking-wide transition-colors duration-200 ${item.isActive
                        ? "text-[#24082F] font-bold"
                        : "text-[#24082F] hover:text-[#B88736] font-medium"
                      }`}
                  >
                    {item.label}
                  </Link>

                  {/* Gold active underline bar matching reference */}
                  {item.isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full gold-gradient shadow-sm"
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Appointment CTA & Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <AppointmentButton
                text="Book an Appointment"
                size="md"
                href={SITE_CONFIG.appointmentUrl}
              />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-xl border border-[#B88736]/40 flex items-center justify-center text-[#24082F] hover:bg-[#B88736]/10 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
