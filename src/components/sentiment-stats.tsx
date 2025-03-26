"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, MinusIcon, BarChart3 } from "lucide-react"

// Mock data by topic - replace with your actual data fetching logic
const topicStats = {
  all: [
    {
      title: "Total Posts",
      value: "2,853",
      change: "+12.5%",
      trend: "up",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Positive Sentiment",
      value: "42%",
      change: "+8.2%",
      trend: "up",
      icon: <ArrowUpIcon className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Neutral Sentiment",
      value: "35%",
      change: "-2.1%",
      trend: "down",
      icon: <MinusIcon className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Negative Sentiment",
      value: "23%",
      change: "-6.1%",
      trend: "down",
      icon: <ArrowDownIcon className="h-4 w-4 text-red-500" />,
    },
  ],
  Infrastructure: [
    {
      title: "Total Posts",
      value: "487",
      change: "+5.2%",
      trend: "up",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Positive Sentiment",
      value: "28%",
      change: "-3.5%",
      trend: "down",
      icon: <ArrowUpIcon className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Neutral Sentiment",
      value: "42%",
      change: "+1.8%",
      trend: "up",
      icon: <MinusIcon className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Negative Sentiment",
      value: "30%",
      change: "+1.7%",
      trend: "up",
      icon: <ArrowDownIcon className="h-4 w-4 text-red-500" />,
    },
  ],
  Traffic: [
    {
      title: "Total Posts",
      value: "623",
      change: "+18.3%",
      trend: "up",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Positive Sentiment",
      value: "15%",
      change: "-7.2%",
      trend: "down",
      icon: <ArrowUpIcon className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Neutral Sentiment",
      value: "25%",
      change: "-5.1%",
      trend: "down",
      icon: <MinusIcon className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Negative Sentiment",
      value: "60%",
      change: "+12.3%",
      trend: "up",
      icon: <ArrowDownIcon className="h-4 w-4 text-red-500" />,
    },
  ],
  "Power Infrastructure": [
    {
      title: "Total Posts",
      value: "342",
      change: "+42.1%",
      trend: "up",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Positive Sentiment",
      value: "12%",
      change: "-8.5%",
      trend: "down",
      icon: <ArrowUpIcon className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Neutral Sentiment",
      value: "28%",
      change: "-3.2%",
      trend: "down",
      icon: <MinusIcon className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Negative Sentiment",
      value: "60%",
      change: "+11.7%",
      trend: "up",
      icon: <ArrowDownIcon className="h-4 w-4 text-red-500" />,
    },
  ],
  "Water Infrastructure": [
    {
      title: "Total Posts",
      value: "215",
      change: "+3.7%",
      trend: "up",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Positive Sentiment",
      value: "35%",
      change: "+2.1%",
      trend: "up",
      icon: <ArrowUpIcon className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Neutral Sentiment",
      value: "45%",
      change: "+5.3%",
      trend: "up",
      icon: <MinusIcon className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Negative Sentiment",
      value: "20%",
      change: "-7.4%",
      trend: "down",
      icon: <ArrowDownIcon className="h-4 w-4 text-red-500" />,
    },
  ],
  "Urban Planning": [
    {
      title: "Total Posts",
      value: "378",
      change: "+15.2%",
      trend: "up",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Positive Sentiment",
      value: "68%",
      change: "+12.3%",
      trend: "up",
      icon: <ArrowUpIcon className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Neutral Sentiment",
      value: "22%",
      change: "-8.1%",
      trend: "down",
      icon: <MinusIcon className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Negative Sentiment",
      value: "10%",
      change: "-4.2%",
      trend: "down",
      icon: <ArrowDownIcon className="h-4 w-4 text-red-500" />,
    },
  ],
  "Community Facilities": [
    {
      title: "Total Posts",
      value: "192",
      change: "+8.4%",
      trend: "up",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: "Positive Sentiment",
      value: "45%",
      change: "+2.8%",
      trend: "up",
      icon: <ArrowUpIcon className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Neutral Sentiment",
      value: "40%",
      change: "+1.5%",
      trend: "up",
      icon: <MinusIcon className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Negative Sentiment",
      value: "15%",
      change: "-4.3%",
      trend: "down",
      icon: <ArrowDownIcon className="h-4 w-4 text-red-500" />,
    },
  ],
}

// Default stats for topics without specific data
const defaultStats = [
  {
    title: "Total Posts",
    value: "0",
    change: "0%",
    trend: "neutral",
    icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Positive Sentiment",
    value: "0%",
    change: "0%",
    trend: "neutral",
    icon: <ArrowUpIcon className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Neutral Sentiment",
    value: "0%",
    change: "0%",
    trend: "neutral",
    icon: <MinusIcon className="h-4 w-4 text-gray-500" />,
  },
  {
    title: "Negative Sentiment",
    value: "0%",
    change: "0%",
    trend: "neutral",
    icon: <ArrowDownIcon className="h-4 w-4 text-red-500" />,
  },
]

interface SentimentStatsProps {
  topic: string
}

export function SentimentStats({ topic }: SentimentStatsProps) {
  // Get stats for the selected topic or use default stats if not found
  const stats = topicStats[topic as keyof typeof topicStats] || defaultStats

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={`text-xs ${
                stat.trend === "up" ? "text-green-500" : stat.trend === "down" ? "text-red-500" : "text-gray-500"
              } flex items-center`}
            >
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

