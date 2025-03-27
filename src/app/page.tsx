"use client"

import { useState } from "react"
import { brands } from "@/data/brands"
import { Overview } from "@/components/overview"
import { RecentPosts } from "@/components/recent-posts"
import { SentimentStats } from "@/components/sentiment-stats"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"

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
        <div className="flex gap-4">
          <Input
            type="search"
            placeholder="Search brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[200px] justify-between">
                {selectedBrand.name}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
              {filteredBrands.map((brand) => (
                <DropdownMenuItem
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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

