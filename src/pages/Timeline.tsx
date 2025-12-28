import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const timelineEvents = [
  { year: "১৯৯৩", date: "৩০ জুন", title: "জন্ম", description: "ঝালকাঠি জেলার নলছিটি উপজেলায় জন্মগ্রহণ। পিতা: মাওলানা আব্দুল হাদি (মাদ্রাসা শিক্ষক ও স্থানীয় ইমাম), মাতা: তাসলিমা হাদি। ছয় ভাইবোনের মধ্যে সর্বকনিষ্ঠ।" },
  { year: "২০১০", date: "", title: "আলিম পাস ও ঢাবিতে ভর্তি", description: "ঝালকাঠি এন.এস. কামিল মাদ্রাসা থেকে আলিম পরীক্ষায় উত্তীর্ণ। ঢাকা বিশ্ববিদ্যালয়ের রাষ্ট্রবিজ্ঞান বিভাগে ২০১০-২০১১ শিক্ষাবর্ষে ভর্তি।" },
  { year: "২০২৪", date: "ফেব্রুয়ারি", title: "কাব্যগ্রন্থ প্রকাশ", description: "'লাভায় লালশাক পূবের আকাশ' শিরোনামে প্রথম কাব্যগ্রন্থ প্রকাশ। প্রকাশক: দুয়ার পাবলিকেশন্স, ঢাকা।" },
  { year: "২০২৪", date: "জুলাই", title: "জুলাই বিপ্লব", description: "জুলাই বিপ্লবে সক্রিয় অংশগ্রহণ। ঢাকার রামপুরা এলাকার সমন্বয়ক হিসেবে স্থানীয় সাংগঠনিক কার্যক্রম পরিচালনা।" },
  { year: "২০২৪", date: "৫ আগস্ট", title: "বিপ্লব সফল", description: "দীর্ঘ সময়ের শেখ হাসিনা সরকারের পতন। জুলাই শহীদদের বিচার ও আওয়ামী লীগ নিষিদ্ধের দাবিতে সোচ্চার।" },
  { year: "২০২৪", date: "সেপ্টেম্বর", title: "ইনকিলাব মঞ্চ প্রতিষ্ঠা", description: "জুলাই বিপ্লবের ধারাবাহিকতায় 'ইনকিলাব মঞ্চ' প্রতিষ্ঠা। সহ-প্রতিষ্ঠাতা ও মুখপাত্র হিসেবে দায়িত্ব গ্রহণ।" },
  { year: "২০২৫", date: "", title: "বিশ্ববিদ্যালয়ে প্রভাষক", description: "ঢাকার বেসরকারি বিশ্ববিদ্যালয় 'ইউনিভার্সিটি অব স্কলার্স'-এ ইংরেজি বিভাগে প্রভাষক হিসেবে কর্মরত।" },
  { year: "২০২৫", date: "সেপ্টেম্বর", title: "নির্বাচনী প্রচারণা", description: "২০২৬ সালের জাতীয় নির্বাচনে ঢাকা-৮ আসনে স্বতন্ত্র প্রার্থী হিসেবে প্রার্থিতা ঘোষণা।" },
  { year: "২০২৫", date: "১২ ডিসেম্বর", title: "সন্ত্রাসী হামলা", description: "বিকেল ২:২৫ মিনিটে ঢাকার পল্টন এলাকায় মসজিদ থেকে বের হওয়ার পর মোটরসাইকেলে আগত দুই আততায়ীর গুলিতে মাথায় আঘাতপ্রাপ্ত।" },
  { year: "২০২৫", date: "১৫ ডিসেম্বর", title: "সিঙ্গাপুরে স্থানান্তর", description: "উন্নত চিকিৎসার জন্য এয়ার অ্যাম্বুলেন্সে সিঙ্গাপুর জেনারেল হাসপাতালে স্থানান্তর।" },
  { year: "২০২৫", date: "১৮ ডিসেম্বর", title: "শাহাদাত বরণ", description: "সিঙ্গাপুর জেনারেল হাসপাতালে চিকিৎসাধীন অবস্থায় শাহাদাত বরণ। বয়স হয়েছিল মাত্র ৩২ বছর।", isLast: true },
  { year: "২০২৫", date: "২০ ডিসেম্বর", title: "রাষ্ট্রীয় মর্যাদায় দাফন", description: "জাতীয় সংসদ ভবনে জানাজা। কাজী নজরুল ইসলামের সমাধিস্থলে রাষ্ট্রীয় মর্যাদায় দাফন।" },
];

const Timeline = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">টাইমলাইন</h1>
              <p className="text-xl text-muted-foreground">
                ৩০ জুন ১৯৯৩ - ১৮ ডিসেম্বর ২০২৫
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative flex items-start mb-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 ${
                      event.isLast ? "bg-destructive" : "bg-primary"
                    } ring-4 ring-card`}
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-background border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
                      <span className={`text-sm font-medium ${event.isLast ? "text-destructive" : "text-primary"}`}>
                        {event.date} {event.year}
                      </span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
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

export default Timeline;
