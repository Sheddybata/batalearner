"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bata", label: "Bataverse" },
    { href: "https://handout.ng", label: "Handout", external: true },
    { href: "/contact", label: "Contact" },
    { href: "/faqs", label: "FAQs" },
    { href: "/info", label: "Community" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        {/* Top announcement bar - Nigerian green */}
        <div className="bg-nigerian-green flex items-center justify-center gap-2 py-2 px-4 text-center text-sm font-medium text-white antialiased">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden />
          <span>
            NBTE Approved Skill Training Center (STC) — Offering NABTEB Certified Programs in Digital Media
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
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
                <span className="text-xs text-gray-500 -mt-1">Sovereign Academic Infrastructure</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) =>
                (link as { external?: boolean }).external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-sheet"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile menu & backdrop rendered in portal so fixed positioning works relative to viewport */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                  />
                  <motion.div
                    key="sheet"
                    id="mobile-nav-sheet"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-x-0 bottom-0 flex flex-col bg-white border-t-2 border-primary/20 shadow-2xl rounded-t-3xl md:hidden z-50"
                    style={{ height: "min(75dvh, 75vh)", maxHeight: "min(75dvh, 75vh)" }}
                  >
                    <div className="flex-1 min-h-0 px-6 py-6 space-y-2 overflow-y-auto overscroll-contain">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {(link as { external?: boolean }).external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all active:scale-95"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-all active:scale-95"
                            >
                              {link.label}
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex shrink-0 justify-center py-3">
                      <div className="w-12 h-1 bg-gray-300 rounded-full" />
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </>,
          document.body
        )}

      {/* Spacer to prevent content from going under fixed navbar (bar + nav row) */}
      <div className="h-28" style={{ minHeight: "7rem" }} />
    </>
  );
};

export default Navbar;
