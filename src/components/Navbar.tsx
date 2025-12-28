import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "হোম", path: "/" },
  { name: "জীবনী", path: "/about" },
  { name: "মিডিয়া", path: "/videos", hasDropdown: true },
  { name: "গ্যালারি", path: "/photos", hasDropdown: true },
  { name: "ডকুমেন্ট", path: "/documents" },
  { name: "গোল্ডেন কোটস", path: "/quotes" },
  { name: "নিউজক্লিপ", path: "/news" },
  { name: "টাইমলাইন", path: "/timeline" },
  { name: "ইভেন্ট", path: "/events" },
  { name: "স্থান", path: "/locations" },
  { name: "শ্রদ্ধাঞ্জলি", path: "/tributes" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top banner */}
      <div className="bg-primary/20 border-b border-border py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-primary">🕊️</span>
            <span className="text-muted-foreground">
              শহীদ শরীফ ওসমান বিন হাদির স্মৃতি সংগ্রহশালা
            </span>
          </div>
          <span className="text-muted-foreground hidden md:block">
            ৩০ জুন ১৯৯৩ - ১৮ ডিসেম্বর ২০২৫
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center overflow-hidden">
                <img src="/main.jpeg" alt="হাদিভাই লোগো" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">হাদি ভাই</span>
                <span className="text-xs text-muted-foreground">স্মৃতি সংগ্রহশালা</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 8).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Search className="h-5 w-5" />
              </Button>
              <Button asChild variant="outline" size="sm" className="hidden md:flex items-center gap-2 border-primary/50 text-primary hover:bg-primary/10">
                <Link to="/tributes">
                  <Heart className="h-4 w-4" />
                  <span>শ্রদ্ধাঞ্জলি</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
