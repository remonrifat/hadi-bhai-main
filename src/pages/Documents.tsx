import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  {
    title: "লাভায় লালশাক পূবের আকাশ",
    type: "কাব্যগ্রন্থ",
    description: "শহীদ ওসমান হাদির একমাত্র কাব্যগ্রন্থ। ২০২৪ সালে দুয়ার পাবলিকেশন্স থেকে প্রকাশিত।",
    year: "২০২৪",
  },
  {
    title: "ইনকিলাব মঞ্চের ঘোষণাপত্র",
    type: "দলিল",
    description: "ইনকিলাব মঞ্চের প্রতিষ্ঠাকালীন ঘোষণাপত্র ও লক্ষ্য-উদ্দেশ্য।",
    year: "২০২৪",
  },
  {
    title: "জুলাই বিপ্লবের ইতিহাস",
    type: "প্রবন্ধ",
    description: "২০২৪ সালের জুলাই গণঅভ্যুত্থানের বিস্তারিত বিবরণ ও শহীদ হাদির ভূমিকা।",
    year: "২০২৪",
  },
];

const Documents = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ডকুমেন্ট</h1>
              <p className="text-xl text-muted-foreground">
                গুরুত্বপূর্ণ দলিল ও লেখালেখি
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documents List */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="space-y-4 max-w-3xl mx-auto">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-primary font-medium bg-primary/20 px-2 py-0.5 rounded">
                        {doc.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{doc.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <Download className="w-5 h-5" />
                  </Button>
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

export default Documents;
