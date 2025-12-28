import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "ঢাকা বিশ্ববিদ্যালয় কেন্দ্রীয় মসজিদ প্রাঙ্গণ",
    type: "সমাধিস্থল",
    description: "শহীদ ওসমান হাদির চিরনিদ্রার স্থান। জাতীয় কবি কাজী নজরুল ইসলামের সমাধির পাশে।",
    address: "ঢাকা বিশ্ববিদ্যালয়, ঢাকা",
  },
  {
    name: "নলছিটি, ঝালকাঠি",
    type: "জন্মস্থান",
    description: "শহীদ ওসমান হাদির জন্মস্থান ও শৈশবের স্মৃতিবিজড়িত এলাকা।",
    address: "নলছিটি উপজেলা, ঝালকাঠি জেলা, বাংলাদেশ",
  },
  {
    name: "জাতীয় সংসদ ভবন",
    type: "জানাযা স্থান",
    description: "২০ ডিসেম্বর ২০২৫ তারিখে এখানে লক্ষ লক্ষ মানুষের উপস্থিতিতে জানাযার নামাজ অনুষ্ঠিত হয়।",
    address: "মানিক মিয়া এভিনিউ, ঢাকা",
  },
  {
    name: "পল্টন, ঢাকা",
    type: "হামলার স্থান",
    description: "১২ ডিসেম্বর ২০২৫ তারিখে এখানে শহীদ হাদির উপর সন্ত্রাসী হামলা হয়।",
    address: "পল্টন, ঢাকা",
  },
];

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">গুরুত্বপূর্ণ স্থান</h1>
              <p className="text-xl text-muted-foreground">
                শহীদ ওসমান হাদির জীবনের সাথে জড়িত গুরুত্বপূর্ণ স্থানসমূহ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <span className="text-xs text-primary font-medium bg-primary/20 px-2 py-1 rounded">
                    {location.type}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-3 mb-2">{location.name}</h3>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {location.address}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
