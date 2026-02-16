import Image from "next/image";
import Link from "next/link";
import HeroVideoBackground from "./HeroVideoBackground";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  actions?: HeroAction[];
  backgroundVideoSrc?: string;
  backgroundImageSrc?: string;
  /** When true, badge, title and subtitle use white text (e.g. over video). */
  lightText?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  badgeText,
  actions = [],
  backgroundVideoSrc,
  backgroundImageSrc,
  lightText = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-primary-dark/10 pt-20 pb-16 lg:pt-28 lg:pb-20">
      {(backgroundVideoSrc || backgroundImageSrc) && (
        <div className="absolute inset-0 z-0">
          {backgroundVideoSrc ? (
            <HeroVideoBackground src={backgroundVideoSrc} className="h-full w-full object-cover" />
          ) : backgroundImageSrc ? (
            <Image src={backgroundImageSrc} alt="" fill className="object-cover" priority />
          ) : null}
          <div className="absolute inset-0 bg-primary/25" aria-hidden="true" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {badgeText ? (
            <div className={`inline-flex items-center px-4 py-2 rounded-full border mb-6 ${lightText ? "bg-white/20 border-white/40" : "bg-primary/10 border-primary/20"}`}>
              <span className={`text-sm font-semibold ${lightText ? "text-white" : "text-primary-dark"}`}>{badgeText}</span>
            </div>
          ) : null}

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${lightText ? "text-white" : "text-gray-900"}`}>{title}</h1>
          <p className={`text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto ${lightText ? "text-white" : "text-gray-600"}`}>{subtitle}</p>

          {actions.length > 0 ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions.map((action) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition-all touch-target"
                      : "inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl touch-target"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-none absolute top-20 right-10 z-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-10 z-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl" />
    </section>
  );
}
