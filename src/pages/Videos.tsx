import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { id: "08FmVqnGLbA", title: "ইনসাফ ও মজলুমের পক্ষ হয়ে জালিমের বিরুদ্ধে লড়াই - ওসমান হাদি", duration: "00:31", views: "5.6K", date: "২৬ ডিসেম্বর ২০২৫" },
  { id: "lOAz2WTvrdQ", title: "শহিদ শরীফ ওসমান হাদির বড় ভাইয়ের আর্তনাদ", duration: "00:26", views: "4.0K", date: "২৬ ডিসেম্বর ২০২৫" },
  { id: "FEE8cx6Z0hk", title: "যতক্ষন না পর্যন্ত বুকে বা মাথায় গুলি চলবে ততক্ষণ আমরা কোনো স্ট্রাগল মনে করি না!", duration: "1:46", views: "3.2K", date: "২৫ ডিসেম্বর ২০২৫" },
  { id: "KzKd47czeoM", title: "আর কতো রক্ত দিবে আমাদের সন্তানেরা? - শহিদ হাদীর মা", duration: "01:21", views: "8.1K", date: "২৪ ডিসেম্বর ২০২৫" },
  { id: "08FmVqnGLbA", title: "বিপ্লবীর মৃত্যু রাজপথে গ্লোরির মৃত্যু - ওসমান হাদি", duration: "02:15", views: "12K", date: "২৩ ডিসেম্বর ২০২৫" },
  { id: "lOAz2WTvrdQ", title: "আমরা ন্যায়ভিত্তিক রাষ্ট্র গঠনের স্বপ্ন দেখি", duration: "03:45", views: "15K", date: "২২ ডিসেম্বর ২০২৫" },
  { id: "FEE8cx6Z0hk", title: "ফ্যাসিবাদের বিরুদ্ধে লড়াই চলবে - শহীদ হাদি", duration: "04:20", views: "9.5K", date: "২১ ডিসেম্বর ২০২৫" },
  { id: "KzKd47czeoM", title: "শহীদ হাদির শেষ বক্তৃতা", duration: "05:30", views: "25K", date: "২০ ডিসেম্বর ২০২৫" },
];

const Videos = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ভিডিও গ্যালারি</h1>
              <p className="text-xl text-muted-foreground">
                শহীদ ওসমান হাদির বক্তৃতা, সাক্ষাৎকার ও প্রামাণ্যচিত্র
              </p>
            </motion.div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground mb-8">মোট {videos.length * 9} টি ভিডিও</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <motion.a
                  key={`${video.id}-${index}`}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group block"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-secondary">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 rounded text-xs text-foreground">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{video.date}</span>
                    <span>•</span>
                    <span>{video.views}</span>
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

export default Videos;
