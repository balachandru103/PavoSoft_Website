import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Cpu,
  Cloud,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Server,
  Lock,
} from "lucide-react";

type ServiceCategory =
  | "all"
  | "development"
  | "ai"
  | "cloud"
  | "cybersecurity";

const filterTabs = [
  { id: "all", label: "All Services" },
  { id: "development", label: "Development" },
  { id: "ai", label: "AI & Automation" },
  { id: "cloud", label: "Cloud" },
  { id: "cybersecurity", label: "Cybersecurity" },
];

const serviceDetails = [
  {
    id: "development",
    category: "development",
    icon: Code,
    title: "Software Development",
    description:
      "Custom web, mobile and enterprise applications tailored to your business needs.",
    items: [
      "Web Applications",
      "Mobile Applications",
      "Enterprise Systems",
      "API Development",
    ],
    iconBg: "bg-blue-50 text-[#2563EB]",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    badge: "Web & Mobile",
  },
  {
    id: "ai",
    category: "ai",
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Leverage AI to automate processes, improve productivity and unlock new opportunities.",
    items: [
      "AI Agents",
      "Process Automation",
      "Data Analytics & Insights",
      "LLM Integration",
    ],
    iconBg: "bg-indigo-50 text-indigo-600",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    badge: "Next-Gen AI",
  },
  {
    id: "cloud",
    category: "cloud",
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Modernise your IT infrastructure and scale effortlessly with cloud technology.",
    items: [
      "AWS, Azure, GCP",
      "Cloud Migration",
      "DevOps & CI/CD",
      "Managed Cloud Services",
    ],
    iconBg: "bg-cyan-50 text-[#06B6D4]",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    badge: "Scalable Cloud",
  },
  {
    id: "cybersecurity",
    category: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protect your business with advanced security solutions and risk management.",
    items: [
      "Security Assessment",
      "Threat Detection",
      "Data Protection",
      "Compliance & Governance",
    ],
    iconBg: "bg-emerald-50 text-[#10B981]",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    badge: "Zero-Trust",
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand your needs",
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Create strategy and roadmap",
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "Build and test iteratively",
  },
  {
    number: "04",
    title: "Deploy",
    subtitle: "Launch with confidence",
  },
  {
    number: "05",
    title: "Support",
    subtitle: "Continuous improvement",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("all");

  const filteredServices =
    activeTab === "all"
      ? serviceDetails
      : serviceDetails.filter((s) => s.category === activeTab);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Header Info */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
                OUR SERVICES
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
                Comprehensive Technology Solutions
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                We deliver end-to-end IT solutions that help businesses
                innovate, automate and scale with confidence.
              </p>
            </div>

            {/* Right Graphic with floating tags */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Engineer working"
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-transparent to-transparent" />

                  {/* Floating badge 1: AI */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-white/80 flex items-center gap-1.5 text-xs font-semibold text-indigo-600">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI</span>
                  </div>

                  {/* Floating badge 2: Cloud */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-white/80 flex items-center gap-1.5 text-xs font-semibold text-cyan-600">
                    <Cloud className="w-3.5 h-3.5" />
                    <span>Cloud</span>
                  </div>

                  {/* Floating badge 3: </> */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-white/80 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <Code className="w-3.5 h-3.5" />
                    <span>&lt;/&gt;</span>
                  </div>

                  {/* Floating badge 4: Security */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-white/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-12 flex flex-wrap gap-2.5 items-center justify-start sm:justify-center">
            {filterTabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ServiceCategory)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#2563EB] text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid (4 Detailed Cards) */}
      <section id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-8">
                  {/* Top Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-12 gap-6 items-center">
                    {/* Feature Bullets */}
                    <ul className="sm:col-span-7 space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-slate-700 font-medium"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Preview Image */}
                    <div className="sm:col-span-5">
                      <div className="relative rounded-xl overflow-hidden border border-slate-200 h-28">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/10" />
                        <span className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-800 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Development Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Our Development Process
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              A proven approach to deliver high-quality solutions.
            </p>
          </div>

          {/* 5-step process chain */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
            {developmentSteps.map((step, index) => (
              <div
                key={step.number}
                className="text-center flex flex-col items-center relative group"
              >
                {/* Step circle */}
                <div className="w-14 h-14 rounded-full border-2 border-blue-200 bg-blue-50/70 text-[#2563EB] font-bold text-base flex items-center justify-center mb-3 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all">
                  {step.number}
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 max-w-[150px] leading-relaxed">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner: Have a Project in Mind? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-7 p-8 sm:p-10 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Have a Project in Mind?
              </h3>
              <p className="text-slate-600 text-base">
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 h-48 md:h-full min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Project planning discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}