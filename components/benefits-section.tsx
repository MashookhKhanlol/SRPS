import { BenefitsCard } from "./benefits-card"

export function BenefitsSection() {
  return (
    <section className="bg-gradient-to-b from-[var(--color-card)] to-[var(--color-muted)] py-12 md:py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-primary)]">
        <span className="text-[var(--color-secondary)]">Benefits</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <BenefitsCard
          title="Subsidy for Residential Households"
          items={[
            { amount: "₹ 30,000", desc: "per kW", subtitle: "up to 3 kW" },
            { amount: "₹ 18,000", desc: "per kW", subtitle: "for additional capacity up to 3" },
            { amount: "₹ 78,000", desc: "Total subsidy", subtitle: "maximum for 6 kW capacity" },
          ]}
        />

        <BenefitsCard
          title="Subsidy for GHS/RWA"
          subtitle="Group Housing Society/Resident Welfare Association"
          items={[
            {
              amount: "₹ 18,000",
              desc: "per kW",
              subtitle: "for common facilities, including EV charging, up to 500 kW capacity",
            },
          ]}
        />
      </div>

      {/* Additional benefit note */}
      <div className="bg-[var(--color-card)] rounded-lg p-6 md:p-8 border border-[var(--color-muted)]">
        <p className="text-sm md:text-base text-[var(--color-foreground)] mb-4">
          <span className="font-semibold">For special states, an additional 10% Subsidy will be applicable per kW</span>
        </p>
        <p className="text-sm md:text-base font-semibold text-[var(--color-primary)] mb-6">
          Suitable Rooftop Solar Plant Capacity for households
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Average Monthly Electricity Consumption (kWh)", value: "0-150", range: "<150" },
            { label: "Suitable Rooftop Solar Plant Capacity", value: "1-2 kw", range: "1-2 kw" },
            { label: "", value: "150-300", range: "150-300" },
            { label: "", value: "2-3 kw", range: "2-3 kw" },
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--color-muted)] rounded p-3 md:p-4">
              {item.label && <p className="text-xs md:text-sm font-semibold text-[var(--color-primary)] mb-2">{item.label}</p>}
              <p className="text-lg md:text-xl font-bold text-[var(--color-secondary)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
