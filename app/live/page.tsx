import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Maximize, Volume2 } from "lucide-react"
import Link from "next/link"

// Mock data - in real app, this would come from your API
const streams = [
  { id: 1, name: "Front Entrance", status: "online", location: "Building A" },
  { id: 2, name: "Parking Lot", status: "online", location: "Outdoor" },
  { id: 3, name: "Server Room", status: "online", location: "Building B" },
  { id: 4, name: "Back Exit", status: "online", location: "Building A" },
]

export default function LiveViewPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Live View</h1>
          <p className="text-muted-foreground">Monitor all active video streams in real-time</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {streams.map((stream) => (
          <Card key={stream.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{stream.name}</CardTitle>
                  <CardDescription>{stream.location}</CardDescription>
                </div>
                <Badge variant="default">Live</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2 mx-auto animate-pulse">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <p className="text-sm">Live Stream</p>
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 flex gap-2">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Link href={`/live/${stream.id}`}>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>1920x1080 • 30 FPS</span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Recording
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
