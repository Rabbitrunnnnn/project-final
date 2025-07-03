"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Camera, Play, Calendar, Search, Settings } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Streams", href: "/streams", icon: Camera },
  { name: "Live View", href: "/live", icon: Play },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Search", href: "/search", icon: Search },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">VMS</h2>
        <p className="text-sm text-gray-500">Video Management</p>
      </div>

      <nav className="mt-6">
        <div className="px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1",
                  isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
              >
                <item.icon
                  className={cn("mr-3 h-5 w-5", isActive ? "text-gray-900" : "text-gray-400 group-hover:text-gray-500")}
                />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
