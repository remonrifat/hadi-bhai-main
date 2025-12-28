import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timelineEvents = [
  {
    year: "১৯৯৩",
    date: "৩০ জুন",
    title: "জন্ম",
    description: "ঝালকাঠি জেলার নলছিটি উপজেলায় জন্মগ্রহণ।",
  },
  {
    year: "২০১০",
    date: "",
    title: "আলিম পাস ও ঢাবিতে ভর্তি",
    description: "ঢাকা বিশ্ববিদ্যালয়ের রাষ্ট্রবিজ্ঞান বিভাগে ভর্তি।",
  },
  {
    year: "২০২৪",
    date: "ফেব্রুয়ারি",
    title: "কাব্যগ্রন্থ প্রকাশ",
    description: "'লাভায় লালশাক পূবের আকাশ' শিরোনামে প্রথম কাব্যগ্রন্থ প্রকাশ।",
  },
  {
    year: "২০২৪",
    date: "জুলাই",
    title: "জুলাই বিপ্লব",
    description: "জুলাই বিপ্লবে সক্রিয় অংশগ্রহণ।",
  },
  {
    year: "২০২৪",
    date: "সেপ্টেম্বর",
    title: "ইনকিলাব মঞ্চ প্রতিষ্ঠা",
    description: "সহ-প্রতিষ্ঠাতা ও মুখপাত্র হিসেবে দায়িত্ব গ্রহণ।",
  },
  {
    year: "২০২৫",
    date: "১৮ ডিসেম্বর",
    title: "শাহাদাত বরণ",
    description: "সিঙ্গাপুর জেনারেল হাসপাতালে শাহাদাত বরণ।",
    isLast: true,
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm text-muted-foreground mb-2 block">
            ৩০ জুন ১৯৯৩ - ১৮ ডিসেম্বর ২০২৫
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">জীবনের পথচলা</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            মাত্র ৩২ বছরের জীবনে একজন কবি থেকে বিপ্লবী, একজন ছাত্র থেকে জাতীয় নেতা
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start mb-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 ${
                  event.isLast ? "bg-destructive" : "bg-primary"
                } ring-4 ring-background`}
              />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="card-gradient border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                  <span className="text-sm text-primary font-medium">
                    {event.date} {event.year}
                  </span>
                  <h3 className="font-bold text-foreground mt-1 mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/about">সম্পূর্ণ জীবনী পড়ুন</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
