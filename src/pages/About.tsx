import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen, Award, Users } from "lucide-react";

const About = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">জীবনী</h1>
              <p className="text-xl text-muted-foreground">
                শহীদ শরীফ ওসমান বিন হাদির জীবন ও কর্ম
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait & Info */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="md:col-span-1"
              >
                <div className="aspect-square rounded-2xl overflow-hidden border border-border glow-primary">
                  <img
                    src="https://www.hadiarchive.com/images/osman-hadi-portrait.jpg"
                    alt="শহীদ ওসমান হাদি"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 grid grid-cols-2 gap-4"
              >
                <div className="p-4 bg-background rounded-xl border border-border">
                  <Calendar className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">জন্ম</p>
                  <p className="font-semibold text-foreground">৩০ জুন ১৯৯৩</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">জন্মস্থান</p>
                  <p className="font-semibold text-foreground">নলছিটি, ঝালকাঠি</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <Calendar className="w-5 h-5 text-destructive mb-2" />
                  <p className="text-sm text-muted-foreground">শাহাদাত</p>
                  <p className="font-semibold text-foreground">১৮ ডিসেম্বর ২০২৫</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground">সমাধি</p>
                  <p className="font-semibold text-foreground">ঢাবি কেন্দ্রীয় মসজিদ</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bio Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">শহীদ শরীফ ওসমান বিন হাদি</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  শরীফ ওসমান বিন হাদি, যিনি ওসমান গণি নামেও পরিচিত, ছিলেন একজন বাংলাদেশি রাজনীতিবিদ, শিক্ষক ও সমাজকর্মী। 
                  তিনি ইনকিলাব মঞ্চের মুখপাত্র এবং ২০২৪ সালের জুলাই গণঅভ্যুত্থানের অন্যতম সংগঠক হিসেবে পরিচিত ছিলেন। 
                  ২০২৫ সালের ১২ই ডিসেম্বর তিনি ঢাকার পল্টনে গুপ্তহত্যার শিকার হন এবং ১৮ই ডিসেম্বর সিঙ্গাপুর জেনারেল হাসপাতালে 
                  শেষ নিঃশ্বাস ত্যাগ করেন।
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">প্রারম্ভিক জীবন ও শিক্ষা</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  ওসমান হাদি ১৯৯৩ সালের ৩০শে জুন ঝালকাঠি জেলার নলছিটি উপজেলায় জন্মগ্রহণ করেন। তাঁর পিতা ছিলেন একজন 
                  মাদ্রাসা শিক্ষক ও স্থানীয় ইমাম। ছয় ভাইবোনের মধ্যে তিনি ছিলেন সর্বকনিষ্ঠ। ধর্মীয় পরিবেশে বেড়ে ওঠা ওসমান 
                  হাদি ঝালকাঠি এন এস কামিল মাদ্রাসা থেকে আলিম পরীক্ষায় উত্তীর্ণ হন। পরবর্তীতে তিনি ২০১০-২০১১ শিক্ষাবর্ষে 
                  ঢাকা বিশ্ববিদ্যালয়ের রাষ্ট্রবিজ্ঞান বিভাগে ভর্তি হন।
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">রাজনৈতিক জীবন</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  ২০২৪ সালের জুলাই বিপ্লবের সময় তিনি রামপুরা এলাকার সমন্বয়কারী হিসেবে গুরুত্বপূর্ণ ভূমিকা পালন করেন। 
                  ৫ই আগস্ট শেখ হাসিনার পতনের পর তিনি ইনকিলাব মঞ্চের অন্যতম প্রতিষ্ঠাতা হিসেবে আত্মপ্রকাশ করেন এবং 
                  ১৩ই আগস্ট থেকে সংগঠনের মুখপাত্র হিসেবে দায়িত্ব পালন শুরু করেন। তিনি আওয়ামী লীগকে সাংবিধানিকভাবে 
                  রাজনীতি থেকে নিষিদ্ধ করার দাবিতে সোচ্চার ছিলেন এবং ২০২৬ সালের জাতীয় নির্বাচনে ঢাকা-৮ আসন থেকে 
                  স্বতন্ত্র প্রার্থী হিসেবে প্রতিদ্বন্দ্বিতা করার ঘোষণা দিয়েছিলেন।
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-destructive" />
                  <h2 className="text-2xl font-bold text-foreground m-0">শাহাদাত</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  শরীফ ওসমান হাদির ওপর ২০২৫ সালের ১২ ডিসেম্বর ঢাকার পল্টন এলাকায় একটি পরিকল্পিত সশস্ত্র হামলা 
                  চালানো হয়। সেদিন তিনি একটি মসজিদ থেকে বের হওয়ার পরপরই রিকশায় থাকা অবস্থায় মুখোশধারী দুর্বৃত্তদের 
                  হামলার শিকার হন। গুলিবিদ্ধ হওয়ার পর তাঁকে প্রথমে ঢাকা মেডিকেল কলেজ হাসপাতাল ও পরবর্তীতে এভারকেয়ার 
                  হাসপাতালে নিয়ে যাওয়া হয়। ১৫ ডিসেম্বর তাঁকে এয়ার অ্যাম্বুলেন্সে করে সিঙ্গাপুর জেনারেল হাসপাতালে স্থানান্তর 
                  করা হয়, যেখানে ১৮ ডিসেম্বর ২০২৫ সালে, ৩২ বছর বয়সে তিনি শাহাদাত বরণ করেন।
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  ২০শে ডিসেম্বর জাতীয় সংসদ ভবনের দক্ষিণ প্লাজায় তাঁর জানাযার নামাজ অনুষ্ঠিত হয়, যেখানে লক্ষ লক্ষ মানুষ 
                  অংশগ্রহণ করেন। তাঁকে জাতীয় কবি কাজী নজরুল ইসলামের সমাধিস্থলের পাশে ঢাকা বিশ্ববিদ্যালয় কেন্দ্রীয় 
                  মসজিদ প্রাঙ্গণে সমাহিত করা হয়।
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
