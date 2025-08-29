"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Sparkles, Shield, Zap } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        router.push("/dashboard")
      } else {
        const data = await response.json()
        setError(data.error || "Login failed")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-esg-primary to-esg-secondary rounded-3xl flex items-center justify-center shadow-xl shadow-esg-primary/25">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-600">Sign in to access your ESG intelligence platform</p>
        </div>

        {/* Login Card */}
        <Card className="floating-card border-0 shadow-2xl shadow-black/10">
          <CardHeader className="space-y-1 pb-8">
            <CardTitle className="text-2xl font-bold text-center gradient-text">IIAS ESG Platform</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Intelligent ESG Analysis & Benchmarking
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert className="border-red-200 bg-red-50 rounded-xl">
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="h-12 rounded-xl border-gray-200 focus:border-esg-primary focus:ring-esg-primary/20 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="h-12 rounded-xl border-gray-200 focus:border-esg-primary focus:ring-esg-primary/20 transition-all duration-200"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-esg-primary to-esg-secondary hover:from-esg-primary/90 hover:to-esg-secondary/90 text-white font-semibold rounded-xl shadow-lg shadow-esg-primary/25 hover:shadow-xl hover:shadow-esg-primary/30 transition-all duration-300 hover:scale-[1.02]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl border border-gray-100">
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Demo Credentials</span>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <div>
                  <strong>Admin:</strong> admin@iias.com / admin123
                </div>
                <div>
                  <strong>User:</strong> user@company.com / user123
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-600 font-medium">AI-Powered Analysis</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-600 font-medium">Secure & Compliant</p>
          </div>
          <div className="space-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-600 font-medium">Real-time Insights</p>
          </div>
        </div>
      </div>
    </div>
  )
}
