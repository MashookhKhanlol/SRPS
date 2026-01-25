"use client"

import { MessageCircle, PhoneCall } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "+917067823451"
  const message = "Hello, I'm interested in your solar energy solutions."

  const waUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
  const telUrl = `tel:${phoneNumber}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <a
        href={telUrl}
        className="h-12 px-4 bg-[#0A6FB0] text-white rounded-full shadow-lg hover:bg-[#083B63] transition-all hover:scale-105 flex items-center gap-2"
        aria-label="Call now"
      >
        <PhoneCall className="w-5 h-5" />
        <span className="text-sm font-semibold">Call Now</span>
      </a>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 px-4 bg-[#0A6FB0] text-white rounded-full shadow-lg hover:bg-[#083B63] transition-all hover:scale-105 flex items-center gap-2"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold">WhatsApp Us</span>
      </a>
    </div>
  )
}

