import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Github } from 'lucide-react';
// import { PavoLogo } from '../Components/PavoLogo';

export default function Footer() {
  return (
  <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand Col */}
        <div className="lg:col-span-2 space-y-4">
          {/* <PavoLogo variant="light" size="md" className="!gap-2" textClassName="!text-xl" /> */}
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
        <p>Ã‚Â© 2026 PavoSoft. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);
}
