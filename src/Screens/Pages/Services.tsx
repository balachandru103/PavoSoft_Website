import React from "react";
import {
    Code2, Smartphone, Database, Cloud,
    Settings, BarChart3, Shield, Boxes,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../Components/CustomButton";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils/Constant";

const services = [
    {
        icon: Code2,
        title: "Custom Software Development",
        description: "Tailored software solutions engineered to meet your unique business needs. We deliver scalable, secure, and future-ready applications using cutting-edge technologies.",
        features: ["Web Applications", "Enterprise Software", "API Development", "Legacy System Modernization"],
        gradient: "from-primary-600 to-secondary-600"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Seamless native and cross-platform applications designed for exceptional user experiences. Driving engagement and growth on iOS and Android.",
        features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
        gradient: "from-primary-600 to-secondary-600"
    },
    {
        icon: Database,
        title: "SAP Solutions",
        description: "Strategic SAP services to optimize business processes and enhance efficiency. From implementation to integration, we make SAP work for you.",
        features: ["SAP Implementation", "SAP S/4HANA", "SAP Consulting", "SAP Integration"],
        gradient: "from-accent to-secondary-600"
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "Complete cloud solutions for scalability, flexibility, and efficiency. From migration to optimization, we simplify your cloud journey.",
        features: ["AWS Services", "Azure Solutions", "Cloud Migration", "DevOps"],
        gradient: "from-secondary-500 to-secondary-600"
    },
    {
        icon: Settings,
        title: "IT Consulting",
        description: "Expert technology advisory to align IT strategy with business goals. Empowering transformation with innovative architecture and strategic planning.",
        features: ["Digital Strategy", "Tech Architecture", "System Design", "Best Practices"],
        gradient: "from-primary-600 to-secondary-600"
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        description: "Transform data into insight. We create powerful analytics platforms and custom dashboards for smarter decision-making.",
        features: ["Data Analytics", "Power BI", "Custom Dashboards", "Reporting Solutions"],
        gradient: "from-secondary-500 to-secondary-600"
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Comprehensive protection for your digital ecosystem. From audits to incident response, we ensure resilience and compliance.",
        features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
        gradient: "from-slate-700 to-slate-900"
    },
    {
        icon: Boxes,
        title: "Product Development",
        description: "End-to-end product engineering that turns ideas into impactful solutions. From MVP to launch, we deliver innovation.",
        features: ["MVP Development", "Product Design", "Quality Assurance", "Product Launch"],
        gradient: "from-primary-600 to-secondary-600"
    }
];

export default function Services() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 relative overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            End-to-End IT Solutions
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Our Core Services — end-to-end technology solutions that drive business success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 h-full border border-slate-200 hover:border-transparent hover:-translate-y-1 flex flex-col">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* <Link to={createPageUrl("Contact")}
                                    className="mt-auto inline-block">
                                        <Button size="lg" className="
      flex items-center justify-center 
    bg-gradient-to-r from-primary-600 to-secondary-600
    hover:from-primary-700 hover:to-secondary-700
    text-white shadow-lg
      text-lg px-8
    ">
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link> */}
                                    <Link
    to={createPageUrl("Contact")}
    className="mt-auto inline-block"
>
    <Button
        size="lg"
        className="
            flex items-center justify-center
            bg-gradient-to-r from-primary-600 to-secondary-600
            hover:from-primary-700 hover:to-secondary-700
            text-white shadow-lg
            text-lg px-8
        "
    >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Button>
</Link>
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
                            Let's Build Something Great Together
                        </h2>
                        <p className="text-xl text-slate-600 mb-8">
                            Whether you need a custom software solution, mobile app, or enterprise system, our team is ready to help. Reach out to us and let's start the conversation.
                        </p>
                        <div className="text-center mt-12">
                            <Link to={createPageUrl("Contact")}  className="inline-block">
                                <Button size="lg" className="flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg">
                                    Get Started Today
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