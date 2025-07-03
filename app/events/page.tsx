"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Search, Filter } from "lucide-react"
import Link from "next/link"

// Mock data - in real app, this would come from your API
const allEvents = [
  {
    id: 1,
    type: "Motion Detected",
    camera: "Front Entrance",
    time: "2024-01-15 14:30:25",
    severity: "medium",
    duration: "00:02:15",
  },
  {
    id: 2,
    type: "Person Detected",
    camera: "Parking Lot",
    time: "2024-01-15 14:25:10",
    severity: "low",
    duration: "00:01:30",
  },
  {
    id: 3,
    type: "Camera Offline",
    camera: "Reception Area",
    time: "2024-01-15 14:15:00",
    severity: "high",
    duration: "00:15:00",
  },
  {
    id: 4,
    type: "Motion Detected",
    camera: "Server Room",
    time: "2024-01-15 13:45:20",
    severity: "medium",
    duration: "00:03:45",
  },
  {
    id: 5,
    type: "Intrusion Alert",
    camera: "Back Exit",
    time: "2024-01-15 13:20:15",
    severity: "high",
    duration: "00:05:20",
  },
]

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "destructive"
    case "medium":
      return "default"
    case "low":
      return "secondary"
    default:
      return "secondary"
  }
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [severityFilter, setSeverityFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch =
      event.camera.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSeverity = severityFilter === "all" || event.severity === severityFilter
    const matchesType = typeFilter === "all" || event.type === typeFilter

    return matchesSearch && matchesSeverity && matchesType
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground">View and search through detected events</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          <CardDescription>Search and filter events by various criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Motion Detected">Motion Detected</SelectItem>
                <SelectItem value="Person Detected">Person Detected</SelectItem>
                <SelectItem value="Camera Offline">Camera Offline</SelectItem>
                <SelectItem value="Intrusion Alert">Intrusion Alert</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={getSeverityColor(event.severity)}>{event.type}</Badge>
                    <Badge variant="outline">{event.severity.toUpperCase()}</Badge>
                  </div>

                  <div className="grid gap-2 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-medium">Camera</p>
                      <p className="text-sm text-muted-foreground">{event.camera}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Time</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-sm text-muted-foreground">{event.duration}</p>
                    </div>
                  </div>
                </div>

                <Link href={`/events/${event.id}`}>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">No events found matching your criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
