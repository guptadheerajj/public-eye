"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function SourceFilter() {
  const [sources, setSources] = useState({
    twitter: true,
    reddit: true,
    quora: true,
    youtube: true,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Sources</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Social Media Platforms</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={sources.twitter}
          onCheckedChange={(checked) => setSources({ ...sources, twitter: checked })}
        >
          Twitter
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sources.reddit}
          onCheckedChange={(checked) => setSources({ ...sources, reddit: checked })}
        >
          Reddit
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sources.quora}
          onCheckedChange={(checked) => setSources({ ...sources, quora: checked })}
        >
          Quora
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sources.youtube}
          onCheckedChange={(checked) => setSources({ ...sources, youtube: checked })}
        >
          YouTube
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

