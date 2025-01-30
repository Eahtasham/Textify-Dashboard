"use client"

import { MainNav } from "@/components/layout/main-nav"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

const trafficData = [
  { name: "Mon", pageviews: 4000, visitors: 2400 },
  { name: "Tue", pageviews: 3000, visitors: 1398 },
  { name: "Wed", pageviews: 2000, visitors: 9800 },
  { name: "Thu", pageviews: 2780, visitors: 3908 },
  { name: "Fri", pageviews: 1890, visitors: 4800 },
  { name: "Sat", pageviews: 2390, visitors: 3800 },
  { name: "Sun", pageviews: 3490, visitors: 4300 }
]

const conversionData = [
  { name: "Email", value: 45 },
  { name: "Social", value: 32 },
  { name: "Direct", value: 18 },
  { name: "Other", value: 5 }
]

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen">
      <MainNav />
      <div className="flex-1">
        <Header />
        <main className="container p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Analytics Overview</h1>
            <p className="text-muted-foreground">Track your website's performance and user engagement</p>
          </div>

          <Tabs defaultValue="traffic" className="space-y-4">
            <TabsList>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="conversion">Conversion</TabsTrigger>
            </TabsList>

            <TabsContent value="traffic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Website Traffic</CardTitle>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pageviews"
                        stroke="hsl(var(--chart-1))"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conversion" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Sources</CardTitle>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={conversionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="hsl(var(--chart-1))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}