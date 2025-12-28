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
    name: "মুহতাসিম ইশমাম",
    location: "চট্টগ্রাম, বাংলাদেশ",
    message: "আমি এই মৃত নগরীর ভূমিপুত্র যেখানে কলেরা আর কৃত্রিম দূর্ভিক্ষের মাঝে দাঁড়িয়ে আমি মুষ্টিবদ্ধ হাতে বিপ্লবের কথা বলি আমি লাশের স্ট্রেচার হাতে নিয়ে মিছিলের অগ্রভাগে দাঁড়িয়ে বলি ইনক্বিলাব আর ইন্তিফাঁদার কথা...",
    initial: "ম",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: "md maruf",
    location: "Riyadh",
    message: "আমাদের দূর্ভাগ্য যে আমরা আপনাকে পেয়েও হারালাম। আল্লাহ তায়ালা আপনার উপর রহম করুন, আমিন।",
    initial: "m",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: "Khorshed Alam Sozeb",
    location: "Dubai",
    message: "শহীদ ওসমান হাদির প্রতি গভীর শ্রদ্ধা ও হৃদয়ের অন্তঃস্থল থেকে ভালোবাসা। বাংলার মাটিতে তার রক্ত শুধু একটি প্রাণের বিনিময় নয়, এটি ছিল অন্যায়ের বিরুদ্ধে মাথা নত না করার এক ঐতিহাসিক ঘোষণা।",
    initial: "K",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: "Anonymous",
    location: "Dhaka",
    message: "আমি আমার প্রিয় ভাই শহীদ শরিফ ওসমান হাদি ভাই কে মন থেকে অনেক ভালোবাসি।",
    initial: "A",
    approved: true,
    submittedAt: new Date().toISOString(),
  },
];

export const useTributeStore = () => {
  const [tributes, setTributes] = useState<Tribute[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(TRIBUTES_KEY);
    if (stored) {
      setTributes(JSON.parse(stored));
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
