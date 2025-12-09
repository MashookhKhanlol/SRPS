"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white text-[var(--text-primary)] sticky top-0 z-50 shadow-sm">
      {/* Top government bar */}
      <div className="bg-[var(--color-secondary)] py-2 px-4 md:px-8 text-xs md:text-sm">
        <div className="flex justify-between items-center">
          <span className="font-medium"></span>
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
              <div className="w-22 h-22 flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-white p-2 shadow-xs">
                <Image
                  src="/logo.png"
                  alt="PM Surya Ghar logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="hidden md:block">
                <div className="text-lg font-bold text-[var(--color-accent)]">Sun Radiation Power Solutions</div>
                <div className="text-xs">Save Power For A Better Tomorrow</div>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)] text-[var(--color-primary)] rounded-full text-sm font-semibold transition hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)]">
                <Mail size={18} />
                Contact
              </Link>
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
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about-us" },
              { label: "Products and Services", href: "/products-and-services" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block md:inline-block px-3 md:px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
