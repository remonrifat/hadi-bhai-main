import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  { text: "মৃত্যুর ভয় দেখিয়ে লাভ নেই, লড়াই চলবে।", source: "Facebook Post" },
  { text: "আমি আমার সন্তানকে রেখে যেতে চাই, আমার মৃত্যুর পরে যেন এই লড়াই বন্ধ না হয়। এই লড়াই যেন বাংলাদেশে কেয়ামত পর্যন্ত থাকে।", source: "সাক্ষাৎকার" },
  { text: "বিপ্লবীর মৃত্যু ঘরের মধ্যে হতে পারে না, তার মৃত্যু হবে রাজপথে গ্লোরির মৃত্যু।", source: "বক্তৃতা" },
  { text: "সবাই যখন মৃত্যুটাকে ভীষণ ভয় পায়, আমি তখন হাসতে হাসতে আল্লাহর কাছে ভীষণ সন্তুষ্টি নিয়ে পৌঁছাতে চাই। যে আমি নূন্যতম একটা জীবন লিড করতে পারলাম। আমি একটা ইনসাফের হাসি নিয়ে আমি আমার আল্লাহর কাছে পৌঁছাতে পেরেছি।", source: "ভিডিও বার্তা" },
  { text: "গত ১৪-১৫ বছর ধরে বাংলাদেশে ফ্যাসিবাদ প্রতিষ্ঠিত হয়েছে। আমরা ন্যায়ভিত্তিক রাষ্ট্র গঠনের স্বপ্ন দেখি।", source: "মঞ্চ বক্তৃতা" },
  { text: "যতক্ষন না পর্যন্ত বুকে বা মাথায় গুলি চলবে ততক্ষণ আমরা কোনো স্ট্রাগল মনে করি না!", source: "ইন্টারভিউ" },
  { text: "আমরা শুধু কথা বলি না, আমরা কাজ করি। প্রতিটি কথার পেছনে আমাদের জীবন দেওয়ার প্রস্তুতি আছে।", source: "সমাবেশ" },
  { text: "এই দেশটা আমাদের, এই মাটি আমাদের। কোনো জালিমের হাতে এই দেশ ছেড়ে দেওয়া যাবে না।", source: "জনসভা" },
];

const Quotes = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">গোল্ডেন কোটস</h1>
              <p className="text-xl text-muted-foreground">
                শহীদ ওসমান হাদির অমর বাণী ও উক্তিসমূহ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quotes Grid */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-gradient border border-border rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  <blockquote className="text-lg md:text-xl text-foreground mb-4 relative z-10">
                    "{quote.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <cite className="text-primary not-italic font-medium">— শহীদ ওসমান হাদি</cite>
                    <span className="text-xs text-muted-foreground">{quote.source}</span>
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

export default Quotes;
