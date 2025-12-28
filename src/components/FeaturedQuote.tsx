import { motion } from "framer-motion";

export const FeaturedQuote = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-8">
            "গত ১৪-১৫ বছর ধরে বাংলাদেশে ফ্যাসিবাদ প্রতিষ্ঠিত হয়েছে। আমরা ন্যায়ভিত্তিক রাষ্ট্র গঠনের স্বপ্ন দেখি।"
          </blockquote>
          <cite className="text-xl text-primary not-italic font-semibold">— শহীদ ওসমান হাদি</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedQuote;
