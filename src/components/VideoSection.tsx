import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const videos = [
  {
    id: "08FmVqnGLbA",
    title: "ইনসাফ ও মজলুমের পক্ষ হয়ে জালিমের বিরুদ্ধে লড়াই - ওসমান হাদি",
    duration: "00:31",
  },
  {
    id: "lOAz2WTvrdQ",
    title: "শহিদ শরীফ ওসমান হাদির বড় ভাইয়ের আর্তনাদ",
    duration: "00:26",
  },
  {
    id: "FEE8cx6Z0hk",
    title: "যতক্ষন না পর্যন্ত বুকে বা মাথায় গুলি চলবে ততক্ষণ আমরা কোনো স্ট্রাগল মনে করি না!",
    duration: "1:46",
  },
  {
    id: "KzKd47czeoM",
    title: "আর কতো রক্ত দিবে আমাদের সন্তানেরা? - শহিদ হাদীর মা",
    duration: "01:21",
  },
];

export const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">সর্বশেষ ভিডিও</h2>
            <p className="text-muted-foreground">বক্তৃতা, সাক্ষাৎকার ও প্রামাণ্যচিত্র</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/videos">সব দেখুন</Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
              <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild>
            <Link to="/videos">সব ভিডিও দেখুন</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
