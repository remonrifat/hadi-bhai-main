import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const startDate = new Date("2025-12-18T00:00:00");

const toBengaliNumber = (num: number): string => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((d) => bengaliDigits[parseInt(d)])
    .join("");
};

export const JusticeCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: timeElapsed.days, label: "দিন" },
    { value: timeElapsed.hours, label: "ঘণ্টা" },
    { value: timeElapsed.minutes, label: "মিনিট" },
    { value: timeElapsed.seconds, label: "সেকেন্ড" },
  ];

  return (
    <section className="py-16 bg-destructive/10 border-y border-destructive/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm text-destructive font-medium mb-2 block">বিচারের দাবি</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            শহীদ ওসমান হাদি হত্যার বিচারহীনতার সময়কাল
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8 text-lg text-muted-foreground">
            <span>১৮ ডিসেম্বর ২০২৫</span>
            <span className="text-primary text-2xl">∞</span>
          </div>

          <div className="flex justify-center gap-4 md:gap-8">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="flex items-center">
                <div className="text-center">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-destructive">
                    {toBengaliNumber(unit.value)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{unit.label}</div>
                </div>
                {index < timeUnits.length - 1 && (
                  <span className="text-3xl md:text-5xl text-muted-foreground mx-2 md:mx-4">:</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JusticeCounter;
