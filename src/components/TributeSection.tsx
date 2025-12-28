import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTributeStore } from "@/hooks/useTributeStore";

export const TributeSection = () => {
  const { getApprovedTributes } = useTributeStore();
  const approvedTributes = getApprovedTributes().slice(0, 3);

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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">শ্রদ্ধাঞ্জলি</h2>
            <p className="text-muted-foreground">মানুষের স্মৃতি ও শ্রদ্ধাঞ্জলি</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/tributes">সব দেখুন</Link>
          </Button>
        </motion.div>

        {approvedTributes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">কোনো শ্রদ্ধাঞ্জলি এখনো প্রদর্শিত হয়নি</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approvedTributes.map((tribute, index) => (
              <motion.div
                key={tribute.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-gradient border border-border rounded-xl p-6"
              >
                <p className="text-foreground mb-6 line-clamp-4">{tribute.message}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                    {tribute.initial}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tribute.name}</p>
                    <p className="text-sm text-muted-foreground">{tribute.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TributeSection;
