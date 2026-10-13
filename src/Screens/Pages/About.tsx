import React from "react";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  ShieldCheck,
  Trophy,
  BookOpen,
  ArrowRight,
  Users,
} from "lucide-react";
import { PavoLogo } from "../../Components/PavoLogo";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always explore new possibilities.",
    color: "text-[#2563EB] bg-blue-50",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Build trust through transparency.",
    color: "text-[#06B6D4] bg-cyan-50",
  },
  {
    icon: Trophy,
    title: "Client Success",
    description: "Your success is our success.",
    color: "text-[#10B981] bg-emerald-50",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Stay ahead in a rapidly evolving world.",
    color: "text-amber-600 bg-amber-50",
  },
];

export default function About() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">
                ABOUT PAVOSOFT
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
                Building a Smarter and{" "}
                <span className="text-[#2563EB]">Brighter Tomorrow</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                PavoSoft is a technology solutions company focused on helping
                businesses innovate, transform and grow through the power of
                software, AI and cloud.
              </p>
            </div>

            {/* Right Branded Wall & Team Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="PavoSoft Team Innovation"
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

                  {/* Brand Motto Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-white/80">
                    <div className="flex items-center gap-2 mb-1">
                      <PavoLogo size="sm" />
                    </div>
                    <p className="text-xs font-semibold text-slate-600 tracking-wide">
                      People • Process • Progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Stats */}
          <div className="mt-14 pt-8 border-t border-slate-200/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Our Story
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                PavoSoft was founded with a simple belief – technology should
                make life simpler, businesses stronger and people more
                productive. Today, we work with organizations across industries
                to build innovative solutions that create real-world impact.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                With a customer-centric mindset and relentless focus on quality,
                our engineering teams partner closely with founders and
                enterprise leaders to turn ambitious visions into reliable,
                future-proof software solutions.
              </p>
            </div>

            {/* Right Image Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                  alt="Team brainstorming"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80"
                  alt="Engineer coding"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Our Values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${v.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Our Team
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our team of passionate engineers, designers and strategists
                work together to deliver exceptional solutions for our clients.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-blue-800 transition-colors"
            >
              <span>View Careers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-64 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="PavoSoft passionate team members"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Let's Build a Better Future Together Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2563EB] via-blue-600 to-[#1D4ED8] rounded-2xl p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            Let's Build a Better Future Together
          </h3>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Join hands with PavoSoft and be part of a transformative journey.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#2563EB] font-semibold text-sm px-7 py-3.5 rounded-lg shadow-sm transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}