import React, { useState } from "react";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Web Development", "Mobile Apps", "Enterprise", "Cloud"];

const projects = [
  {
    title: "FinTech Banking Platform",
    category: "Web Development",
    description:
      "Comprehensive online banking solution with real-time transactions and advanced security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Apps",
    description:
      "Patient management system with telemedicine capabilities and appointment scheduling",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React Native", "Healthcare", "iOS/Android"],
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Scalable online marketplace with advanced inventory management and analytics",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Microservices", "PostgreSQL"],
  },
  {
    title: "SAP S/4HANA Implementation",
    category: "Enterprise",
    description:
      "Complete ERP transformation for a Fortune 500 manufacturing company",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["SAP", "Enterprise", "Integration"],
  },
  {
    title: "Cloud Migration Project",
    category: "Cloud",
    description:
      "Seamless migration of legacy systems to AWS cloud infrastructure",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tags: ["AWS", "DevOps", "Kubernetes"],
  },
  {
    title: "Food Delivery App",
    category: "Mobile Apps",
    description:
      "Real-time food ordering platform with GPS tracking and payment integration",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "Maps API"],
  },
  {
    title: "CRM Dashboard",
    category: "Web Development",
    description:
      "Advanced customer relationship management system with AI-powered insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Angular", "AI/ML", "Analytics"],
  },
  {
    title: "IoT Manufacturing System",
    category: "Enterprise",
    description:
      "Smart factory solution with real-time monitoring and predictive maintenance",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    tags: ["IoT", "Azure", "Big Data"],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-3">
            OUR PORTFOLIO
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12] mb-4">
            Showcasing Digital Excellence
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Explore our success stories and see how we've helped businesses
            transform through technology.
          </p>

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-xs font-semibold text-[#2563EB] px-2.5 py-1 rounded-md border border-slate-200">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-blue-800 transition-colors"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2563EB] via-blue-600 to-[#1D4ED8] rounded-2xl p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Build Your Solution?
          </h3>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Let's turn your vision into high-impact software.
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