"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  LayoutDashboard, 
  BarChart2, 
  Settings, 
  User,
  Menu,
  ChevronLeft,
  Sun,
  Moon,
  Bot
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: LayoutDashboard
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart2
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User
  }
]

export function MainNav() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className={cn(
      "hidden md:flex md:flex-col bg-card border-r min-h-screen transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-center justify-between mb-4">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <span className="font-bold text-lg">Textify</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronLeft className={cn(
              "h-4 w-4 transition-transform",
              isCollapsed && "rotate-180"
            )} />
          </Button>
        </div>
        
        <nav className="space-y-2 flex-grow">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isCollapsed && "px-2"
                )}
              >
                <item.icon className={cn(
                  "h-4 w-4",
                  !isCollapsed && "mr-2"
                )} />
                {!isCollapsed && item.title}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export function MobileNav() {
  const [open, setOpen] = useState(false)
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <div className="p-4">
          <MainNav />
        </div>
      </SheetContent>
    </Sheet>
  )
}