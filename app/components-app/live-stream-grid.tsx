import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Settings } from "lucide-react"
import Link from "next/link"

// Mock data - in real app, this would come from your API
const streams = [
  { id: 1, name: "C3", status: "online", location: "Building A" },
  { id: 2, name: "D5", status: "online", location: "Building C" },
  { id: 3, name: "Lab", status: "offline", location: "C7" },
  { id: 4, name: "Server Room", status: "online", location: "Building B" },
]

export default function LiveStreamGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {streams.map((stream) => (
        <Card key={stream.id} className="relative">
          <CardContent className="p-4">
            <div className="aspect-video bg-gray-900 rounded-lg mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {stream.status === "online" ? (
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm">Live Stream</p>
                  </div>
                ) : (
                  <div className="text-gray-400 text-center">
                    <div className="text-sm">Stream Offline</div>
                  </div>
                )}
              </div>
              <Badge variant={stream.status === "online" ? "default" : "secondary"} className="absolute top-2 right-2">
                {stream.status}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{stream.name}</h3>
                <p className="text-sm text-muted-foreground">{stream.location}</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/live/${stream.id}`}>
                  <Button size="sm" variant="outline">
                    <Play className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/streams/${stream.id}/edit`}>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
