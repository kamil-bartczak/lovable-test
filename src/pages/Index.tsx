import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import OpenCommunity from "@/components/OpenCommunity";
import Timeline from "@/components/Timeline";
import UseCases from "@/components/UseCases";
import Mindset from "@/components/Mindset";
import MethodologyPhases from "@/components/MethodologyPhases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Methodology />
      <Timeline />
      <UseCases />
      <Mindset />
      <MethodologyPhases />
      <OpenCommunity />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
