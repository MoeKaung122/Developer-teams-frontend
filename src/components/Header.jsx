// components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation Links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition">
              <Code2 className="text-white h-6 w-6" />
            </div>
            <span className="font-bold text-xl text-slate-800 tracking-tight">
              Dev<span className="text-indigo-600">Team</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-indigo-600 font-bold'
                    : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition shadow-lg shadow-indigo-200 flex items-center"
            >
              Contact Us
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:text-indigo-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center mt-4 bg-indigo-600 text-white px-5 py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;