export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  subItems?: { label: string; href: string }[];
}

export interface ServiceHighlight {
  id: string;
  title: string;
  icon: "skin" | "brow" | "bridal" | "facial";
  description?: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "Parul",
    subtitle: "BEAUTY SALON",
    fullName: "Parul Beauty Salon",
    website: "https://parbeautysalon.com/",
    logo: "/images/logo.png",
  },
  contact: {
    address: "10323 Cross Creek Blvd, Suite E, Tampa, FL 33647",
    addressMapUrl: "https://maps.app.goo.gl/C52VjjPv5Grxcvfv6",
    phone: "(919) 867-8426",
    phoneTel: "tel:+19198678426",
    email: "parulintfl@gmail.com",
    emailMailto: "mailto:parulintfl@gmail.com",
    googleReviewsUrl: "https://www.google.com/search?sca_esv=46aa4e94e8aa63dc&sxsrf=APpeQnsU-pSLmc1AJ_OmUJg0xW0SAlcbmA:1792102790551&q=Eyebrow+Threading+Waxing+Facial+by+Parul&ludocid=8981376430886071488&lsig=AB86z5Uu8fYunzXNOcSW5Lg-ycvg&sa=X&ved=2ahUKEwiTge2Rh72XAxWIR2wGHcnmAygQoAJ6BAgnEBo&biw=1920&bih=945&dpr=1&zx=1792102796493#lrd=0x88c2b79c20eaf269:0x7ca442474d07acc0,1,,,,",
    googleWriteReviewUrl: "https://www.google.com/search?sca_esv=46aa4e94e8aa63dc&sxsrf=APpeQnsU-pSLmc1AJ_OmUJg0xW0SAlcbmA:1792102790551&q=Eyebrow+Threading+Waxing+Facial+by+Parul&ludocid=8981376430886071488&lsig=AB86z5Uu8fYunzXNOcSW5Lg-ycvg&sa=X&ved=2ahUKEwiTge2Rh72XAxWIR2wGHcnmAygQoAJ6BAgnEBo&biw=1920&bih=945&dpr=1&zx=1792102796493#lrd=0x88c2b79c20eaf269:0x7ca442474d07acc0,3,,,,",
    hours: {
      monFri: "Mon - Fri: 11:00 AM - 6:00 PM",
      sat: "Saturday: 12:00 PM - 5:00 PM",
      sun: "Sunday: Closed",
      short: "Mon - Fri: 11:00 AM - 6:00 PM | Sat: 12:00 PM - 5:00 PM | Sun: Closed",
    },
    founder: "Parul Patel",
    experienceYears: 25,
  },
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ParBeautySalon",
      platform: "facebook" as const,
      icon: "/images/icons/facebook.png",
    },
    {
      name: "Instagram",
      href: "#",
      platform: "instagram" as const,
      icon: "/images/icons/instagram.png",
    },
    {
      name: "YouTube",
      href: "#",
      platform: "youtube" as const,
      icon: "/images/icons/youtube.png",
    },
    {
      name: "Yelp",
      href: "https://www.yelp.com/biz/parul-beauty-salon-tampa",
      platform: "yelp" as const,
    },
  ],
  navItems: [
    { label: "Home", href: "/", isActive: true },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Contact Us", href: "#" },
  ] as NavItem[],
  appointmentUrl: "#",
  hero: {
    eyebrow: "25+ YEARS OF BEAUTY & SKINCARE EXCELLENCE ",
    headingLine1: "Elevate Your Beauty,",
    headingLine2: "Reveal Your Radiance.",
    supportingText:
      "Led by master specialist Parul Patel with 25+ years of expertise. Specializing in precision eyebrow threading, comfortable waxing, advanced Hydra Facials, and bridal elegance in Tampa, FL.",
    primaryCta: {
      text: "Book Now",
      href: "#",
    },
    secondaryCta: {
      text: "Explore Services",
      href: "#",
    },
    serviceHighlights: [
      {
        id: "brow-threading",
        title: "BROW & FACIAL THREADING",
        icon: "brow",
      },
      {
        id: "facials",
        title: "HYDRA & ADVANCED FACIALS",
        icon: "facial",
      },
      {
        id: "waxing-care",
        title: "COMFORTABLE WAXING",
        icon: "skin",
      },
      {
        id: "bridal-henna",
        title: "BRIDAL & HAIR HENNA",
        icon: "bridal",
      },
    ] as ServiceHighlight[],
  },
  colors: {
    purple: "#351044",
    plum: "#24082F",
    gold: "#B88736",
    warmGold: "#D6A64D",
    ivory: "#FFF9F3",
    softBlush: "#F5E8E8",
    darkText: "#21152A",
  },
};
