"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentPosts } from "@/components/recent-posts"
import { TopicFilter } from "@/components/topic-filter"
import { SourceFilter } from "@/components/source-filter"
import { DateRangePicker } from "@/components/date-range-picker"
import { SentimentStats } from "@/components/sentiment-stats"

export default function DashboardPage() {
  const [selectedTopic, setSelectedTopic] = useState("all")

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Public Sentiment Dashboard</h2>
          <div className="flex items-center space-x-2">
            <DateRangePicker />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">
            {selectedTopic === "all"
              ? "Select a topic to view specific sentiment data"
              : `Sentiment Analysis for: ${selectedTopic}`}
          </h3>
          <TopicFilter value={selectedTopic} onChange={setSelectedTopic} />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <SentimentStats topic={selectedTopic} />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Sentiment Trends</CardTitle>
                  <CardDescription>
                    {selectedTopic === "all"
                      ? "Select a topic to view sentiment trends"
                      : `Sentiment trends for ${selectedTopic} over time`}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview topic={selectedTopic} />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Source Breakdown</CardTitle>
                  <CardDescription>
                    {selectedTopic === "all"
                      ? "Select a topic to view source breakdown"
                      : `Sentiment distribution by platform for ${selectedTopic}`}
                  </CardDescription>
                </div>
                <div>
                  <SourceFilter />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <div className="h-full w-full" id="source-chart"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>
                {selectedTopic === "all"
                  ? "Select a topic to view related posts"
                  : `Latest social media posts about ${selectedTopic}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All Platforms</TabsTrigger>
                  <TabsTrigger value="twitter">Twitter</TabsTrigger>
                  <TabsTrigger value="reddit">Reddit</TabsTrigger>
                  <TabsTrigger value="quora">Quora</TabsTrigger>
                  <TabsTrigger value="youtube">YouTube</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  <RecentPosts platform="all" topic={selectedTopic} />
                </TabsContent>
                <TabsContent value="twitter" className="space-y-4">
                  <RecentPosts platform="twitter" topic={selectedTopic} />
                </TabsContent>
                <TabsContent value="reddit" className="space-y-4">
                  <RecentPosts platform="reddit" topic={selectedTopic} />
                </TabsContent>
                <TabsContent value="quora" className="space-y-4">
                  <RecentPosts platform="quora" topic={selectedTopic} />
                </TabsContent>
                <TabsContent value="youtube" className="space-y-4">
                  <RecentPosts platform="youtube" topic={selectedTopic} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

