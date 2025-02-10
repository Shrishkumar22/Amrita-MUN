"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Sanjay AR",
    role: "President",
    image: "/placeholder.svg?height=400&width=400",
    email: "sanjay@munclub.com",
    linkedin: "https://linkedin.com/in/sanjay",
  },
  {
    name: "Vinaayak K",
    role: "Vice President",
    image: "/placeholder.svg?height=400&width=400",
    email: "vinaayak@munclub.com",
    linkedin: "https://linkedin.com/in/vinaayak",
  },
  {
    name: "Khushi Kapil",
    role: "Secretary General",
    image: "/placeholder.svg?height=400&width=400",
    email: "khushi@munclub.com",
    linkedin: "https://linkedin.com/in/khushi",
  },
  // Add more team members as needed
]

export default function Team() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600">Meet the passionate individuals behind our MUN club</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-un-blue mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-un-blue transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-un-blue transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

