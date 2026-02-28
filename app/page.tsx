import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Award,
  BookCheck,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Code,
  Smartphone,
  FileText,
  GraduationCap,
  MessageSquare,
  Shield,
  Users,
  Video,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Sovereign Academic Infrastructure",
  description:
    "Bata Learner delivers LMS, Bataverse, and Handout (AI-powered exam prep). Bata learners get NUC/CCMAS and Apereo-aligned education infrastructure.",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Sovereign Academic Infrastructure"
        subtitle="Empowering learners of all ages with accessible, high-quality digital learning solutions. Bridging educational gaps and fostering a culture of lifelong learning."
        badgeText="In Incubation with Apereo Foundation"
        lightText
        actions={[
          { label: "Get Started", href: "/contact", variant: "primary" },
          { label: "Learn More", href: "/about", variant: "secondary" },
        ]}
        backgroundVideoSrc="/media/homebackground.mp4"
      />

      {/* Three Pillar Feature Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Platform"
            subtitle="Bata Learner gives bata learners three powerful pillars: LMS, Bataverse, and Handout—supporting Nigeria&apos;s educational transformation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* LMS Pillar */}
            <div className="group">
              <div className="glassmorphism rounded-2xl p-8 h-full card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Management System</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive LMS with student and lecturer interfaces. Access course materials in text, 
                  picture, and video formats with interactive forums and assessment tools.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <Smartphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Mobile-first design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Multimedia content support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MessageSquare className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Interactive forums</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Assessment tools</span>
                  </li>
                </ul>
                <Link
                  href="/about"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Bataverse Pillar */}
            <div className="group">
              <div className="glassmorphism rounded-2xl p-8 h-full card-hover border-2 border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bataverse</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Extended reality platform for education. Immersive AR/VR solutions focused on medicine 
                  and engineering, creating hands-on learning environments.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Medical training simulations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Code className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Engineering visualizations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Immersive experiences</span>
                  </li>
                </ul>
                <Link
                  href="/bata"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link"
                >
                  Explore Bataverse
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Handout Pillar */}
            <div className="group">
              <div className="glassmorphism rounded-2xl p-8 h-full card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Handout</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AI-powered comprehension and exam-prep engine. Intelligent PDF analysis transforming dense course materials into summaries and curriculum-aligned quiz.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">2-page strategic summaries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ClipboardList className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">20-question exam simulations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <BookCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">CCMAS-aligned curriculum mapping</span>
                  </li>
                </ul>
                <a
                  href="https://handout.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link"
                >
                  Explore Handout
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Value Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Official Recognition"
            subtitle="Nationally recognised credentials that open doors in the public and private sectors"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Why this matters */}
            <div className="group">
              <div className="glassmorphism rounded-2xl p-8 h-full card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why this matters
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Federal Civil Service Recognition</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">National Skills Qualification Framework (NSQF) Aligned</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Verified by the Computer Professional Registration Council (CPN)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Direct pathway to professional employment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Official Recognition */}
            <div className="group">
              <div className="glassmorphism rounded-2xl p-8 h-full card-hover border-2 border-nigerian-green/20">
                <div className="w-16 h-16 bg-gradient-to-br from-nigerian-green/20 to-nigerian-green/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-nigerian-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Regulatory Details
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Shield className="w-5 h-5 text-nigerian-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Center Type: </span>
                      <span className="text-sm text-gray-600">Approved Skill Training Center (STC)</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Shield className="w-5 h-5 text-nigerian-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Lead Agency: </span>
                      <span className="text-sm text-gray-600">National Board for Technical Education (NBTE)</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Award className="w-5 h-5 text-nigerian-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Awarding Body: </span>
                      <span className="text-sm text-gray-600">NABTEB</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Shield className="w-5 h-5 text-nigerian-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-gray-900">Professional Oversight: </span>
                      <span className="text-sm text-gray-600">CPN</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Alignment Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Alignment with Government Priorities"
            subtitle="Supporting Nigeria&apos;s educational transformation through strategic initiatives"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Literacy</h3>
              <p className="text-gray-600 leading-relaxed">
                We empower learners with the digital skills necessary to succeed in the 21st century.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teacher Capacity</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide educators with the training and resources they need to effectively utilize technology in the classroom.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BookCheck className="w-7 h-7 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Curriculum Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We develop content that aligns with national curriculum standards and promotes relevant skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Education?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in building a brighter future for Nigeria&apos;s educational institutions. 
              Get in touch to learn more about partnerships and implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
