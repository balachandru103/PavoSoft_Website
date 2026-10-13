import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Cpu,
  Cloud,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Play,
  Factory,
  HeartPulse,
  ShoppingCart,
  Landmark,
  GraduationCap,
  Truck,
  Sparkles,
} from "lucide-react";
import { PavoLogo } from "../../Components/PavoLogo";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom web, mobile and enterprise solutions.",
    iconColor: "text-blue-600 bg-blue-50",
    url: "/services",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent solutions to work smarter and faster.",
    iconColor: "text-indigo-600 bg-indigo-50",
    url: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Modernize and scale your business on cloud.",
    iconColor: "text-cyan-600 bg-cyan-50",
    url: "/services",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions.",
    iconColor: "text-emerald-600 bg-emerald-50",
    url: "/services",
  },
];

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Finance", icon: Landmark },
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: Truck },
];

const clientLogos = [
  { name: "TATA", logoText: "TATA" },
  { name: "Infosys", logoText: "Infosys" },
  { name: "HCL", logoText: "HCL" },
  { name: "wipro", logoText: "wipro" },
  { name: "IBM", logoText: "IBM" },
  { name: "Microsoft", logoText: "Microsoft" },
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TECHNOLOGY • PEOPLE • REAL BUSINESS IMPACT</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
                Technology that moves your business{" "}
                <span className="text-[#2563EB]">forward.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                We build intelligent software, AI solutions and cloud platforms
                that help businesses operate faster, smarter and more
                efficiently.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-base px-6 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-medium text-base px-6 py-3.5 rounded-lg border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image / Floating Tech Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative glow */}
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />

                {/* Main Hero Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                    alt="PavoSoft Tech Team"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />

                  {/* Floating Brand Badge (Top Right) */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/80 flex items-center gap-2">
                    <PavoLogo size="sm" />
                  </div>

                  {/* Floating Feature Card (Bottom) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-white/80 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Core Vision</p>
                      <p className="text-sm font-bold text-[#0F172A]">
                        Innovate • Automate • Scale
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Stats Bar */}
          <div className="mt-14 pt-8 border-t border-slate-200/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-xl hover:bg-white hover:shadow-xs transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#2563EB]">
                  100+
                </p>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  Projects Delivered
                </p>
              </div>
              <div className="p-4 rounded-xl hover:bg-white hover:shadow-xs transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#2563EB]">
                  50+
                </p>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  Happy Clients
                </p>
              </div>
              <div className="p-4 rounded-xl hover:bg-white hover:shadow-xs transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#2563EB]">
                  5+
                </p>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  Years of Experience
                </p>
              </div>
              <div className="p-4 rounded-xl hover:bg-white hover:shadow-xs transition-colors">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#2563EB]">
                  98%
                </p>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: End-to-End Technology Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            End-to-End Technology Solutions
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            From idea to execution, we help businesses build, scale and transform
            with the power of technology.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.iconColor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  to={item.url}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-800 transition-colors pt-2 border-t border-slate-100"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Why PavoSoft */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Image with play overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Team Innovation at PavoSoft"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-[#2563EB] shadow-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 ml-1 fill-[#2563EB]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
                WHY PAVOSOFT
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Your Growth is Our Mission
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We combine deep technical expertise with a business-first
                approach to deliver solutions that create real value.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 fill-emerald-100" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Client-focused approach
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 fill-emerald-100" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Agile and transparent delivery
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 fill-emerald-100" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Long-term partnership
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Industries We Serve */}
      <section id="industries" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Delivering tailored solutions across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="bg-white rounded-xl p-5 border border-slate-200 text-center hover:border-blue-400 hover:shadow-sm transition-all duration-200 group flex flex-col items-center justify-center gap-3"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {ind.name}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 5: CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2563EB] via-blue-600 to-[#1D4ED8] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Build What's Next?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base">
              Let's turn your ideas into powerful digital solutions.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#2563EB] font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all duration-200 flex-shrink-0"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Section 6: Trusted by Growing Businesses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Trusted by Growing Businesses
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="font-bold text-xl sm:text-2xl text-slate-700 tracking-wider hover:text-[#2563EB] transition-colors"
            >
              {client.logoText}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}