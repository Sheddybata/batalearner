import type { Metadata } from "next";

const SITE_URL = "https://batalearner.edu.ng";
const SITE_NAME = "Bata Learner";
const DEFAULT_DESCRIPTION =
  "A global open-source learning platform aligned with Apereo Foundation and NUC/CCMAS standards for Nigerian institutions.";

type BuildMetadataArgs = {
  title: string;
  description?: string;
  path?: string;
};

export function buildMetadata({ title, description = DEFAULT_DESCRIPTION, path = "/" }: BuildMetadataArgs): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
  const ogImage = `${SITE_URL}/batalearner.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
