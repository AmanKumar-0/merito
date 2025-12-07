import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DashboardPreview from "@/components/DashboardPreview";
import AISection from "@/components/AISection";
import SocialProof from "@/components/SocialProof";
import LiveSnapshot from "@/components/LiveSnapshot";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <LiveSnapshot />
      <DashboardPreview />
      <HowItWorks />
      <AISection />
      <Features />
      <Integrations />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
