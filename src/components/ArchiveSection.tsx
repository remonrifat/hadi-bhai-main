import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Video, Image, Mic, Clock, Calendar, MapPin, PenTool, Heart } from "lucide-react";

const archiveItems = [
  { icon: Video, title: "ভিডিও", subtitle: "বক্তৃতা ও সাক্ষাৎকার", path: "/videos", color: "text-blue-400" },
  { icon: Image, title: "ছবি", subtitle: "ফটো গ্যালারি", path: "/photos", color: "text-green-400" },
  { icon: Mic, title: "বক্তৃতা", subtitle: "লিখিত বক্তৃতা", path: "/speeches", color: "text-yellow-400" },
  { icon: Clock, title: "টাইমলাইন", subtitle: "জীবনের গুরুত্বপূর্ণ মুহূর্ত", path: "/timeline", color: "text-purple-400" },
  { icon: Calendar, title: "ইভেন্ট", subtitle: "জানাযা ও স্মরণসভা", path: "/events", color: "text-pink-400" },
  { icon: MapPin, title: "স্থান", subtitle: "গুরুত্বপূর্ণ স্থান", path: "/locations", color: "text-orange-400" },
  { icon: PenTool, title: "লেখালেখি", subtitle: "প্রবন্ধ ও কবিতা", path: "/writings", color: "text-cyan-400" },
  { icon: Heart, title: "শ্রদ্ধাঞ্জলি", subtitle: "শ্রদ্ধাঞ্জলি জানান", path: "/tributes", color: "text-red-400" },
];

export const ArchiveSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">সংগ্রহশালা ঘুরে দেখুন</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {archiveItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={item.path}
                className="block p-6 bg-background border border-border rounded-xl hover:border-primary/50 hover:bg-secondary/50 transition-all group text-center h-full"
              >
                <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;
