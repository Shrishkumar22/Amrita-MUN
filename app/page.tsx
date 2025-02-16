"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, Award, BookOpen, Lightbulb, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-gradient-to-b from-blue-50/50 via-white to-blue-50/50">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Cultivating Tomorrow&apos;s{" "}
              <span className="bg-gradient-to-r from-un-blue to-blue-600 bg-clip-text text-transparent">
                Global Leaders
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Master the art of diplomacy through our Model United Nations program. Develop essential skills in
              negotiation, public speaking, and international relations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="group h-12 px-8 bg-un-blue hover:bg-blue-700 transition-colors">
                <Link href="/achievements">
                  Explore Achievements
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 px-8 border-un-blue text-un-blue hover:bg-blue-50">
                <Link href="/events">
                  View Events
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Decorative Background Element */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 -z-0 flex items-center justify-center"
            >
              <Image 
                src="/images/munlogo.png" // Image path
                alt="MUN Logo"
                width={800} // Adjust width as needed
                height={800} // Adjust height as needed
                className="w-[60%] h-[60%] object-contain opacity-40 brightness-110 contrast-125"
              />
            </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Understanding Model United Nations
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Model United Nations (MUN) is a prestigious and immersive simulation of the United Nations, where students
              step into the roles of diplomats to address critical global challenges. By emulating the dynamics of
              international negotiations, MUN fosters a deep understanding of the complexities of global governance and
              the importance of diplomacy.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              In a world where conflicts persist and collaboration is paramount, the ability to cultivate future
              diplomats and global leaders is not just beneficial—it is essential. MUN embodies the very ethos of the
              United Nations: striving for peace, development, and cooperation among nations. For participants, it is an
              opportunity to dissect real-world problems, propose actionable solutions, and understand the intricate
              balance of international relations.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              MUN is not just a program; it is a transformative experience that shapes the policymakers and diplomats of
              tomorrow. Universities play a pivotal role in this mission by providing platforms like MUN to prepare
              students for the global stage. This experiential learning process underscores why the United Nations
              exists and why nurturing such skills in students is of pertinent importance to society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 md:gap-12"
          >
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-un-blue" />}
              title="Global Perspective"
              description="Engage with international affairs and cross-cultural communication through simulated UN committees"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-un-blue" />}
              title="Collaborative Learning"
              description="Work with peers to develop solutions for real-world challenges through diplomatic dialogue"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-un-blue" />}
              title="Competitive Excellence"
              description="Compete in regional and national conferences with our award-winning team"
            />
          </motion.div>
        </div>
      </section>

      {/* Importance of MUN at Amrita University */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Importance of MUN at Amrita Vishwa Vidyapeetham
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Amrita Vishwa Vidyapeetham has always exemplified a profound commitment to fostering socially aware and
              globally competent leaders. With a legacy of initiatives that reflect its dedication to sustainable
              development, gender equality, and experiential learning, the university has consistently upheld values
              aligned with the ethos of the United Nations.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The Amrita Model United Nations Society (A-MUNSO) has already demonstrated its potential as a hub for
              intellectual engagement and leadership development. By hosting a successful MUN conference on July 19–21,
              2024, the club has established a strong foundation for institutionalizing the practice of MUN&apos;s at Amrita.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              A-MUNSO serves as a platform for students to hone essential skills such as diplomacy, negotiation,
              critical thinking, and leadership. The club provides opportunities for participants to engage with global
              issues in a structured environment, reflecting Amrita&apos;s commitment to holistic education. Frequent events
              like Mock MUN&apos;s and other relevant activities on global issues and current affairs are crucial for
              maintaining the club&apos;s active existence and ensuring continuous skill development for its members.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BookOpen className="w-8 h-8 text-un-blue" />}
                title="Enhance Global Awareness"
                description="Provides a platform for students to delve into global issues, develop informed opinions, and propose solutions that reflect Amrita&apos;s commitment to societal and global progress."
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-un-blue" />}
                title="Foster Leadership and Diplomacy"
                description="Helps nurture future leaders by encouraging them to think critically and negotiate diplomatically."
              />
              <FeatureCard
                icon={<Award className="w-8 h-8 text-un-blue" />}
                title="Promote Amrita&apos;s Legacy"
                description="Showcases Amrita&apos;s values and places the university among globally renowned institutions that encourage such initiatives."
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              Benefits to the College and Students
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">For Amrita Vishwa Vidyapeetham</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Long-term Impact:</strong> Establishing A-MUNSO ensures a
                      sustainable legacy, bringing recognition and strengthening the university&apos;s academic profile over
                      time.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Community Engagement:</strong> The event could serve as an
                      outreach initiative, inviting participation from neighboring institutions and fostering
                      collaboration.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Prestige and Visibility:</strong> Hosting a MUN positions Amrita
                      as a hub for intellectual and extracurricular excellence.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">For Students</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Briefcase className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Skill Development:</strong> Students gain invaluable skills such
                      as public speaking, research, teamwork, critical thinking, policy debate and conflict resolution.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Networking Opportunities:</strong> Participation in MUN&apos;s
                      connects students with peers and professionals from diverse fields and backgrounds.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-6 h-6 text-un-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">
                      <strong className="text-gray-900">Enhanced Confidence:</strong> Debating and negotiating in a
                      structured environment help students build self-assurance and leadership qualities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-un-blue via-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="container max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8 relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Start Your Diplomatic Journey</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
              Join a community of passionate students committed to making a global impact. No prior experience required
              - just curiosity and enthusiasm.
            </p>
            <Button asChild size="lg" className="bg-white text-un-blue hover:bg-blue-50 hover:text-blue-700 h-14 px-10">
              <Link href="/contact">
                Join Our Delegation
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;  // Ensures icon can be any React component
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

