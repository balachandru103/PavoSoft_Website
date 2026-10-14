import { Link } from 'react-router-dom';
import { Shield, Zap } from 'lucide-react';
import aboutImage from "../../assets/About1.jpg";


export default function About() {
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

            {/* Right Graphic: Office Team */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/3] sm:aspect-[1.15] bg-slate-100">
                  <img 
                    src={require('../../assets/About.jpg')}
                    alt="Colleagues working together in a bright office"
                    className="w-full h-full object-cover"
                  />
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Colleagues discussing a project around a table"
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
                View Careers 
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[16/10] bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80"
                alt="Engineering team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6. Let's Build a Better Future Together Banner (About.png) */}
        {/* <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-white text-center shadow-2xl bg-gradient-to-r from-[#0C2364] via-[#0E3A9E] to-[#0A1F58]">
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
                Get in Touch
              </Link>
            </div>
          </div>
        </div> */}

<div
  className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-white text-center shadow-2xl"
>
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
    style={{ backgroundImage: `url(${aboutImage})` }}
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#0C2364]/65"></div>

  {/* Content */}
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
        Get in Touch
      </Link>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
