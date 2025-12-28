import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "শহীদ শরীফ ওসমান বিন হাদির জানাযা নামাজ",
    type: "স্মরণসভা",
    date: "20 ডিসেম্বর 2025",
    location: "Manik Mia Avenue & Jatiya Sangsad Bhaban, Dhaka, Bangladesh",
    description: "২০২৫ সালের ১২ ডিসেম্বর বিকেল আনুমানিক ২:২৫ মিনিটে ঢাকার পল্টন এলাকায় একটি মসজিদ থেকে বের হওয়ার পর মোটরসাইকেল আরোহী আততায়ীদের গুলিতে মাথায় আঘাতপ্রাপ্ত হন জুলাই গণঅভ্যুত্থানের অন্যতম সংগঠক, ইনকিলাব মঞ্চের মুখপাত্র এবং ঢাকা-৮ আসনের স্বতন্ত্র সংসদ সদস্য প্রার্থী শরীফ ওসমান বিন হাদি।",
  },
  {
    title: "শহীদ হাদির স্মরণে দোয়া মাহফিল",
    type: "দোয়া মাহফিল",
    date: "25 ডিসেম্বর 2025",
    location: "নলছিটি, ঝালকাঠি",
    description: "শহীদ ওসমান হাদির জন্মভূমি নলছিটিতে তাঁর স্মরণে দোয়া মাহফিল অনুষ্ঠিত।",
  },
  {
    title: "চেহলাম অনুষ্ঠান",
    type: "স্মরণসভা",
    date: "27 জানুয়ারি 2026",
    location: "ঢাকা বিশ্ববিদ্যালয়",
    description: "শহীদ ওসমান হাদির চেহলাম উপলক্ষে ঢাকা বিশ্ববিদ্যালয়ে বিশেষ স্মরণসভা।",
  },
];

const Events = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ইভেন্ট</h1>
              <p className="text-xl text-muted-foreground">
                জানাযা, স্মরণসভা ও অন্যান্য অনুষ্ঠান
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="space-y-6 max-w-4xl mx-auto">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <span className="text-xs text-primary font-medium bg-primary/20 px-2 py-1 rounded">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-3 mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
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

export default Events;
