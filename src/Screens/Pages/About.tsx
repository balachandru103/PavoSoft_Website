import React from "react";
import { motion } from "framer-motion";
import { 
  Target, TrendingUp,
  Lightbulb, Heart, Shield, Zap
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We challenge limits and embrace the latest technologies to transform ideas into reality."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your vision drives us — we build partnerships rooted in trust, collaboration, and shared success"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We lead with honesty, transparency, and unwavering ethical standards."
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We deliver exceptional quality, consistently raising the bar in everything we do."
  }
];

export default function About() {
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
              About PavoSoft
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Born in 2025 from the belief that technology should empower, not complicate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Purpose</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                To empower businesses worldwide with innovative technology that transforms operations, drives growth, and unlocks new possibilities. We are committed to being the trusted partner for organizations seeking a competitive edge in the digital era.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-600 to-primary-700 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Aspiration</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                To be a global leader in IT innovation — recognized for excellence, trust, and transformative solutions. We envision a future where technology seamlessly empowers every business to achieve its fullest potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  
                  In 2025, PavoSoft was born from a simple belief: technology should empower, not complicate. What began as a small team of passionate developers has grown into a global force, delivering transformative IT solutions to businesses and startups worldwide.

                </p>
                <p>
                  Our journey is driven by innovation. Along the way, we created our own flagship product — designed to fuel people’s growth and help them build their future empires.
                </p>
                <p>
                  Today, PavoSoft stands at the intersection of vision and execution, pushing the boundaries of what’s possible. We don’t just build software — we craft digital experiences that drive growth, inspire change, and shape the future.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The heart of PavoSoft — guiding everything we create and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}