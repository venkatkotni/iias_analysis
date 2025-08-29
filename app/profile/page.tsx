"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ArrowLeft } from "lucide-react"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock user data
    setUser({
      id: 1,
      name: "John Doe",
      email: "john@company.com",
      company: "Acme Corp",
      role: "Licensed User",
      joinDate: "2024-03-15",
      license: {
        type: "Extended License",
        queriesUsed: 45,
        queriesLimit: 100,
        tokensUsed: 12500,
        tokensLimit: 50000,
        expiryDate: "2025-12-31",
      },
      preferences: {
        emailNotifications: true,
        weeklyReports: false,
        darkMode: false,
      },
    })
    setLoading(false)
  }, [])

  const usageData = [
    { date: "2025-08-01", textual: 8, graphical: 4 },
    { date: "2025-08-02", textual: 6, graphical: 2 },
    { date: "2025-08-03", textual: 10, graphical: 5 },
    { date: "2025-08-04", textual: 4, graphical: 2 },
    { date: "2025-08-05", textual: 12, graphical: 6 },
    { date: "2025-08-06", textual: 15, graphical: 7 },
    { date: "2025-08-07", textual: 9, graphical: 5 },
  ]

  const categoryData = [
    { name: "Textual Queries", value: 65, color: "#0f4c75" },
    { name: "Graphical Queries", value: 35, color: "#3282b8" },
  ]

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-esg-light">
      {/* Header */}
      <header className="bg-gradient-to-r from-esg-primary to-esg-secondary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-bold">User Profile</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {user?.license?.type}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-esg-primary to-esg-secondary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                {user?.name
                  ?.split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </div>
              <CardTitle>{user?.name}</CardTitle>
              <CardDescription>{user?.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Company:</span>
                  <span className="font-medium">{user?.company}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Role:</span>
                  <span className="font-medium">{user?.role}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Member Since:</span>
                  <span className="font-medium">{new Date(user?.joinDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>License Expires:</span>
                  <span className="font-medium">{new Date(user?.license?.expiryDate).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Usage Overview</CardTitle>
              <CardDescription>Your current usage and limits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Queries Used</span>
                    <span className="text-sm text-gray-600">
                      {user?.license?.queriesUsed}/{user?.license?.queriesLimit}
                    </span>
                  </div>
                  <Progress value={(user?.license?.queriesUsed / user?.license?.queriesLimit) * 100} />

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm font-medium">Tokens Used</span>
                    <span className="text-sm text-gray-600">
                      {user?.license?.tokensUsed?.toLocaleString()}/{user?.license?.tokensLimit?.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={(user?.license?.tokensUsed / user?.license?.tokensLimit) * 100} />
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-esg-primary">142</div>
                    <div className="text-sm text-gray-600">Days until renewal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-esg-secondary">2.3s</div>
                    <div className="text-sm text-gray-600">Avg response time</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Tabs */}
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-esg-primary data-[state=active]:text-white"
            >
              Usage Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-esg-primary data-[state=active]:text-white">
              Account Settings
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-esg-primary data-[state=active]:text-white">
              Query History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Usage Trend</CardTitle>
                  <CardDescription>Textual and graphical queries over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={usageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                      <YAxis />
                      <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                      <Area
                        type="monotone"
                        dataKey="textual"
                        stackId="1"
                        stroke="#0f4c75"
                        fill="#0f4c75"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="graphical"
                        stackId="1"
                        stroke="#3282b8"
                        fill="#3282b8"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Query Types</CardTitle>
                  <CardDescription>Distribution of query types</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center space-x-4 mt-4">
                    {categoryData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">
                          {item.name} ({item.value}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user?.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue={user?.company} />
                </div>
                <Button className="w-full bg-esg-primary hover:bg-esg-secondary">Update Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Recent Query History</CardTitle>
                <CardDescription>Your latest ESG data queries and benchmarking requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      type: "Textual",
                      query: "Compare Tesla's environmental score with Ford and GM",
                      timestamp: "2025-08-11 14:30",
                      status: "Completed",
                    },
                    {
                      type: "Graphical",
                      query: "Benchmark governance scores for automotive companies",
                      timestamp: "2025-08-11 13:15",
                      status: "Completed",
                    },
                    {
                      type: "Textual",
                      query: "What are the governance trends in the automotive sector?",
                      timestamp: "2025-08-11 13:15",
                      status: "Completed",
                    },
                    {
                      type: "Graphical",
                      query: "Compare top ESG performers across all industries",
                      timestamp: "2025-08-11 11:45",
                      status: "Completed",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant={item.type === "Textual" ? "default" : "secondary"} className="text-xs">
                            {item.type}
                          </Badge>
                          <span className="font-medium text-sm">{item.query}</span>
                        </div>
                        <p className="text-xs text-gray-600">{item.timestamp}</p>
                      </div>
                      <Badge variant="secondary">{item.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
