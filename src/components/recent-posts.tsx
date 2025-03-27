"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, MessageSquare, HelpCircle, Youtube, ThumbsUp, ThumbsDown } from "lucide-react"
import { Brand } from "@/data/brands"

// Mock data - replace with your actual data fetching logic
const mockPosts = [
  {
    id: 1,
    platform: "twitter",
    author: "JaneDoe",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "The new park development is amazing! So much green space for the community. #urbanplanning",
    timestamp: "2 hours ago",
    sentiment: "positive",
    topic: "Urban Planning",
  },
  {
    id: 2,
    platform: "reddit",
    author: "urban_planner123",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Traffic congestion on Main Street is getting worse every day. The city needs to implement better traffic management systems.",
    timestamp: "5 hours ago",
    sentiment: "negative",
    topic: "Traffic",
  },
  {
    id: 3,
    platform: "quora",
    author: "CivicEnthusiast",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "What are people's thoughts on the proposed community center? I think it could be beneficial but I'm concerned about the location.",
    timestamp: "1 day ago",
    sentiment: "neutral",
    topic: "Community Facilities",
  },
  {
    id: 4,
    platform: "youtube",
    author: "CityChannel",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Our latest video on the water supply improvements has received mixed feedback. Some residents are happy with the progress while others are concerned about disruptions.",
    timestamp: "2 days ago",
    sentiment: "neutral",
    topic: "Water Infrastructure",
  },
]

interface RecentPostsProps {
  platform?: string
  topic?: string
  brand: Brand
}

export function RecentPosts({ platform, topic, brand }: RecentPostsProps) {
  // Filter posts by platform and topic
  const filteredPosts = mockPosts.filter((post) => {
    const platformMatch = platform === "all" || !platform ? true : post.platform === platform
    const topicMatch = topic === "all" || !topic ? true : post.topic === topic
    return platformMatch && topicMatch
  })

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="h-4 w-4 text-blue-400" />
      case "reddit":
        return <MessageSquare className="h-4 w-4 text-orange-500" />
      case "quora":
        return <HelpCircle className="h-4 w-4 text-red-500" />
      case "youtube":
        return <Youtube className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <Badge className="bg-green-500 hover:bg-green-600">Positive</Badge>
      case "neutral":
        return <Badge className="bg-gray-500 hover:bg-gray-600">Neutral</Badge>
      case "negative":
        return <Badge className="bg-red-500 hover:bg-red-600">Negative</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{post.author}</span>
                      {getPlatformIcon(post.platform)}
                      <span className="text-sm text-muted-foreground">• {post.timestamp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{post.topic}</Badge>
                      {getSentimentBadge(post.sentiment)}
                    </div>
                  </div>
                  <p className="text-sm">{post.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="flex justify-center items-center p-8 text-muted-foreground">
          No posts found for this topic and platform combination.
        </div>
      )}
    </div>
  )
}


