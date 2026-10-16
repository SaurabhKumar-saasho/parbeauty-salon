"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/data/site-config";
import { AppointmentButton } from "../ui/AppointmentButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#24082F]/70 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-[#FFF9F3] border-l border-[#B88736]/30 z-50 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Header in Drawer */}
            <div className="p-6 border-b border-[#B88736]/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-sm">
                  <Image
                    src={SITE_CONFIG.brand.logo}
                    alt={SITE_CONFIG.brand.fullName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#24082F] leading-tight">
                    {SITE_CONFIG.brand.name}
                  </div>
                  <div className="text-[9px] tracking-[0.25em] text-[#24082F]/75 font-medium uppercase">
                    {SITE_CONFIG.brand.subtitle}
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-[#B88736]/30 flex items-center justify-center text-[#24082F] hover:bg-[#24082F] hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-4 flex-1">
              <nav className="flex flex-col space-y-2">
                {SITE_CONFIG.navItems.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.label} className="border-b border-[#B88736]/10 pb-2">
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="w-full flex items-center justify-between py-2 text-lg font-medium text-[#24082F] hover:text-[#B88736] transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={18}
                            className={`transform transition-transform duration-200 text-[#B88736] ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 pt-1 space-y-2 overflow-hidden"
                            >
                              {item.subItems?.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={onClose}
                                  className="block py-1.5 text-sm text-[#24082F]/80 hover:text-[#B88736] transition-colors"
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
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className={`block py-2 text-lg font-medium border-b border-[#B88736]/10 transition-colors ${
                        item.isActive
                          ? "text-[#B88736] font-semibold"
                          : "text-[#24082F] hover:text-[#B88736]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4">
                <AppointmentButton
                  size="md"
                  className="w-full justify-center"
                  onClick={onClose}
                />
              </div>
            </div>

            {/* Bottom Contact Details (Address -> Phone -> Email) */}
            <div className="p-6 bg-[#FAF3EC] border-t border-[#B88736]/20 space-y-3 text-xs text-[#24082F]/90">
              <div className="flex items-start space-x-2.5">
                <MapPin size={14} className="text-[#B88736] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <a
                href={SITE_CONFIG.contact.phoneTel}
                className="flex items-center space-x-2.5 hover:text-[#B88736]"
              >
                <Phone size={14} className="text-[#B88736]" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>
              <a
                href={SITE_CONFIG.contact.emailMailto}
                className="flex items-center space-x-2.5 hover:text-[#B88736]"
              >
                <Mail size={14} className="text-[#B88736]" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
