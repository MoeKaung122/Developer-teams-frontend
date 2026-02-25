import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react';
// API ဖိုင်များကို Import လုပ်ပါ
import api from '../api/api';
import endpoints from '../api/endpoints';
import HOST from '../api/host';

const Team = () => {
  // ၁။ Team Data သိမ်းရန် State
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ၂။ API မှ Data လှမ်းယူခြင်း
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        const response = await api.get(endpoints.portfolio.team);
        setTeamMembers(response.data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

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
            <div
              key={member.id}
              // 🔹 ဤနေရာတွင် Border နှင့် Background Card Style ထည့်ထားသည်
              className="group bg-white border border-slate-200 p-5 rounded-[2rem] hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[400px] rounded-[1.5rem] overflow-hidden mb-8 shadow-sm">
                <img
                  src={member.image.startsWith('http') ? member.image : `${HOST}${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />

                {/* Social Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-indigo-900/80 to-transparent">
                  <div className="flex gap-4">
                    <SocialBtn Icon={Github} link={member.github_link || "#"} />
                    <SocialBtn Icon={Linkedin} link={member.linkedin_link || "#"} />
                    <SocialBtn Icon={Mail} link={`mailto:${member.email}`} />
                  </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="text-center px-2 pb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <div className="h-px w-12 bg-indigo-100 mx-auto mb-5"></div> {/* Divider လေးတစ်ခု */}

                <p className="text-slate-500 text-sm mb-6 leading-relaxed italic min-h-[60px]">
                  "{member.bio}"
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills && member.skills.split(',').map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-100 text-[10px] font-black rounded-lg uppercase tracking-tighter">
                      {skill.trim()}
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

const SocialBtn = ({ Icon, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-indigo-600 transition-all">
    <Icon size={18} />
  </a>
);

export default Team;