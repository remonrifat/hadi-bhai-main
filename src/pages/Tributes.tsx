import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { useTributeStore } from "@/hooks/useTributeStore";

const Tributes = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    message: "",
  });
  
  const { addTribute, getApprovedTributes, tributes } = useTributeStore();
  const approvedTributes = getApprovedTributes();
  const pendingCount = tributes.filter(t => !t.approved).length;
  const totalCount = tributes.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      toast.error("অনুগ্রহ করে আপনার শ্রদ্ধাঞ্জলি লিখুন");
      return;
    }
    addTribute(formData.name, formData.location, formData.message);
    toast.success("আপনার শ্রদ্ধাঞ্জলি সফলভাবে জমা হয়েছে। অনুমোদনের পর এটি প্রদর্শিত হবে।");
    setFormData({ name: "", location: "", message: "" });
  };

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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">শ্রদ্ধাঞ্জলি</h1>
              <p className="text-xl text-muted-foreground">
                শহীদ ওসমান হাদির প্রতি মানুষের শ্রদ্ধা ও স্মৃতিচারণ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Submit Form */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                আপনার শ্রদ্ধাঞ্জলি জানান
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="আপনার নাম"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    placeholder="আপনার অবস্থান"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
                <Textarea
                  placeholder="আপনার শ্রদ্ধাঞ্জলি লিখুন..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full">শ্রদ্ধাঞ্জলি জমা দিন</Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Existing Tributes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {approvedTributes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">কোনো শ্রদ্ধাঞ্জলি এখনো প্রদর্শিত হয়নি</p>
              </div>
            ) : (
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="card-gradient border border-border rounded-xl p-6 flex flex-col gap-4">
                  <h3 className="text-lg font-bold">সারসংক্ষেপ</h3>
                  <p className="text-foreground">মোট জমা: <span className="font-medium">{totalCount}</span></p>
                  <p className="text-foreground">অনুমোদিত: <span className="font-medium">{approvedTributes.length}</span></p>
                  <p className="text-foreground">মুলতুবি: <span className="font-medium">{pendingCount}</span></p>
                  <p className="text-muted-foreground">এখানে প্রদর্শিত হচ্ছে: <span className="font-medium">{approvedTributes.length}</span></p>
                </div>
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {approvedTributes.map((tribute, index) => (
                  <motion.div
                    key={tribute.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card-gradient border border-border rounded-xl p-6"
                  >
                    <p className="text-foreground mb-6">{tribute.message}</p>
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
              </div>              </div>            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tributes;
