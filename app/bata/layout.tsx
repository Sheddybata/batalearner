import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bataverse",
  description:
    "Experience interactive Bataverse models for Medical Training, Engineering Solutions, and Legal Education.",
  path: "/bata",
});

export default function BataLayout({ children }: { children: ReactNode }) {
  return children;
}
