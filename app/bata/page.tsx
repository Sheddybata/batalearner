"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import HeroVideoBackground from "@/components/ui/HeroVideoBackground";
import { Box, GraduationCap, Gavel, ArrowRight, Sparkles, AlertTriangle, Loader2, RefreshCw } from "lucide-react";

export default function Bataverse() {
  const [activeFaculty, setActiveFaculty] = useState<"medicine" | "engineering" | "law">("medicine");
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [isModelError, setIsModelError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const modelViewerRef = useRef<HTMLElement | null>(null);

  const faculties = {
    medicine: {
      icon: GraduationCap,
      title: "Medical Training",
      description: "Immersive AR/VR simulations for medical education, surgical training, and patient care scenarios.",
      features: [
        "Anatomical 3D visualizations",
        "Surgical procedure simulations",
        "Patient interaction scenarios",
        "Medical equipment training",
      ],
      modelPath: "/models/medical-training.glb",
      cameraOrbit: "0deg 72deg 2.2m",
      cameraTarget: "0m 0.6m 0m",
      fieldOfView: "32deg",
      color: "from-primary/20 to-primary-dark/20",
      iconColor: "text-primary-dark",
    },
    engineering: {
      icon: Box,
      title: "Engineering Solutions",
      description: "Virtual engineering environments for design, construction, and technical problem-solving.",
      features: [
        "3D design visualization",
        "Structural analysis simulations",
        "Mechanical system training",
        "Engineering project collaboration",
      ],
      modelPath: "/models/engineering-solutions.glb",
      cameraOrbit: "28deg 72deg 2.35m",
      cameraTarget: "0m 0.55m 0m",
      fieldOfView: "34deg",
      color: "from-primary/20 to-primary-dark/20",
      iconColor: "text-primary-dark",
    },
    law: {
      icon: Gavel,
      title: "Legal Education",
      description: "Interactive legal scenarios and courtroom simulations for comprehensive legal training.",
      features: [
        "Courtroom simulations",
        "Case study analysis",
        "Legal procedure training",
        "Moot court experiences",
      ],
      modelPath: "/models/legal-education.glb",
      cameraOrbit: "-22deg 70deg 2.4m",
      cameraTarget: "0m 0.55m 0m",
      fieldOfView: "33deg",
      color: "from-primary/20 to-primary-dark/20",
      iconColor: "text-primary-dark",
    },
  };

  useEffect(() => {
    setIsModelLoading(true);
    setIsModelError(false);
  }, [activeFaculty, reloadKey]);

  useEffect(() => {
    const modelViewer = modelViewerRef.current as HTMLElement | null;
    if (!modelViewer) return;

    const handleLoad = () => {
      setIsModelLoading(false);
      setIsModelError(false);
    };

    const handleError = () => {
      setIsModelLoading(false);
      setIsModelError(true);
    };

    const handleProgress = (event: Event) => {
      const customEvent = event as CustomEvent<{ totalProgress?: number }>;
      if (customEvent.detail?.totalProgress === 1) {
        setIsModelLoading(false);
      }
    };

    modelViewer.addEventListener("load", handleLoad);
    modelViewer.addEventListener("error", handleError);
    modelViewer.addEventListener("progress", handleProgress as EventListener);

    return () => {
      modelViewer.removeEventListener("load", handleLoad);
      modelViewer.removeEventListener("error", handleError);
      modelViewer.removeEventListener("progress", handleProgress as EventListener);
    };
  }, [activeFaculty, reloadKey]);

  return (
    <div className="min-h-screen bg-white">
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="afterInteractive"
      />

      {/* Hero Section — video layer z-0 so it isn't hidden behind section background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary-dark/10 to-primary/5 pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <HeroVideoBackground src="/media/bataversebackground.mp4" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-white/50" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                Extended Reality Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Bataverse
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Immersive AR/VR solutions for education. Creating hands-on learning environments 
              that transform how students learn medicine, engineering, and law.
            </p>
          </motion.div>
        </div>

        {/* 3D Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-dark/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Faculty Showcase - Feature Flip Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Faculty Selector - Mobile */}
          <div className="md:hidden mb-8">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {(Object.keys(faculties) as Array<keyof typeof faculties>).map((key) => {
                const faculty = faculties[key];
                const Icon = faculty.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveFaculty(key)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                      activeFaculty === key
                        ? "bg-primary text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{faculty.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Faculty Cards - Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {(Object.keys(faculties) as Array<keyof typeof faculties>).map((key) => {
              const faculty = faculties[key];
              const Icon = faculty.icon;
              const isActive = activeFaculty === key;
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveFaculty(key)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-6 rounded-2xl border-2 transition-all ${
                    isActive
                      ? "border-primary bg-gradient-to-br from-primary/10 to-primary-dark/10 shadow-lg"
                      : "border-gray-200 bg-white hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${faculty.color} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${faculty.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.title}</h3>
                  <p className="text-sm text-gray-600">{faculty.description}</p>
                </motion.button>
              );
            })}
          </div>

          {/* Active Faculty Details */}
          <motion.div
            key={activeFaculty}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-lg bg-gradient-to-r ${faculties[activeFaculty].color} mb-6`}>
                  {(() => {
                    const Icon = faculties[activeFaculty].icon;
                    return <Icon className={`w-6 h-6 ${faculties[activeFaculty].iconColor}`} />;
                  })()}
                  <span className="font-semibold text-gray-900">{faculties[activeFaculty].title}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {faculties[activeFaculty].title} in Extended Reality
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {faculties[activeFaculty].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {faculties[activeFaculty].features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary-dark" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-md hover:shadow-lg">
                  Explore {faculties[activeFaculty].title}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>

              {/* 3D Visualization Placeholder */}
              <div className="relative">
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${faculties[activeFaculty].color} overflow-hidden border border-gray-200`}>
                  {!isModelError ? (
                    <>
                      <model-viewer
                        key={`${activeFaculty}-${reloadKey}`}
                        ref={(el) => {
                          modelViewerRef.current = el as HTMLElement | null;
                        }}
                        src={faculties[activeFaculty].modelPath}
                        camera-controls
                        touch-action="pan-y"
                        auto-rotate
                        rotation-per-second="20deg"
                        interaction-prompt="auto"
                        ar
                        camera-orbit={faculties[activeFaculty].cameraOrbit}
                        camera-target={faculties[activeFaculty].cameraTarget}
                        field-of-view={faculties[activeFaculty].fieldOfView}
                        shadow-intensity="1"
                        exposure="1"
                        style={{ width: "100%", height: "100%", background: "transparent" }}
                      />

                      {isModelLoading && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
                          <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm border border-gray-200">
                            <Loader2 className="w-4 h-4 animate-spin text-primary" />
                            <span className="text-sm text-gray-700">Loading 3D model...</span>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="max-w-xs text-center rounded-xl bg-white/90 border border-gray-200 shadow-sm p-5">
                        <AlertTriangle className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900 mb-1">Model failed to load</p>
                        <p className="text-xs text-gray-600 mb-4">
                          Please check the model file and try again.
                        </p>
                        <button
                          onClick={() => setReloadKey((k) => k + 1)}
                          className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary-dark transition-colors"
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Retry
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* Decorative 3D effect */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary-dark/20 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Extended Reality?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform learning through immersive, hands-on experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hands-On Learning",
                description: "Practice in safe, controlled virtual environments without real-world risks.",
              },
              {
                title: "Enhanced Retention",
                description: "Immersive experiences improve knowledge retention and understanding.",
              },
              {
                title: "Accessible Anywhere",
                description: "Access high-quality training experiences from anywhere, anytime.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
