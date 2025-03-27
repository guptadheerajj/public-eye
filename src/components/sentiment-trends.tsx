"use client"

import { useEffect, useRef } from "react"
import { Brand } from "@/data/brands"
import * as echarts from "echarts"
import type { EChartOption } from "echarts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SentimentTrendsProps {
  brand: Brand
}

export function SentimentTrends({ brand }: SentimentTrendsProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    
    // Generate some sample data that fluctuates around the brand's sentiment values
    const generateTrendData = (baseValue: number) => {
      return months.map(() => baseValue + (Math.random() - 0.5) * 15)
    }

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
      },
      legend: {
        data: ["Positive", "Neutral", "Negative"],
        bottom: 0,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "15%",
        top: "3%",
        containLabel: true,
      },
      xAxis: [{
        type: "category",
        boundaryGap: false,
        data: months,
        axisLine: {
          lineStyle: {
            color: "#666",
          },
        },
      }],
      yAxis: [{
        type: "value",
        max: 100,
        min: 0,
        axisLine: {
          lineStyle: {
            color: "#666",
          },
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#ddd",
          },
        },
      }],
      series: [
        {
          name: "Positive",
          type: "line",
          data: generateTrendData(brand.sentiment.positive),
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            color: "#22c55e",
          },
          itemStyle: {
            color: "#22c55e",
          },
        },
        {
          name: "Neutral",
          type: "line",
          data: generateTrendData(brand.sentiment.neutral),
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            color: "#eab308",
          },
          itemStyle: {
            color: "#eab308",
          },
        },
        {
          name: "Negative",
          type: "line",
          data: generateTrendData(brand.sentiment.negative),
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            color: "#ef4444",
          },
          itemStyle: {
            color: "#ef4444",
          },
        },
      ],
    } as EChartOption

    chart.setOption(option)

    const handleResize = () => {
      chart.resize()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      chart.dispose()
      window.removeEventListener("resize", handleResize)
    }
  }, [brand])

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sentiment Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={chartRef} className="h-[350px]" />
      </CardContent>
    </Card>
  )
} 