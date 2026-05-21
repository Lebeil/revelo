import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhoIsItForSection } from "@/components/landing/WhoIsItForSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { FeaturesMatrixSection } from "@/components/landing/FeaturesMatrixSection";
import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { LeadCaptureSection } from "@/components/landing/LeadCaptureSection";

export default function Page() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <WhoIsItForSection />
        <PainPointsSection />
        <SolutionSection />
        <FeaturesMatrixSection />
        <ArchitectureSection />
        <ComparisonSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </>
  );
}
