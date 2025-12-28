import { Calendar, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-6 sm:mb-8"
          >
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 border-border overflow-hidden bg-secondary glow-primary">
              <img
                src="https://www.hadiarchive.com/images/osman-hadi-portrait.jpg"
                alt="শহীদ ওসমান হাদি"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-glow-pulse" />
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
              <Link to="/videos">
                <Play className="w-4 h-4" />
                ভিডিও দেখুন
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
