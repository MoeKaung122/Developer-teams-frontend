// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
               Dev<span className="text-indigo-500">Team</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              သင့်လုပ်ငန်းအတွက် ခေတ်မီဆန်းသစ်သော Software များကို ဖန်တီးပေးနေသည့် Professional Developer အဖွဲ့ဖြစ်သည်။
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon Icon={Facebook} link="#" />
              <SocialIcon Icon={Linkedin} link="#" />
              <SocialIcon Icon={Github} link="#" />
              <SocialIcon Icon={Twitter} link="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/projects" text="Our Portfolio" />
              <FooterLink to="/team" text="Meet the Team" />
              <FooterLink to="/blog" text="Tech Blog" />
              <FooterLink to="/contact" text="Contact Us" />
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-indigo-400 transition cursor-pointer">Web Development</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">Mobile Apps (iOS/Android)</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">UI/UX Design</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">Custom Software Systems</li>
              <li className="hover:text-indigo-400 transition cursor-pointer">SEO & Marketing</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-indigo-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>No.123, Tech Street, Yangon, Myanmar</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                <span>+95 9 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                <span>hello@devteam.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="text-indigo-500 w-5 h-5 flex-shrink-0" />
                <span>www.devteam.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} DevTeam. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components for Cleaner Code
const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block duration-200">
      {text}
    </Link>
  </li>
);

const SocialIcon = ({ Icon, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noreferrer"
    className="bg-slate-800 p-2 rounded-full text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

export default Footer;