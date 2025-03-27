"use client"

import { useState } from "react"
import { brands } from "@/data/brands"
import { Overview } from "@/components/overview"
import { RecentPosts } from "@/components/recent-posts"
import { SentimentStats } from "@/components/sentiment-stats"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState(brands[0])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">Brand Sentiment Analysis</h1>
        <Input
          type="search"
          placeholder="Search brands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex flex-wrap gap-2">
          {filteredBrands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${
                  selectedBrand.id === brand.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sentiment Overview</h2>
          <SentimentStats brand={selectedBrand} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Sentiment Trends</h2>
          <Overview brand={selectedBrand} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Recent Reviews</h2>
          <RecentPosts brand={selectedBrand} />
        </section>
      </div>
    </main>
  )
}

