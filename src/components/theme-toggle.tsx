"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themes = [
  { name: "light", label: "Light" },
  { name: "dark", label: "Dark" },
  { name: "cyberpunk", label: "Cyberpunk" },
  { name: "pink", label: "Pink" },
  { name: "purple", label: "Purple" },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all [data-theme='dark']:-rotate-90 [data-theme='dark']:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all [data-theme='dark']:rotate-0 [data-theme='dark']:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.name}
            onClick={() => setTheme(t.name)}
            className="cursor-pointer"
          >
            <Palette className="mr-2 h-4 w-4" />
            {t.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 