import { useState, useEffect } from 'react';

export interface Tribute {
  id: string;
  name: string;
  location: string;
  message: string;
  initial: string;
  approved: boolean;
  submittedAt: string;
}

const TRIBUTES_KEY = 'hadivai_tributes';

// Initial default tributes (pre-approved)
const defaultTributes: Tribute[] = [
  {
    id: '1',
    name: "রবিউল ইসলাম",
    location: "ঢাকা, বাংলাদেশ",
    message: "শহীদ ওসমান হাদির আত্মার শান্তি কামনা করি। তাঁর ত্যাগ কখনও ভোলা যাবে না।",
    initial: "র",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: "ফারহা আক্তার",
    location: "চট্টগ্রাম, বাংলাদেশ",
    message: "আপনার সাহস ও ত্যাগ আমাদের সকলের জন্য অনুপ্রেরণা। শান্তিতে থাকুন।",
    initial: "ফ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: "সাইফুল ইসলাম",
    location: "রাজশাহী, বাংলাদেশ",
    message: "বাংলার মাটিতে আপনার নাম চিরস্মরণীয় হবে। শ্রদ্ধা ও প্রার্থনা।",
    initial: "স",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: "নাজমা খানম",
    location: "খুলনা, বাংলাদেশ",
    message: "আপনার ত্যাগ কখনো বৃথা হবে না—আমরা আপনার আদর্শ অনুসরণ করব।",
    initial: "ন",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '5',
    name: "আবির রহমান",
    location: "সিলেট, বাংলাদেশ",
    message: "শহীদ হাদির প্রতি গভীর শ্রদ্ধা এবং শান্তির প্রার্থনা।",
    initial: "আ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '6',
    name: "মিতা সরকারের",
    location: "রংপুর, বাংলাদেশ",
    message: "আপনার স্মৃতি আমাদের হৃদয়ে থাকবে সারাবেলা। চির শান্তি।",
    initial: "ম",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '7',
    name: "হুমায়ূন কবীর",
    location: "ময়মনসিংহ, বাংলাদেশ",
    message: "আপনি জাতির হৃদয়ে এক অবিস্মরণীয় নাম। শ্রদ্ধা জানাই।",
    initial: "হ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '8',
    name: "জ্যোতি বিশ্বাস",
    location: "বরিশাল, বাংলাদেশ",
    message: "আপনি আমাদের দেশে সত্যিকারের বীর প্রতিভা। স্মরণ ও শ্রদ্ধা।",
    initial: "জ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '9',
    name: "মহসিন শাহী",
    location: "কুমিল্লা, বাংলাদেশ",
    message: "শহীদ ওসমান হাদির স্মৃতির প্রতি নতজানু। শান্তিতে থাকুন।",
    initial: "ম",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '10',
    name: "তাসফিয়া সুলতানা",
    location: "নরসিংদী, বাংলাদেশ",
    message: "আপনার ত্যাগে আমরা অনুপ্রাণিত—বাংলার ভবিষ্যৎ উজ্জ্বল হবে।",
    initial: "ত",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '11',
    name: "ইমরান হোসেন",
    location: "নারায়ণগঞ্জ, বাংলাদেশ",
    message: "আপনার সাহস আমাদের পথ প্রদর্শক হবে। চির শ্রদ্ধা।",
    initial: "ই",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '12',
    name: "আলী আহসান",
    location: "গাজীপুর, বাংলাদেশ",
    message: "আপনার স্মৃতি আমাদের মাঝে বেঁচে থাকবে, আমরা কখনো ভুলব না।",
    initial: "আ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '13',
    name: "সুমাইয়া রহমান",
    location: "যশোর, বাংলাদেশ",
    message: "রক্তের বিনিময়ে স্বাধীনতার পথে আপনার অবদান ইতিহাসে অম্লান।",
    initial: "স",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '14',
    name: "পাবলো চাকমা",
    location: "কক্সবাজার, বাংলাদেশ",
    message: "আপনি সত্যি বীর—আপনার ত্যাগ চিরস্মরণীয়।",
    initial: "প",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '15',
    name: "কুসুম রানি",
    location: "পাবনা, বাংলাদেশ",
    message: "শ্রদ্ধা ও ভালোবাসা—আপনার স্মৃতিতে আমরা দাঁড়িয়ে রইব।",
    initial: "ক",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '16',
    name: "রাকিবুল ইসলাম",
    location: "বরগুনা, বাংলাদেশ",
    message: "আপনার ত্যাগ আমাদের অন্তরের আভা বাড়িয়েছে—শ্রদ্ধা নিবেদন।",
    initial: "র",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '17',
    name: "লাবণী খাতুন",
    location: "ভোলা, বাংলাদেশ",
    message: "আপনার স্মৃতি চিরদিন আমাদের সঙ্গে থাকবে।",
    initial: "ল",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '18',
    name: "রুহুল আমিন",
    location: "ব্রাহ্মণবাড়িয়া, বাংলাদেশ",
    message: "শ্রদ্ধা ও ভালোবাসায় স্মরণ করি।",
    initial: "র",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '19',
    name: "নীলা দেবী",
    location: "চাঁদপুর, বাংলাদেশ",
    message: "আপনার সাহস জনসাধারণকে সাহসী করেছে।",
    initial: "ন",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '20',
    name: "আব্দুল্লাহ আল মামুন",
    location: "চুয়াডাঙ্গা, বাংলাদেশ",
    message: "চিরস্মরণীয় ত্যাগের জন্য কৃতজ্ঞতা।",
    initial: "আ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '21',
    name: "ফারুক হোসেন",
    location: "দিনাজপুর, বাংলাদেশ",
    message: "আপনি একজন প্রকৃত বীর—শ্রদ্ধা ও বিনম্রতা।",
    initial: "ফ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '22',
    name: "সোনিয়া ইসলাম",
    location: "নওগাঁ, বাংলাদেশ",
    message: "আপনার স্মৃতি আমাদের পথ প্রদর্শন করে।",
    initial: "স",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '23',
    name: "মিরাজ উদ্দিন",
    location: "নড়াইল, বাংলাদেশ",
    message: "আপনার ত্যাগ স্মরণীয় ও প্রেরণাদায়ক।",
    initial: "ম",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '24',
    name: "শবনম পারভীন",
    location: "নেত্রকোনা, বাংলাদেশ",
    message: "শান্তিতে থাকুন—আপনার স্মৃতি চিরকাল জ্বলজ্বল করবে।",
    initial: "শ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '25',
    name: "মোহিত কর",
    location: "পটুয়াখালি, বাংলাদেশ",
    message: "আপনি আমাদের জন্য অনুপ্রেরণার প্রতীক।",
    initial: "ম",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '26',
    name: "শাবানা ইসলাম",
    location: "টাঙ্গাইল, বাংলাদেশ",
    message: "আপনার আদর্শ আমাদের পথ দেখায়।",
    initial: "শ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '27',
    name: "রফিকুল ইসলাম",
    location: "কুড়িগ্রাম, বাংলাদেশ",
    message: "আপনার স্মৃতি আমাদের শক্তি দেয়—শ্রদ্ধা।",
    initial: "র",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '28',
    name: "লাল চন্দ্র",
    location: "লালমনিরহাট, বাংলাদেশ",
    message: "আপনি চিরস্মরণীয়—শ্রদ্ধাভাজন স্মৃতি।",
    initial: "ল",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '29',
    name: "রেহানা খান",
    location: "মাগুরা, বাংলাদেশ",
    message: "আপনার ত্যাগ আজও আমাদের অনুপ্রাণিত করে।",
    initial: "র",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '30',
    name: "কামাল আজাদ",
    location: "মানিকগঞ্জ, বাংলাদেশ",
    message: "বাংলার মাটিতে আপনার নাম অম্লান।",
    initial: "ক",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '31',
    name: "বিনা আক্তার",
    location: "মেহেরপুর, বাংলাদেশ",
    message: "আপনার স্মৃতির প্রতি শ্রদ্ধা ও প্রার্থনা।",
    initial: "ব",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '32',
    name: "মামুনুর রশিদ",
    location: "শেরপুর, বাংলাদেশ",
    message: "আপনি আমাদের ইতিহাসের একজন মহান নায়ক।",
    initial: "ম",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '33',
    name: "হাসিবুল আলম",
    location: "জামালপুর, বাংলাদেশ",
    message: "আপনার ত্যাগ বীরত্বের প্রতীক—শ্রদ্ধা নিবেদন।",
    initial: "হ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '34',
    name: "রুমি বেগম",
    location: "সিরাজগঞ্জ, বাংলাদেশ",
    message: "আপনি আমাদের প্রেরণা—চিরভবিষ্যত শ্রদ্ধা।",
    initial: "র",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '35',
    name: "মঈনুল হক",
    location: "পঞ্চগড়, বাংলাদেশ",
    message: "আপনার ত্যাগ স্মরণীয় ও অনুপ্রেরণামূলক।",
    initial: "ম",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '36',
    name: "সেলিনা হাসান",
    location: "হবিগঞ্জ, বাংলাদেশ",
    message: "আপনার প্রতিজ্ঞা আমাদের পথ দেখায়।",
    initial: "স",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '37',
    name: "আসাদুজ্জামান",
    location: "সুনামগঞ্জ, বাংলাদেশ",
    message: "আপনি চিরস্মরণীয়—শ্রদ্ধা জানাই।",
    initial: "আ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '38',
    name: "রাবেয়া পারভীন",
    location: "রাঙ্গামাটি, বাংলাদেশ",
    message: "আপনার স্মৃতি আমাদের অনুপ্রেরণা।",
    initial: "র",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '39',
    name: "চন্দন চাকমা",
    location: "খাগড়াছড়ি, বাংলাদেশ",
    message: "আপনি আমাদের বীর—শ্রদ্ধা ও ভালোবাসা।",
    initial: "চ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '40',
    name: "আমান উল্লাহ",
    location: "বান্দরবান, বাংলাদেশ",
    message: "আপনি ইতিহাসের পাতায় স্থায়ী অঙ্কিত।",
    initial: "আ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '41',
    name: "সাদিয়া রহমান",
    location: "ফরিদপুর, বাংলাদেশ",
    message: "আপনার ত্যাগ আমাদের গর্ব—শ্রদ্ধা ও প্রণাম।",
    initial: "স",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '42',
    name: "মোস্তাফিজুর রহমান",
    location: "মুন্সীগঞ্জ, বাংলাদেশ",
    message: "আপনি আমাদের পথপ্রদর্শক—চিরস্মরণীয়।",
    initial: "ম",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '43',
    name: "শহিদুল ইসলাম",
    location: "গোপালগঞ্জ, বাংলাদেশ",
    message: "আপনি সত্যিকারের বীর—শ্রদ্ধা ও ভালোবাসা।",
    initial: "শ",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '44',
    name: "রূপা মজুমদার",
    location: "মাদারীপুর, বাংলাদেশ",
    message: "আপনার ত্যাগ আমাদের হৃদয়ে অনুপ্রেরণা জাগায়।",
    initial: "র",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '45',
    name: "লতিফা খাতুন",
    location: "কিশোরগঞ্জ, বাংলাদেশ",
    message: "আপনি আমাদের গর্ব—শ্রদ্ধা ও স্মৃতি।",
    initial: "ল",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
];

export const useTributeStore = () => {
  const [tributes, setTributes] = useState<Tribute[]>([]);

  useEffect(() => {
    const storedRaw = localStorage.getItem(TRIBUTES_KEY);
    if (storedRaw) {
      try {
        const stored = JSON.parse(storedRaw) as Tribute[];
        const map = new Map(stored.map(t => [t.id, t]));
        // Ensure default tributes (the 15 entries) are present without overwriting existing ones
        defaultTributes.forEach(d => {
          if (!map.has(d.id)) {
            map.set(d.id, d);
          }
        });
        const merged = Array.from(map.values());
        setTributes(merged);
        localStorage.setItem(TRIBUTES_KEY, JSON.stringify(merged));
      } catch (e) {
        setTributes(defaultTributes);
        localStorage.setItem(TRIBUTES_KEY, JSON.stringify(defaultTributes));
      }
    } else {
      setTributes(defaultTributes);
      localStorage.setItem(TRIBUTES_KEY, JSON.stringify(defaultTributes));
    }
  }, []);

  const saveTributes = (newTributes: Tribute[]) => {
    setTributes(newTributes);
    localStorage.setItem(TRIBUTES_KEY, JSON.stringify(newTributes));
  };

  const addTribute = (name: string, location: string, message: string) => {
    const newTribute: Tribute = {
      id: Date.now().toString(),
      name: name || 'Anonymous',
      location,
      message,
      initial: (name || 'A').charAt(0).toUpperCase(),
      approved: false,
      submittedAt: new Date().toISOString(),
    };
    const updated = [...tributes, newTribute];
    saveTributes(updated);
    return newTribute;
  };

  const approveTribute = (id: string) => {
    const updated = tributes.map(t => 
      t.id === id ? { ...t, approved: true } : t
    );
    saveTributes(updated);
  };

  const deleteTribute = (id: string) => {
    const updated = tributes.filter(t => t.id !== id);
    saveTributes(updated);
  };

  const getApprovedTributes = () => tributes.filter(t => t.approved);
  const getPendingTributes = () => tributes.filter(t => !t.approved);

  return {
    tributes,
    addTribute,
    approveTribute,
    deleteTribute,
    getApprovedTributes,
    getPendingTributes,
  };
};
