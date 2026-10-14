import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Cloud, Shield, ArrowRight, Menu, X, 
  Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp,
  Linkedin, Twitter, Facebook, Github, Check,
  Send, Zap
} from 'lucide-react';
import { app } from './firebase';

// --- Scroll To Top Component ---
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

// --- Exact Logo Icon from Attached Images ---
const LogoIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 22C6 13 11 5 19 3C23 8 23 16 17 21C13 25 9 24 6 22Z"
      fill="url(#pavoBlueGradient)"
    />
    <path
      d="M13 16C13 11 16 7 21 5C23 9 23 14 19 17C16 20 14 18 13 16Z"
      fill="url(#pavoCyanGradient)"
    />
    <circle cx="18.5" cy="12" r="2.2" fill="#FFFFFF" />
    <defs>
      <linearGradient id="pavoBlueGradient" x1="6" y1="3" x2="22" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C2FF" />
        <stop offset="1" stopColor="#0052FF" />
      </linearGradient>
      <linearGradient id="pavoCyanGradient" x1="13" y1="5" x2="23" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00F0FF" />
        <stop offset="1" stopColor="#0072FF" />
      </linearGradient>
    </defs>
  </svg>
);

// --- Logo Component ---
const Logo = () => (
  <Link to="/" className="flex items-center gap-2 group select-none">
    <LogoIcon className="w-8 h-8" />
    <span className="text-2xl font-extrabold text-[#0F172A] tracking-tight font-sans">PavoSoft</span>
  </Link>
);

// --- Header Component with active indicator line from images ---
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/services' },
    { name: 'Industries', path: '/#industries' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isCurrentActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && path !== '/#industries' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = isCurrentActive(link.path);
            return (
              <div key={link.name} className="relative py-1">
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#0052FF] ${
                    active ? 'text-[#0052FF] font-semibold' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#0052FF] rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-[#0052FF] hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all hover:shadow text-sm flex items-center gap-1.5"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white shadow-xl py-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                isCurrentActive(link.path) ? 'bg-blue-50 text-[#0052FF] font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-[#0052FF] hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-sm"
          >
            Get Started →
          </Link>
        </div>
      )}
    </header>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand Col */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-8 h-8" />
            <span className="text-xl font-bold text-white tracking-tight">PavoSoft</span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Technology Solutions for a Smarter Tomorrow. We empower businesses with enterprise-grade software, AI, cloud, and cybersecurity.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0052FF] transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0052FF] transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" aria-label="GitHub"><Github className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Software Development</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">AI & Automation</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Cybersecurity</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <a href="mailto:info@pavosoft.com" className="hover:text-white transition-colors">info@pavosoft.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 PavoSoft. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

// --- Circuit / Neural Brain Icon from Images ---
const CircuitBrainIcon = ({ color = "#0052FF", className = "w-7 h-7" }: { color?: string; className?: string }) => (
  <svg className={className} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3C9.5 3 6 6.5 6 11c0 3.2 1.8 6 4.5 7.4V21c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-2.6c2.7-1.4 4.5-4.2 4.5-7.4 0-4.5-3.5-8-8-8z" />
    <path d="M10 25h8M11 12h.01M17 12h.01M14 8v4M11 15c.8.7 1.8 1 3 1s2.2-.3 3-1" />
  </svg>
);

// --- Code Symbol Icon </> ---
const CodeTagIcon = ({ color = "#0052FF", className = "w-7 h-7" }: { color?: string; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// --- Industry Icons matching Home.png ---
const FactoryIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2v18z" />
    <path d="M18 16h.01M14 16h.01M10 16h.01M6 16h.01" />
  </svg>
);

const HealthcareIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12h6M12 9v6" />
  </svg>
);

const RetailIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const FinanceIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="21" x2="21" y2="21" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <polyline points="5 10 12 3 19 10" />
    <line x1="6" y1="14" x2="6" y2="18" />
    <line x1="10" y1="14" x2="10" y2="18" />
    <line x1="14" y1="14" x2="14" y2="18" />
    <line x1="18" y1="14" x2="18" y2="18" />
  </svg>
);

const EducationIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const LogisticsIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

// --- Home Page Component (Home.png) ---
const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. Hero Section with curved wave */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 w-3/4 sm:w-2/3 h-full object-cover opacity-70">
            <path d="M400 0 C650 120 780 380 500 800 L1200 800 L1200 0 Z" fill="url(#heroCyanGlowHome)" />
            <defs>
              <linearGradient id="heroCyanGlowHome" x1="400" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E0F7FE" />
                <stop offset="0.5" stopColor="#BAE6FD" />
                <stop offset="1" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs sm:text-sm font-bold tracking-wider text-[#0052FF] uppercase">
                TECHNOLOGY • PEOPLE • REAL BUSINESS IMPACT
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
                Technology <br />
                that moves your <br />
                <span className="text-[#0052FF]">business forward.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed">
                We build intelligent software, AI solutions and cloud platforms that help businesses operate faster, smarter and more efficiently.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-[#0052FF] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-all text-sm flex items-center gap-2"
                >
                  Get Started →
                </Link>
                <Link
                  to="/services"
                  className="bg-white hover:bg-slate-50 text-slate-800 font-medium px-6 py-3 rounded-lg border border-slate-200 transition-all text-sm shadow-xs"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-100 aspect-[4/3] sm:aspect-[1.15]">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                    alt="PavoSoft Corporate Building" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-blue-500/10 pointer-events-none" />

                  <div className="absolute top-6 right-6 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/30 flex items-center gap-2 shadow-2xl">
                    <LogoIcon className="w-6 h-6" />
                    <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight drop-shadow-md">PavoSoft</span>
                  </div>

                  <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/90 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0052FF] to-[#00A3FF] flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L3 9v11a2 2 0 002 2h14a2 2 0 002-2V9l-9-7z" />
                        <path d="M9 22V12h6v10" />
                      </svg>
                    </div>
                    <div className="text-left font-bold text-slate-900 leading-tight">
                      <div className="text-xs font-extrabold tracking-tight">Innovate</div>
                      <div className="text-xs font-extrabold tracking-tight">Automate</div>
                      <div className="text-xs font-extrabold tracking-tight text-[#0052FF]">Scale</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Metric Stats */}
      <section className="bg-white border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 text-center">
            <div className="py-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">100+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Projects Delivered</div>
            </div>
            <div className="py-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">50+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Happy Clients</div>
            </div>
            <div className="py-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">5+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Years of Experience</div>
            </div>
            <div className="py-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">98%</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF]">OUR SERVICES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              End-to-End Technology Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              From idea to execution, we help businesses build, scale and transform with the power of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <CircuitBrainIcon color="#0052FF" className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#0052FF] transition-colors">
                  Software Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Custom web, mobile and enterprise solutions.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                  <CircuitBrainIcon color="#A855F7" className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#0052FF] transition-colors">
                  AI & Automation
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Intelligent solutions to work smarter and faster.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-6">
                  <Cloud className="w-7 h-7 text-[#06B6D4]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#0052FF] transition-colors">
                  Cloud Solutions
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Modernize and scale your business on cloud.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#0052FF] transition-colors">
                  Cybersecurity
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Protect your business with advanced security solutions.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why PavoSoft */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Developer working at dual monitors"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/15 group-hover:bg-slate-900/25 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-[#0052FF] shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 fill-[#0052FF] ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052FF]">WHY PAVOSOFT</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Your Growth is Our Mission
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We combine deep technical expertise with a business-first approach to deliver solutions that create real value.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "Client-focused approach",
                  "Agile and transparent delivery",
                  "Long-term partnership"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-slate-800 font-medium text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#0052FF] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm shadow-md shadow-blue-500/20"
                >
                  Learn More About Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section id="industries" className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Industries We Serve</h2>
            <p className="text-slate-600 text-sm">Delivering tailored solutions across diverse industries.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "Manufacturing", icon: <FactoryIcon />, boxBg: "bg-blue-50 text-[#0052FF]" },
              { name: "Healthcare", icon: <HealthcareIcon />, boxBg: "bg-cyan-50 text-[#06B6D4]" },
              { name: "Retail & E-commerce", icon: <RetailIcon />, boxBg: "bg-emerald-50 text-[#10B981]" },
              { name: "Finance", icon: <FinanceIcon />, boxBg: "bg-blue-50 text-[#0052FF]" },
              { name: "Education", icon: <EducationIcon />, boxBg: "bg-purple-50 text-[#8B5CF6]" },
              { name: "Logistics", icon: <LogisticsIcon />, boxBg: "bg-pink-50 text-[#EC4899]" }
            ].map((ind, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all flex flex-col items-center gap-3.5 group">
                <div className={`w-14 h-14 rounded-2xl ${ind.boxBg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  {ind.icon}
                </div>
                <span className="font-semibold text-slate-800 text-xs sm:text-sm leading-tight">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0C2364] via-[#103EAE] to-[#0A1F58] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to Build What's Next?</h2>
            <p className="text-blue-100 text-sm sm:text-base">Let's turn your ideas into powerful digital solutions.</p>
          </div>
          <Link
            to="/contact"
            className="bg-[#0052FF] hover:bg-blue-600 text-white font-semibold px-7 py-3 rounded-lg shadow-lg border border-blue-400/30 transition-all hover:scale-105 shrink-0 z-10 flex items-center gap-2 text-sm"
          >
            Get Started →
          </Link>
        </div>
      </section>

      {/* 7. Trusted by Growing Businesses */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by Growing Businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            <div className="flex items-center gap-1.5 text-[#0052FF]">
              <svg className="h-6 w-auto" viewBox="0 0 100 65" fill="#0052FF">
                <ellipse cx="50" cy="32" rx="46" ry="30" fill="none" stroke="#0052FF" strokeWidth="6" />
                <path d="M30 18 h40 v8 h-16 v26 h-8 v-26 h-16 z" fill="#0052FF" />
              </svg>
              <span className="text-lg font-bold tracking-widest text-[#0052FF]">TATA</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#0070AD] font-sans">Infosys</span>
            <span className="text-2xl font-black italic tracking-wider text-[#0052FF]">HCL</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <circle cx="20" cy="8" r="3" fill="#E11D48" />
                <circle cx="28" cy="12" r="3" fill="#F59E0B" />
                <circle cx="32" cy="20" r="3" fill="#10B981" />
                <circle cx="28" cy="28" r="3" fill="#06B6D4" />
                <circle cx="20" cy="32" r="3" fill="#3B82F6" />
                <circle cx="12" cy="28" r="3" fill="#8B5CF6" />
                <circle cx="8" cy="20" r="3" fill="#EC4899" />
                <circle cx="12" cy="12" r="3" fill="#F97316" />
              </svg>
              <span className="text-2xl font-bold tracking-tight text-slate-800">wipro</span>
            </div>
            <span className="text-2xl font-black tracking-widest text-[#0052FF] font-serif" style={{ letterSpacing: '0.15em' }}>
              IBM
            </span>
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                <div className="bg-[#F25022] w-2 h-2"></div>
                <div className="bg-[#7FBA00] w-2 h-2"></div>
                <div className="bg-[#00A4EF] w-2 h-2"></div>
                <div className="bg-[#FFB900] w-2 h-2"></div>
              </div>
              <span className="text-xl font-semibold text-slate-700 tracking-tight">Microsoft</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Services Page Component (EXACT 1:1 REPLICA OF Services.png) ---
const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('All Services');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      {/* 1. Hero Section with Engineer & Floating Badges (Services.png) */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20">
        {/* Soft cyan wave flowing background */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 w-3/4 sm:w-2/3 h-full object-cover opacity-60">
            <path d="M450 0 C700 100 800 350 550 800 L1200 800 L1200 0 Z" fill="url(#servicesCyanGlow)" />
            <defs>
              <linearGradient id="servicesCyanGlow" x1="450" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E0F7FE" />
                <stop offset="0.5" stopColor="#BAE6FD" />
                <stop offset="1" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF]">
                OUR SERVICES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                Comprehensive <br />
                Technology <span className="text-[#0052FF]">Solutions</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed">
                We deliver end-to-end IT solutions that help businesses innovate, automate and scale with confidence.
              </p>
            </div>

            {/* Right Engineer Photo with 4 Floating Badges: AI, </>, Cloud, Security */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-900 aspect-[4/3] sm:aspect-[1.15]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                    alt="Engineer working on solutions" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Badge 1: AI (Square blue badge, top left) */}
                  <div className="absolute top-6 left-6 bg-[#0052FF] text-white px-3.5 py-2 rounded-xl shadow-xl font-bold text-sm flex items-center justify-center">
                    AI
                  </div>

                  {/* Floating Badge 2: </> (White card, bottom left) */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-xl text-[#0052FF] font-mono font-bold text-base border border-white/90">
                    &lt;/&gt;
                  </div>

                  {/* Floating Badge 3: Cloud (White rounded pill, top right) */}
                  <div className="absolute top-12 right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl border border-white/90 flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <Cloud className="w-4 h-4 text-[#06B6D4]" />
                    <span>Cloud</span>
                  </div>

                  {/* Floating Badge 4: Security (White rounded pill, bottom right) */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl border border-white/90 flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <Shield className="w-4 h-4 text-[#0052FF]" />
                    <span>Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="flex flex-wrap items-center gap-3">
          {['All Services', 'Development', 'AI & Automation', 'Cloud', 'Cybersecurity'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#0052FF] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3. 2x2 Detailed Service Cards from Services.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Card 1: Software Development */}
          {(activeTab === 'All Services' || activeTab === 'Development') && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <CodeTagIcon color="#0052FF" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Software Development</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Custom web, mobile and enterprise applications tailored to your business needs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                  <div className="sm:col-span-7 space-y-2">
                    {["Web Applications", "Mobile Applications", "Enterprise Systems", "API Development"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <span className="text-[#00C2FF] font-bold">➜</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {/* Laptop Code Graphic */}
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-slate-100 shadow-md aspect-video bg-slate-950">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80" 
                      alt="Code on screen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Card 2: AI & Automation */}
          {(activeTab === 'All Services' || activeTab === 'AI & Automation') && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
                  <CircuitBrainIcon color="#A855F7" className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">AI & Automation</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Leverage AI to automate processes, improve productivity and unlock new opportunities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                  <div className="sm:col-span-7 space-y-2">
                    {["AI Agents", "Process Automation", "Data Analytics & Insights", "LLM Integration"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <span className="text-[#00C2FF] font-bold">➜</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {/* AI Robot Head Graphic */}
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-slate-100 shadow-md aspect-video bg-slate-950">
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80" 
                      alt="Futuristic AI Robot" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Card 3: Cloud Solutions */}
          {(activeTab === 'All Services' || activeTab === 'Cloud') && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-5">
                  <Cloud className="w-7 h-7 text-[#06B6D4]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Cloud Solutions</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Modernize your IT infrastructure and scale effortlessly with cloud technology.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                  <div className="sm:col-span-7 space-y-2">
                    {["AWS, Azure, GCP", "Cloud Migration", "DevOps & CI/CD", "Managed Cloud Services"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {/* Cloud Servers Graphic */}
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-slate-100 shadow-md aspect-video bg-slate-950">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80" 
                      alt="Cloud Server Infrastructure" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Card 4: Cybersecurity */}
          {(activeTab === 'All Services' || activeTab === 'Cybersecurity') && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                  <Shield className="w-7 h-7 text-[#10B981]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Cybersecurity</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Protect your business with advanced security solutions and risk management.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-6">
                  <div className="sm:col-span-7 space-y-2">
                    {["Security Assessment", "Threat Detection", "Data Protection", "Compliance & Governance"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {/* Cyber Padlock Graphic */}
                  <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-slate-100 shadow-md aspect-video bg-slate-950">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80" 
                      alt="Cybersecurity Shield" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0052FF] hover:text-blue-700 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 4. Our Development Process from Services.png */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Our Development Process</h2>
            <p className="text-slate-600 text-xs sm:text-sm">A proven approach to deliver high-quality solutions.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {[
                { num: "01", title: "Discover", desc: "Understand your needs" },
                { num: "02", title: "Plan", desc: "Create strategy and roadmap" },
                { num: "03", title: "Develop", desc: "Build and test iteratively" },
                { num: "04", title: "Deploy", desc: "Launch with confidence" },
                { num: "05", title: "Support", desc: "Continuous improvement" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-start relative text-left">
                  <div className="w-9 h-9 rounded-full border-2 border-blue-200 bg-blue-50/70 text-[#0052FF] font-bold text-xs flex items-center justify-center mb-4">
                    {step.num}
                  </div>
                  <div className="text-xs font-bold text-[#0F172A] mb-0.5">{step.num}</div>
                  <h3 className="font-extrabold text-[#0F172A] text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Have a Project in Mind? (Services.png Banner) */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100/60 rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center overflow-hidden">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Have a Project in Mind?</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="bg-[#0052FF] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-all text-sm inline-flex items-center gap-2"
              >
                Contact Us →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                alt="Team project discussion" 
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- About Page Component (EXACT 1:1 REPLICA OF About.png) ---
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      {/* 1. Hero Section (About.png) */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF]">
                ABOUT PAVOSOFT
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                Building a Smarter <br />
                and <span className="text-[#0052FF]">Brighter Tomorrow</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed">
                PavoSoft is a technology solutions company focused on helping businesses innovate, transform and grow through the power of software, AI and cloud.
              </p>
            </div>

            {/* Right Graphic: Office Wall with PavoSoft Logo & People Process Progress */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/3] sm:aspect-[1.15] bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                    alt="PavoSoft Corporate Team" 
                    className="w-full h-full object-cover"
                  />
                  {/* Branded Wall Sign Overlay on the Office Wall */}
                  <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white/90 text-center">
                    <div className="flex items-center justify-center gap-2 mb-0.5">
                      <LogoIcon className="w-5 h-5" />
                      <span className="font-extrabold text-[#0F172A] text-base tracking-tight">PavoSoft</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold tracking-wide">
                      People • Process • Progress
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Row directly under Hero (About.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 text-center">
          <div className="py-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">5+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Years of Experience</div>
          </div>
          <div className="py-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">100+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Projects Delivered</div>
          </div>
          <div className="py-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">50+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Happy Clients</div>
          </div>
          <div className="py-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0052FF] tracking-tight">98%</div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">Client Satisfaction</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* 3. Our Story (About.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">Our Story</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              PavoSoft was founded with a simple belief - technology should make life simpler, businesses stronger and people more productive. Today, we work with organizations across industries to build innovative solutions that create real-world impact.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Our Story Colleagues Discussing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4. Our Values (4 Cards in About.png) */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-8">Our Values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1: Innovation */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-[#0F172A] text-lg">Innovation</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Always explore new possibilities.</p>
            </div>

            {/* Value 2: Integrity */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052FF] flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-[#0F172A] text-lg">Integrity</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Build trust through transparency.</p>
            </div>

            {/* Value 3: Client Success */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-[#0F172A] text-lg">Client Success</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Your success is our success.</p>
            </div>

            {/* Value 4: Continuous Learning */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052FF] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-[#0F172A] text-lg">Continuous Learning</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Stay ahead in a rapidly evolving world.</p>
            </div>
          </div>
        </div>

        {/* 5. Our Team (About.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">Our Team</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our team of passionate engineers, designers and strategists work together to deliver exceptional solutions for our clients.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0052FF] border border-[#0052FF] hover:bg-blue-50 px-5 py-2.5 rounded-lg transition-colors"
              >
                View Careers →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                alt="Engineering team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6. Let's Build a Better Future Together Banner (About.png) */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-white text-center shadow-2xl bg-gradient-to-r from-[#0C2364] via-[#0E3A9E] to-[#0A1F58]">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Let's Build a Better Future Together
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Join hands with PavoSoft and be part of a transformative journey.
            </p>
            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-block bg-[#0052FF] hover:bg-blue-600 text-white font-semibold px-7 py-3 rounded-lg shadow-lg border border-blue-400/40 transition-transform hover:scale-105 text-sm"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Contact Page Component (EXACT 1:1 REPLICA OF Contact.png) ---
const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      return;
    }
    setSubmitted(true);
  };

  const faqs = [
    { q: "What services does PavoSoft offer?", a: "We offer comprehensive software development, AI & automation, cloud solutions, and cybersecurity services tailored to enterprise and startup needs." },
    { q: "How do I get a quote for my project?", a: "Fill out our contact form with your project requirements or reach out directly via email, and our technical solutions team will review and respond within 24 hours." },
    { q: "What industries do you work with?", a: "We work across diverse industries including manufacturing, healthcare, retail & e-commerce, finance, education, and logistics." },
    { q: "How long does a typical project take?", a: "Project timelines vary depending on scope and complexity, typically ranging from a few weeks for rapid MVP development to several months for enterprise-scale transformations." },
    { q: "Do you provide ongoing support?", a: "Yes, we provide comprehensive ongoing maintenance, 24/7 infrastructure monitoring, and continuous improvement services post-launch." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      {/* 1. Hero Section (Contact.png) */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF]">
                CONTACT US
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                Let's Start a <br />
                <span className="text-[#0052FF]">Conversation</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed">
                Have a project in mind or want to know more about our services? We're here to help.
              </p>
            </div>

            {/* Right Graphic: Customer Support Agent with Headset and Response Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/3] sm:aspect-[1.15] bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                    alt="Customer Support Representative" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Pill Badge: We usually respond within 24 hours */}
                  <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-white/90 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-800">We usually respond within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Two-Column Contact Section: Send Us a Message + Our Office (Contact.png) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left: Send Us a Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs">
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-1">Send Us a Message</h2>
            <p className="text-slate-500 text-xs sm:text-sm mb-8">Fill out the form and we'll get back to you soon.</p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
                <p className="text-sm">Thank you for reaching out. A PavoSoft solutions architect will get back to you within 24 hours.</p>
                <button 
                  type="button"
                  onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', company: '', requirements: '' }); }}
                  className="mt-2 text-xs font-semibold bg-emerald-600 text-white px-5 py-2.5 rounded-lg cursor-pointer hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0052FF] hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Right: Our Office Information Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs space-y-7">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0F172A] mb-1">Our Office</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Visit us or reach out through any of the channels below.</p>
            </div>
            
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-[#0F172A] block text-sm">Address</span>
                  <span className="text-slate-600 text-xs sm:text-sm">Coimbatore, Tamil Nadu<br />India</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-[#0F172A] block text-sm">Email</span>
                  <a href="mailto:info@pavosoft.com" className="text-slate-600 text-xs sm:text-sm hover:text-[#0052FF]">info@pavosoft.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-[#0F172A] block text-sm">Phone</span>
                  <a href="tel:+919876543210" className="text-slate-600 text-xs sm:text-sm hover:text-[#0052FF]">+91 98765 43210</a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-[#0F172A] block text-sm">Business Hours</span>
                  <span className="text-slate-600 text-xs sm:text-sm">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</span>
                </div>
              </li>
            </ul>

            {/* Map Preview Card with Red Pin (Contact.png) */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-44 bg-slate-100 relative shadow-inner">
              <iframe
                title="PavoSoft Coimbatore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.5115162985!2d76.88483285141979!3d11.014201736691456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 pointer-events-none opacity-85"
                loading="lazy"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 fill-red-500" />
                <div className="text-left">
                  <div className="text-xs font-extrabold text-[#0F172A]">Coimbatore</div>
                  <div className="text-[10px] text-slate-500 font-medium">Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Frequently Asked Questions (Contact.png) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Find quick answers to common questions.</p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#0F172A] flex items-center justify-between hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[#0052FF] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Root Component ---
export default function App() {
  useEffect(() => {
    if (app) {
      console.log("Firebase initialized:", app.name);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-white antialiased selection:bg-[#0052FF] selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
