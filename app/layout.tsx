import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://batalearner.ng"),
  title: {
    default: "Bata Learner - Sovereign Academic Infrastructure",
    template: "%s | Bata Learner",
  },
  description: "A global open-source learning management system aligned with Apereo Foundation, NUC/CCMAS compliant for Nigeria's educational institutions.",
  openGraph: {
    type: "website",
    siteName: "Bata Learner",
    title: "Bata Learner - Sovereign Academic Infrastructure",
    description:
      "A global open-source learning management system aligned with Apereo Foundation, NUC/CCMAS compliant for Nigeria's educational institutions.",
    url: "https://batalearner.ng",
    images: [{ url: "/batalearner.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bata Learner - Sovereign Academic Infrastructure",
    description:
      "A global open-source learning management system aligned with Apereo Foundation, NUC/CCMAS compliant for Nigeria's educational institutions.",
    images: ["/batalearner.png"],
  },
  icons: {
    icon: "/batalearner.png",
    shortcut: "/batalearner.png",
    apple: "/batalearner.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:border focus:border-primary/30 focus:text-gray-900 focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
