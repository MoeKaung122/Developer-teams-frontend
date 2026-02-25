import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Layout, Smartphone } from 'lucide-react';
// အစ်ကို့ရဲ့ API files တွေကို import လုပ်ပါ
import api from '../api/api';
import endpoints from '../api/endpoints';
import HOST from '../api/host';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  // ၁။ Backend ကလာမယ့် projects တွေသိမ်းဖို့ state
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  // ၂။ Component စတက်တာနဲ့ Data လှမ်းယူမယ်
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // အစ်ကို့ endpoints file ထဲက projects path ကိုသုံးထားပါတယ်
        const response = await api.get(endpoints.portfolio.projects);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // ⭐️ ၂။ Filter ခလုတ်နှိပ်လိုက်တိုင်း အပေါ်ကို ပြန်တက်သွားစေရန်
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filter]); // filter ပြောင်းလဲမှုရှိတိုင်း အလုပ်လုပ်မည်

  // ၃။ Filter Logic (Backend ကလာတဲ့ category နဲ့ စစ်မယ်)
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

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
              // ဒီနေရာမှာ filter ကို set လုပ်လိုက်တာနဲ့ အပေါ်က useEffect က အလုပ်လုပ်ပါလိမ့်မယ်
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${filter === cat
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
              <div className="relative h-60 overflow-hidden bg-slate-200">
                {/* Django က ပုံကို URL အပြည့်အစုံနဲ့ ပို့ပေးပါလိမ့်မယ် */}
                <img
                  src={`${HOST}${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <a href={project.live_link || "#"} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-indigo-600 hover:scale-110 transition">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github_link || "#"} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition">
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
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack (Django ဘက်က Tech Stack ကို comma နဲ့ ပို့ရင် split လုပ်ပြတာပါ) */}
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack && project.tech_stack.split(',').map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md">
                      {t.trim()}
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