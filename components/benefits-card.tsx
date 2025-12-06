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
    <div className="bg-[var(--color-card)] rounded-2xl p-6 md:p-8 border border-[var(--color-muted)] shadow-sm hover:shadow-md transition">
      <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-2">{title}</h3>
      {subtitle && <p className="text-xs md:text-sm text-[var(--color-muted-foreground)] mb-6">{subtitle}</p>}

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="pb-4 last:pb-0">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">{item.amount}</span>
              <span className="text-sm text-[var(--color-muted-foreground)]">{item.desc}</span>
            </div>
            {item.subtitle && <p className="text-xs md:text-sm text-[var(--color-muted-foreground)] mt-1">{item.subtitle}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
