import { Header } from "@/components/common/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServiceSection } from "@/components/home/ServiceSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { GallerySection } from "@/components/home/GallerySection";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F3] text-[#21152A] selection:bg-[#B88736]/20 selection:text-[#24082F]">
      <Header />
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <TestimonialSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
