import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#083B63] text-white">
      <div className="px-4 md:px-8 py-12 md:py-16">
        {/* Links and Social Media Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          {/* Links Section - Left Side */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <Link href="/products-and-services" className="text-sm hover:text-[#FFB43B] transition">
              All Products
            </Link>
            <Link href="/" className="text-sm hover:text-[#FFB43B] transition">
              Quick Links
            </Link>
            <span className="text-sm text-gray-300 cursor-default">
              Policies
            </span>
            <Link href="/contact" className="text-sm hover:text-[#FFB43B] transition">
              Contact
            </Link>
          </div>

          {/* Social Media Icons - Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFB43B] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFB43B] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFB43B] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Footer bottom - Copyright */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="text-sm text-gray-300">
            <p>Copyright © Sun Radiation Power Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
