import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Award,
  BookCheck,
  BookOpen,
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
    "Bata Learner delivers LMS, Bataverse, and open-source education infrastructure aligned with NUC/CCMAS and Apereo standards.",
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
            subtitle="Three powerful pillars supporting Nigeria&apos;s educational transformation"
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

            {/* Open Source Pillar */}
            <div className="group">
              <div className="glassmorphism rounded-2xl p-8 h-full card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Source</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built on open-source principles, aligned with Apereo Foundation standards. 
                  Transparent, secure, and community-driven development.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-2">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Apereo Foundation aligned</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Code className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Community-driven</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Secure & transparent</span>
                  </li>
                </ul>
                <Link
                  href="/info"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link"
                >
                  Developer Hub
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
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
