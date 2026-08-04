import { Hero } from "@/components/home/Hero";
import { QuickAccess } from "@/components/home/QuickAccess";
import { Stats } from "@/components/home/Stats";
import { SpecialtiesSection } from "@/components/home/SpecialtiesSection";
import { ExamsSection } from "@/components/home/ExamsSection";
import { WhyMedX } from "@/components/home/WhyMedX";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { InsuranceSection } from "@/components/home/InsuranceSection";
import { Testimonials } from "@/components/home/Testimonials";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FAQ } from "@/components/home/FAQ";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Stats />
      <SpecialtiesSection />
      <ExamsSection />
      <WhyMedX />
      <DoctorsSection />
      <InsuranceSection />
      <Testimonials />
      <GalleryPreview />
      <FAQ />
      <HomeCTA />
    </>
  );
}
