import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Cloud, Shield } from 'lucide-react';
import { CircuitBrainIcon } from '../../Components/Icons';

const CodeTagIcon = ({ color = "#0052FF", className = "w-7 h-7" }: { color?: string; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);


export default function Services() {
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
                    src={require('../../assets/Service.jpg')}
                    alt="Engineer working on solutions" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between gap-3">
                    {/* AI and Cloud stay on one shared top row. */}
                    <div className="bg-[#0052FF] text-white px-3.5 py-2 rounded-xl shadow-xl font-bold text-sm flex items-center justify-center">
                      AI
                    </div>
                    <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xl border border-white/90 flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <Cloud className="w-4 h-4 text-[#06B6D4]" />
                      <span>Cloud</span>
                    </div>
                  </div>

                  {/* Floating Badge 2: </> (White card, bottom left) */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-xl text-[#0052FF] font-mono font-bold text-base border border-white/90">
                    &lt;/&gt;
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
                        <span className="text-[#00C2FF] font-bold">âžœ</span>
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
                        <span className="text-[#00C2FF] font-bold">âžœ</span>
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
                Contact Us 
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img 
                src={require('../../assets/service1.jpg')}
                alt="Team project discussion" 
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
