import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Layout, CheckCircle, Code2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0F172A] pt-24 pb-32 relative overflow-hidden">
        {/* လှပတဲ့ Background Glow အဝိုင်းလေးများ */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-wider">
                READY TO BUILD YOUR IDEAS
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Build Your Future with <span className="text-indigo-500">Professional</span> Developers.
              </h1>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                ကျွန်ုပ်တို့သည် ခေတ်မီဆန်းသစ်သော နည်းပညာများကို အသုံးပြု၍ သင့်လုပ်ငန်းအတွက် အကောင်းဆုံး Software များကို ဖန်တီးပေးပါသည်။
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-indigo-600/20">
                  Start a Project
                </Link>
                <Link to="/portfolio" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-all border border-slate-700">
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Visual Part: Code Card */}
            <div className="hidden md:block">
              <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-indigo-400">const</code> <code className="text-yellow-400">DevTeam</code> = <code className="text-white">{`{`}</code> <br />
                  &nbsp;&nbsp;<code className="text-slate-400">status:</code> <code className="text-green-400">'Ready to Code'</code>, <br />
                  &nbsp;&nbsp;<code className="text-slate-400">stack:</code> <code className="text-orange-400">['Django', 'React']</code>, <br />
                  &nbsp;&nbsp;<code className="text-slate-400">quality:</code> <code className="text-indigo-400">true</code> <br />
                  <code className="text-white">{`}`}</code>; <br /><br />
                  <code className="text-indigo-400">while</code> <code className="text-white">(ideas) {`{`}</code> <br />
                  &nbsp;&nbsp;<code className="text-yellow-400">DevTeam</code>.<code className="text-blue-400">buildSolutions</code>(); <br />
                  <code className="text-white">{`}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-bold mb-2 uppercase tracking-widest text-sm">Services</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">What We Bring to You</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HomeServiceCard icon={<Globe />} title="Web Apps" desc="မြန်ဆန်၍ လုံခြုံစိတ်ချရသော ခေတ်မီ Website များ။" />
            <HomeServiceCard icon={<Smartphone />} title="Mobile Apps" desc="iOS နှင့် Android အတွက် သပ်ရပ်သော Application များ။" />
            <HomeServiceCard icon={<Layout />} title="UI/UX Design" desc="အသုံးပြုရလွယ်ကူပြီး မျက်စိပသာဒဖြစ်စေသော ဒီဇိုင်းများ။" />
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">သင့်မှာ Project Idea ရှိပါသလား?</h2>
          <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
            ကျွန်ုပ်တို့နှင့် အခမဲ့ ဆွေးနွေးတိုင်ပင်ပြီး သင့်လုပ်ငန်းကို နည်းပညာဖြင့် မြှင့်တင်လိုက်ပါ။
          </p>
          <Link to="/contact" className="px-10 py-4 bg-white text-indigo-600 font-black rounded-full hover:bg-slate-100 transition-all uppercase tracking-wider shadow-xl">
            Let's Talk Now
          </Link>
        </div>
      </section>
    </div>
  );
};

// --- Helper Component ---
const HomeServiceCard = ({ icon, title, desc }) => (
  <div className="p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
    <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default Home;