"use client"

import { Brand } from "@/data/brands"
import { ThumbsDown, ThumbsUp, Minus } from "lucide-react"

interface SentimentStatsProps {
  brand: Brand
}

export function SentimentStats({ brand }: SentimentStatsProps) {
  const total = brand.sentiment.positive + brand.sentiment.negative + brand.sentiment.neutral
  const positivePercentage = Math.round((brand.sentiment.positive / total) * 100)
  const negativePercentage = Math.round((brand.sentiment.negative / total) * 100)
  const neutralPercentage = Math.round((brand.sentiment.neutral / total) * 100)

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-lg border p-4 [data-theme='dark']:border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ThumbsUp className="h-5 w-5 text-green-500" />
            <h3 className="text-sm font-medium">Positive</h3>
          </div>
          <p className="text-xl font-bold">{positivePercentage}%</p>
        </div>
        <div className="mt-4 h-2 w-full rounded-full bg-gray-100 [data-theme='dark']:bg-gray-800">
          <div
            className="h-full rounded-full bg-green-500"
            style={{ width: `${positivePercentage}%` }}
          />
        </div>
      </div>
      <div className="rounded-lg border p-4 [data-theme='dark']:border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ThumbsDown className="h-5 w-5 text-red-500" />
            <h3 className="text-sm font-medium">Negative</h3>
          </div>
          <p className="text-xl font-bold">{negativePercentage}%</p>
        </div>
        <div className="mt-4 h-2 w-full rounded-full bg-gray-100 [data-theme='dark']:bg-gray-800">
          <div
            className="h-full rounded-full bg-red-500"
            style={{ width: `${negativePercentage}%` }}
          />
        </div>
      </div>
      <div className="rounded-lg border p-4 [data-theme='dark']:border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Minus className="h-5 w-5 text-yellow-500" />
            <h3 className="text-sm font-medium">Neutral</h3>
          </div>
          <p className="text-xl font-bold">{neutralPercentage}%</p>
        </div>
        <div className="mt-4 h-2 w-full rounded-full bg-gray-100 [data-theme='dark']:bg-gray-800">
          <div
            className="h-full rounded-full bg-yellow-500"
            style={{ width: `${neutralPercentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}

