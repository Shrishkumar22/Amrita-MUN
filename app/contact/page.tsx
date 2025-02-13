"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-un-blue to-blue-600 text-white">
              <CardTitle>Reach Out to Us</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-un-blue mt-1" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">Amrita Model United Nations Society,<br />
                    Amrita Vishwa Vidyapeetham,<br />
                    Amritanagar, Coimbatore - 641 112,<br />
                    Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-un-blue mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">mun@cb.amrita.edu</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
