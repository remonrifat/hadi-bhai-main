import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JusticeCounter from "@/components/JusticeCounter";
import FeaturedQuote from "@/components/FeaturedQuote";
import ArchiveSection from "@/components/ArchiveSection";
import QuoteSection from "@/components/QuoteSection";
import VideoSection from "@/components/VideoSection";
import PhotoGallery from "@/components/PhotoGallery";
import TimelineSection from "@/components/TimelineSection";
import TributeSection from "@/components/TributeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <JusticeCounter />
        <FeaturedQuote />
        <ArchiveSection />
        <QuoteSection />
        <VideoSection />
        <PhotoGallery />
        <TimelineSection />
        <TributeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
