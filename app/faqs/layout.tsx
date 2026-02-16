import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQs",
  description:
    "Get answers on compliance, security, implementation, Bataverse, and open-source governance.",
  path: "/faqs",
});

export default function FaqsLayout({ children }: { children: ReactNode }) {
  return children;
}
