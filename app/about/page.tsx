import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { buildMetadata } from "@/lib/seo";
import { GraduationCap, Users, Target, Award, Code, Shield, Heart } from "lucide-react";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Bata Learner's mission, open-source governance model, founder leadership, and technical stewardship.",
  path: "/about",
});

export default function About() {
  const founders = [
    {
      name: "Shedrack Bata Joel",
      role: "CEO/Founder",
      image: "/founders/shedrackjoelbata.jpeg",
    },
    {
      name: "Prof. Volker Kunze",
      role: "Co-founder/Board member",
      image: "/founders/volkerkunze.png",
    },
    {
      name: "Prof. Ambe Jose",
      role: "Board member",
      image: "/founders/ambejose.png",
    },
    {
      name: "Abdulaziz Saeed",
      role: "Lead Developer",
      image: "/founders/abdulazizsaeed.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="About Bata Learner"
        subtitle="Bridging educational gaps through accessible, high-quality digital learning solutions."
        backgroundVideoSrc="/media/aboutbackground.mp4"
        lightText
      />

      {/* Our Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Bata Learner, we believe that education is the key to unlocking potential and building a brighter future. 
                  We&apos;re passionate about bridging the educational gap by providing accessible, high-quality digital learning solutions.
                </p>
                <p>
                  Our mission is to empower learners of all ages with the skills and knowledge they need to thrive in a rapidly 
                  changing world. We&apos;re committed to fostering a culture of lifelong learning and contributing to the development 
                  of a skilled and knowledgeable society.
                </p>
                <p>
                  We are a team of educators, technologists, and innovators dedicated to creating engaging and effective learning 
                  experiences. We understand the challenges faced by learners and educators in today&apos;s environment, and we 
                  strive to provide solutions that are both practical and impactful.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="glassmorphism rounded-2xl p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accessible Education</h3>
                    <p className="text-sm text-gray-600">
                      Making quality education accessible to learners everywhere, regardless of their circumstances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-sm text-gray-600">
                      A diverse team of educators, technologists, and innovators working together.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Impact-Driven</h3>
                    <p className="text-sm text-gray-600">
                      Solutions designed to make a real difference in the lives of learners and educators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership & Team"
            subtitle="Meet the founders and key team members driving Bata Learner forward."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((founder) => (
              <article key={founder.name} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="relative h-44 w-44 mx-auto rounded-full overflow-hidden border-4 border-primary/10 shadow-sm">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">{founder.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{founder.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Governance Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-full border border-primary/20 mb-6">
              <Award className="w-6 h-6 text-primary-dark" />
              <span className="text-lg font-semibold text-primary-dark">In Incubation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Source Governance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aligned with Apereo Foundation standards for transparent, community-driven development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Award className="w-12 h-12 text-primary-dark mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apereo Alignment</h3>
              <p className="text-gray-600">
                Following Apereo Foundation governance models and best practices for open-source educational technology.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Code className="w-12 h-12 text-primary-dark mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community-Driven</h3>
              <p className="text-gray-600">
                Built by and for the educational community, with transparent development processes and open collaboration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Shield className="w-12 h-12 text-primary-dark mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Transparent</h3>
              <p className="text-gray-600">
                Security-first approach with open-source transparency, ensuring trust and reliability for institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stewardship Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Stewardship
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern technology stack designed for scalability, security, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mobile-First", desc: "Optimized for all devices" },
              { title: "Scalable", desc: "Built to grow with your institution" },
              { title: "Secure", desc: "Enterprise-grade security" },
              { title: "Compliant", desc: "NUC/CCMAS aligned" },
            ].map((item) => (
              <div
                key={item.title}
                className="glassmorphism rounded-xl p-6 text-center"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
