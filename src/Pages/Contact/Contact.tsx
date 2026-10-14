import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Clock, Mail, MapPin, Phone } from 'lucide-react';


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      return;
    }
    setSubmitted(true);
  };

  const faqs = [
    { q: "What services does PavoSoft offer?", a: "We offer comprehensive software development, AI & automation, cloud solutions, and cybersecurity services tailored to enterprise and startup needs." },
    { q: "How do I get a quote for my project?", a: "Fill out our contact form with your project requirements or reach out directly via email, and our technical solutions team will review and respond within 24 hours." },
    { q: "What industries do you work with?", a: "We work across diverse industries including manufacturing, healthcare, retail & e-commerce, finance, education, and logistics." },
    { q: "How long does a typical project take?", a: "Project timelines vary depending on scope and complexity, typically ranging from a few weeks for rapid MVP development to several months for enterprise-scale transformations." },
    { q: "Do you provide ongoing support?", a: "Yes, we provide comprehensive ongoing maintenance, 24/7 infrastructure monitoring, and continuous improvement services post-launch." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      {/* 1. Hero Section (Contact.png) */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0052FF]">
                CONTACT US
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                Let's Start a <br />
                <span className="text-[#0052FF]">Conversation</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed">
                Have a project in mind or want to know more about our services? We're here to help.
              </p>
            </div>

            {/* Right Graphic: Customer Support Agent with Headset and Response Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/3] sm:aspect-[1.15] bg-slate-900">
                  <img 
                    src={require('../../assets/contact.jpg')}
                    alt="Customer Support Representative" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Pill Badge: We usually respond within 24 hours */}
                  <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-white/90 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-800">We usually respond within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Two-Column Contact Section: Send Us a Message + Our Office (Contact.png) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left: Send Us a Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs">
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-1">Send Us a Message</h2>
            <p className="text-slate-500 text-xs sm:text-sm mb-8">Fill out the form and we'll get back to you soon.</p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
                <p className="text-sm">Thank you for reaching out. A PavoSoft solutions architect will get back to you within 24 hours.</p>
                <button 
                  type="button"
                  onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', phone: '', company: '', requirements: '' }); }}
                  className="mt-2 text-xs font-semibold bg-emerald-600 text-white px-5 py-2.5 rounded-lg cursor-pointer hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0052FF] text-sm bg-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0052FF] hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  Send Message 
                </button>
              </form>
            )}
          </div>

          {/* Right: Our Office Information Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs space-y-7">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0F172A] mb-1">Our Office</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Visit us or reach out through any of the channels below.</p>
            </div>
            
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-[#0F172A] block text-sm">Address</span>
                  <span className="text-slate-600 text-xs sm:text-sm">Coimbatore, Tamil Nadu<br />India</span>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-[#0F172A] block text-sm">Email</span>
                  <a href="mailto:info@pavosoft.com" className="text-slate-600 text-xs sm:text-sm hover:text-[#0052FF]">info@pavosoft.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-[#0F172A] block text-sm">Phone</span>
                  <a href="tel:+919876543210" className="text-slate-600 text-xs sm:text-sm hover:text-[#0052FF]">+91 98765 43210</a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-[#0F172A] block text-sm">Business Hours</span>
                  <span className="text-slate-600 text-xs sm:text-sm">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</span>
                </div>
              </li>
            </ul>

            {/* Map Preview Card with Red Pin (Contact.png) */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-44 bg-slate-100 relative shadow-inner">
              <iframe
                title="PavoSoft Coimbatore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.5115162985!2d76.88483285141979!3d11.014201736691456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 pointer-events-none opacity-85"
                loading="lazy"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 fill-red-500" />
                <div className="text-left">
                  <div className="text-xs font-extrabold text-[#0F172A]">Coimbatore</div>
                  <div className="text-[10px] text-slate-500 font-medium">Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Frequently Asked Questions (Contact.png) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Find quick answers to common questions.</p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#0F172A] flex items-center justify-between hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-[#0052FF] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
