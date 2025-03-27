"use client"

import { useEffect, useRef } from "react"
import { Brand } from "@/data/brands"
import * as echarts from "echarts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface OverviewProps {
  brand: Brand
}

export function Overview({ brand }: OverviewProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Positive", "Negative", "Neutral"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yAxis: {
        type: "value",
        max: 100,
      },
      series: [
        {
          name: "Positive",
          type: "bar",
          stack: "total",
          data: [
            brand.sentiment.positive - 5,
            brand.sentiment.positive - 2,
            brand.sentiment.positive + 2,
            brand.sentiment.positive - 1,
            brand.sentiment.positive + 3,
            brand.sentiment.positive,
          ],
          itemStyle: {
            color: "#22c55e",
          },
        },
        {
          name: "Negative",
          type: "bar",
          stack: "total",
          data: [
            brand.sentiment.negative - 3,
            brand.sentiment.negative + 1,
            brand.sentiment.negative - 2,
            brand.sentiment.negative + 4,
            brand.sentiment.negative - 1,
            brand.sentiment.negative,
          ],
          itemStyle: {
            color: "#ef4444",
          },
        },
        {
          name: "Neutral",
          type: "bar",
          stack: "total",
          data: [
            brand.sentiment.neutral - 2,
            brand.sentiment.neutral + 1,
            brand.sentiment.neutral,
            brand.sentiment.neutral - 3,
            brand.sentiment.neutral - 2,
            brand.sentiment.neutral,
          ],
          itemStyle: {
            color: "#eab308",
          },
        },
      ],
    }

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
    <Card>
      <CardHeader>
        <CardTitle>Sentiment Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={chartRef} className="h-[350px]" />
      </CardContent>
    </Card>
  )
}

