"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Play } from "lucide-react"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [selectedCamera, setSelectedCamera] = useState("all")
  const [eventType, setEventType] = useState("all")

  const handleSearch = () => {
    // In a real app, this would trigger an API call
    console.log("Searching with:", {
      query: searchQuery,
      dateFrom,
      dateTo,
      camera: selectedCamera,
      eventType,
    })
  }

  // Mock search results
  const searchResults = [
    {
      id: 1,
      type: "Motion Detected",
      camera: "Front Entrance",
      timestamp: "2024-01-15 14:30:25",
      thumbnail: "/placeholder.svg?height=120&width=160",
      duration: "00:02:15",
    },
    {
      id: 2,
      type: "Person Detected",
      camera: "Parking Lot",
      timestamp: "2024-01-15 14:25:10",
      thumbnail: "/placeholder.svg?height=120&width=160",
      duration: "00:01:30",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Search Events</h1>
        <p className="text-muted-foreground">Search through recorded events and footage</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Criteria
          </CardTitle>
          <CardDescription>Define your search parameters to find specific events</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="search-query">Search Query</Label>
              <Input
                id="search-query"
                placeholder="Enter keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-type">Event Type</Label>
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="motion">Motion Detected</SelectItem>
                  <SelectItem value="person">Person Detected</SelectItem>
                  <SelectItem value="vehicle">Vehicle Detected</SelectItem>
                  <SelectItem value="intrusion">Intrusion Alert</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="camera-select">Camera</Label>
              <Select value={selectedCamera} onValueChange={setSelectedCamera}>
                <SelectTrigger>
                  <SelectValue placeholder="Select camera" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cameras</SelectItem>
                  <SelectItem value="front-entrance">Front Entrance</SelectItem>
                  <SelectItem value="parking-lot">Parking Lot</SelectItem>
                  <SelectItem value="reception">Reception Area</SelectItem>
                  <SelectItem value="server-room">Server Room</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-from">From Date</Label>
              <Input
                id="date-from"
                type="datetime-local"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-to">To Date</Label>
              <Input id="date-to" type="datetime-local" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </div>
          </div>

          <Button onClick={handleSearch} className="w-full md:w-auto">
            <Search className="h-4 w-4 mr-2" />
            Search Events
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Search Results</CardTitle>
          <CardDescription>Found {searchResults.length} matching events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {searchResults.map((result) => (
              <div key={result.id} className="flex gap-4 p-4 border rounded-lg">
                <div className="w-40 h-30 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={result.thumbnail || "/placeholder.svg"}
                    alt="Event thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default">{result.type}</Badge>
                    <Badge variant="outline">{result.camera}</Badge>
                  </div>

                  <div className="grid gap-2 md:grid-cols-2 text-sm">
                    <div>
                      <p className="font-medium">Timestamp</p>
                      <p className="text-muted-foreground">{result.timestamp}</p>
                    </div>
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-muted-foreground">{result.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
