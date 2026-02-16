import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read how Bata Learner handles data privacy, institutional controls, and security practices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary-dark/5 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            We respect your privacy and protect institutional and learner data using industry-standard security practices.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-700 leading-relaxed">
          <p>
            Bata Learner collects only the information required to deliver educational services, support platform
            performance, and comply with applicable regulations.
          </p>
          <p>
            We implement role-based access controls, secure transmission, and regular audits. Institutions remain in
            control of their records and access policies.
          </p>
          <p>
            For privacy questions or requests, contact us at{" "}
            <a href="mailto:hello@batalearner.edu.ng" className="text-primary hover:text-primary-dark">
              hello@batalearner.edu.ng
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
