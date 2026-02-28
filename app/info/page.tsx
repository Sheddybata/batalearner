import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { 
  BookOpen, 
  Github, 
  Code, 
  FileText, 
  Users, 
  GitBranch, 
  ExternalLink,
  ArrowRight,
  Award,
  Shield,
  Zap,
  Globe
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Community and Developer Hub | Bata Learner",
  description:
    "Bata Learner community and developer hub. Documentation, contribution paths, and open-source resources for bata learners and developers.",
  path: "/info",
});

export default function Info() {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Learn the basics of Bata Learner",
      icon: Zap,
      links: [
        { label: "Installation Guide", href: "#docs-getting-started" },
        { label: "Quick Start Tutorial", href: "#docs-getting-started" },
        { label: "System Requirements", href: "#docs-getting-started" },
        { label: "Architecture Overview", href: "#docs-getting-started" },
      ],
    },
    {
      title: "User Guides",
      description: "Documentation for end users",
      icon: Users,
      links: [
        { label: "Student Guide", href: "#docs-user-guides" },
        { label: "Lecturer Guide", href: "#docs-user-guides" },
        { label: "Administrator Guide", href: "#docs-user-guides" },
        { label: "Mobile App Guide", href: "#docs-user-guides" },
      ],
    },
    {
      title: "Developer Documentation",
      description: "Technical documentation for developers",
      icon: Code,
      links: [
        { label: "API Reference", href: "#developer-hub" },
        { label: "Integration Guide", href: "#developer-hub" },
        { label: "Plugin Development", href: "#developer-hub" },
        { label: "Database Schema", href: "#developer-hub" },
      ],
    },
    {
      title: "Compliance & Standards",
      description: "Compliance and regulatory information",
      icon: Shield,
      links: [
        { label: "NUC Compliance Guide", href: "#compliance-standards" },
        { label: "CCMAS Alignment", href: "#compliance-standards" },
        { label: "Data Protection", href: "#compliance-standards" },
        { label: "Security Best Practices", href: "#compliance-standards" },
      ],
    },
  ];

  const contributionAreas = [
    {
      title: "Code Contributions",
      description: "Contribute to the core platform",
      icon: Code,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Documentation",
      description: "Improve guides and documentation",
      icon: FileText,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Testing & QA",
      description: "Help ensure quality and stability",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Design & UX",
      description: "Enhance user experience",
      icon: Users,
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary-dark/5 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Community & Developer Hub
            </h1>
            <p className="text-xl text-gray-600">
              Documentation, resources, and contribution guides for the Bata Learner community
            </p>
          </div>
        </div>
      </section>

      {/* Apereo Foundation Badge */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism rounded-2xl p-8 text-center">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-full border border-primary/20 mb-4">
                <Award className="w-6 h-6 text-primary-dark" />
                <span className="text-lg font-semibold text-primary-dark">In Incubation</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Apereo Foundation</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Bata Learner is aligned with Apereo Foundation standards for open-source educational technology. 
                We follow transparent governance, community-driven development, and best practices for sustainable 
                open-source projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.apereo.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all"
                >
                  Learn More About Apereo
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16" id="docs-getting-started">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive guides and references for users, administrators, and developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentationSections.map((section, index) => {
              const Icon = section.icon;
              const sectionId =
                section.title === "User Guides"
                  ? "docs-user-guides"
                  : section.title === "Compliance & Standards"
                    ? "compliance-standards"
                    : undefined;
              return (
                <div
                  key={section.title}
                  id={sectionId}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{section.title}</h3>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-gray-700 group-hover:text-primary transition-colors">
                            {link.label}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Developer Hub Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="developer-hub">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-4">
              <Code className="w-8 h-8 text-primary-dark" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Developer Hub
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contribute to Bata Learner and help shape the future of educational technology
            </p>
          </div>

          {/* GitHub Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glassmorphism rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">GitHub Repository</h3>
                  <p className="text-gray-600">Open source code and contribution guidelines</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <a
                  href="https://github.com/apereo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <GitBranch className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="font-medium text-gray-900">Main Repository</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/apereo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="font-medium text-gray-900">Contribution Guide</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/apereo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="font-medium text-gray-900">API Documentation</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.apereo.org/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="font-medium text-gray-900">Community Forum</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contribution Areas */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ways to Contribute</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contributionAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h4>
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Join our community of developers, educators, and innovators building the future of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/apereo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                View on GitHub
                <Github className="ml-2 w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
