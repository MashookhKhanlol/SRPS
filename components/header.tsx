"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, LogIn } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#083B63] text-white sticky top-0 z-50">
      {/* Top government bar */}
      <div className="bg-[#0A6FB0] py-2 px-4 md:px-8 text-xs md:text-sm">
        <div className="flex justify-between items-center">
          <span className="font-medium">Government of India</span>
          <div className="flex gap-3 items-center">
            <button className="hover:opacity-80">अ</button>
            <a href="#" className="hover:opacity-80">
              Text Size
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 md:px-8 py-4">
        <div>
          {/* Logo and title section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-22 h-22 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="PM Surya Ghar logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="hidden md:block">
                <div className="text-lg font-bold text-[#fd9b00]">Sun Radiation Power Solutions</div>
                <div className="text-xs">Save Power For A Better Tomorrow</div>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white text-[#083B63] rounded-full text-sm font-semibold hover:bg-opacity-90 transition">
                <LogIn size={18} />
                Login
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`${isMenuOpen ? "block" : "hidden"} md:block md:flex gap-1 flex-wrap`}>
            {["Home", "What's New", "Consumer", "Vendor", "Discount", "Achievement", "Capacity Building", "More"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="block md:inline-block px-3 md:px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 hover:text-black transition"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
