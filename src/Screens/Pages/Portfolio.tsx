import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "../../Components/CustomButton";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils/Constant";

const categories = ["All", "Web Development", "Mobile Apps", "Enterprise", "Cloud"];

const projects = [
  {
    title: "FinTech Banking Platform",
    category: "Web Development",
    description: "Comprehensive online banking solution with real-time transactions and advanced security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "AWS"]
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Apps",
    description: "Patient management system with telemedicine capabilities and appointment scheduling",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React Native", "Healthcare", "iOS/Android"]
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Scalable online marketplace with advanced inventory management and analytics",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Microservices", "PostgreSQL"]
  },
  {
    title: "SAP S/4HANA Implementation",
    category: "Enterprise",
    description: "Complete ERP transformation for a Fortune 500 manufacturing company",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["SAP", "Enterprise", "Integration"]
  },
  {
    title: "Cloud Migration Project",
    category: "Cloud",
    description: "Seamless migration of legacy systems to AWS cloud infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tags: ["AWS", "DevOps", "Kubernetes"]
  },
  {
    title: "Food Delivery App",
    category: "Mobile Apps",
    description: "Real-time food ordering platform with GPS tracking and payment integration",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "Maps API"]
  },
  {
    title: "CRM Dashboard",
    category: "Web Development",
    description: "Advanced customer relationship management system with AI-powered insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Angular", "AI/ML", "Analytics"]
  },
  {
    title: "IoT Manufacturing System",
    category: "Enterprise",
    description: "Smart factory solution with real-time monitoring and predictive maintenance",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    tags: ["IoT", "Azure", "Big Data"]
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our success stories and see how we've helped businesses transform through technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg"
                    : "bg-surface text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <button className="flex items-center gap-2 text-white font-medium">
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-primary-700 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Let's create something amazing together
            </p>
            <div className="text-center mt-12">
              <Link to={createPageUrl("Contact")} className="inline-block">
                <Button
                  size="lg"
                  className="flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 text-lg px-8"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}