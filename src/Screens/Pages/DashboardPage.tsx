import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../../Components/CustomButton";
import { createPageUrl } from "../../utils/Constant";
import logoImage from "../../assets/Logo.jpeg";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "Services", url: createPageUrl("Services") },
  { title: "About", url: createPageUrl("About") },
  { title: "Portfolio", url: createPageUrl("Portfolio") },
  { title: "Contact", url: createPageUrl("Contact") },
];

interface DashboardPageProps {
  children?: any;
  currentPageName?: any;
}

export default function DashboardPage({ children }: DashboardPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-surface border border-slate-200 rounded-lg p-0.5 transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src={logoImage}
                  alt="PavoSoft logo"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">PavoSoft</h1>
                {/* <p className="text-xs text-slate-500">IT Solutions</p> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === item.url
                      ? "bg-primary-50 text-primary-700"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-surface">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.url
                      ? "bg-primary-50 text-primary-700"
                      : "text-slate-600 hover:bg-slate-50"
                    }`}
                >
                  {item.title}
                </Link>
              ))}
              <Link to={createPageUrl("Contact")} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-surface rounded-lg p-0.5">
                  <img src={logoImage} alt="" className="w-full h-full object-contain rounded-md" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">PavoSoft</h3>
                  <p className="text-xs text-slate-400">Technology Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                Empowering businesses with cutting-edge technology solutions. From software development to cloud services, we deliver excellence. We provide comprehensive technology solutions that drive business excellence, from software engineering to cloud integration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link to={item.url} className="hover:text-white transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Custom Software Development</li>
                <li>Mobile App Development</li>
                <li>SAP Solutions</li>
                <li>Cloud Services</li>
                <li>IT Consulting</li>
                <li>Business Intelligence</li>
                <li>Cybersecurity</li>
                <li>Product Development</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© 2025 PavoSoft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}