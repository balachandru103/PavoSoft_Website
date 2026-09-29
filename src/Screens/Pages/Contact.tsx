import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../Components/CustomButton";

import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
// import { SendEmail } from "@/integrations/Core";
import CustomTextInput from "../../Components/CustomTextInput";
import CustomTextarea from "../../Components/CustomTextInputArea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);

  //     try {
  //       await SendEmail({
  //         to: "info@techvision.com",
  //         subject: `New Contact Form Submission from ${formData.name}`,
  //         body: `
  //           Name: ${formData.name}
  //           Email: ${formData.email}
  //           Phone: ${formData.phone}
  //           Company: ${formData.company}

  //           Message:
  //           ${formData.message}
  //         `
  //       });

  //       setIsSubmitted(true);
  //       setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  //     } catch (error) {
  //       console.error("Error sending email:", error);
  //     }

  //     setIsSubmitting(false);
  //   };


  const handleSubmit = async (e: any) => {
    console.log("Form submitted", e.target);
    e.preventDefault();
    setIsSubmitting(true);
  }

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore how our technology solutions can transform your business. Let's discuss how we can help transform your business with technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Your Vision. Our Expertise.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether it’s a custom software solution, a mobile app, or an enterprise system, we’re here to build it with you. Let’s start the journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-600">info@techvision.com</p>
                    <p className="text-slate-600">sales@techvision.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-slate-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Visit Us</h3>
                    <p className="text-slate-600">123 Tech Street, Suite 456</p>
                    <p className="text-slate-600">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Office"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-surface rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Let's Build Something Great Together
                </h2>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <CustomTextInput
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <CustomTextInput
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <CustomTextInput
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company
                      </label>
                      <CustomTextInput
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <CustomTextarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-success-soft rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}