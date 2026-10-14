import { Link } from 'react-router-dom';
import { ArrowRight, Check, Cloud, Shield } from 'lucide-react';
import { PavoLogo } from '../../Components/PavoLogo';
import { CircuitBrainIcon } from '../../Components/Icons';


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


export default function Home() {
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
                TECHNOLOGY  PEOPLE  REAL BUSINESS IMPACT
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
                  Get Started
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
                    src={require('../../assets/Home.jpg')} 
                    alt="PavoSoft Corporate Building" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-blue-500/10 pointer-events-none" />

                  {/* <div className="absolute top-[20%] right-[10%] flex items-center gap-1 rounded-md border border-white/40 bg-slate-950/55 px-2 py-1 shadow-lg backdrop-blur-sm sm:gap-1.5 sm:px-3 sm:py-1.5">
                    <PavoLogo
                      size="sm"
                      variant="light"
                      fontWeight="extrabold"
                      className="!gap-1 sm:!gap-1.5"
                      iconClassName="!h-5 !w-5 sm:!h-6 sm:!w-6"
                      textClassName="!text-sm sm:!text-base"
                    />
                  </div> */}

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
                  Learn More About Us 
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
            Get Started
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
}
