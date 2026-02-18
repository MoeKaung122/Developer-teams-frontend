import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  // Blog Data (နမူနာ - နောက်ပိုင်း Django API နဲ့ ချိတ်ပါမယ်)
  const posts = [
    {
      id: 1,
      title: "How to Scale Django Applications",
      excerpt: "သင့်ရဲ့ Django Backend ကို User သိန်းချီသုံးနိုင်အောင် ဘယ်လိုပြင်ဆင်မလဲဆိုတဲ့ အချက်အလက်များ...",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      date: "Feb 15, 2024",
      readTime: "5 min read",
      category: "Backend"
    },
    {
      id: 2,
      title: "React vs Next.js: Which one to choose?",
      excerpt: "၂၀၂၄ ခုနှစ်မှာ Project တစ်ခုစတော့မယ်ဆိုရင် ဘယ် Framework က ပိုအဆင်ပြေမလဲဆိုတာ နှိုင်းယှဉ်ချက်...",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
      date: "Feb 10, 2024",
      readTime: "8 min read",
      category: "Frontend"
    },
    {
      id: 3,
      title: "UI/UX Design Trends in 2024",
      excerpt: "ဒီနှစ်ထဲမှာ ခေတ်စားလာမယ့် Modern UI Design တွေနဲ့ အသုံးပြုသူတွေရဲ့ စိတ်ကြိုက်ပုံစံများ...",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      date: "Feb 05, 2024",
      readTime: "4 min read",
      category: "Design"
    },
    {
      id: 4,
      title: "Cyber Security for Startups",
      excerpt: "စတင်တည်ထောင်ခါစ လုပ်ငန်းတွေအတွက် အခြေခံအကျဆုံးနဲ့ အရေးကြီးဆုံး လုံခြုံရေးဆိုင်ရာ ဗဟုသုတများ...",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
      date: "Jan 28, 2024",
      readTime: "10 min read",
      category: "Security"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Header Section */}
      <section className="bg-[#0F172A] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Tech <span className="text-indigo-500">Insights</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            နည်းပညာဆိုင်ရာ ဗဟုသုတများ၊ အတွေ့အကြုံများနှင့် ခေတ်မီ Tips & Tricks များကို ဖတ်ရှုလေ့လာနိုင်ပါသည်။
          </p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="ဆောင်းပါးများ ရှာဖွေရန်..." 
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-full py-4 px-12 focus:outline-none focus:border-indigo-500 transition"
            />
            <Search className="absolute left-4 top-4 text-slate-500" size={20} />
          </div>
        </div>
      </section>

      {/* 2. Blog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition">
                  {post.title}
                </h2>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.id}`} className="inline-flex items-center font-bold text-indigo-600 hover:gap-2 transition-all">
                  Read More <ArrowRight className="ml-1" size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination (Optional UI) */}
        <div className="mt-16 flex justify-center gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">1</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">2</button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
              <ArrowRight size={16} />
            </button>
        </div>
      </section>

      {/* 3. Newsletter Section */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-indigo-50 p-10 md:p-16 rounded-[3rem] border border-indigo-100">
                <h2 className="text-3xl font-black text-slate-900 mb-4">Stay Updated!</h2>
                <p className="text-slate-600 mb-8">ဆောင်းပါးအသစ်တင်တိုင်း အသိပေးချက်ရယူဖို့ Subscribe လုပ်ထားလိုက်ပါ။</p>
                <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    />
                    <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition">
                      Subscribe
                    </button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;