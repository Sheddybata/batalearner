import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Review Bata Learner terms covering acceptable use, contributions, and institutional responsibilities.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary-dark/5 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            These terms govern access to and use of Bata Learner by institutions, educators, students, and contributors.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-700 leading-relaxed">
          <p>
            By using Bata Learner, you agree to use the platform responsibly, maintain account security, and comply
            with institutional policies and applicable laws.
          </p>
          <p>
            Educational content and code contributions must respect licensing, intellectual property, and community
            standards.
          </p>
          <p>
            For terms-related questions, contact{" "}
            <a href="mailto:hello@batalearner.ng" className="text-primary hover:text-primary-dark">
              hello@batalearner.ng
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
