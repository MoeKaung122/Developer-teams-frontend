import React, { useState } from 'react';
import { ExternalLink, Github, Code, Layout, Smartphone, Filter } from 'lucide-react';

const Portfolio = () => {
  // ၁။ Category Filter အတွက် State
  const [filter, setFilter] = useState('All');

  // ၂။ Project Data (နမူနာ - နောက်ပိုင်း Django API နဲ့ ချိတ်ပါမယ်)
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
      desc: "Full-featured shopping site with payment integration.",
      tech: ["React", "Django", "PostgreSQL"],
      live: "https://example.com",
      github: "https://github.com"
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800",
      desc: "Mobile app for tracking workouts and health data.",
      tech: ["React Native", "Firebase"],
      live: "#",
      github: "#"
    },
    {
    id: 3,
      title: "Hospital Management",
      category: "System",
      // Medical Tech / Dashboard Image
     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      desc: "Internal system for managing patient records, doctors, and billing.",
      tech: ["Python", "Django", "Tailwind"],
      live: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      desc: "Clean and modern landing page for a law firm.",
      tech: ["HTML", "Bootstrap", "JS"],
      live: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Delivery Driver App",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800",
      desc: "Real-time tracking for delivery personnel.",
      tech: ["Flutter", "Google Maps API"],
      live: "#",
      github: "#"
    }
  ];

  // ၃။ Filter Logic
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* HEADER */}
      <section className="bg-slate-900 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Portfolio</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ကျွန်ုပ်တို့အဖွဲ့မှ အောင်မြင်စွာ ရေးဆွဲပေးခဲ့သော Project များဖြစ်ပါသည်။
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="py-10 border-b bg-white sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {['All', 'Web', 'Mobile', 'System'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                filter === cat 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
              
              {/* Image with Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                   <a href={project.live} className="p-3 bg-white rounded-full text-indigo-600 hover:scale-110 transition">
                      <ExternalLink size={20} />
                   </a>
                   <a href={project.github} className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition">
                      <Github size={20} />
                   </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-3">
                   {project.category === 'Web' && <Code size={14} />}
                   {project.category === 'Mobile' && <Smartphone size={14} />}
                   {project.category === 'System' && <Layout size={14} />}
                   {project.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
             <p className="text-slate-400">ယခု Category အတွက် Project များ မရှိသေးပါ။</p>
          </div>
        )}
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-white border-t">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">သင့်လုပ်ငန်းအတွက် Project တစ်ခု စတင်ချင်ပါသလား?</h2>
            <p className="text-slate-500 mb-8">ကျွန်ုပ်တို့နှင့် ဆွေးနွေးပြီး သင့်စိတ်ကူးကို လက်တွေ့အကောင်အထည်ဖော်လိုက်ပါ။</p>
            <button className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition">
                Start Your Project Today
            </button>
         </div>
      </section>

    </div>
  );
};

export default Portfolio;