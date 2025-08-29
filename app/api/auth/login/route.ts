import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Mock authentication - replace with real auth logic
    if (email === "admin@iias.com" && password === "admin123") {
      return NextResponse.json({
        success: true,
        user: { id: 1, email, role: "Super Admin" },
      })
    }

    if (email === "user@company.com" && password === "user123") {
      return NextResponse.json({
        success: true,
        user: { id: 2, email, role: "Licensed User" },
      })
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
