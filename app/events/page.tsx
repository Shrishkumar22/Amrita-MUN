"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"

const events = [
  {
    title: "Annual MUN Conference 2024",
    date: "March 15-17, 2024",
    location: "Main Campus Auditorium",
    description:
      "Our flagship Model United Nations conference featuring multiple committees and international participation.",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "Delegate Training Workshop",
    date: "February 28, 2024",
    location: "Conference Room B",
    description:
      "Intensive training session for new delegates covering MUN procedures, research methods, and public speaking.",
    time: "2:00 PM - 5:00 PM",
  },
  {
    title: "Mock Session: Security Council",
    date: "February 10, 2024",
    location: "Seminar Hall",
    description: "Practice session simulating UN Security Council procedures and debates.",
    time: "10:00 AM - 4:00 PM",
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
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
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-un-blue" />
                    <span>{event.time}</span>
                  </div>
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

