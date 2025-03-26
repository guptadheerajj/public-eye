"use client"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Mock data by topic - replace with your actual data fetching logic
const topicData = {
  all: [
    { date: "Jan", positive: 40, neutral: 24, negative: 10 },
    { date: "Feb", positive: 30, neutral: 13, negative: 23 },
    { date: "Mar", positive: 20, neutral: 38, negative: 22 },
    { date: "Apr", positive: 27, neutral: 39, negative: 11 },
    { date: "May", positive: 18, neutral: 48, negative: 19 },
    { date: "Jun", positive: 23, neutral: 38, negative: 12 },
    { date: "Jul", positive: 34, neutral: 43, negative: 15 },
  ],
  Infrastructure: [
    { date: "Jan", positive: 15, neutral: 20, negative: 25 },
    { date: "Feb", positive: 18, neutral: 22, negative: 28 },
    { date: "Mar", positive: 20, neutral: 25, negative: 30 },
    { date: "Apr", positive: 22, neutral: 28, negative: 32 },
    { date: "May", positive: 25, neutral: 30, negative: 35 },
    { date: "Jun", positive: 28, neutral: 32, negative: 38 },
    { date: "Jul", positive: 30, neutral: 35, negative: 40 },
  ],
  Traffic: [
    { date: "Jan", positive: 10, neutral: 20, negative: 45 },
    { date: "Feb", positive: 12, neutral: 22, negative: 48 },
    { date: "Mar", positive: 15, neutral: 25, negative: 50 },
    { date: "Apr", positive: 13, neutral: 23, negative: 55 },
    { date: "May", positive: 14, neutral: 24, negative: 58 },
    { date: "Jun", positive: 15, neutral: 25, negative: 60 },
    { date: "Jul", positive: 15, neutral: 25, negative: 60 },
  ],
  "Power Infrastructure": [
    { date: "Jan", positive: 8, neutral: 22, negative: 40 },
    { date: "Feb", positive: 10, neutral: 25, negative: 45 },
    { date: "Mar", positive: 12, neutral: 28, negative: 50 },
    { date: "Apr", positive: 10, neutral: 25, negative: 55 },
    { date: "May", positive: 12, neutral: 28, negative: 58 },
    { date: "Jun", positive: 10, neutral: 30, negative: 60 },
    { date: "Jul", positive: 12, neutral: 28, negative: 60 },
  ],
  "Water Infrastructure": [
    { date: "Jan", positive: 30, neutral: 40, negative: 15 },
    { date: "Feb", positive: 32, neutral: 42, negative: 18 },
    { date: "Mar", positive: 35, neutral: 45, negative: 20 },
    { date: "Apr", positive: 33, neutral: 43, negative: 18 },
    { date: "May", positive: 35, neutral: 45, negative: 20 },
    { date: "Jun", positive: 35, neutral: 45, negative: 20 },
    { date: "Jul", positive: 35, neutral: 45, negative: 20 },
  ],
  "Urban Planning": [
    { date: "Jan", positive: 50, neutral: 30, negative: 10 },
    { date: "Feb", positive: 55, neutral: 25, negative: 10 },
    { date: "Mar", positive: 60, neutral: 20, negative: 10 },
    { date: "Apr", positive: 65, neutral: 15, negative: 10 },
    { date: "May", positive: 68, neutral: 22, negative: 10 },
    { date: "Jun", positive: 68, neutral: 22, negative: 10 },
    { date: "Jul", positive: 68, neutral: 22, negative: 10 },
  ],
  "Community Facilities": [
    { date: "Jan", positive: 40, neutral: 35, negative: 15 },
    { date: "Feb", positive: 42, neutral: 38, negative: 15 },
    { date: "Mar", positive: 45, neutral: 40, negative: 15 },
    { date: "Apr", positive: 45, neutral: 40, negative: 15 },
    { date: "May", positive: 45, neutral: 40, negative: 15 },
    { date: "Jun", positive: 45, neutral: 40, negative: 15 },
    { date: "Jul", positive: 45, neutral: 40, negative: 15 },
  ],
}

// Default empty data for topics without specific data
const emptyData = [
  { date: "Jan", positive: 0, neutral: 0, negative: 0 },
  { date: "Feb", positive: 0, neutral: 0, negative: 0 },
  { date: "Mar", positive: 0, neutral: 0, negative: 0 },
  { date: "Apr", positive: 0, neutral: 0, negative: 0 },
  { date: "May", positive: 0, neutral: 0, negative: 0 },
  { date: "Jun", positive: 0, neutral: 0, negative: 0 },
  { date: "Jul", positive: 0, neutral: 0, negative: 0 },
]

interface OverviewProps {
  topic: string
}

export function Overview({ topic }: OverviewProps) {
  // Get data for the selected topic or use empty data if not found
  const data = topicData[topic as keyof typeof topicData] || emptyData

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="p-2 border shadow-sm">
                  <CardContent className="p-2">
                    <p className="font-medium">{label}</p>
                    <div className="flex flex-col gap-1 mt-2">
                      {payload.map((entry, index) => (
                        <div key={`item-${index}`} className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                          <span className="text-sm">
                            {entry.name}: {entry.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            }
            return null
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="positive" stroke="#10b981" activeDot={{ r: 8 }} name="Positive" />
        <Line type="monotone" dataKey="neutral" stroke="#6b7280" name="Neutral" />
        <Line type="monotone" dataKey="negative" stroke="#ef4444" name="Negative" />
      </LineChart>
    </ResponsiveContainer>
  )
}

