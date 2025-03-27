"use client"

import { useEffect, useRef } from "react"
import { Brand } from "@/data/brands"
import * as echarts from "echarts"
import type { EChartOption } from "echarts"
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
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
        <CardTitle>Sentiment Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={chartRef} className="h-[350px]" />
      </CardContent>
    </Card>
  )
}

