import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Partnership Portal",
  description:
    "Contact Bata Learner for university partnerships, Handout and Bataverse rollout, and support for bata learners.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
