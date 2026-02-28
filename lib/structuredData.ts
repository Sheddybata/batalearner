const SITE_URL = "https://batalearner.edu.ng";

/**
 * Organization + WebSite JSON-LD for Google. Helps surface Bata Learner for queries like "bata", "bata learner", "bata learners", "bataverse".
 */
export function getOrganizationWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Bata Learner",
        alternateName: ["Bata Learners", "Bata Learner LMS"],
        url: SITE_URL,
        logo: `${SITE_URL}/batalearner.png`,
        description:
          "Bata Learner delivers LMS, Bataverse, and Handout for bata learners. Sovereign academic infrastructure aligned with Apereo Foundation, NUC/CCMAS compliant for Nigeria.",
        sameAs: [
          "https://github.com/Sheddybata/batalearner",
          "https://www.apereo.org/community",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@batalearner.edu.ng",
          telephone: "+234-814-964-9942",
          contactType: "customer service",
          areaServed: "NG",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Bata Learner",
        alternateName: "Bata Learners",
        url: SITE_URL,
        description:
          "Bata Learner: LMS, Bataverse, and Handout for bata learners. Sovereign academic infrastructure.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/faqs?search={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
