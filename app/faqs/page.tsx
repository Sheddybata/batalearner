"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ChevronDown, Shield, Lock, FileCheck, Users, Code, Award } from "lucide-react";

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  icon: typeof Shield;
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: "Compliance & Security",
    question: "Is Bata Learner NUC compliant?",
    answer: "Yes, Bata Learner is fully compliant with Nigerian Universities Commission (NUC) standards. Our platform aligns with NUC requirements for learning management systems and educational technology infrastructure. We ensure all features meet the regulatory standards for Nigerian higher education institutions.",
    icon: Shield,
  },
  {
    id: 2,
    category: "Compliance & Security",
    question: "How does Bata Learner ensure data security and privacy?",
    answer: "Bata Learner follows industry best practices for data security. We implement encryption for data in transit and at rest, regular security audits, access controls, and compliance with data protection regulations. As an open-source platform aligned with Apereo Foundation standards, security transparency is a core principle.",
    icon: Lock,
  },
  {
    id: 3,
    category: "Compliance & Security",
    question: "What is CCMAS compliance and how does Bata Learner support it?",
    answer: "CCMAS (Core Curriculum Minimum Academic Standards) is Nigeria's national curriculum framework. Bata Learner supports CCMAS compliance by providing tools for curriculum mapping, content alignment with national standards, assessment frameworks that match CCMAS requirements, and reporting capabilities for compliance tracking.",
    icon: FileCheck,
  },
  {
    id: 4,
    category: "Compliance & Security",
    question: "What security measures are in place for student data?",
    answer: "Student data protection is paramount. We implement role-based access controls, data encryption, secure authentication mechanisms, audit logging, and regular security updates. Institutions maintain full control over their data, and we follow strict data retention and deletion policies.",
    icon: Lock,
  },
  {
    id: 5,
    category: "Platform & Features",
    question: "What features does the Bata Learner LMS include?",
    answer: "Bata Learner LMS includes course management, multimedia content support (text, images, videos), interactive forums, assessment tools, gradebook, student and lecturer dashboards, mobile app access, and integration capabilities. The platform is designed for both online and blended learning environments.",
    icon: Users,
  },
  {
    id: 6,
    category: "Platform & Features",
    question: "Can Bata Learner integrate with existing university systems?",
    answer: "Yes, Bata Learner is designed with integration capabilities. We support standard protocols like LTI (Learning Tools Interoperability) and can integrate with student information systems, library systems, and other educational technology platforms. Our open-source architecture allows for custom integrations.",
    icon: Code,
  },
  {
    id: 7,
    category: "Open Source & Community",
    question: "What does 'In Incubation with Apereo Foundation' mean?",
    answer: "Being 'In Incubation' with Apereo Foundation means Bata Learner is following Apereo's governance model and best practices for open-source educational technology. This includes transparent development processes, community-driven decision-making, and alignment with Apereo's standards for sustainability and community health.",
    icon: Award,
  },
  {
    id: 8,
    category: "Open Source & Community",
    question: "How can developers contribute to Bata Learner?",
    answer: "Developers can contribute through our GitHub repository by submitting pull requests, reporting issues, improving documentation, or participating in community discussions. We welcome contributions in frontend development, backend development, mobile apps, documentation, testing, and design. Visit our Developer Hub for more information.",
    icon: Code,
  },
  {
    id: 9,
    category: "Bataverse",
    question: "What is the Bataverse and how does it work?",
    answer: "The Bataverse is our extended reality (AR/VR) platform for education. It provides immersive learning experiences for medical training, engineering visualization, and legal education. Students can practice in virtual environments, interact with 3D models, and experience hands-on learning without real-world risks.",
    icon: Users,
  },
  {
    id: 10,
    category: "Implementation",
    question: "How long does it take to implement Bata Learner at an institution?",
    answer: "Implementation timelines vary based on institution size and requirements. A typical implementation includes planning (2-4 weeks), setup and configuration (4-8 weeks), training (2-4 weeks), and pilot testing (4-8 weeks). We work closely with institutions to create customized implementation plans that fit their needs.",
    icon: FileCheck,
  },
  {
    id: 11,
    category: "Compliance & Security",
    question: "Does Bata Learner comply with international data protection standards?",
    answer: "Yes, Bata Learner follows international best practices for data protection, including principles aligned with GDPR (General Data Protection Regulation) and other major data protection frameworks. We prioritize data minimization, purpose limitation, and user rights while ensuring compliance with Nigerian data protection laws.",
    icon: Shield,
  },
  {
    id: 12,
    category: "Platform & Features",
    question: "Is there a mobile app available?",
    answer: "Yes, Bata Learner has a mobile app available for both iOS and Android. The app allows students to access course materials, participate in forums, take assessments, and view grades. Lecturers can also use the mobile app to manage courses, communicate with students, and grade assignments on the go.",
    icon: Users,
  },
];

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Bata Learner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openFAQ === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-primary-dark" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs font-semibold text-primary-dark bg-primary/10 px-2 py-1 rounded">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                          isOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-0">
                            <div className="pl-14">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-primary-dark/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Get in touch with our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
