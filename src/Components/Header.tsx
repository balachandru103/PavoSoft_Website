import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO_SRC = process.env.PUBLIC_URL 
  ? `${process.env.PUBLIC_URL}/assets/aistudio/Clean_logo___4_Nov_2026__12.17_pm_6411a6bf.png`
  : '/assets/aistudio/Clean_logo___4_Nov_2026__12.17_pm_6411a6bf.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions#solutions' },
    { name: 'Industries', path: '/#industries' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isCurrentActive = (path: string, name: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (name === 'Solutions') return location.pathname === '/solutions';
    if (path === '/#industries') return location.hash === '#industries';
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo matching WhatsApp mockups */}
        <Link to="/" className="inline-flex items-center group select-none transition-transform hover:scale-[1.01]">
          <img 
            src={LOGO_SRC} 
            alt="PavoSoft - Technology for a Brighter Tomorrow" 
            className="h-9 sm:h-10 w-auto object-contain max-h-12"
            loading="eager"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = isCurrentActive(link.path, link.name);
            return (
              <div key={link.name} className="relative py-1">
                <Link
                  to={link.path}
                  className={`text-sm font-semibold transition-colors hover:text-[#007BFF] ${
                    active ? 'text-[#007BFF]' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-[#007BFF] rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-[#007BFF] hover:bg-[#0066FF] text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-blue-500/20 transition-all hover:shadow text-sm flex items-center gap-1.5"
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
              className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                isCurrentActive(link.path, link.name) ? 'bg-blue-50 text-[#007BFF]' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-[#007BFF] hover:bg-[#0066FF] text-white font-semibold py-3 rounded-lg shadow-sm"
          >
            Get Started →
          </Link>
        </div>
      )}
    </header>
  );
}
