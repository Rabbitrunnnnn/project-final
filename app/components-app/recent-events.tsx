import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"

// Mock data - in real app, this would come from your API
const events = [
  {
    id: 1,
    type: "Motion Detected",
    camera: "Front Entrance",
    time: "2 minutes ago",
    severity: "medium",
  },
  {
    id: 2,
    type: "Person Detected",
    camera: "Parking Lot",
    time: "5 minutes ago",
    severity: "low",
  },
  {
    id: 3,
    type: "Camera Offline",
    camera: "Reception Area",
    time: "15 minutes ago",
    severity: "high",
  },
  {
    id: 4,
    type: "Motion Detected",
    camera: "Server Room",
    time: "1 hour ago",
    severity: "medium",
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

export default function RecentEvents() {
  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={getSeverityColor(event.severity)}>{event.type}</Badge>
            </div>
            <p className="text-sm font-medium">{event.camera}</p>
            <p className="text-xs text-muted-foreground">{event.time}</p>
          </div>
          <Link href={`/events/${event.id}`}>
            <Button size="sm" variant="outline">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      ))}

      <Link href="/events">
        <Button variant="outline" className="w-full">
          View All Events
        </Button>
      </Link>
    </div>
  )
}
