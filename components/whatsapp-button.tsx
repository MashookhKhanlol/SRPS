"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "+919876543210" // Replace with actual phone number
  const message = "Hello, I'm interested in your solar energy solutions."

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#0A6FB0] text-white rounded-full shadow-lg hover:bg-[#083B63] transition-all hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  )
}

