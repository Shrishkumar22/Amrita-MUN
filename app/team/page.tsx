"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const teamSections = [
  {
    title: "Convenors",
    members: [
      { name: "Dr. Ritwik M.", role: "Convenor", image: "/images/ritwik_sir.jpg" },
      { name: "Ramaguru Radhakrishnan", role: "Convenor", image: "/images/ramaguru_sir.png" },
    ],
  },
  {
    title: "Leadership",
    members: [
      { name: "Shruti Sivakumar", role: "President", image: "/images/shruti_sivakumar.jpg" },
      { name: "Navanith Sampath Kumar",  role: "Vice President", image: "/images/navanith.jpg" },
    ],
  },
  {
    title: "Advisory",
    members: [
      { name: "Aditya Prakash Dash", role: "Chief Advisor", email: "", linkedin: "", image: "/images/aditya_prakash.jpg" },
      { name: "Ram Sreyas J", role: "Joint Secretary", email: "", linkedin: "", image: "/images/ramshreyas.jpg" },
      { name: "Sanjeev Kandhaswamy E", role: "Joint Secretary", email: "", linkedin: "", image: "/images/sanjeev.jpg" },
    ],
  },
  {
    title: "Training & External Relations",
    members: [
      { name: "Sanjay A R", role: "Head of Training", email: "", linkedin: "", image: "/images/sanjay.jpg" },
      { name: "Adithya Anish Nair", role: "Head of External Collaboration", email: "", linkedin: "", image: "/images/aditya_anish.jpg" },
    ],
  },
  {
    title: "Tech & Media Team",
    members: [
      { name: "Sanyam Bhardwaj", role: "Tech & Media Head", email: "", linkedin: "", image: "/images/sanyam.jpg" },
      { name: "Aswath Siddharth R", role: "Co-Head", email: "", linkedin: "", image: "/images/aswath.png" },
    ],
  },
  {
    title: "Outreach Team",
    members: [
      { name: "Yashashvi Agarwal", role: "Outreach Head", email: "", linkedin: "", image: "/images/yashashvi.jpg" },
      { name: "R D Tarun", role: "Co-Head", email: "", linkedin: "", image: "/images/rdt.jpg" },
    ],
  },
  {
    title: "Finance & Research",
    members: [
      { name: "Thilagan Iniyavan", role: "Treasurer", email: "", linkedin: "", image: "/images/thilagan.jpg" },
      { name: "Adithya Menon R", role: "Head of Research", email: "", linkedin: "", image: "/images/adithya_menon.png" },
    ],
  },
  {
    title: "Event Management",
    members: [
      { name: "A Tapaswin Radha Krishna", role: "Event Management Head", email: "", linkedin: "", image: "/images/tapaswin.jpg" },
      { name: "Aakash Sriram", role: "Co-Head", email: "", linkedin: "", image: "/images/aakash.jpg" },
      { name: "Keertan Vasani", role: "Co-Head", email: "", linkedin: "", image: "/images/keertan.jpg" },
    ],
  },
  {
    title: "Website Developer",
    members: [
      { name: "Shrish Kumar Lohchab", role: "Dev", email: "", linkedin: "", image: "/images/shrish.jpg" },
    ],
  },
];

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

        {teamSections.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">{section.title}</h2>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                section.members.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
              } gap-8`}
            >
              {section.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Avatar className="w-32 h-32 mx-auto mb-4 relative">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          layout="fill"
                          objectFit="cover"
                          className="rounded-full"
                        />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold text-un-blue mb-1">{member.name}</h3>
                      <p className="text-gray-600 mb-4">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
