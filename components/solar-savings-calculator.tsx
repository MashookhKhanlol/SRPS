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

    // Calculate annual savings
    const annualSavings = monthlySavings * 12

    // Calculate ROI in years
    const roiYears = systemCost / annualSavings

    // Calculate CO2 reduction (kg per year)
    const co2Reduction = (monthlySolarUsage * 12 * co2PerKWh) / 1000 // Convert to tons

    setResults({
      monthlySavings: Math.round(monthlySavings),
      roiYears: Math.round(roiYears * 10) / 10,
      co2Reduction: Math.round(co2Reduction * 10) / 10,
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
                          Time to recover your investment
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
