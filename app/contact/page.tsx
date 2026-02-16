"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Code, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  ArrowRight, 
  CheckCircle,
  Send,
  ArrowLeft
} from "lucide-react";

type PartnerType = "university" | "developer" | "student" | null;

export default function Contact() {
  const [selectedType, setSelectedType] = useState<PartnerType>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    role: "",
    message: "",
    interests: [] as string[],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const partnerTypes = [
    {
      id: "university" as const,
      icon: GraduationCap,
      title: "University",
      description: "Institutional partnerships and implementation",
      color: "from-primary to-primary-dark",
    },
    {
      id: "developer" as const,
      icon: Code,
      title: "Developer",
      description: "Contribute to open-source development",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "student" as const,
      icon: User,
      title: "Student",
      description: "Get access and support",
      color: "from-green-500 to-green-600",
    },
  ];

  const handleTypeSelect = (type: PartnerType) => {
    setSelectedType(type);
    setCurrentStep(2);
    setFormData({ ...formData, interests: [] });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(value)
        ? formData.interests.filter((i) => i !== value)
        : [...formData.interests, value],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    if (!formId) {
      setSubmitError("Form is not configured. Please set NEXT_PUBLIC_FORMSPREE_FORM_ID.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "Partner type": selectedType,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          institution: formData.institution || undefined,
          role: formData.role || undefined,
          message: formData.message,
          interests: formData.interests.length ? formData.interests.join(", ") : undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to send. Please try again or email us at hello@batalearner.ng.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedType(null);
    setCurrentStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      institution: "",
      role: "",
      message: "",
      interests: [],
    });
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary-dark/5 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Partnership Portal
            </h1>
            <p className="text-xl text-gray-600">
              Connect with us to explore opportunities and get started
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isSubmitted ? (
            <div className="glassmorphism rounded-2xl p-6 md:p-12">
              {/* Step 1: Partner Type Selection */}
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                      How would you like to partner with us?
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                      Select your partnership type to get started
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {partnerTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <motion.button
                            key={type.id}
                            onClick={() => handleTypeSelect(type.id)}
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-8 rounded-xl border-2 border-gray-200 bg-white hover:border-primary transition-all text-left group`}
                          >
                            <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                            <p className="text-sm text-gray-600">{type.description}</p>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Form Fields */}
                {currentStep === 2 && selectedType && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => {
                        setCurrentStep(1);
                        setSelectedType(null);
                      }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary mb-6 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>Back to partner selection</span>
                    </button>

                    <div className="flex items-center space-x-3 mb-6">
                      {(() => {
                        const Icon = partnerTypes.find((t) => t.id === selectedType)?.icon || User;
                        return (
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary-dark" />
                          </div>
                        );
                      })()}
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {partnerTypes.find((t) => t.id === selectedType)?.title} Partnership
                        </h2>
                        <p className="text-gray-600">
                          Please provide your details below
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                          {submitError}
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="+234 814 964 9942"
                          />
                        </div>

                        {selectedType === "university" && (
                          <div>
                            <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                              Institution Name *
                            </label>
                            <input
                              type="text"
                              id="institution"
                              name="institution"
                              required
                              value={formData.institution}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                              placeholder="University of Nigeria"
                            />
                          </div>
                        )}

                        {selectedType === "developer" && (
                          <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                              Role/Title
                            </label>
                            <input
                              type="text"
                              id="role"
                              name="role"
                              value={formData.role}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                              placeholder="Software Developer"
                            />
                          </div>
                        )}

                        {selectedType === "student" && (
                          <div>
                            <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                              School/Institution
                            </label>
                            <input
                              type="text"
                              id="institution"
                              name="institution"
                              value={formData.institution}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                              placeholder="Your School Name"
                            />
                          </div>
                        )}
                      </div>

                      {/* Interest Areas - Conditional based on partner type */}
                      {selectedType === "university" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Areas of Interest (Select all that apply)
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              "LMS Implementation",
                              "Bataverse Integration",
                              "NUC Compliance",
                              "Training & Support",
                              "Custom Development",
                              "Pilot Program",
                            ].map((interest) => (
                              <label
                                key={interest}
                                className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.interests.includes(interest)}
                                  onChange={() => handleCheckboxChange(interest)}
                                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                                />
                                <span className="text-sm text-gray-700">{interest}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedType === "developer" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Contribution Interests (Select all that apply)
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              "Frontend Development",
                              "Backend Development",
                              "Mobile Development",
                              "Documentation",
                              "Testing",
                              "Design",
                            ].map((interest) => (
                              <label
                                key={interest}
                                className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.interests.includes(interest)}
                                  onChange={() => handleCheckboxChange(interest)}
                                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                                />
                                <span className="text-sm text-gray-700">{interest}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your partnership goals or questions..."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Sending…" : "Send Message"}
                          {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setCurrentStep(1);
                            setSelectedType(null);
                          }}
                          className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glassmorphism rounded-2xl p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;ve received your message and will get back to you soon.
              </p>
              <button
                onClick={resetForm}
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
              >
                Send Another Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:hello@batalearner.ng" className="text-primary hover:text-primary-dark transition-colors">
                    hello@batalearner.ng
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+2348149649942" className="text-primary hover:text-primary-dark transition-colors">
                    +234 814 964 9942
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
