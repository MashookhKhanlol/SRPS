import Image from "next/image"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#083B63] text-white">
      {/* Main footer content */}
      <div className="px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h4 className="text-lg font-bold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  About Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Policies */}
          <div>
            <h4 className="text-lg font-bold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFB43B] transition">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact & Apps */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact & Download</h4>
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Phone size={16} />
              <span>Toll Free: 1800-XX-XXXX</span>
            </div>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 p-2 bg-white text-[#083B63] rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
              >
                <Image src="/app-store-logo.jpg" alt="App Store" width={20} height={20} />
                App Store
              </a>
              <a
                href="#"
                className="flex items-center gap-2 p-2 bg-white text-[#083B63] rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
              >
                <Image src="/google-play-logo.jpg" alt="Google Play" width={20} height={20} />
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>© 2025 - PM Surya Ghar Mufti Bijli Yojana. Government of India</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Hyperlinking Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
