"use client"

import { useState } from "react"
import { Calculator, TrendingUp, Leaf, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SolarSavingsCalculator() {
  const [electricityUsage, setElectricityUsage] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [systemSize, setSystemSize] = useState<string>("")
  const [results, setResults] = useState<{
    monthlySavings: number
    roiYears: number
    co2Reduction: number
    subsidyCentral: number
    subsidyState: number
    subsidyTotal: number
    systemCost: number
    netSystemCost: number
  } | null>(null)

  // Average electricity rates by location (INR per kWh)
  const locationRates: Record<string, number> = {
    "raipur": 7.5,
    "mumbai": 8.2,
    "delhi": 7.8,
    "bangalore": 8.0,
    "chennai": 7.6,
    "kolkata": 7.4,
    "hyderabad": 7.9,
    "pune": 7.7,
    "other": 7.5,
  }

  // Average solar generation (kWh per kW per day)
  const solarGeneration = 4.5 // Average for India

  // Average cost per kW installation (INR)
  const costPerKW = 50000

  // CO2 emission factor (kg CO2 per kWh)
  const co2PerKWh = 0.82 // India's grid emission factor

  const getSubsidyForSystemSize = (sizeKW: number) => {
    // Subsidy slabs (as provided):
    // 1 kW:  Central 30,000 + State 15,000 = 45,000
    // 2 kW:  Central 60,000 + State 30,000 = 90,000
    // 3-10kW: Central 78,000 + State 30,000 = 1,08,000 (capped)
    if (!Number.isFinite(sizeKW) || sizeKW <= 0) {
      return { central: 0, state: 0, total: 0, isCapped: false }
    }

    if (sizeKW < 2) {
      const central = 30000
      const state = 15000
      return { central, state, total: central + state, isCapped: false }
    }

    if (sizeKW < 3) {
      const central = 60000
      const state = 30000
      return { central, state, total: central + state, isCapped: false }
    }

    // 3 kW and above: capped at the 3-10 kW slab total
    const central = 78000
    const state = 30000
    const isCapped = sizeKW > 10
    return { central, state, total: central + state, isCapped }
  }

  const calculateSavings = () => {
    if (!electricityUsage || !location || !systemSize) {
      return
    }

    const usage = parseFloat(electricityUsage)
    const size = parseFloat(systemSize)
    const rate = locationRates[location.toLowerCase()] || locationRates["other"]

    // Calculate monthly solar generation
    const monthlySolarGeneration = size * solarGeneration * 30 // kWh per month

    // Calculate monthly savings (assuming 80% of solar generation is used)
    const monthlySolarUsage = Math.min(monthlySolarGeneration * 0.8, usage)
    const monthlySavings = monthlySolarUsage * rate

    // Calculate system cost
    const systemCost = size * costPerKW
    const subsidy = getSubsidyForSystemSize(size)
    const netSystemCost = Math.max(0, systemCost - subsidy.total)

    // Calculate annual savings
    const annualSavings = monthlySavings * 12

    // Calculate ROI in years
    const roiYears = annualSavings > 0 ? netSystemCost / annualSavings : 0

    // Calculate CO2 reduction (kg per year)
    const co2Reduction = (monthlySolarUsage * 12 * co2PerKWh) / 1000 // Convert to tons

    setResults({
      monthlySavings: Math.round(monthlySavings),
      roiYears: Math.round(roiYears * 10) / 10,
      co2Reduction: Math.round(co2Reduction * 10) / 10,
      subsidyCentral: subsidy.central,
      subsidyState: subsidy.state,
      subsidyTotal: subsidy.total,
      systemCost: Math.round(systemCost),
      netSystemCost: Math.round(netSystemCost),
    })
  }

  return (
    <section id="solar-savings-calculator" className="bg-gradient-to-b from-white to-[#E9F6FF] py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#E9F6FF] px-6 py-2 rounded-full mb-4">
            <span className="text-[#0A6FB0] font-semibold text-sm md:text-base flex items-center justify-center gap-2">
              <Calculator className="w-4 h-4" />
              Calculate Your Savings
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Solar Savings Calculator
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover how much you can save with solar energy. Enter your details below to get instant estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Input Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Enter Your Details</h3>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="usage" className="text-base font-semibold text-gray-700">
                  Monthly Electricity Usage (kWh)
                </Label>
                <Input
                  id="usage"
                  type="number"
                  placeholder="e.g., 500"
                  value={electricityUsage}
                  onChange={(e) => setElectricityUsage(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Check your electricity bill for monthly consumption
                </p>
              </div>

              <div>
                <Label htmlFor="location" className="text-base font-semibold text-gray-700">
                  Location
                </Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="raipur">Raipur</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="systemSize" className="text-base font-semibold text-gray-700">
                  System Size (kW)
                </Label>
                <Input
                  id="systemSize"
                  type="number"
                  placeholder="e.g., 5"
                  value={systemSize}
                  onChange={(e) => setSystemSize(e.target.value)}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Typical residential systems: 3-10 kW
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 overflow-hidden">
                <div className="bg-[#E9F6FF] px-4 py-3">
                  <p className="text-sm font-semibold text-gray-800">Subsidy (Central + C.G. State)</p>
                  <p className="text-xs text-gray-600">For 3 kW to 10 kW, total subsidy is the same: ₹1,08,000 (₹78,000 + ₹30,000).</p>
                </div>
                <div className="w-full overflow-x-auto bg-white">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-600 border-t border-gray-200">
                        <th className="px-4 py-2 font-semibold">Kilo watt</th>
                        <th className="px-4 py-2 font-semibold">Central Govt.</th>
                        <th className="px-4 py-2 font-semibold">C.G State Govt.</th>
                        <th className="px-4 py-2 font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800">
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-2">1 kW</td>
                        <td className="px-4 py-2">₹30,000</td>
                        <td className="px-4 py-2">₹15,000</td>
                        <td className="px-4 py-2 font-semibold">₹45,000</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-2">2 kW</td>
                        <td className="px-4 py-2">₹60,000</td>
                        <td className="px-4 py-2">₹30,000</td>
                        <td className="px-4 py-2 font-semibold">₹90,000</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-2">3 kW - 10 kW</td>
                        <td className="px-4 py-2">₹78,000</td>
                        <td className="px-4 py-2">₹30,000</td>
                        <td className="px-4 py-2 font-semibold">₹1,08,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <Button
                onClick={calculateSavings}
                className="w-full bg-[#0A6FB0] hover:bg-[#083B63] text-white text-lg py-6"
                disabled={!electricityUsage || !location || !systemSize}
              >
                Calculate Savings
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Savings Estimate</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-[#E9F6FF] rounded-lg">
                      <div className="w-12 h-12 bg-[#0A6FB0] rounded-lg flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          Monthly Savings
                        </h4>
                        <p className="text-3xl font-bold text-[#0A6FB0]">
                          ₹{results.monthlySavings.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Estimated monthly electricity bill reduction
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-[#E9F6FF] rounded-lg">
                      <div className="w-12 h-12 bg-[#0A6FB0] rounded-lg flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-full">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          Estimated Subsidy (Central + State)
                        </h4>
                        <p className="text-3xl font-bold text-[#0A6FB0]">
                          ₹{results.subsidyTotal.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Central: ₹{results.subsidyCentral.toLocaleString()} + State: ₹{results.subsidyState.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">
                          System cost: ₹{results.systemCost.toLocaleString()} → Net after subsidy: ₹{results.netSystemCost.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-[#E9F6FF] rounded-lg">
                      <div className="w-12 h-12 bg-[#0A6FB0] rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          Return on Investment
                        </h4>
                        <p className="text-3xl font-bold text-[#0A6FB0]">
                          {results.roiYears} Years
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Time to recover your investment (after subsidy)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-[#E9F6FF] rounded-lg">
                      <div className="w-12 h-12 bg-[#0A6FB0] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          CO₂ Emissions Reduction
                        </h4>
                        <p className="text-3xl font-bold text-[#0A6FB0]">
                          {results.co2Reduction} Tons/Year
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Annual carbon footprint reduction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0A6FB0] rounded-xl p-6 text-white text-center">
                  <p className="text-lg font-semibold mb-2">Ready to Go Solar?</p>
                  <p className="text-sm opacity-90">
                    Contact us for a detailed consultation and customized quote
                  </p>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-lg flex items-center justify-center min-h-[400px]">
                <div className="text-center text-gray-400">
                  <Calculator className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Enter your details to see your savings</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
