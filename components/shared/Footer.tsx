import Link from "next/link";
import Image from "next/image";
import { Github, Mail, Phone, Shield, Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/bata", label: "Bataverse" },
        { href: "https://handout.ng", label: "Handout", external: true },
        { href: "/info", label: "Community" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/faqs", label: "FAQs" },
        { href: "/info", label: "Documentation" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "/contact", label: "Partnership Portal" },
        { href: "https://github.com/apereo", label: "GitHub Repository", external: true },
        { href: "https://www.apereo.org/community", label: "Community Forum", external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
                <Image
                  src="/batalearner.png"
                  alt="Bata Learner logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">Bata Learner</span>
                <span className="text-xs text-gray-600">Sovereign Academic Infrastructure</span>
              </div>
            </Link>

            <p className="text-sm text-gray-600 leading-relaxed max-w-md mb-5">
              Empowering learners of all ages with accessible, high-quality digital learning solutions aligned with
              open-source and national standards.
            </p>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:hello@batalearner.edu.ng"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@batalearner.edu.ng</span>
              </a>
              <a
                href="tel:+2348149649942"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+234 814 964 9942</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-gray-900 mb-2">{section.title}</h3>
                <ul className="space-y-0.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm leading-6 text-gray-600 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="inline-flex items-center text-sm leading-6 text-gray-600 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary-dark/10 to-primary/10 px-4 py-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary-dark shrink-0" />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">NUC Compliant</p>
                <p className="text-xs text-gray-600">Nigerian Universities Commission</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary-dark shrink-0" />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">CCMAS Aligned</p>
                <p className="text-xs text-gray-600">Core Curriculum Standards</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-primary-dark shrink-0" />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-900">Apereo Foundation</p>
                <p className="text-xs text-gray-600">Open Source Governance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-600 text-center sm:text-left">© {currentYear} Bata Learner. All rights reserved.</p>
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-end gap-2">
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-x-3">
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors px-1 sm:px-2 py-1 rounded-md">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors px-1 sm:px-2 py-1 rounded-md">
                  Terms of Service
                </Link>
              </div>
              <a
                href="https://github.com/apereo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-md transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
