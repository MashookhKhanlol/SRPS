import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Get the Google Apps Script Web App URL from environment variable
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL is not set in environment variables")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Add timestamp to the data
    const timestamp = new Date().toISOString()
    const dataWithTimestamp = {
      ...body,
      timestamp,
    }

    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataWithTimestamp),
    })

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets")
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
}

