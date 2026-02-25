import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Github, Loader2 } from 'lucide-react';
// API files များကို import လုပ်ပါ
import api from '../api/api';
import endpoints from '../api/endpoints';

const Contact = () => {
  // 1. Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Status States (Loading နှင့် Message များအတွက်)
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      // Django API သို့ Data ပို့ခြင်း
      const response = await api.post(endpoints.contact.submit, formData);
      
      if (response.status === 201 || response.status === 200) {
        setStatus({ type: 'success', msg: 'ကျေးဇူးတင်ပါတယ်။ မကြာမီ ပြန်လည်ဆက်သွယ်ပါမည်။' });
        // Form ကို Reset လုပ်ခြင်း
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      setStatus({ 
        type: 'error', 
        msg: 'ခေတ္တချို့ယွင်းနေပါသည်။ နောက်မှ ပြန်လည်ကြိုးစားပေးပါ။' 
      });
    } finally {
      setLoading(false);
    }
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
              <ContactInfoItem icon={<Mail className="text-indigo-600" />} title="Email Us" detail="hello@devteam.com" />
              <ContactInfoItem icon={<Phone className="text-indigo-600" />} title="Call Us" detail="+95 9 123 456 789" />
              <ContactInfoItem icon={<MapPin className="text-indigo-600" />} title="Our Office" detail="No.123, Tech Plaza, Yangon, Myanmar" />
            </div>

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
            {/* Success/Error Messages */}
            {status.msg && (
              <div className={`mb-6 p-4 rounded-xl text-sm font-bold ${
                status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
              }`}>
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" value={formData.name} required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" value={formData.email} required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" value={formData.subject} required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="How can we help?"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows="5" value={formData.message} required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Tell us about your project..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg ${
                  loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'
                }`}
              >
                {loading ? (
                  <>Processing <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

// Helper Components (တူညီပါသည်)
const ContactInfoItem = ({ icon, title, detail }) => (
  <div className="flex items-start gap-6">
    <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0">{icon}</div>
    <div>
      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{title}</h4>
      <p className="text-lg font-bold text-slate-900">{detail}</p>
    </div>
  </div>
);

const SocialLink = ({ icon, link }) => (
  <a href={link} className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">{icon}</a>
);

export default Contact;