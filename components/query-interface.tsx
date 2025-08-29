"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Loader2,
  Search,
  Download,
  ExternalLink,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Sparkles,
  Zap,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

export function QueryInterface() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [enableGraphical, setEnableGraphical] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [filters, setFilters] = useState({
    sector: "",
    geography: "",
    year: "",
    category: "",
  })

  const handleQuery = async () => {
    if (!query.trim()) return

    setIsLoading(true)

    // Simulate API call with different responses based on graphical mode
    setTimeout(() => {
      if (enableGraphical) {
        // Mock response with charts and visualizations
        setResults({
          type: "graphical",
          answer:
            "Based on the ESG ratings analysis, Tesla Inc. has shown significant improvement in their Environmental score, rising from 7.2 in 2022 to 8.4 in 2023. The comparison with automotive peers shows Tesla leading in environmental performance while Toyota excels in overall ESG scores.",
          sources: [
            {
              company: "Tesla Inc.",
              report: "ESG Rating Report 2023",
              score: 8.4,
              category: "Environmental",
              date: "2023-12-15",
            },
            {
              company: "Ford Motor Co.",
              report: "ESG Rating Report 2023",
              score: 6.9,
              category: "Environmental",
              date: "2023-12-10",
            },
            {
              company: "Toyota Motor Corp.",
              report: "ESG Rating Report 2023",
              score: 7.8,
              category: "Environmental",
              date: "2023-12-08",
            },
          ],
          visualizations: {
            primary: "bar_chart",
            secondary: "trend_line",
            insights: "performance_cards",
          },
          chartData: {
            comparison: [
              { company: "Tesla", environmental: 8.4, social: 7.2, governance: 6.8, overall: 7.5 },
              { company: "Ford", environmental: 6.9, social: 7.8, governance: 8.1, overall: 7.6 },
              { company: "GM", environmental: 6.5, social: 7.5, governance: 7.9, overall: 7.3 },
              { company: "Toyota", environmental: 7.8, social: 8.2, governance: 8.5, overall: 8.2 },
            ],
            trends: [
              { year: "2021", tesla: 6.8, ford: 6.5, toyota: 7.9 },
              { year: "2022", tesla: 7.2, ford: 6.8, toyota: 8.0 },
              { year: "2023", tesla: 8.4, ford: 6.9, toyota: 7.8 },
            ],
          },
          insights: [
            { type: "leader", company: "Tesla", metric: "Environmental", score: 8.4, change: "+1.6 since 2021" },
            { type: "stable", company: "Toyota", metric: "Overall ESG", score: 8.2, change: "Consistent leader" },
            {
              type: "opportunity",
              company: "Ford",
              metric: "Environmental",
              score: 6.9,
              change: "Room for improvement",
            },
          ],
          confidence: 0.94,
          queriesUsed: 1,
        })
      } else {
        // Mock response with text-only
        setResults({
          type: "textual",
          answer:
            "Based on the ESG ratings analysis, Tesla Inc. has shown significant improvement in their Environmental score, rising from 7.2 in 2022 to 8.4 in 2023. This improvement is primarily attributed to their expanded renewable energy initiatives and improved supply chain sustainability practices. When compared to automotive peers, Tesla leads in environmental performance with an 8.4 score, followed by Toyota at 7.8, Ford at 6.9, and GM at 6.5.",
          sources: [
            {
              company: "Tesla Inc.",
              report: "ESG Rating Report 2023",
              score: 8.4,
              category: "Environmental",
              date: "2023-12-15",
            },
            {
              company: "Tesla Inc.",
              report: "ESG Rating Report 2022",
              score: 7.2,
              category: "Environmental",
              date: "2022-12-20",
            },
          ],
          confidence: 0.92,
          queriesUsed: 1,
        })
      }
      setIsLoading(false)
    }, 2000)
  }

  const queryExamples = [
    "How has Tesla's environmental score changed over the past two years?",
    "Compare the governance scores of automotive companies in 2023",
    "Which companies have the best overall ESG performance in the tech sector?",
    "Show me the environmental performance trends for energy companies",
    "Benchmark Tesla against Ford and GM across all ESG categories",
  ]

  return (
    <div className="space-y-8">
      {/* Modern Query Input Card */}
      <Card className="floating-card border-0 shadow-xl shadow-black/5">
        <CardHeader className="pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-esg-primary to-esg-secondary rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">ESG Intelligence Query</CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                Ask questions about ESG ratings, company performance, or request peer comparisons
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { key: "sector", placeholder: "Sector", options: ["Technology", "Automotive", "Energy", "Finance"] },
              { key: "geography", placeholder: "Geography", options: ["North America", "Europe", "Asia Pacific"] },
              { key: "year", placeholder: "Year", options: ["2023", "2022", "2021"] },
              { key: "category", placeholder: "ESG Category", options: ["Environmental", "Social", "Governance"] },
            ].map((filter) => (
              <Select
                key={filter.key}
                value={filters[filter.key as keyof typeof filters]}
                onValueChange={(value) => setFilters({ ...filters, [filter.key]: value })}
              >
                <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-esg-primary focus:ring-esg-primary/20">
                  <SelectValue placeholder={filter.placeholder} />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-gray-200">
                  {filter.options.map((option) => (
                    <SelectItem
                      key={option.toLowerCase().replace(" ", "-")}
                      value={option.toLowerCase().replace(" ", "-")}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>

          {/* Query Input */}
          <div className="space-y-4">
            <Textarea
              placeholder="e.g., 'How has Tesla's environmental score changed over the past two years?' or 'Compare the governance scores of tech companies in 2023' or 'Benchmark automotive companies on overall ESG performance'"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows={4}
              className="resize-none rounded-xl border-gray-200 focus:border-esg-primary focus:ring-esg-primary/20 text-base leading-relaxed"
            />

            {/* Graphical Toggle */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Label htmlFor="graphical-mode" className="text-sm font-semibold text-gray-900 cursor-pointer">
                    Enable Graphical Output
                  </Label>
                  <p className="text-xs text-gray-600 mt-0.5">AI will generate charts and visualizations</p>
                </div>
              </div>
              <Switch
                id="graphical-mode"
                checked={enableGraphical}
                onCheckedChange={setEnableGraphical}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-indigo-600"
              />
            </div>
          </div>

          {/* Quick Examples */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">Quick Examples:</label>
            <div className="flex flex-wrap gap-2">
              {queryExamples.slice(0, 3).map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-auto py-3 px-4 text-left bg-white hover:bg-gray-50 border-gray-200 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                  onClick={() => setQuery(example)}
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>

          {/* Query Button */}
          <Button
            onClick={handleQuery}
            disabled={isLoading || !query.trim()}
            className="w-full h-14 bg-gradient-to-r from-esg-primary to-esg-secondary hover:from-esg-primary/90 hover:to-esg-secondary/90 text-white font-semibold rounded-xl shadow-lg shadow-esg-primary/25 hover:shadow-xl hover:shadow-esg-primary/30 transition-all duration-300 hover:scale-[1.02]"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                Analyzing ESG Data...
              </>
            ) : (
              <>
                <Zap className="mr-3 h-5 w-5" />
                Query ESG Data
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {results && (
        <>
          <Card className="floating-card border-0 shadow-xl shadow-black/5 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50/50 border-b border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    {results.type === "graphical" ? (
                      <BarChart3 className="w-6 h-6 text-white" />
                    ) : (
                      <Search className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {results.type === "graphical" ? "Visual Analysis Results" : "Analysis Results"}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Confidence: {(results.confidence * 100).toFixed(1)}%</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Type: {results.type === "graphical" ? "Graphical" : "Textual"}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Queries used: {results.queriesUsed}</span>
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:scale-105 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Main Answer */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-esg-primary to-esg-secondary rounded-full"></div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                  <p className="text-gray-800 leading-relaxed text-base">{results.answer}</p>
                </div>
              </div>

              {/* Insights Cards for Graphical Mode */}
              {results.type === "graphical" && results.insights && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {results.insights.map((insight: any, index: number) => (
                    <Card
                      key={index}
                      className={`floating-card border-0 ${
                        insight.type === "leader"
                          ? "bg-gradient-to-br from-green-50 to-emerald-50"
                          : insight.type === "stable"
                            ? "bg-gradient-to-br from-blue-50 to-indigo-50"
                            : "bg-gradient-to-br from-orange-50 to-amber-50"
                      } hover:scale-[1.02] transition-all duration-300`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                              insight.type === "leader"
                                ? "bg-gradient-to-br from-green-500 to-emerald-600"
                                : insight.type === "stable"
                                  ? "bg-gradient-to-br from-blue-500 to-indigo-600"
                                  : "bg-gradient-to-br from-orange-500 to-amber-600"
                            }`}
                          >
                            {insight.type === "leader" ? (
                              <TrendingUp className="h-6 w-6 text-white" />
                            ) : insight.type === "stable" ? (
                              <BarChart3 className="h-6 w-6 text-white" />
                            ) : (
                              <TrendingDown className="h-6 w-6 text-white" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">
                              {insight.type === "leader"
                                ? "Top Performer"
                                : insight.type === "stable"
                                  ? "Consistent"
                                  : "Opportunity"}
                            </h4>
                            <p className="text-sm text-gray-600">{insight.company}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700">{insight.metric}</span>
                            <span className="text-lg font-bold text-gray-900">{insight.score}</span>
                          </div>
                          <p className="text-xs text-gray-600">{insight.change}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Charts for Graphical Mode */}
              {results.type === "graphical" && results.chartData && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="floating-card border-0">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-gray-900">Performance Comparison</CardTitle>
                      <CardDescription>ESG scores across peer companies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={results.chartData.comparison}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                          <XAxis dataKey="company" tick={{ fontSize: 12 }} />
                          <YAxis domain={[0, 10]} tick={{ fontSize: 12 }} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #e2e8f0",
                              borderRadius: "12px",
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Bar dataKey="environmental" fill="url(#gradient1)" radius={[4, 4, 0, 0]} />
                          <defs>
                            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0f4c75" />
                              <stop offset="100%" stopColor="#3282b8" />
                            </linearGradient>
                          </defs>
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="floating-card border-0">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-gray-900">Performance Trends</CardTitle>
                      <CardDescription>Historical performance over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={results.chartData.trends}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                          <YAxis domain={[5, 9]} tick={{ fontSize: 12 }} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #e2e8f0",
                              borderRadius: "12px",
                              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            }}
                          />
                          <Line type="monotone" dataKey="tesla" stroke="#0f4c75" strokeWidth={3} dot={{ r: 6 }} />
                          <Line type="monotone" dataKey="ford" stroke="#3282b8" strokeWidth={3} dot={{ r: 6 }} />
                          <Line type="monotone" dataKey="toyota" stroke="#f59e0b" strokeWidth={3} dot={{ r: 6 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Source References */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-3 h-3 text-white" />
                  </div>
                  <span>Source References</span>
                </h4>
                <div className="grid gap-4">
                  {results.sources.map((source: any, index: number) => (
                    <Card
                      key={index}
                      className="floating-card border-0 hover:scale-[1.01] transition-all duration-200 cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="font-semibold text-gray-900">{source.company}</span>
                              <Badge className="bg-gradient-to-r from-esg-accent to-green-600 text-white border-0 px-3 py-1 rounded-full text-xs">
                                {source.category}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-esg-secondary to-blue-600 text-white border-0 px-3 py-1 rounded-full text-xs">
                                Score: {source.score}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              {source.report} • {source.date}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-110"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
