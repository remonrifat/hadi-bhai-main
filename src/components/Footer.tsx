import { Link } from "react-router-dom";
import { Facebook, Youtube, Twitter, Mail, Heart, MapPin, Clock, Code, Users, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const footerLinks = {
  সংগ্রহশালা: [
    { name: "ভিডিও", path: "/videos" },
    { name: "ছবি", path: "/photos" },
    { name: "উক্তি", path: "/quotes" },
    { name: "ডকুমেন্ট", path: "/documents" },
  ],
  জীবন: [
    { name: "জীবনী", path: "/about" },
    { name: "টাইমলাইন", path: "/timeline" },
    { name: "ইভেন্ট", path: "/events" },
    { name: "স্থান", path: "/locations" },
  ],
  সংযোগ: [
    { name: "শ্রদ্ধাঞ্জলি", path: "/tributes" },
    { name: "নিউজক্লিপ", path: "/news" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://www.twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@hadivai.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k+";
    }
    return num.toString();
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                <span className="text-xl font-bold text-primary">হ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">হাদিভাই</span>
                <span className="text-sm text-muted-foreground">স্মৃতি সংগ্রহশালা</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              শহীদ শরীফ ওসমান বিন হাদির জীবন, কর্ম ও আদর্শের স্মৃতি সংরক্ষণ ও বিস্তারের জন্য নিবেদিত। 
              তাঁর সংগ্রাম ও ত্যাগ প্রজন্মের পর প্রজন্ম অনুপ্রাণিত করবে।
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>৩০ জুন ১৯৯৩ - ১৮ ডিসেম্বর ২০২৫</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4 text-primary" />
                <span>মোট ভিজিটর: </span>
                <motion.span
                  key={visitorCount}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary font-semibold"
                >
                  {formatNumber(visitorCount)}
                </motion.span>
              </div>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-12 py-6 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-sm italic">
              "আমাদের উদ্দেশ্য হলো শহীদ ওসমান হাদির জীবন ও কর্মের স্মৃতি সংরক্ষণ করা এবং তাঁর আদর্শ প্রজন্মের পর প্রজন্ম ছড়িয়ে দেওয়া। 
              ন্যায়বিচার ও সত্যের পথে তাঁর ত্যাগ চিরস্মরণীয়।"
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} হাদিভাই স্মৃতি সংগ্রহশালা। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                <Heart className="w-4 h-4 text-primary" />
                ভালোবাসায় তৈরি
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                <Code className="w-4 h-4 text-primary" />
                Developed by{" "}
                <a
                  href="https://web.facebook.com/w.rem2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium ml-1"
                >
                  Remon Sharker Rifat
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
