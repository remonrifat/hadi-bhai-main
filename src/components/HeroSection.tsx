import { Calendar, Heart, MapPin, Play, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    }, 100);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoPlaying(false);
  };

  // Handle escape key to close video
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVideoPlaying) {
        handleCloseVideo();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVideoPlaying]);

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Portrait with Video Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-6 sm:mb-8 cursor-pointer group"
            onClick={handlePlayVideo}
          >
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 border-4 border-border rounded-full overflow-hidden bg-secondary glow-primary relative">
              <img
                src="/main.jpeg"
                alt="শহীদ ওসমান হাদি"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/80 rounded-full flex items-center justify-center transform scale-95 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
            
            {/* Pulsing Ring Effect */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-glow-pulse" />
            
            {/* Video Play Button (Always visible on mobile) */}
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center z-20"
              onClick={handlePlayVideo}
              aria-label="ভিডিও চালু করুন"
            >
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            </button>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 px-2">
              <span className="text-foreground">শহীদ </span>
              <span className="text-gradient">শরীফ ওসমান বিন হাদি</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-4">
              বিপ্লবী জুলাই যোদ্ধা ও ইনকিলাব মঞ্চের মুখপাত্র
            </p>
          </motion.div>

          {/* Dates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>৩০ জুন ১৯৯৩</span>
            </div>
            <span className="text-muted-foreground">—</span>
            <div className="flex items-center gap-1 sm:gap-2 text-destructive">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>১৮ ডিসেম্বর ২০২৫</span>
              <span className="text-destructive">∞</span>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-1 sm:gap-2 text-muted-foreground mb-8 sm:mb-10 text-sm sm:text-base px-4"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span>সমাধি: ঢাকা বিশ্ববিদ্যালয় কেন্দ্রীয় মসজিদ প্রাঙ্গণ</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="gap-2">
              <Link to="/about">জীবনী পড়ুন</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/tributes">
                                <Heart className="h-4 w-4" />
                                <span>শ্রদ্ধাঞ্জলি লিখুন</span>
                              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={handleCloseVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-50"
                aria-label="ভিডিও বন্ধ করুন"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video Player */}
              <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                >
                  <source
                    src="/ওসমান হাদীর বিদ্রোহী  কবিতা আবৃত্তি.mp4"
                    type="video/mp4"
                  />
                  আপনার ব্রাউজার ভিডিও সমর্থন করে না।
                </video>
                
                {/* Video Title */}
                <div className="absolute top-0 left-4 right-4 text-white text-sm sm:text-base bg-black/50 backdrop-blur-sm py-2 px-4 rounded">
                  শহীদ শরীফ ওসমান বিন হাদি - বিদ্রোহী কবিতা আবৃত্তি
                </div>
              </div>

              {/* Instructions */}
              <div className="text-center mt-4 text-white/70 text-sm">
                <p>ESC চাপুন বা ভিডিওর বাইরে ক্লিক করে বন্ধ করুন</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="animate-bounce text-muted-foreground">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;