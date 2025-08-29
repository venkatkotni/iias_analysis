"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, BarChart3, Users, Settings, Sparkles, TrendingUp } from "lucide-react"
import { QueryInterface } from "@/components/query-interface"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock user data - in real app, fetch from API
    setUser({
      id: 1,
      name: "John Doe",
      email: "john@company.com",
      role: "Licensed User",
      license: {
        type: "Extended License",
        queriesUsed: 45,
        queriesLimit: 100,
        tokensUsed: 12500,
        tokensLimit: 50000,
        expiryDate: "2025-12-31",
      },
    })
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-esg-primary to-esg-secondary rounded-full animate-pulse"></div>
          <span className="text-lg font-medium text-gray-600">Loading your workspace...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Modern Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 esg-gradient opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/5"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">IIAS ESG Platform</h1>
                    <p className="text-white/80 text-sm">Intelligent ESG Analysis & Benchmarking</p>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-3 py-1 text-xs font-medium">
                  {user?.license?.type}
                </Badge>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-white/90 hidden sm:block">Welcome back, {user?.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"
                  onClick={() => (window.location.href = "/profile")}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-4 relative z-10">
        {/* Modern Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="floating-card group hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-700">Queries Used</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Search className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-gray-900 mb-1">{user?.license?.queriesUsed}</div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(user?.license?.queriesUsed / user?.license?.queriesLimit) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 font-medium">{user?.license?.queriesLimit} limit</span>
              </div>
            </CardContent>
          </Card>

          <Card className="floating-card group hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-700">Graphical Queries</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-gray-900 mb-1">18</div>
              <p className="text-sm text-gray-600">with visualizations</p>
            </CardContent>
          </Card>

          <Card className="floating-card group hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-700">Reports Available</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-gray-900 mb-1">500</div>
              <p className="text-sm text-gray-600">ESG ratings reports</p>
            </CardContent>
          </Card>

          <Card className="floating-card group hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-gray-700">License Status</CardTitle>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-3xl font-bold text-gray-900 mb-1">142</div>
              <p className="text-sm text-gray-600">days remaining</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Query Interface */}
        <div className="space-y-8">
          <QueryInterface />
        </div>
      </main>
    </div>
  )
}
