import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const quotes = [
  {
    text: "মৃত্যুর ভয় দেখিয়ে লাভ নেই, লড়াই চলবে।",
    source: "Facebook Post",
  },
  {
    text: "আমি আমার সন্তানকে রেখে যেতে চাই, আমার মৃত্যুর পরে যেন এই লড়াই বন্ধ না হয়। এই লড়াই যেন বাংলাদেশে কেয়ামত পর্যন্ত থাকে।",
    source: "সাক্ষাৎকার",
  },
  {
    text: "বিপ্লবীর মৃত্যু ঘরের মধ্যে হতে পারে না, তার মৃত্যু হবে রাজপথে গ্লোরির মৃত্যু।",
    source: "বক্তৃতা",
  },
  {
    text: "সবাই যখন মৃত্যুটাকে ভীষণ ভয় পায়, আমি তখন হাসতে হাসতে আল্লাহর কাছে ভীষণ সন্তুষ্টি নিয়ে পৌঁছাতে চাই।",
    source: "ভিডিও বার্তা",
  },
];

export const QuoteSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm text-primary font-medium mb-2 block">স্মরণীয় উক্তি</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">বাণী ও দর্শন</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            শহীদ ওসমান হাদির তেজস্বী বাণী যা প্রজন্মকে পথ দেখাবে।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/quotes">সব উক্তি দেখুন</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
