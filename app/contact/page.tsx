"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { toast } from "sonner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  idType: z.string().optional(),
  idNumber: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
}).refine((data) => {
  // If idType is selected, idNumber must be provided
  if (data.idType && !data.idNumber) {
    return false;
  }
  // If idNumber is provided, idType must be selected
  if (data.idNumber && !data.idType) {
    return false;
  }
  return true;
}, {
  message: "Please select ID type and enter ID number",
  path: ["idNumber"],
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const mapsUrl = "https://maps.app.goo.gl/KTDuFHabZ6cgrc426"
  const emailAddress = "sunradiationpowersolutions@gmail.com"
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const idType = watch("idType")

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast.success("Thank you! We'll get back to you soon.")
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/Solar Bg.png')",
            backgroundAttachment: "fixed",
          }}
        >
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Together
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Start your solar journey with confidence. Our team is ready to bring your vision to life.
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-[var(--color-accent)] text-[var(--text-primary)] hover:bg-[var(--color-accent)]/90"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[var(--color-muted)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Get In Touch</h2>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[var(--color-border)]">
                <MapPin className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">Office Address</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Progressive Point, 1st Floor, Shop No. 158, Lalpur,<br />
                    Raipur, Chhattisgarh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[var(--color-border)]">
                <Phone className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">Phone</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">+91 97706 39219</p>
                  <p className="text-[var(--color-muted-foreground)] text-sm">+91 92440 66805</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[var(--color-border)]">
                <Mail className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">Email</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    <a
                      href={`mailto:${emailAddress}`}
                      className="hover:underline underline-offset-4"
                    >
                      {emailAddress}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[var(--color-border)]">
                <Clock className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">Office Hours</h3>
                  <p className="text-[var(--color-muted-foreground)] text-sm">
                    Monday – Saturday: 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
            {/* Map */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[400px] bg-[var(--color-card)] rounded-lg border border-[var(--color-border)] overflow-hidden group block"
              aria-label="Open location in Google Maps"
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E9F6FF] to-white" />
                <div className="relative z-10 text-center px-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#0A6FB0] rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                    View on Google Maps
                  </p>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Progressive Point, 1st Floor, Shop No. 158, Lalpur, Raipur, Chhattisgarh
                  </p>
                  <p className="text-xs text-[var(--color-muted-foreground)] mt-3 underline underline-offset-4">
                    Open directions
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Get FREE Solar Feasibility Report for Your Roof
            </h2>
            <p className="text-[var(--color-muted-foreground)] text-lg">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[var(--color-card)] p-8 rounded-lg border border-[var(--color-border)]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="John Doe"
                  className="mt-2"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="john@company.com"
                  className="mt-2"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="9823412345"
                  className="mt-2"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  {...register("company")}
                  placeholder="Your Company"
                  className="mt-2"
                />
                {errors.company && (
                  <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="idType">ID Details</Label>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <Select 
                  value={idType}
                  onValueChange={(value) => {
                    setValue("idType", value)
                    if (!value) {
                      setValue("idNumber", "")
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aadhar">Aadhar Card Number</SelectItem>
                    <SelectItem value="pan">PAN Number</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="idNumber"
                  {...register("idNumber")}
                  placeholder={
                    idType === "aadhar" 
                      ? "Enter Aadhar Card Number" 
                      : idType === "pan" 
                      ? "Enter PAN Number" 
                      : "Enter ID number"
                  }
                />
              </div>
              {errors.idNumber && (
                <p className="text-destructive text-sm mt-1">{errors.idNumber.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="service">Service Category *</Label>
              <Select onValueChange={(value) => setValue("service", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Solar Installation</SelectItem>
                  <SelectItem value="commercial">Commercial Solar Installation</SelectItem>
                  <SelectItem value="industrial">Industrial Solar Solutions</SelectItem>
                  <SelectItem value="maintenance">Solar System Maintenance</SelectItem>
                  <SelectItem value="consultation">Solar Consultation</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-destructive text-sm mt-1">{errors.service.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message">Project Description *</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Tell us about your project..."
                rows={6}
                className="mt-2"
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <Button type="submit" size="lg" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Request"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

