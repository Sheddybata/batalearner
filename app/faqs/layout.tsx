import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQs",
  description:
    "Get answers on compliance, security, Handout, Bataverse, implementation, and open-source governance for Bata Learner.",
  path: "/faqs",
});

export default function FaqsLayout({ children }: { children: ReactNode }) {
  return children;
}
