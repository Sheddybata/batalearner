import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bataverse – AR/VR for Bata Learners",
  description:
    "The Bataverse: Bata Learner's extended reality platform. AR/VR for bata learners—Medical Training, Engineering Solutions, and Legal Education.",
  path: "/bata",
});

export default function BataLayout({ children }: { children: ReactNode }) {
  return children;
}
