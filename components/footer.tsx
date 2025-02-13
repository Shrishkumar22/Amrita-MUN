import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <Image 
              src="/images/munlogo.png" // Replace with your actual image path
              alt="Amrita MUN Logo"
              width={48} 
              height={48} 
              priority // Ensures faster loading
            />
            <h3 className="text-lg font-bold">Amrita Model United Nations Society</h3>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/achievements" className="text-gray-400 hover:text-white">
                  Achievements
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-400 hover:text-white">
                  Team
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: mun@cb.amrita.edu</li>
              <li>
                Address: Amrita Model United Nations Society, Amrita Vishwa Vidyapeetham, Amritanagar, 
                Coimbatore - 641 112, Tamil Nadu, India
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white">Twitter</a> */}
              <a
                      href="https://www.linkedin.com/company/a-munso/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-un-blue transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/amunso.amrita?utm_source=qr&igsh=MzdxNDd6ajE2YzM=" className="text-gray-600 hover:text-un-blue transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Amrita Model United Nations Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
