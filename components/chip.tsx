"use client"

interface ChipProps {
  label: string
  variant?: "filled" | "outlined"
  onClick?: () => void
}

export function Chip({ label, variant = "outlined", onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition ${
        variant === "outlined"
          ? "border border-[#0A6FB0] text-[#0A6FB0] hover:bg-[#E9F6FF]"
          : "bg-[#0A6FB0] text-white hover:bg-[#083B63]"
      }`}
    >
      {label}
    </button>
  )
}
