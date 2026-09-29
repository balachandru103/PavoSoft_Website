import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils/Constant";
import { Button } from "../../Components/CustomButton";
import {
    Code2, Smartphone, Cloud, Database,
    ArrowRight, CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Code2,
        title: "Custom Software Development",
        description: "Scalable, secure software engineered around your business needs",
        gradient: "from-primary-600 to-secondary-600"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android",
        gradient: "from-primary-600 to-secondary-600"
    },
    {
        icon: Database,
        title: "SAP Solutions",
        description: "Enterprise resource planning and SAP implementation services",
        gradient: "from-accent to-secondary-600"
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and migration solutions",
        gradient: "from-secondary-500 to-secondary-600"
    }
];

export default function Home() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-slate-950 via-slate-800 to-secondary-900">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block mb-6">
                                <span className="px-4 py-2 bg-primary-950 border border-primary-700 rounded-full text-primary-100 text-sm font-medium">
                                    Intelligent Transformation Partner
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Transform Your Business with Technology
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                We deliver cutting-edge software solutions, mobile applications, SAP implementations, and cloud services to drive your digital transformation.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to={createPageUrl("Contact")}>
                                    <Button size="lg" className="
      flex items-center justify-center 
    bg-gradient-to-r from-primary-600 to-secondary-600
    hover:from-primary-700 hover:to-secondary-700
    text-white shadow-lg
      text-lg px-8
    ">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link to={createPageUrl("Services")}>
                                    <Button size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                                        Explore Services
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                                    alt="Team collaboration"
                                    className="relative rounded-3xl shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-surface">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-3">
                        AI at the Core of Your Digital Journey
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                        Technology that moves your business forward
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        We partner with you to deliver AI-driven software, mobile, SAP, and cloud solutions tailored to your business goals.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed mt-3">
                        By merging deep technical expertise with data-driven intelligence, we enable smarter decisions, seamless integration, and continuous growth in a rapidly evolving market.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Core Services — End-to-End IT Solutions for Business Success.
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Your Digital Advantage Starts Here.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-slate-200 hover:border-transparent hover:-translate-y-2">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link to={createPageUrl("Services")}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="flex items-center justify-center border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white"
                            >
                                View All Services
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                                alt="Technology dashboard"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-3">
                                Your Goals, Our Expertise.
                            </p>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                Why Choose PavoSoft?
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                At PavoSoft, we don’t just build software — we deliver transformative solutions that power growth, efficiency, and innovation.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Excellence delivering cutting-edge, reliable solutions trusted",
                                    "Advanced technology leveraging modern tools, frameworks, and AI solutions.",
                                    "Rapid, agile solutions designed to adapt as your business grows.",
                                    "Reliable round-the-clock support to keep your business running.",
                                    "Precision-driven project delivery, always on time.",
                                    "Maximizing value with cost-effective, high-quality solutions."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-success-soft rounded-full flex items-center justify-center mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-success" />
                                        </div>
                                        <p className="text-slate-700 text-lg">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <Link to={createPageUrl("About")}>
                                    <Button size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                                        Learn More About Us
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Let's Build Something Great Together
                        </h2>
                        <p className="text-xl text-secondary-50 mb-8">
                            Let's build your future. Whether you need a custom software solution, mobile app, or enterprise system, our team is ready to help. Reach out to us and let's start the conversation.
                        </p>
                        <div className="text-center mt-12">
                            <Link to={createPageUrl("Contact")} className="inline-block">
                                <Button
                                    size="lg"
                                    className="flex items-center justify-center border-white/20 text-white hover:bg-white/10 text-lg px-8"
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