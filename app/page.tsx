"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, Award } from "lucide-react"
import Link from "next/link"

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
              <Button 
                asChild 
                variant="outline" 
                className="h-12 px-8 border-un-blue text-un-blue hover:bg-blue-50"
              >
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
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 -z-0 flex items-center justify-center"
          >
            <Globe className="w-[40%] h-[40%] text-un-blue/20 stroke-[0.5]" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
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
              description="Compete in regional and national conferences with our award-winning coaching team"
            />
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
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Start Your Diplomatic Journey
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
              Join a community of passionate students committed to making a global impact. 
              No prior experience required - just curiosity and enthusiasm.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-un-blue hover:bg-blue-50 hover:text-blue-700 h-14 px-10"
            >
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

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-un-blue/20 hover:shadow-xl transition-all"
    >
      <div className="mb-6 text-un-blue">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}