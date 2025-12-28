import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const newsItems = [
  {
    title: "ওসমান হাদি কবিতা লিখতেন 'সীমান্ত শরিফ' নামে",
    source: "Jago News 24",
    date: "১৯ ডিসেম্বর ২০২৫",
    description: "সীমান্ত শরিফ ওরফে শরিফ ওসমান হাদি ঝালকাঠির নলছিটিতে জন্মগ্রহণ করেন এবং ঢাকা বিশ্ববিদ্যালয়ের রাষ্ট্রবিজ্ঞান বিভাগে পড়াশোনা করেন। তিনি ইনসাফ, সংগ্রাম ও মুক্তির স্বপ্নে বিশ্বাসী ছিলেন।",
    link: "https://www.jagonews24.com/literature/article/1077154",
  },
  {
    title: "ওসমান হাদি ভাই: আমার একজনমে দেখা সবচে সাচ্চা বিপ্লবী",
    source: "The Dhaka Diary",
    date: "১৮ ডিসেম্বর ২০২৫",
    description: "লেখক নাজমুল হুদা আজাদ ২০২৩ সালের নভেম্বরে শরিফ ওসমান হাদির সঙ্গে পরিচয়ের স্মৃতি তুলে ধরেছেন। পাঠচক্র, কবিতা ও রাজনৈতিক চিন্তার মাধ্যমে তাঁদের ঘনিষ্ঠতা গড়ে ওঠে।",
    link: "https://thedhakadiary.com/news/9324",
  },
  {
    title: "ওসমান হাদির পরিবারের সবাই আলেম",
    source: "Dhaka Mail",
    date: "১৫ ডিসেম্বর ২০২৫",
    description: "ইনকিলাব মঞ্চের মুখপাত্র ও ঢাকা-৮ আসনের স্বতন্ত্র প্রার্থী শরিফ ওসমান হাদি ঝালকাঠির নলছিটির একটি সুপরিচিত আলেম পরিবারে জন্মগ্রহণ করেন।",
    link: "https://dhakamail.com/country/273494",
  },
];

const News = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">নিউজক্লিপ</h1>
              <p className="text-xl text-muted-foreground">
                সংবাদে শহীদ ওসমান হাদি
              </p>
            </motion.div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="space-y-6 max-w-4xl mx-auto">
              {newsItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-primary font-medium">{item.source}</span>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
