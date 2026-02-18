import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronRight } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Aung Kyaw",
      role: "Lead Full Stack Developer",
      // Modern Tech Guy Image
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      bio: "Complex System များနှင့် Architecture ပိုင်းကို အဓိက တာဝန်ယူသည်။",
      skills: ["Python", "Django", "React", "AWS"],
      social: { github: "#", linkedin: "#", mail: "aung@devteam.com" }
    },
    {
      id: 2,
      name: "Su Myat",
      role: "UI/UX Designer",
      // Professional Woman Designer Image
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      bio: "သုံးစွဲသူများအတွက် အမြင်လှပပြီး အသုံးပြုရလွယ်ကူသော ဒီဇိုင်းများကို ဖန်တီးပေးသည်။",
      skills: ["Figma", "Adobe XD", "Tailwind"],
      social: { github: "#", linkedin: "#", mail: "su@devteam.com" }
    },
    {
      id: 3,
      name: "Kyaw Zayar",
      role: "Mobile Developer",
      // Tech Savvy Guy Image
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      bio: "iOS နှင့် Android အတွက် High-Performance Apps များ ရေးသားပေးသည်။",
      skills: ["React Native", "Flutter", "Firebase"],
      social: { github: "#", linkedin: "#", mail: "kyaw@devteam.com" }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Section */}
      <section className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">ကျွန်ုပ်တို့၏ <span className="text-indigo-400">Team</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            နည်းပညာနယ်ပယ်တွင် အတွေ့အကြုံရှိပြီး ကျွမ်းကျင်သော Developer များနှင့် Designer များ စုစည်းထားပါသည်။
          </p>
        </div>
      </section>

      {/* 2. Team Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              {/* Image Container */}
              <div className="relative h-[450px] rounded-2xl overflow-hidden mb-6 shadow-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Social Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-indigo-900 to-transparent">
                  <div className="flex gap-4">
                    <SocialBtn Icon={Github} link={member.social.github} />
                    <SocialBtn Icon={Linkedin} link={member.social.linkedin} />
                    <SocialBtn Icon={Mail} link={`mailto:${member.social.mail}`} />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center px-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-bold text-sm uppercase mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed italic">"{member.bio}"</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-tighter">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Join CTA */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">ကျွန်ုပ်တို့နှင့် လက်တွဲလုပ်ဆောင်လိုပါသလား?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">သင်သည် အရည်အချင်းရှိသော Developer တစ်ဦးဖြစ်ပါက ကျွန်ုပ်တို့၏အဖွဲ့ထဲသို့ ဖိတ်ခေါ်ပါသည်။</p>
            <button className="inline-flex items-center px-8 py-4 bg-[#0F172A] text-white font-bold rounded-lg hover:bg-indigo-600 transition-colors">
                Apply for Jobs <ChevronRight className="ml-2" />
            </button>
        </div>
      </section>
    </div>
  );
};

// Sub Component
const SocialBtn = ({ Icon, link }) => (
  <a href={link} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-indigo-600 transition-all">
    <Icon size={18} />
  </a>
);

export default Team;