"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = React.useState<number | string>(2025);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer
      className="relative w-full pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden select-none bg-[#24082F] text-white"
      style={{
        backgroundImage: "url('/images/footer-bg-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle luxury ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= 5 COLUMNS MAIN GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 xl:gap-8 items-start mb-12 sm:mb-16">
          {/* ================= COL 1: BRAND & SOCIALS ================= */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Salon Logo */}
            <Link
              href="/"
              className="group block relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden shadow-[0_4px_20px_rgba(200,155,60,0.35)] border-2 border-[#C89B3C]/70 hover:border-[#F5D78E] transition-all duration-300 hover:scale-105 mb-3"
            >
              <Image
                src={SITE_CONFIG.brand.logo}
                alt={SITE_CONFIG.brand.fullName}
                fill
                priority
                className="object-cover"
              />
            </Link>

            {/* Brand Title: Parul */}
            <h3 className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F5D78E] via-[#E2B766] to-[#D4A34A] font-semibold tracking-wide leading-none">
              Parul
            </h3>

            {/* Brand Subtitle: BEAUTY SALON */}
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#E5BD6F] uppercase mt-1 mb-5">
              BEAUTY SALON
            </span>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href={SITE_CONFIG.socials.find((s) => s.platform === "facebook")?.href || "https://www.facebook.com/ParBeautySalon"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#C89B3C]/60 hover:border-[#F5D78E] shadow-[0_2px_10px_rgba(0,0,0,0.35)] hover:shadow-[0_4px_14px_rgba(200,155,60,0.45)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-0.5 bg-black/20"
              >
                <Image
                  src="/images/icons/facebook.png"
                  alt="Facebook"
                  width={38}
                  height={38}
                  className="w-full h-full object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href={SITE_CONFIG.socials.find((s) => s.platform === "instagram")?.href || "#"}
                aria-label="Instagram"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#C89B3C]/60 hover:border-[#F5D78E] shadow-[0_2px_10px_rgba(0,0,0,0.35)] hover:shadow-[0_4px_14px_rgba(200,155,60,0.45)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-0.5 bg-black/20"
              >
                <Image
                  src="/images/icons/instagram.png"
                  alt="Instagram"
                  width={38}
                  height={38}
                  className="w-full h-full object-contain"
                />
              </a>

              {/* YouTube */}
              <a
                href={SITE_CONFIG.socials.find((s) => s.platform === "youtube")?.href || "#"}
                aria-label="YouTube"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#C89B3C]/60 hover:border-[#F5D78E] shadow-[0_2px_10px_rgba(0,0,0,0.35)] hover:shadow-[0_4px_14px_rgba(200,155,60,0.45)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-0.5 bg-black/20"
              >
                <Image
                  src="/images/icons/youtube.png"
                  alt="YouTube"
                  width={38}
                  height={38}
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* ================= COL 2: QUICK LINKS ================= */}
          <div>
            <h4 className="font-serif text-lg text-white font-medium">Quick Links</h4>
            {/* Gold Diamond Line Accent */}
            <div className="flex items-center gap-1.5 my-2.5">
              <span className="w-5 h-[1px] bg-gradient-to-r from-transparent to-[#C89B3C]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5BD6F] shadow-[0_0_5px_#E5BD6F]" />
              <span className="w-8 h-[1px] bg-gradient-to-r from-[#C89B3C] to-transparent" />
            </div>

            <ul className="space-y-2 mt-3.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "#" },
                { label: "Gallery", href: "#" },
                { label: "Contact Us", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-[#E0D3E5]/85 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C89B3C] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COL 3: OUR SERVICES ================= */}
          <div>
            <h4 className="font-serif text-lg text-white font-medium">Our Services</h4>
            {/* Gold Diamond Line Accent */}
            <div className="flex items-center gap-1.5 my-2.5">
              <span className="w-5 h-[1px] bg-gradient-to-r from-transparent to-[#C89B3C]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5BD6F] shadow-[0_0_5px_#E5BD6F]" />
              <span className="w-8 h-[1px] bg-gradient-to-r from-[#C89B3C] to-transparent" />
            </div>

            <ul className="space-y-2 mt-3.5">
              {[
                { label: "Eyebrow Threading", href: "#" },
                { label: "Advanced Facial", href: "#" },
                { label: "Henna Tattoo", href: "#" },
                { label: "Waxing", href: "#" },
                { label: "Eyebrow Tinting", href: "#" },
                { label: "Bridal Makeup", href: "#" },
                { label: "Hair Styling", href: "#" },
                { label: "Hair Henna", href: "#" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-[#E0D3E5]/85 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C89B3C] shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COL 4: CONTACT INFO ================= */}
          <div>
            <h4 className="font-serif text-lg text-white font-medium">Contact Info</h4>
            {/* Gold Diamond Line Accent */}
            <div className="flex items-center gap-1.5 my-2.5">
              <span className="w-5 h-[1px] bg-gradient-to-r from-transparent to-[#C89B3C]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5BD6F] shadow-[0_0_5px_#E5BD6F]" />
              <span className="w-8 h-[1px] bg-gradient-to-r from-[#C89B3C] to-transparent" />
            </div>

            <div className="space-y-3.5 mt-3.5">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full border border-[#C89B3C]/60 flex items-center justify-center shrink-0 bg-white/5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F5D78E]" />
                </div>
                <a
                  href={SITE_CONFIG.contact.addressMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#E0D3E5]/90 hover:text-white transition-colors leading-snug"
                >
                  {SITE_CONFIG.contact.address}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-[#C89B3C]/60 flex items-center justify-center shrink-0 bg-white/5">
                  <Phone className="w-3.5 h-3.5 text-[#F5D78E]" />
                </div>
                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  className="text-[13px] text-[#E0D3E5]/90 hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-[#C89B3C]/60 flex items-center justify-center shrink-0 bg-white/5">
                  <Mail className="w-3.5 h-3.5 text-[#F5D78E]" />
                </div>
                <a
                  href={SITE_CONFIG.contact.emailMailto}
                  className="text-[13px] text-[#E0D3E5]/90 hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              {/* Pill Button: BOOK AN APPOINTMENT */}
              <div className="pt-2">
                <Link
                  href={SITE_CONFIG.appointmentUrl}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8F5A17] via-[#C89B3C] to-[#8F5A17] hover:from-[#A87224] hover:to-[#A87224] text-white text-[11px] font-bold tracking-wider uppercase border border-[#F5D78E]/60 shadow-[0_4px_16px_rgba(200,155,60,0.3)] hover:shadow-[0_6px_22px_rgba(200,155,60,0.45)] transition-all transform hover:scale-102"
                >
                  <span>Book An Appointment</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5D78E] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* ================= COL 5: OPENING HOURS ================= */}
          <div>
            <h4 className="font-serif text-lg text-white font-medium">Opening Hours</h4>
            {/* Gold Diamond Line Accent */}
            <div className="flex items-center gap-1.5 my-2.5">
              <span className="w-5 h-[1px] bg-gradient-to-r from-transparent to-[#C89B3C]" />
              <span className="w-1.5 h-1.5 rotate-45 bg-[#E5BD6F] shadow-[0_0_5px_#E5BD6F]" />
              <span className="w-8 h-[1px] bg-gradient-to-r from-[#C89B3C] to-transparent" />
            </div>

            <div className="space-y-1.5 mt-3.5 text-[13px]">
              {[
                { day: "Monday", hours: "11:00 AM – 6:00 PM" },
                { day: "Tuesday", hours: "11:00 AM – 6:00 PM" },
                { day: "Wednesday", hours: "11:00 AM – 6:00 PM" },
                { day: "Thursday", hours: "11:00 AM – 6:00 PM" },
                { day: "Friday", hours: "11:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "12:00 PM – 5:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex items-center justify-between text-[#E0D3E5]/85 py-0.5"
                >
                  <span className="text-[#E0D3E5]/90">{schedule.day}</span>
                  <span className="text-[#E0D3E5]/75 font-light">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="pt-6 sm:pt-8 border-t border-[#C89B3C]/30 flex flex-col items-center">
          {/* Centered Symmetrical Gold Lotus Emblem */}
          <div className="relative -mt-10 sm:-mt-12 mb-3 bg-[#24082F] px-4 py-1 rounded-full border border-[#C89B3C]/40 flex items-center justify-center text-[#C89B3C] shadow-lg">
            <svg
              viewBox="0 0 64 64"
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="footerLotusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5D78E" />
                  <stop offset="50%" stopColor="#D4A34A" />
                  <stop offset="100%" stopColor="#A87524" />
                </linearGradient>
              </defs>
              <path
                d="M32 10 C32 10 24 24 24 38 C24 45 28 50 32 50 C36 50 40 45 40 38 C40 24 32 10 32 10 Z"
                stroke="url(#footerLotusGrad)"
                fill="url(#footerLotusGrad)"
                fillOpacity="0.2"
              />
              <path
                d="M30 20 C24 24 16 32 17 42 C18 47 22 50 28 49 C26 44 26 36 30 20 Z"
                stroke="url(#footerLotusGrad)"
                fill="url(#footerLotusGrad)"
                fillOpacity="0.12"
              />
              <path
                d="M34 20 C40 24 48 32 47 42 C46 47 42 50 36 49 C38 44 38 36 34 20 Z"
                stroke="url(#footerLotusGrad)"
                fill="url(#footerLotusGrad)"
                fillOpacity="0.12"
              />
              <path
                d="M25 32 C17 35 10 42 12 48 C14 52 20 52 26 48 C22 44 23 38 25 32 Z"
                stroke="url(#footerLotusGrad)"
                fill="url(#footerLotusGrad)"
                fillOpacity="0.08"
              />
              <path
                d="M39 32 C47 35 54 42 52 48 C50 52 44 52 38 48 C42 44 41 38 39 32 Z"
                stroke="url(#footerLotusGrad)"
                fill="url(#footerLotusGrad)"
                fillOpacity="0.08"
              />
              <path d="M22 52 C27 55 37 55 42 52" stroke="url(#footerLotusGrad)" strokeWidth="2" />
            </svg>
          </div>

          <div className="w-full text-center py-2">
            <p className="text-white text-sm z-10 relative">
              © <span suppressHydrationWarning>{currentYear}</span> Parul Beauty Salon. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-white/85 text-xs mt-1.5 z-10 relative">
              <a
                className="hover:text-[#fca90e] transition-colors"
                href="https://www.wxperts.co/website-development.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Development
              </a>
              <span className="text-white/40">|</span>
              <a
                className="hover:text-[#fca90e] transition-colors"
                href="https://www.wxperts.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hosting
              </a>
              <span className="text-white/40">|</span>
              <a
                className="hover:text-[#fca90e] transition-colors"
                href="https://www.wxperts.co/search-engine-optimization.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                SEO
              </a>
              <span className="text-white/40">|</span>
              <a
                className="hover:text-[#fca90e] transition-colors"
                href="https://www.wxperts.co/digital-marketing.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Marketing
              </a>
            </div>

            <div className="mt-3 flex items-center justify-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
                href="https://www.wxperts.co/"
              >
                <div className="w-[100px] h-[50px] rounded-lg flex items-center justify-center mx-auto transition-colors backdrop-blur-sm bg-white/5 border border-white/10 hover:border-[#fca90e]/50 p-1">
                  <Image
                    src="/images/wxperts.webp"
                    alt="WXPERTS"
                    width={90}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
