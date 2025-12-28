import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTributeStore, Tribute } from "@/hooks/useTributeStore";
import { toast } from "sonner";
import { Check, X, LogOut, User, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const ADMIN_ID = "remonrifat2000";
const ADMIN_PASS = "remonrifat2000";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  
  const { tributes, approveTribute, deleteTribute, getApprovedTributes, getPendingTributes } = useTributeStore();

  useEffect(() => {
    const session = sessionStorage.getItem('hadivai_admin');
    if (session === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginId === ADMIN_ID && loginPass === ADMIN_PASS) {
      setIsLoggedIn(true);
      sessionStorage.setItem('hadivai_admin', 'true');
      setLoginError("");
      toast.success("সফলভাবে লগইন হয়েছে");
    } else {
      setLoginError("আইডি বা পাসওয়ার্ড ভুল");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('hadivai_admin');
    setLoginId("");
    setLoginPass("");
    toast.success("সফলভাবে লগআউট হয়েছে");
  };

  const handleApprove = (id: string) => {
    approveTribute(id);
    toast.success("শ্রদ্ধাঞ্জলি অনুমোদিত হয়েছে");
  };

  const handleDelete = (id: string) => {
    deleteTribute(id);
    toast.success("শ্রদ্ধাঞ্জলি মুছে ফেলা হয়েছে");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">হ</span>
              </div>
              <CardTitle className="text-2xl text-foreground">অ্যাডমিন ড্যাশবোর্ড</CardTitle>
              <p className="text-muted-foreground text-sm">লগইন করুন</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="আইডি"
                      value={loginId}
                      onChange={(e) => setLoginId(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="পাসওয়ার্ড"
                      value={loginPass}
                      onChange={(e) => setLoginPass(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                {loginError && (
                  <p className="text-sm text-destructive text-center">{loginError}</p>
                )}
                <Button type="submit" className="w-full">লগইন</Button>
                <div className="text-center">
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                    ← হোমে ফিরে যান
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  const pendingTributes = getPendingTributes();
  const approvedTributes = getApprovedTributes();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">হ</span>
            </div>
            <div>
              <h1 className="font-bold text-foreground">অ্যাডমিন ড্যাশবোর্ড</h1>
              <p className="text-xs text-muted-foreground">শ্রদ্ধাঞ্জলি ম্যানেজমেন্ট</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">সাইট দেখুন</Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              লগআউট
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">{tributes.length}</p>
                <p className="text-muted-foreground">মোট শ্রদ্ধাঞ্জলি</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-500">{approvedTributes.length}</p>
                <p className="text-muted-foreground">অনুমোদিত</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-500">{pendingTributes.length}</p>
                <p className="text-muted-foreground">অপেক্ষমান</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Tributes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            অপেক্ষমান শ্রদ্ধাঞ্জলি
            {pendingTributes.length > 0 && (
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-500">
                {pendingTributes.length}
              </Badge>
            )}
          </h2>
          {pendingTributes.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">কোনো অপেক্ষমান শ্রদ্ধাঞ্জলি নেই</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingTributes.map((tribute) => (
                <TributeCard
                  key={tribute.id}
                  tribute={tribute}
                  onApprove={() => handleApprove(tribute.id)}
                  onDelete={() => handleDelete(tribute.id)}
                  showActions
                />
              ))}
            </div>
          )}
        </section>

        {/* Approved Tributes */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            অনুমোদিত শ্রদ্ধাঞ্জলি
            <Badge variant="secondary" className="bg-green-500/20 text-green-500">
              {approvedTributes.length}
            </Badge>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedTributes.map((tribute) => (
              <TributeCard
                key={tribute.id}
                tribute={tribute}
                onDelete={() => handleDelete(tribute.id)}
                approved
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

interface TributeCardProps {
  tribute: Tribute;
  onApprove?: () => void;
  onDelete: () => void;
  showActions?: boolean;
  approved?: boolean;
}

const TributeCard = ({ tribute, onApprove, onDelete, showActions, approved }: TributeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="card-gradient border border-border rounded-xl p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
            {tribute.initial}
          </div>
          <div>
            <p className="font-medium text-foreground">{tribute.name}</p>
            <p className="text-sm text-muted-foreground">{tribute.location}</p>
          </div>
        </div>
        {approved && (
          <Badge className="bg-green-500/20 text-green-500 border-green-500/30">অনুমোদিত</Badge>
        )}
      </div>
      <p className="text-foreground mb-4 line-clamp-4">{tribute.message}</p>
      <p className="text-xs text-muted-foreground mb-4">
        {new Date(tribute.submittedAt).toLocaleDateString('bn-BD')}
      </p>
      <div className="flex gap-2">
        {showActions && onApprove && (
          <Button size="sm" onClick={onApprove} className="flex-1">
            <Check className="h-4 w-4 mr-1" />
            অনুমোদন
          </Button>
        )}
        <Button size="sm" variant="destructive" onClick={onDelete} className={showActions ? "flex-1" : ""}>
          <X className="h-4 w-4 mr-1" />
          মুছুন
        </Button>
      </div>
    </motion.div>
  );
};

export default Dashboard;
