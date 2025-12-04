interface BenefitsItem {
  amount: string
  desc: string
  subtitle?: string
}

interface BenefitsCardProps {
  title: string
  subtitle?: string
  items: BenefitsItem[]
}

export function BenefitsCard({ title, subtitle, items }: BenefitsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl md:text-2xl font-bold text-[#083B63] mb-2">{title}</h3>
      {subtitle && <p className="text-xs md:text-sm text-[#516C7A] mb-6">{subtitle}</p>}

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="pb-4 last:pb-0">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl font-bold text-[#0A6FB0]">{item.amount}</span>
              <span className="text-sm text-[#516C7A]">{item.desc}</span>
            </div>
            {item.subtitle && <p className="text-xs md:text-sm text-[#516C7A] mt-1">{item.subtitle}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
