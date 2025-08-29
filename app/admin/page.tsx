"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, FileText, Settings, BarChart3, Upload, Edit, Trash2 } from "lucide-react"

export default function AdminPage() {
  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@company.com",
      role: "Licensed User",
      license: "Extended License",
      queriesUsed: 45,
      queriesLimit: 100,
      status: "Active",
      lastLogin: "2025-08-11",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@corp.com",
      role: "Licensed User",
      license: "Basic License",
      queriesUsed: 23,
      queriesLimit: 50,
      status: "Active",
      lastLogin: "2025-08-10",
    },
  ])

  const [reports] = useState([
    {
      id: 1,
      filename: "Tesla_ESG_2023.pdf",
      company: "Tesla Inc.",
      uploadDate: "2025-08-01",
      status: "Processed",
      size: "2.4 MB",
    },
    {
      id: 2,
      filename: "Ford_Sustainability_2023.pdf",
      company: "Ford Motor Co.",
      uploadDate: "2025-08-01",
      status: "Processing",
      size: "3.1 MB",
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-esg-primary to-esg-secondary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <Badge variant="destructive" className="bg-red-600">
                Super Admin
              </Badge>
            </div>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-esg-light min-h-screen">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-esg-primary">Total Users</CardTitle>
              <Users className="h-4 w-4 text-esg-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-esg-primary">24</div>
              <p className="text-xs text-esg-secondary">+2 this month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-esg-accent">Reports Processed</CardTitle>
              <FileText className="h-4 w-4 text-esg-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-esg-accent">487</div>
              <p className="text-xs text-esg-accent/70">of 500 target</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-700">Total Queries</CardTitle>
              <BarChart3 className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700">1,247</div>
              <p className="text-xs text-purple-600">This month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-700">System Uptime</CardTitle>
              <Settings className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-700">99.8%</div>
              <p className="text-xs text-amber-600">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Admin Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm">
            <TabsTrigger value="users" className="data-[state=active]:bg-esg-primary data-[state=active]:text-white">
              User Management
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-esg-primary data-[state=active]:text-white">
              Report Management
            </TabsTrigger>
            <TabsTrigger value="licenses" className="data-[state=active]:bg-esg-primary data-[state=active]:text-white">
              License Control
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-esg-primary data-[state=active]:text-white"
            >
              System Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage user accounts and permissions</CardDescription>
                  </div>
                  <Button className="bg-esg-primary hover:bg-esg-secondary">Add New User</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>License</TableHead>
                      <TableHead>Usage</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-600">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.license}</Badge>
                        </TableCell>
                        <TableCell>
                          {user.queriesUsed}/{user.queriesLimit} queries
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Report Management</CardTitle>
                    <CardDescription>Upload and manage ESG rating reports</CardDescription>
                  </div>
                  <Button className="bg-esg-primary hover:bg-esg-secondary">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Reports
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Filename</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Upload Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.filename}</TableCell>
                        <TableCell>{report.company}</TableCell>
                        <TableCell>{report.uploadDate}</TableCell>
                        <TableCell>
                          <Badge variant={report.status === "Processed" ? "default" : "secondary"}>
                            {report.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{report.size}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="licenses">
            <Card>
              <CardHeader>
                <CardTitle>License Control</CardTitle>
                <CardDescription>Manage user licenses and access permissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Update User License</h4>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select User" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="jane">Jane Smith</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="License Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic License</SelectItem>
                        <SelectItem value="extended">Extended License</SelectItem>
                        <SelectItem value="unlimited">Unlimited License</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Query Limit</label>
                        <Input type="number" placeholder="100" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Token Limit</label>
                        <Input type="number" placeholder="50000" />
                      </div>
                    </div>
                    <Button className="w-full bg-esg-primary hover:bg-esg-secondary">Update License</Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">License Templates</h4>
                    <div className="space-y-2">
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Basic License</div>
                        <div className="text-sm text-gray-600">50 queries/month, 25K tokens</div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Extended License</div>
                        <div className="text-sm text-gray-600">100 queries/month, 50K tokens</div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Unlimited License</div>
                        <div className="text-sm text-gray-600">Unlimited queries and tokens</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>System Analytics</CardTitle>
                <CardDescription>Monitor system performance and usage patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Performance Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Average Response Time</span>
                        <span className="font-medium">2.3s</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Query Success Rate</span>
                        <span className="font-medium">98.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>System Uptime</span>
                        <span className="font-medium">99.8%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Usage Statistics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total Queries (Month)</span>
                        <span className="font-medium">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Users</span>
                        <span className="font-medium">18</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Reports Processed</span>
                        <span className="font-medium">487</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
