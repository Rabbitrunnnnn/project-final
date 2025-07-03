import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Play } from "lucide-react"
import Link from "next/link"

// Mock data - in real app, this would come from your API
const streams = [
  {
    id: 1,
    name: "Front Entrance",
    url: "rtsp://192.168.1.100:554/stream1",
    status: "online",
    location: "Building A",
    resolution: "1920x1080",
    fps: 30,
  },
  {
    id: 2,
    name: "Parking Lot",
    url: "rtsp://192.168.1.101:554/stream1",
    status: "online",
    location: "Outdoor",
    resolution: "1280x720",
    fps: 25,
  },
  {
    id: 3,
    name: "Reception Area",
    url: "rtsp://192.168.1.102:554/stream1",
    status: "offline",
    location: "Building A",
    resolution: "1920x1080",
    fps: 30,
  },
  {
    id: 4,
    name: "Server Room",
    url: "rtsp://192.168.1.103:554/stream1",
    status: "online",
    location: "Building B",
    resolution: "1280x720",
    fps: 15,
  },
]

export default function StreamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Video Streams</h1>
          <p className="text-muted-foreground">Manage your video stream configurations</p>
        </div>
        <Link href="/streams/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Stream
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {streams.map((stream) => (
          <Card key={stream.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {stream.name}
                    <Badge variant={stream.status === "online" ? "default" : "secondary"}>{stream.status}</Badge>
                  </CardTitle>
                  <CardDescription>{stream.location}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Link href={`/live/${stream.id}`}>
                    <Button size="sm" variant="outline">
                      <Play className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/streams/${stream.id}/edit`}>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm font-medium">Stream URL</p>
                  <p className="text-sm text-muted-foreground font-mono">{stream.url}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Resolution</p>
                  <p className="text-sm text-muted-foreground">{stream.resolution}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Frame Rate</p>
                  <p className="text-sm text-muted-foreground">{stream.fps} FPS</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
