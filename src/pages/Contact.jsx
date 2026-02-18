import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Facebook, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // ဒီနေရာမှာ Django API နဲ့ ချိတ်ပြီး Data ပို့ရပါမယ်
    console.log("Form Submitted:", formData);
    alert("ကျေးဇူးတင်ပါတယ်။ မကြာမီ ပြန်လည်ဆက်သွယ်ပါမည်။");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-[#0F172A] py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Get In <span className="text-indigo-500">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            သင့်မှာ Project Idea ရှိပါသလား? ကျွန်ုပ်တို့နှင့် ဆွေးနွေးတိုင်ပင်ရန် အောက်ပါ Form မှတစ်ဆင့် ဆက်သွယ်နိုင်ပါသည်။
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* 2. CONTACT INFORMATION */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                ကျွန်ုပ်တို့၏ ရုံးခန်းသို့ လူကိုယ်တိုင်ဖြစ်စေ၊ ဖုန်း သို့မဟုတ် အီးမေးလ်ဖြင့်ဖြစ်စေ ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoItem 
                icon={<Mail className="text-indigo-600" />} 
                title="Email Us" 
                detail="hello@devteam.com" 
              />
              <ContactInfoItem 
                icon={<Phone className="text-indigo-600" />} 
                title="Call Us" 
                detail="+95 9 123 456 789" 
              />
              <ContactInfoItem 
                icon={<MapPin className="text-indigo-600" />} 
                title="Our Office" 
                detail="No.123, Tech Plaza, Yangon, Myanmar" 
              />
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <SocialLink icon={<Facebook size={20} />} link="#" />
                <SocialLink icon={<Linkedin size={20} />} link="#" />
                <SocialLink icon={<Github size={20} />} link="#" />
              </div>
            </div>
          </div>

          {/* 3. CONTACT FORM */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                  placeholder="How can we help?"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows="5" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                  placeholder="Tell us about your project..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 4. GOOGLE MAPS (Placeholder) */}
      <section className="h-[400px] w-full bg-slate-200 grayscale">
         <iframe 
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.33152410884!2d96.129215!3d16.825667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec4930d6360d%3A0x8210e402b1744f4d!2sYangon!5e0!3m2!1sen!2smm!4v1645000000000!5m2!1sen!2smm" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
         ></iframe>
      </section>
    </div>
  );
};

// --- Helper Components ---

const ContactInfoItem = ({ icon, title, detail }) => (
  <div className="flex items-start gap-6">
    <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{title}</h4>
      <p className="text-lg font-bold text-slate-900">{detail}</p>
    </div>
  </div>
);

const SocialLink = ({ icon, link }) => (
  <a href={link} className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-sm">
    {icon}
  </a>
);

export default Contact;