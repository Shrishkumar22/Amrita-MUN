"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"

const events = [
  {
    title: "The Amrita-MUN’24 conference",
    date: "19th to 21st July 2024",
    location: "Amrita Vishwa Vidyapeetham, Coimbatore",
    description:
      "It marked the university’s inaugural Model United Nations event, attracting over 200 delegates from 15+ institutions. Organized by the Amrita - Model United Nations Society (A-MUNSO), the conference featured five committees - UNSC, UNCTAD, UNHCR, AIPPM and Arab League, tackling critical global issues, along with IPC. Highlights included engaging debates, cultural programs by Natyasudha and Raagasudha clubs, and an impactful valedictory ceremony. Amrita students excelled, winning 12 awards and the Runner-Up Delegation title, with SSN-SNUC earning Best Delegation. Widely appreciated for fostering MUN culture, the event set a strong foundation for future conferences at Amrita.",
  },
  {
    title: "Kumaraguru College Of Technology MUN’24",
    date: "27th to 29th September , 2024",
    location: "KCT,Coimbatore",
    description:
      "The objective of this Model United Nations conference was to provide our club members with comprehensive exposure to the world of MUN and to establish ourselves as a dedicated MUN society.",
  },
  {
    title: "MUN OF THRONES",
    date: "17th October 2024",
    location: "E-103A (AB-1)",
    description:
      "To facilitate swift and reflexive decision-making among participants by presenting them with a hypothetical unstable political scenario accompanied by live updates, designed to stimulate their critical thinking and analytical skills.",
    time: "9:00 AM",
  },
]

export default function Events() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-xl text-gray-600">Join us in our upcoming Model UN events and activities</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-un-blue"></div>
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <Card className="w-full md:w-5/12 hover:shadow-lg transition-shadow relative">
                <div
                  className={`absolute top-1/2 ${index % 2 === 0 ? "-right-3" : "-left-3"} w-6 h-6 bg-un-blue rounded-full transform -translate-y-1/2`}
                ></div>
                <CardHeader className="bg-gradient-to-r from-un-blue to-blue-600 text-white">
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
  <div className="flex items-center gap-2 text-gray-600">
    <Calendar className="w-5 h-5 text-un-blue" />
    <span>{event.date}</span>
  </div>
  {event.time && (
    <div className="flex items-center gap-2 text-gray-600">
      <Clock className="w-5 h-5 text-un-blue" />
      <span>{event.time}</span>
    </div>
  )}
  <div className="flex items-center gap-2 text-gray-600">
    <MapPin className="w-5 h-5 text-un-blue" />
    <span>{event.location}</span>
  </div>
  <p className="text-gray-600">{event.description}</p>
</CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

