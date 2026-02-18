import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Smartphone, Layout, Database, ShieldCheck, 
  Search, Check, ArrowRight, Zap, Code
} from 'lucide-react';

const Services = () => {
  return (
    <div className="w-full bg-slate-50">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-[#0F172A] py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            ကျွန်ုပ်တို့၏ <span className="text-indigo-500">ဝန်ဆောင်မှုများ</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            သင့်လုပ်ငန်း အောင်မြင်မှုအတွက် လိုအပ်သော နည်းပညာရပ်များကို တစ်နေရာတည်းတွင် အစုံအလင် ဝန်ဆောင်မှုပေးနေပါသည်။
          </p>
        </div>
      </section>

      {/* 2. CORE SERVICES LIST */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceDetailCard 
            icon={<Globe size={32} />}
            title="Web Development"
            features={['Custom Business Websites', 'E-commerce Solutions', 'CMS Integration', 'PWA Development']}
            desc="React, Vue နဲ့ Django တို့ကို သုံးပြီး မြန်ဆန်လှပတဲ့ Website တွေ ဖန်တီးပေးပါတယ်။"
          />
          <ServiceDetailCard 
            icon={<Smartphone size={32} />}
            title="Mobile Applications"
            features={['iOS & Android Apps', 'React Native / Flutter', 'App Store Publishing', 'Ongoing Support']}
            desc="အသုံးပြုရ လွယ်ကူပြီး Performance ကောင်းမွန်တဲ့ Mobile App တွေကို ရေးဆွဲပေးပါတယ်။"
          />
          <ServiceDetailCard 
            icon={<Layout size={32} />}
            title="UI/UX Design"
            features={['User Research', 'Wireframing', 'Modern UI Design', 'Interactive Prototypes']}
            desc="သုံးစွဲသူတွေ သဘောကျမယ့် အမြင်လှပပြီး သပ်ရပ်တဲ့ Design တွေကို Figma နဲ့ ဖန်တီးပါတယ်။"
          />
          <ServiceDetailCard 
            icon={<Database size={32} />}
            title="Custom Software"
            features={['Inventory Systems', 'HR & Payroll Systems', 'POS Solutions', 'API Development']}
            desc="သင့်လုပ်ငန်းရဲ့ လိုအပ်ချက်နဲ့ အကိုက်ညီဆုံး Software များကို သီးသန့်ရေးဆွဲပေးပါတယ်။"
          />
          <ServiceDetailCard 
            icon={<Search size={32} />}
            title="SEO & Marketing"
            features={['Keyword Optimization', 'Technical SEO', 'Performance Tuning', 'Google Ranking']}
            desc="သင့် Website ကို Google မှာ အလွယ်တကူ ရှာတွေ့နိုင်အောင် SEO လုပ်ဆောင်ပေးပါတယ်။"
          />
          <ServiceDetailCard 
            icon={<ShieldCheck size={32} />}
            title="Maintenance & Security"
            features={['Server Monitoring', 'Data Backup', 'Security Patching', 'Bug Fixing']}
            desc="ရှိပြီးသား System များကို အမြဲအဆင်ပြေနေစေဖို့နဲ့ လုံခြုံရေးအတွက် တာဝန်ယူပေးပါတယ်။"
          />
        </div>
      </section>

      {/* 3. PRICING PLANS (Optional but Recommended) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Pricing Plans</h2>
            <p className="text-slate-600">သင့်အတွက် အသင့်တော်ဆုံး ပက်ကေ့ချ်ကို ရွေးချယ်ပါ</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
                name="Basic" 
                price="3 Lakhs+" 
                desc="Small Businesses အတွက်"
                features={['5 Pages Website', 'Responsive Design', '1 Year Support', 'Free Domain/Hosting']}
            />
            <PricingCard 
                name="Professional" 
                price="8 Lakhs+" 
                desc="Growing Startups အတွက်"
                featured={true}
                features={['Unlimited Pages', 'E-commerce Ready', 'Admin Dashboard', 'SEO Optimization', 'Speed Tuning']}
            />
            <PricingCard 
                name="Enterprise" 
                price="Custom" 
                desc="Large Organizations အတွက်"
                features={['Custom Software', 'Mobile App Included', 'High Security', '24/7 Dedicated Support', 'API Access']}
            />
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-indigo-50 border-t border-indigo-100">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">သင့်လိုအပ်ချက်က ဒီထဲမှာ မပါသေးဘူးလား?</h3>
                <p className="text-slate-600">ကျွန်ုပ်တို့နှင့် တိုက်ရိုက်ဆွေးနွေးပြီး စိတ်ကြိုက် Project များ ရေးဆွဲနိုင်ပါသည်။</p>
            </div>
            <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all flex items-center shrink-0">
                Contact for Custom Quote <ArrowRight className="ml-2" />
            </Link>
        </div>
      </section>

    </div>
  );
};

// --- Helper Components ---

const ServiceDetailCard = ({ icon, title, desc, features }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group">
    <div className="text-indigo-600 mb-6 bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-center text-sm text-slate-500">
          <Check size={16} className="text-green-500 mr-2" /> {f}
        </li>
      ))}
    </ul>
  </div>
);

const PricingCard = ({ name, price, desc, features, featured = false }) => (
  <div className={`p-8 rounded-3xl border-2 transition-all ${featured ? 'border-indigo-600 bg-white shadow-2xl scale-105 z-10' : 'border-slate-100 bg-slate-50'}`}>
    {featured && <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Most Popular</span>}
    <h4 className="text-xl font-bold text-slate-900 mb-2">{name}</h4>
    <div className="text-3xl font-black text-indigo-600 mb-4">{price}</div>
    <p className="text-slate-500 text-sm mb-8">{desc}</p>
    <ul className="text-left space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center text-sm font-medium text-slate-700">
          <Zap size={14} className="text-indigo-500 mr-2" /> {f}
        </li>
      ))}
    </ul>
    <Link to="/contact" className={`block w-full py-4 rounded-xl font-bold transition-all ${featured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}>
      Choose Plan
    </Link>
  </div>
);

export default Services;