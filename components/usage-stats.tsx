"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
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
import { Calendar, Clock, Search, FileText } from "lucide-react"

export function UsageStats() {
  const usageData = [
    { date: "2025-08-01", queries: 12, tokens: 2400 },
    { date: "2025-08-02", queries: 8, tokens: 1600 },
    { date: "2025-08-03", queries: 15, tokens: 3200 },
    { date: "2025-08-04", queries: 6, tokens: 1200 },
    { date: "2025-08-05", queries: 18, tokens: 3800 },
    { date: "2025-08-06", queries: 22, tokens: 4500 },
    { date: "2025-08-07", queries: 14, tokens: 2800 },
  ]

  const categoryData = [
    { name: "Environmental", value: 45, color: "#10b981" },
    { name: "Social", value: 30, color: "#3b82f6" },
    { name: "Governance", value: 25, color: "#f59e0b" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Queries</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95</div>
            <div className="flex items-center space-x-2 mt-2">
              <Progress value={95} className="flex-1" />
              <span className="text-xs text-muted-foreground">95/100</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tokens Used</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.5K</div>
            <div className="flex items-center space-x-2 mt-2">
              <Progress value={37} className="flex-1" />
              <span className="text-xs text-muted-foreground">37%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3s</div>
            <p className="text-xs text-muted-foreground mt-2">
              <Badge variant="secondary" className="text-xs">
                {"< 3s target"}
              </Badge>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">License Expires</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground mt-2">days remaining</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Daily Usage Trend</CardTitle>
            <CardDescription>Queries and token consumption over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={(value) => new Date(value).toLocaleDateString()} />
                <YAxis />
                <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
                <Area type="monotone" dataKey="queries" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Query Categories</CardTitle>
            <CardDescription>Distribution of queries by ESG category</CardDescription>
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

      <Card>
        <CardHeader>
          <CardTitle>Recent Query History</CardTitle>
          <CardDescription>Your latest ESG data queries and results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                query: "Compare Tesla's environmental score with Ford and GM",
                timestamp: "2025-08-11 14:30",
                tokens: 245,
                status: "Completed",
              },
              {
                query: "What are the governance trends in the automotive sector?",
                timestamp: "2025-08-11 13:15",
                tokens: 189,
                status: "Completed",
              },
              {
                query: "Show me the top performing companies in social responsibility",
                timestamp: "2025-08-11 11:45",
                tokens: 167,
                status: "Completed",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.query}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    {item.timestamp} • {item.tokens} tokens
                  </p>
                </div>
                <Badge variant="secondary">{item.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
