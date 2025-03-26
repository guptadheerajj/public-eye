"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"

// Mock data - replace with your actual topics
const topics = [
  { value: "all", label: "All Topics" },
  { value: "Infrastructure", label: "Infrastructure" },
  { value: "Traffic", label: "Traffic" },
  { value: "Power Infrastructure", label: "Power Infrastructure" },
  { value: "Water Infrastructure", label: "Water Infrastructure" },
  { value: "Waste Management", label: "Waste Management" },
  { value: "Urban Planning", label: "Urban Planning" },
  { value: "Housing", label: "Housing" },
  { value: "Education", label: "Education" },
  { value: "Public Safety", label: "Public Safety" },
  { value: "Community Facilities", label: "Community Facilities" },
]

interface TopicFilterProps {
  value: string
  onChange: (value: string) => void
}

export function TopicFilter({ value, onChange }: TopicFilterProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[240px] justify-between">
          {value ? topics.find((topic) => topic.value === value)?.label || value : "Select topic..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search topic..." />
          <CommandList>
            <CommandEmpty>No topic found.</CommandEmpty>
            <CommandGroup>
              {topics.map((topic) => (
                <CommandItem
                  key={topic.value}
                  value={topic.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === topic.value ? "opacity-100" : "opacity-0")} />
                  {topic.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

