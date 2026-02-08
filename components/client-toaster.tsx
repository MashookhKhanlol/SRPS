"use client"

import { Toaster } from "sonner"
import { useEffect, useState } from "react"

/**
 * Renders Sonner Toaster only after mount to avoid hydration mismatch.
 * Sonner can output different attributes on server vs client.
 */
export function ClientToaster() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return <Toaster />
}
